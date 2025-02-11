// 패럴렉스 PJ JS - main.js

// 나의 함수 불러오기
import myFn from "./my_function.js";

/******************************************** 
    [ 패럴렉스 기능구현하기 ]
    1. 정의 : 패럴렉스란 스크롤 작동시 같은 방향으로
    요소가 다른속도를 가지고 움직임으로
    사용자가 공간감을 느낄 수 있게 하는 구현방법

    2. 방법 : 
        (1) 범위 - 요소가 화면에 등장하여
        보일동안 스크롤될때 이동함
        (2) 움직일 크기 설정이 필요함
        (3) 범위체크를 위한 JS 메서드를 사용함
        -> getBoundingClientRect().top

    3. 이벤트 : scroll
    4. 패럴렉스 대상 : 특정클래스 지정
        (1) 글자박스 대상 : .txt
        (2) 아이콘이미지 대상 : .icon

********************************************/

// 1. 대상선정 //////////////////
// 1-1. 글자박스
const txtBox = myFn.qsa(".txt");
// 1-2. 아이콘
const icon = myFn.qsa(".icon");

// console.log(txtBox,icon);

// 2. 이벤트 설정하기 ///////////////
// 대상 : window / 이벤트 종류 : scroll
myFn.addEvt(window, "scroll", scrollFn);

// 3. 함수만들기 ///////////////
// 3-1. 스크롤 이벤트 함수 ////
function scrollFn() {
  console.log("스크롤~~~!");

  // 대상 하나만 테스트(두번째 대상)
  parallaxFn(myFn.getBCR(icon[1]), icon[1], limitVal[0]);
} /////////////// scrollFn 함수 //////////////

// 전역 셋팅변수 ///////
// 윈도우 높이값
const winH = window.innerHeight;
// 패럴랙스 한계 범위값
const limitVal = [200, 300];
console.log("윈도우높이값:", winH);

// 3-2. 패럴렉스 함수 /////////////
function parallaxFn(pos, el, limit) {
  // pos - 요소 getBCR top 위치값
  // el - 대상요소
  // limit - 이동한계값

  // 이동할 위치값 구하기
  // 실제이동값 = 위치값*정한범위 / 전체범위
  const moveVal = limit - (pos * limit / winH);

  console.log(
    "pos:", pos, 
    "\nel:", el, 
    "\nlimit:", limit,
    "\nmoveVal:", moveVal
  );

} /////////// parallaxFn 함수 ////////////////

/***************************** 
[ 패럴렉스 위치계산 ]
1. 전체범위 : 윈도우높이값
2. 위치값 : getBoundingClientRect().top
3. 정한범위 : 이동할 수치
4. 실제이동값 : transform:translateY(이동수치px)
__________________________

((비례식으로 실제 이동값 알아내기))
전체범위 : 위치값 = 정한범위 : 실제이동값
실제이동값 = 위치값*정한범위 / 전체범위

-> 그.런.데...
Y축 위치이동은 처음에 0부터 서서히 커지므로
이동수치값은 정한범위에서 실제이동값을 빼야함!

실제이동값 = 정한범위 - (위치값*정한범위 / 전체범위)

*****************************/
