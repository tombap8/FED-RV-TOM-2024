// 02. 컴포넌트 현실화 JS - comp_real.js

// 새로운 리스트 데이터 불러오기
import deData from './comp_data.json' with{type:'json'};
// console.log(deData);

// 1. 상단영역 전역 컴포넌트 만들기
// Vue.component(컴포넌트명,{template:코드})
Vue.component("tit-comp", {
  template: `
    <strong>
        <span>
          😉Vue JS😎 컴포넌트 :
        </span>
        쇼핑모~~~올 갤러리 리스트
      </strong>
    `,
}); ///// 전역컴포넌트1 /////

// new Vue({el:'.tit'});

// [갤러리용 변수]
let inum = 0;

// 2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기 ///
Vue.component("list-comp", {
  // (1) 템플릿 설정
  template: `
        <div>
            <img 
                v-bind:src="gsrc" 
                v-on:click="goPapa('내가 누구게?')"
                v-on:mouseover=
                "ovNow({순번:listNum,이름:'김고은',나이:'34살'})"
            alt="아이템">
            <aside>
            <h2>{{gname}}</h2>
            <h3>{{gprice}}</h3>
            </aside>
        </div>
    `, //// template /////
  // v-bind:src 속성은 일반 src속성과 달리
  // 뷰JS에서 속성값을 바인딩하여 넣는다는 코딩법이다!
  // -> 일반적으로 v-bind:속성 이렇게 쓰면
  // 뷰JS용 바인딩 속성이 된다!!!

  // 부모가 공개한 바인딩 속성을 가져온다!
  // 프롭스 다운!!! -> 부모요소에 만든 요소명을 등록함!
  // props: [] -> 배열형태로 여러개 등록 가능!
  props: ["list-num", "my-seq", "fn-add-comma"],
  // 주의: 이것을 변수로 쓸때는 캐밥케이스를 캐믈케이스로
  // 바꿔서 쓴다~! 예) 'list-num' -> listNum
  // 그리고 프롭스 다운변수도 내부에 등록되었으므로
  // this키워드로 호출함! 예) this.listNum

  // (2) data속성 : 컴포넌트에서 쓸 데이터
  // data: function(){ 이형태 또는 메서드형으로!
  data() {
    // 메서드형!
    // 컴포넌트 data는 함수형태로 반드시 return을 써야함!
    return {
      // 이미지 src
      // gsrc: `./images/${this.setNum()}.jpg`,
      gsrc: `./images/${this.listNum}.jpg`,
      // 상품명
      gname: "Sofia24" + this.listNum + "WD" + (this.mySeq % 2 ? "🙆‍♂️" : "👩‍⚕️"),
      // gname: this.key,
      // ->key속성은 유일키 구분목적속성이므로
      //   일반데이터로 사용할 수 없다! 에러남!

      // 상품가격
      gprice: this.fnAddComma((123000 * this.listNum) / 2) + `원`,
    };
  }, // data속성

  // (3) methods 속성
  methods: {
    // 연속번호만들기 테스트용 메서드
    setNum() {
      return ++inum;
    },
    // 부모와 자식 컴포넌트 연결하기
    goPapa(txt) {
      //-> goPapa는 자식컴포넌트에서 호출!
      this.$emit("hull", txt);
      // $emit(호출할메서드,전달값)
      // $emit() 메서드는 부모에 설정한 새로운 이벤트와 연결
    },
    ovNow(obj) {
      //-> ovNow도 자식컴포넌트에서 호출!
      this.$emit("gotkimchi", obj);
    },
  },
});

// 컴포넌트의 부모 뷰인스턴스
// new Vue({
// el:'.grid',
// // 자식컴포넌트의 전달값을 받기위한 메서드를 만든다!
// methods:{
//     // 자식이벤트 전달후 실행메서드
//     goMsg(txt){// txt 전달받을 변수
//         alert('자식이 부모에게 이벤트전달 성공!'+txt);
//     },
//     ovMsg(obj){
//         console.log('오버!오케이!',obj);
//     }
// },
// });

// 3. 유튜브 동영상 컴포넌트 만들기
Vue.component("ifr-comp", {
  // 3-1. template옵션
  template: `
    <iframe width="49%" style="aspect-ratio: 16/9;" 
    v-bind:src="ifrSrc" title="#고윤정 과 함께 차가운 겨울을 더욱 액티브하게!  l 디스커버리 23FW #goyounjung #크롭패딩" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    `, /// template ////

    // 3-2. 프롭스다운!
    props: ["mv-code"],
    // mv-code는 동영상 아이디

  // 3-3. data 옵션
  data() {
    return {
      ifrSrc: `https://www.youtube.com/embed/${this.mvCode}?autoplay=1&mute=1&loop=1&playlist=${this.mvCode}`,
    };
  },
});

// 뷰인스턴스 생성하기 : 유튜브 동영상 컴포넌트
// new Vue({el:".you-box"});

// 4. 하단 컴포넌트 만들기
Vue.component("footer-comp", {
  template: `
        <div style="background-color:black;text-align:center;color:white;line-height:2;font-weight:bold; padding:3vw; margin-top:1vw;">
            <h2>Discovery Expedition</h2>
            <h3>Copyright © F&F Corp. All Rights Reserved.</h3>        
        </div>
    `,
});

// 뷰인스턴스 생성하기 : 하단 컴포넌트
// new Vue({el:".tit2"});

// 모든 컴포넌트는 모두 뷰인스턴스 생성전에 셋팅하면 된다!!!
// 새로운 리스트 컴포넌트 셋팅하기 ////
Vue.component("de-fashion-list", {
  // 1. 템플릿
  template: `
        <div>
            <img v-bind:src="gsrc" alt="아이템">
            <aside>
                <h2>{{gname}}</h2>
                <h3>{{gprice}}</h3>
            </aside>
        </div>
    `, ///// template //////

  // 2. 프롭스 다운! : 부모에서 v-bind된 속성들!
  props: ["list-idx", "list-tit", "list-price", "fn-add-comma"],
  // 케밥케이스를 케믈케이스로 변경하여 변수/함수로 사용가능!
  // listIdx, listTit, listPrice, fnAddComma 로 사용가능!
  // 실제로 사용할때는 this키워드를 사용하여 객체내부용으로 씀

  // 3. 데이터 : 컴포넌트 데이터는 리턴함수형태로 해야함!
  data() {
    return {
      gsrc: `./images/discovery/de_${this.listIdx}.jpg`,
      gname: this.listTit,
      gprice: this.fnAddComma(this.listPrice)+"원",
    };
  },
}); /////// component /////////////

////////////////////////////////////
// 전체 최상위 부모인 .main-wrap을 //
// 유일한 뷰 인스턴스로 생성함! //////
////////////////////////////////////
new Vue({
  el: ".main-wrap",
  // 부모 뷰인스턴스 데이터구역 ////
  data: {
    // 부모컴포넌트에서 사용할 import한 데이터 할당!
    exData: deData,
    // 하위컴포넌트를 데이터만큼 순회할때 여기서 불러온다!
    // 부모 인스턴스에서 v-for 디렉티브를 사용하기때문!
  },
  // 부모 뷰인스턴스 메서드구역 ////
  methods: {
    // 자식이벤트 전달후 실행메서드
    goMsg(txt) {
      // txt 전달받을 변수
      alert("자식이 부모에게 이벤트전달 성공!" + txt);
    },
    ovMsg(obj) {
      console.log("오버!오케이!", obj);
    },
    // 세자리마다 콤마추가 메서드
    addComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
  },
}); ///// 뷰인스턴스 ///////////////
