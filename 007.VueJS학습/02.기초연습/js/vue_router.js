// 05.Vue Router JS : vue_router.js

// 라우터 셋팅 JS 불러오기
import router from "./router.js";

// 링크 셋팅 객체 데이터 ///
/***************************************** 
    데이터 구조
    {
        상위메뉴1:{링크,메뉴:""},
        상위메뉴2:{링크,메뉴:{하위메뉴:{}}},
    }
    -> 하위메뉴가 없으면 그냥 빈따옴표
    -> 하위메뉴가 있으면 객체로 셋팅!

    ->>> [ menu객체 속성 정의 ] <<<-
    
    (( 라우터전달 속성 : 정해진것! ))
    (1) name : 라우트 이름
    (2) params : 라우트 매개변수 객체
    
    (( 파라미터 객체는 내가 정한것! ))
    (1) item : 하위메뉴이름
    (2) cls : 클래스명(이것으로 이미지변경)
*****************************************/
const linkSetData = {
  세계여행지: {
    link: { path: "/trip" },
    menu: "",
  },
  세계먹거리: {
    link: { path: "/foods" },
    menu: {
      피자: {
        name: "umsik",
        params: { item: "피자", cls: "pizza" },
      },
      파스타: {
        name: "umsik",
        params: { item: "파스타", cls: "pasta" },
      },
      똠양꿍: {
        name: "umsik",
        params: { item: "똠양꿍", cls: "ddom" },
      },
    },
  },
  세계놀이: {
    link: { path: "/game" },
    menu: {
        니케: {
          name: "my-game",
          params: { item: "니케", cls: "nikke" },
        },
        가디언: {
          name: "my-game",
          params: { item: "가디언", cls: "guardians" },
        },
      },
  },
  회사소개: {
    link: { path: "/corp" },
    menu: "",
  },
};

///////////////////////////////////////////
//////// [ GNB 컴포넌트 만들기 ] ///////////
///////////////////////////////////////////

// [1. 부모 인스턴스영역에 생성한 코드를 
// 자식 컴포넌트로 전환하면 처음에 에러나는 이유는? ]
// ->>> 부모 인스턴스 영역에서 사용한 부모 data 변수인
// ->>> linkData라는 값이 자식 컴포넌트에서 읽히지 않는다!
// ->>> 따라서 이 데이터를 프롭스다운(props down) 시켜야한다!

// [2. 일반적인 컴포넌트 전환방법]
// (1) 앞단 코드를 컴포넌트 코드로 넣는다
// (2) 부모 영역의 변수를 같은이름의 바인딩속성으로 만든다
// (3) 컴포넌트에 그 속성을 가져온다

// 예컨데 현재 gnb-comp에서는...
// 부모 data변수명이 linkData임
// 따라서 컴포넌트에 프롭스다운 하기 위한 속성은
// v-bind:link-data="linkData"
// 자식 컴포넌트 영역에서 props 항목을 만들고 이것을 넣는다!
// props: ['link-data'],
// -> 자식 컴포넌트안에 코딩된 linkData는 바로 이 변수가 됨!

Vue.component('gnb-comp',{
  template:`
    <div class="gnb">
          <ul>

            <!-- v-for="(객체값,객체키) in 객체변수" -->
            <!-- v-for="(배열값,배열순번) in 배열변수" -->

            <li v-for="(val,key) in linkData">

              <!-- linkData 객체의 키명이 상위 메뉴다! -->

              <!-- <a href="#"> {{key}} </a> -->

              <!-- 일반속성 to='경로값'
              <router-link to="/foods"> {{key}} </router-link> -->

              <!-- 바인딩속성 v-bind:to='{path:"경로값"}'
              <router-link v-bind:to='{ path: "/corp" }'> {{key}} </router-link> -->

              <!-- {{val.link}} -->
              <router-link v-bind:to='val.link'> {{key}} </router-link>

              <!-- {{typeof(val.menu)}} -->
               <!-- v-if="typeof(val.menu)=='object'" -->
               <!-- v-if의 결과가 true일때만 출력된다! -->
                <!-- menu값의 데이터형이 'object'일때 하위메뉴출력 -->

              <ol class="smenu" 
                v-if="typeof(val.menu)=='object'">

                <li v-for="(v,k) in val.menu">

                  <!-- menu 객체값의 키명이 서브메뉴다! -->

                  <!-- <a href="#"> {{k}} </a> -->

                  <!-- <router-link v-bind:to='{
                    name: "umsik",
                    params: { item: "똠양꿍", cls: "ddom" },
                  }'> {{k}} </router-link> -->

                  <!-- {{v}} v는 하위메뉴 데이터의 객체값임! -->
                  <router-link v-bind:to='v'> {{k}} </router-link>

                </li>
              </ol>
            </li>
          </ul>
        </div>
  `,
  // 프롭스다운 속성 만들기///
  props: ['link-data'],
  // 앞쪽에서 바인딩한 속성을 써준다!
  // 이 프롭스 변수는 linkData라는 이름으로 사용할 수 있다!
  // 이미 가져온 코드에 이 이름으로 사용했으므로
  // 전혀~~~! 손댈필요가 없어진다! ㅎㅎㅎ!
});

// 뷰 인스턴스 객체 생성하기 /////////
new Vue({
  // 1. 대상선정 : #app
  el: "#app",
  // 2. 라우터설정
  router,
  // 3. 데이터 설정
  data: {
    // 인스턴스외부의 데이터를 인스턴스내부로 가져옴!
    linkData: linkSetData,
  },
  // 4. 메서드
  methods: {},
  // 5. 라이프 사이클 메서드 :
  // mounted -> DOM 랜더링
  mounted() {
    // DOM구성후 첫페이지 라우터 설정하기 ///
    this.$router.push('/trip');
    // this 는 현재 뷰인스턴스
    // $router 는 라우터 전체객체
    // push(라우터경로) -> 강제로 경로이동하기 메서드
  },
});
