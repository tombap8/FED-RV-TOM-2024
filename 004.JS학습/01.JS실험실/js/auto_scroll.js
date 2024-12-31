// 자동스크롤 JS - auto_scroll.js

// 나의 함수 불러오기
import myFn from './my_function.js';

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
myFn.qs('html').style.scrollBehavior = 'smooth'; 

// (1-2) body 에 오버플로우 히든 설정
// myFn.qs('body').style.overflow = 'hidden';

// 2. 전역변수 설정하기 //////////////////////
// (2-1) 페이지변수
let pgNum = 0;
// (2-2) 휠상태변수 (광휠금지상태:true-막기,false-허용)
let stsWheel = false;
// (2-3) 각 페이지요소 수집 (.page인 요소들)
const pageEl = myFn.qsa('.page');
// (2-4) 전체 페이지수 상수
const TOTAL_PAGE = pageEl.length;

// console.log(pageEl,TOTAL_PAGE);

// 3. 이벤트 등록하기 ///////////////////
// 대상 : window
// - 전체 페이지 휠 이벤트 대상은 window다!
// 이벤트종류 : wheel
// myFn.addEvt(window, 'wheel', wheelFn);
window.addEventListener('wheel',wheelFn,{passive:false});

// 4. 함수만들기 /////////////////////////////
function wheelFn(e){
    console.log('나야나!!!');

    // 1. 기본기능막기
    e.preventDefault();
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
