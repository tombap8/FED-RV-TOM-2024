// 자동스크롤 JS - auto_scroll.js

// 나의 함수 불러오기
import myFn from "./my_function.js";

// 새로고침시 스크롤위치값 캐싱때문에 강제로 위로 가기설정
setTimeout(() => window.scrollTo(0, 0), 0);
// setTimeout 으로 감싸면 스텍의 모든 코드 실행후 나중에 실행됨
// 이때 스크롤 캐싱도 적용후에 실행하게 됨. 즉, 덮어씀! 성공!

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
myFn.qs("body").style.overflow = "hidden";

// 2. 전역변수 설정하기 //////////////////////
// (2-1) 페이지변수
let pgNum = 0;
// (2-2) 휠상태변수 (광휠금지상태:true-막기,false-허용)
let stsWheel = false;
// (2-3) 각 페이지요소 수집 (.page인 요소들)
const pageEl = myFn.qsa(".page");
// (2-4) 전체 페이지수 상수
const TOTAL_PAGE = pageEl.length;
// (2-5) GNB 링크요소 : .gnb a
const gnb = myFn.qsa(".gnb a");
// (2-6) 인디케이터 링크요소 : .indic a
const indic = myFn.qsa(".indic a");

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
  if (stsWheel) return;
  stsWheel = true; // 잠금!
  setTimeout(() => (stsWheel = false), 600); // 해제!

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
  window.scrollTo(0, pageEl[pgNum].offsetTop);

  // 이동원리 : scrollTo(x축위치값,y축위치값) 사용이동
  // x축은 0, y축은 해당 순번의 .page박스 위치값 넣음
  // pageEl[pgNum].offsetTop
  // -> 페이지요소들[순번].위에서부터위치값

  // (4-7) 페이지번호와 일치하는 GNB와 인디케이터에 클래스on넣기
  [gnb, indic].forEach((v) => addOn(v));
  // 배열에 담고 값의 개수만큼 forEach로 순회하여 함수호출!
} ////////////// wheelFn 함수 //////////////

/// 추가분리함수 : 클래스 넣기함수 //////
function addOn(target) {
  // target - 대상요소
  target.forEach((el2, idx2) => {
    // 해당요소는 a이므로 부모인 li로 올라가서
    // 클래스를 줘야함! -> parentElement 사용!

    if (idx2 == pgNum)
      // 페이지번호와 같으면 on넣기
      el2.parentElement.classList.add("on");
    // 기타인 경우는 on제거하기
    else el2.parentElement.classList.remove("on");
  }); /// forEach ////
} //////////// addOn 함수 ////////////////

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
// const gnb = myFn.qsa('.gnb a'); -> 코드 변수설정구역 이동!

// (5-2) 이벤트설정 : gnb, indic
gnb.forEach((el, idx, list) => {
  // el-요소, idx-순번, list-전체컬렉션
  myFn.addEvt(el, "click", (evt) => movePage(evt, el, idx, list));
}); //////// forEach ////////////

indic.forEach((el, idx, list) => {
  // el-요소, idx-순번, list-전체컬렉션
  myFn.addEvt(el, "click", (evt) => movePage(evt, el, idx, list));
}); //////// forEach ////////////

// (5-3) 함수만들기
function movePage(evt, el, idx, list) {
  // evt - 이벤트 전달변수
  // (함수와 직접연결된 경우 자동전달됨!)
  // (그러나...호출되는 일반함수일 경우 전달해야함!)
  // el - 전달된 개별요소(this대신 사용함!)
  // idx - 요소의 순번 전달
  // list - 전체 컬렉션 객체
  console.log("evt:", evt, "/el:", el, "/idx:", idx, "/list:", list);

  // 1) 기본이동막기
  evt.preventDefault();

  // 2) 클릭된 a요소의 href값 읽어오기(이동할 아이디)
  // -> 요소속성값 가져오기 : getAttribute(속성명)
  let tgId = el.getAttribute("href");
  // this대신 전달된 요소 자신인 el을 사용함!

  // 3) 이동할 페이지 위치값 구하기
  let pgPos = myFn.qs(tgId).offsetTop;
  console.log("클릭!", tgId, pgPos);

  // 4) 페이지 이동하기
  window.scrollTo(0, pgPos);

  // 5) 이동한 페이지 전역변수 업데이트하기
  pgNum = idx;
  // 메뉴 a요소의 순번을 전역페이지수에 넣어준다!
  // 결과로 휠 이동시 순번이 일치하게됨!

  // 6) 동시에 gnb, indic 두가지를 모두 처리해야함!
  // -> addOn함수를 호출한다!
  [gnb, indic].forEach((v) => addOn(v));

  // -> 아래 코드는 하나씩만 처리할때 사용!!!

  // 6) a요소 컬렉션을 순회하며 해당순번과 같으면
  // 클래스 on넣고 아니면 on제거
  // 전달변수 list로 전체 컬렉션이 들어왔으므로
  // 이것을 활용!!
  //   list.forEach((el2, idx2) => {
  //     // 해당요소는 a이므로 부모인 li로 올라가서
  //     // 클래스를 줘야함! -> parentElement 사용!

  //     if (idx2 == pgNum)
  //       // 해당순번과 같으면 on넣기
  //       el2.parentElement.classList.add("on");
  //     // 기타인 경우는 on제거하기
  //     else el2.parentElement.classList.remove("on");
  //   }); /// forEach ////
} //////// movePage 함수 ////////
/********************************************************* 
    [ 모바일 이벤트처리 ]
    
    [ 모바일 터치 스크린에서 사용하는 이벤트 종류 ]
    1. touchstart - 손가락이 화면에 닿을때 발생
    2. touchend - 손가락이 화면에서 떨어질때 발생
    3. touchmove - 손가락이 화면에 닿은채로 움직일때 발생
    
    [ 화면터치 이벤트관련 위치값 종류 ]
    1. screenX, screenY : 
        디바이스 화면을 기준한 x,y 좌표
    2. clientX, clientY : 
        브라우저 화면을 기준한 x,y 좌표(스크롤미포함)
    3. pageX, pageY : 
        스크롤을 포함한 브라우저 화면을 기준한 x,y 좌표
*********************************************************/
// 1. 모바일 이벤트 등록하기 //////////
myFn.addEvt(window, "touchstart", touchStartFn);
myFn.addEvt(window, "touchend", touchEndFn);

// 터치시 위치값 변수
// mPosStart 시작위치 / mPosEnd 끝위치
let mPosStart = 0,
  mPosEnd = 0;

// 2. 모바일 이벤트함수 만들기 /////////
function touchStartFn(e) {
  // 필요한 위치값은 Y축
  mPosStart = e.touches[0].screenY;
  // event.touches는 모바일 터치정보를 담고 있음
  // 위치정보는 0번째 주소에 모두 종류별로 있음
  // console.log('터치시작!', mPosStart, e.touches);
} /////////// touchStartFn 함수 ///////////

function touchEndFn(e) {
  // 1. 필요한 위치값은 Y축
  mPosEnd = e.changedTouches[0].screenY;
  // 처음 터치위치값과 변경된 터치위치값은 다른곳에 담긴다!
  // 바로 changedTouches를 사용해야 읽을 수 있다!

  // 2. 위치차 : 처음위치 - 나중위치
  let diffValue = mPosStart - mPosEnd;
  // console.log('터치끝!', mPosEnd, '/차이수:',diffValue);

  // 3. 위치차 값이 양수이면 아래쪽이동(음수는 윗쪽이동)
  if (diffValue > 0) {
    console.log("아랫방향이동!");
    pgNum++;
  } //// if /////
  else if (diffValue < 0) {
    console.log("윗방향이동!");
    pgNum--;
  } ///// else if ///

  // 4. 한계값 체크 (0과 페이지끝번호 기준) ///////
  if (pgNum < 0) pgNum = 0;
  else if (pgNum > TOTAL_PAGE - 1) pgNum = TOTAL_PAGE - 1;

  // 5. 페이지 이동하기 /////////
  window.scrollTo(0, pageEl[pgNum].offsetTop);
  
  // 6. 페이지번호와 일치하는 GNB와 인디케이터에 클래스on넣기
  [gnb, indic].forEach((v) => addOn(v));
} //////// touchEndFn 함수 ///////////////
