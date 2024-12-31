// 자동스크롤 JS - auto_scroll.js

// 나의 함수 불러오기
import myFn from "./my_function.js";

/********************************************** 
    [ 자동스크롤 기능정의 ]
    1. 스크롤바가 없는 상태에서 또는 스크롤기능을 
    막아놓은 상태에서 마우스 휠 작동시
    아래와 같이 기능구현됨
    (1) 휠 내림 : 다음페이지로 이동
    (2) 휠 올림 : 이전페이지로 이동

    2. 스크롤바 첫페이지와 끝페이지에서 이동안함

    [ 자동스크롤 이벤트 ]
    -> wheel 이벤트
    -> 마우스 휠 작동시 발생!
    (이전 이벤트명: 
        mousewheel / DOMMouseScroll(파이어폭스))
    (주의: wheel이벤트는 scroll이벤트와는 다름!
        마우스의 바퀴를 돌릴때 발생함!)
**********************************************/

// 1. 자동스크롤 구현시 필요한 초기설정하기 /////

// (1-1) html 에 부드러운 스크롤 설정
myFn.qs("html").style.scrollBehavior = "smooth";

// (1-2) body 에 오버플로우 히든 설정
// myFn.qs('body').style.overflow = 'hidden';

// 2. 전역변수 설정하기 //////////////////////
// (2-1) 페이지변수
let pgNum = 0;
// (2-2) 휠상태변수 (광휠금지상태:true-막기,false-허용)
let stsWheel = false;
// (2-3) 각 페이지요소 수집 (.page인 요소들)
const pageEl = myFn.qsa(".page");
// (2-4) 전체 페이지수 상수
const TOTAL_PAGE = pageEl.length;

// console.log(pageEl,TOTAL_PAGE);

// 3. 이벤트 등록하기 ///////////////////
// 대상 : window
// - 전체 페이지 휠 이벤트 대상은 window다!
// 이벤트종류 : wheel
// myFn.addEvt(window, 'wheel', wheelFn);
window.addEventListener("wheel", wheelFn, { passive: false });

// 4. 함수만들기 /////////////////////////////
function wheelFn(e) {
  // console.log('나야나!!!');

  // (4-1) 기본기능막기 ///////
  e.preventDefault();

  // (4-2) 광휠막기 ///////
  if(stsWheel) return; 
  stsWheel = true; // 잠금!
  setTimeout(()=>stsWheel=false,600); // 해제!

  // (4-3) 휠방향 알아내기 ///////
  // -> 델타값으로 알아낸다!
  // 방향: 마이너스(아랫쪽), 플러스(윗쪽)
  let delta = e.wheelDelta;
  // console.log('델타값:',delta);

  // (4-4) 방향 분기하여 전역 페이지변수 증감하기 ///////
  if (delta < 0) pgNum++;
  else pgNum--;

  // (4-5) 한계값 체크 (0과 페이지끝번호 기준) ///////
  if (pgNum < 0) pgNum = 0;
  else if (pgNum > TOTAL_PAGE - 1) pgNum = TOTAL_PAGE - 1;

  console.log("페이지번호:", pgNum, pageEl[pgNum].offsetTop);

   // (4-6) 페이지 이동하기 /////////
   window.scrollTo(0,pageEl[pgNum].offsetTop);

   // 이동원리 : scrollTo(x축위치값,y축위치값) 사용이동
   // x축은 0, y축은 해당 순번의 .page박스 위치값 넣음
   // pageEl[pgNum].offsetTop
   // -> 페이지요소들[순번].위에서부터위치값

} ////////////// wheelFn 함수 //////////////

/******************************************************* 
    [ window / document / body 세가지는
    기본막기불가 설정되어있음! ]
    -> 이벤트 등록시 패지스모드가 true로 설정됨
    셋팅방법:
    요소.addEventListener(이벤트명,함수,{passive:true})
    -> 기존엔  passive:false 였는데 이것의
    기본값이 true로 변경됨. 의미는 기본기능막기
    못하게 설정됨!

    우리가 변경하여 사용해야함!
    요소.addEventListener(이벤트명,함수,{passive:false})
*******************************************************/


// 5. 메뉴클릭시 이동 추가기능 구현하기 ////

// (5-1) 대상선정 : .gnb a
const gnb = myFn.qsa('.gnb a');

// (5-2) 이벤트설정
gnb.forEach(el=>{
    myFn.addEvt(el,'click',movePage);
}); //////// forEach ////////////

// (5-3) 함수만들기
function movePage(e){
    console.log('클릭!',this);

    // 1) 기본이동막기
    e.preventDefault();

} //////// movePage 함수 ////////

