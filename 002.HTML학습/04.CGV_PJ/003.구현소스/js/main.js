// CGV PJ 추가기능 JS - main.js

// 로딩확인
console.log("나야나 로딩!");

// 화살표함수로 선택함수 만들기
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
// 화살표함수로 이벤트설정 함수 만들기
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

/********************************************* 
    [ 요구사항분석 ]
    - CGV 극장 예고편 선택 포스터 클릭시
    클릭된 li에 클래스 "on"을 넣고
    나머지는 "on"을 제거처리한다!
    - 결과적으로 CSS에 셋팅된 디자인이 적용됨!
    1. 이벤트 종류 : click
    2. 이벤트 대상 : .poster-menu ul > li
    3. 변경 대상 : 이벤트 대상과 동일
*********************************************/
// 1. 대상선정 : 이벤트대상 + 변경대상
// 1-1. 이벤트 대상 : .poster-menu ul > li
const menu = qsa(".poster-menu ul > li");
console.log("메뉴:", menu);
// 1-2. 변경대상 : 이벤트대상과 동일함!

// 2. 이벤트 설정하기 //////////
// li가 여러개니까 개수만큼 for문을 돌림!
// for(시;한;증){코드}
// for(let i=0; i<개수; i++){코드}
// 이렇게 항상 0부터 개수보다 작을때 까지 1씩증가함

// 너무나 뻔함! -> for of문으로 쉽게 할 수 있음!
// [ for of 구문 ]
// for(변수 of 요소들){코드}
for (let x of menu) {
  console.log("for of의 값:", x);
  // 클릭 이벤트 설정하기
  // addEvt(요소,이벤트명,함수)
  addEvt(x, "click", () => {
    console.log("나?메뉴!");
    // (1) li모두 클래스 "on"지우기
    for (let y of menu) y.classList.remove("on");
    // (2) 클릭된 li에 클래스 "on"넣기
    x.classList.add("on");
  }); ///// addEvt //////
} /////// for of 문 //////////
