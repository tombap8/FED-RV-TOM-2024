// 01. 컴포넌트 연습1 JS

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

new Vue({el:'.tit'});


// [갤러리용 변수]
let inum = 0;

// 2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기 ///
Vue.component('list-comp',{
    // (1) 템플릿 설정
    template: `
        <div>
            <img v-bind:src="gsrc" alt="아이템">
            <aside>
            <h2>아비모밀</h2>
            <h3>245,000원</h3>
            </aside>
        </div>
    `, //// template /////
    // v-bind:src 속성은 일반 src속성과 달리
    // 뷰JS에서 속성값을 바인딩하여 넣는다는 코딩법이다!
    // -> 일반적으로 v-bind:속성 이렇게 쓰면
    // 뷰JS용 바인딩 속성이 된다!!!

    // (2) data속성 : 컴포넌트에서 쓸 데이터
    data: function(){
        // 컴포넌트 data는 함수형태로 반드시 return을 써야함!
        return{
            // 이미지 src
            gsrc: `./images/${this.setNum()}.jpg`,
            // 상품명
            gname: ``,
            // 상품가격
            gprice: ``,
        }
    },// data속성

    // (3) methods 속성
    methods: {
        setNum(){
            return ++inum;
        },
    }
});

new Vue({el:'.grid'})
