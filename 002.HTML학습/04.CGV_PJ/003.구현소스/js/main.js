// CGV PJ 추가기능 JS - main.js

// 로딩확인
console.log("나야나 로딩!");

// 화살표함수로 선택함수 만들기
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);
// 화살표함수로 이벤트설정 함수 만들기
const addEvt = 
(ele,evt,fn) => ele.addEventListener(evt,fn);

/********************************************* 
    [ 요구사항분석 ]
    - CGV 극장 예고편 선택 포스터 클릭시
    클릭된 li에 클래스 "on"을 넣고
    나머지는 "on"을 제거처리한다!
    - 결과적으로 CSS에 셋팅된 디자인이 적용됨!
*********************************************/
// 1. 대상선정 : 이벤트대상 + 변경대상
// 1-1. 이벤트 대상 : .poster-menu ul > li
const menu = qsa('.poster-menu ul > li');
console.log("메뉴:",menu);