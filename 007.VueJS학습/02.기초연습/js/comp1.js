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
