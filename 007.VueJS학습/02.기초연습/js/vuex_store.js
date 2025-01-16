// 04. 뷰엑스 스토아 - 저장공간 활용하기 JS

// 스토아 JS 불러오기 /////////
import store from "./store.js";
// default로 내보내기 했지만 이름은 store로 정해짐!
// -> 뷰인스턴스에서 store를 사용하도록 등록필수!!!

// [1] 전역 컴포넌트 만들기 ///////
// (1) 상단영역 컴포넌트
Vue.component("top-area", {
  // 템플릿설정
  // -> 이벤트 설정시 v-on:이벤트명.prevent 라고 쓰면
  // -> 기본기능막기인 event.preventDefault() 가 설정됨!
  template: `
        <header>
            <ul class="gnb">
                ${Object.keys(store.state.cityData)
                  .map(
                    (v) => `
                        <li>
                            <a 
                                href="#"
                                v-on:click.prevent=
                                "changeData('${v}')"
                            
                            >${v == "처음" ? "💒" : v}</a>
                        </li>
                        `
                  )
                  .join("")}
            </ul>
        </header>
    `,
  // 데이타설정 : 컴포넌트는 객체리턴메서드로 해야함!
  data() {
    return {};
  },
  // 메서드 설정
  methods: {
    // 컴포넌트 템플릿 코드에서 호출할 메서드
    // -> 스토아 데이터 변경하기
    changeData(pm) {
      // pm 파라미터변수 : 도시명받음
      console.log("나야나~!!!!", pm);

      // 스토아 state 데이터 변경하기
      // changeCityData 뮤테이션스 메서드 호출
      store.commit("changeCityData", pm);
    },
  },
});
// (2) 메인영역 컴포넌트
Vue.component("main-area", {
  /* 
        컴포넌트 영역은 뷰JS에서 해석되는 부분이므로
        뷰엑스 스토어의 변수 store를 
        전역 표시 $store
        라고 표기해야 유효하다!(에러없음)
        더 정확한 문법은 this.$store 라고 써야하지만
        이 파일이 일반 JS에서 실행되므로 변수할당된
        뷰JS 인스턴스 영역안에서 실행되므로
        뷰인스턴스 자신인 this를 쓰지 않아도
        자동적으로 this로 처리된다!
    */
  // 템플릿설정
  template: `
        <main>
            <img v-bind:src="$store.state.imgSrc" alt="지역이미지" />
            <p v-text="$store.state.desc"></p>
        </main>
    `,
  // 데이타설정 : 컴포넌트는 객체리턴메서드로 해야함!
  data() {
    return {};
  },
  // 메서드 설정
  methods: {},
});
// (3) 하단영역 컴포넌트
Vue.component("info-area", {
  // 템플릿설정
  template: `
        <footer>
            <address>
                서울시 강남구 역삼동 119 뷰엑스B
            </address>
        </footer>
    `,
  // 데이타설정 : 컴포넌트는 객체리턴메서드로 해야함!
  data() {
    return {};
  },
  // 메서드 설정
  methods: {},
});

// [2] 뷰 인스턴스 생성하기 ////////
// 대상요소 : #app
new Vue({
  // 대상선정
  el: "#app",
  // 스토아 등록하기(필수!)
  store,
  // 데이터
  data: {},
  // 메서드
  methods: {},
  // 뷰인스턴스 생성후 구역 : 데이터셋팅
  created() {
    /* 
        스토어에 있는 initSet 메서드는 어떻게 호출하지?
        스토어 호출 메서드가 따로 있음!
        store.commit("메서드명",파라미터값)
        1. 메서드명은 반드시 문자형으로 입력한다!
        2. 파라미터는 단일값 또는 객체형식을 보낼 수 있음
        인스턴스 내부구역 코딩시 store에 $없음!
        */
    store.commit("initSet", {
      url: "https://i.namu.wiki/i/corJqZiNxAUreAunnA2wdulOYFuEtpFmPCjZMgpyMjoZkcxe2cX2p8I9tTZqC7uSjmYhrrBbDQ3h0M4b3Brh1w.webp",
      txt: "도시소개 사이트는 넷플릭스와 함께합니다~!",
      // url:store.state.cityData.처음.이미지,
      // txt:store.state.cityData.처음.설명
    });
  }, /// created /////
  // 모든 DOM관련 코딩은 mounted메서드 구역에서 한다!!!
  mounted(){
    // 1. 메뉴 클릭시 클릭된 li의 a요소는 .on주기
    // 나머지는 .on빼기
    $('.gnb a').click(function(){
        // 첫번째 li는 제외함!
        if($(this).parent().index() == 0){ 
            // 혹시 클릭된 클래스 적용요소 모두 제거
            $('.gnb a').removeClass('on');
            // 돌아가!(나감!)
            return;
        }
        // -> 선택자.index() 순번을 리턴함!

        // 클릭된 a에 클래스 넣기(나머지 빼기)
        $(this).addClass('on')
        .parent().siblings().find('a').removeClass('on');

        // showBox함수 호출하여 박스 서서히 보이기
        showBox();
    });

    // 2. 박스 처음에 안보였다가 서서히 나타나기
    function showBox(){
        // 이미지
        $('main img').css({opacity:0}).delay(200).fadeTo(500,1);
        // 글자박스
        $('main p').css({opacity:0}).delay(400).fadeTo(500,1);
        // fadeTo(시간,오파,이징,함수)

    } ///////// showBox함수 //////////////

  }, /////// mounted ////////////////////////
});
