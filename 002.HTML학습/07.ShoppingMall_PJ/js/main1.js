// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// 나의 함수 불러오기
import myFn from "./my_function.js";

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(.slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 translate값을
            -100% 단위로 값을 증가하여 변경시킨다.

        (2) 왼쪽 버튼 클릭시 이전 슬라이드가
            나타나도록 슬라이드 박스의 translate값을
            -100% 단위로 값을 감소하여 변경시킨다.

        (3) 이동 중 첫번째 슬라이드는 왼쪽이동버튼 숨기기
            마지막 슬라이드는 오른쪽이동버튼 숨기기함!

        (4) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// [전역변수구역] ///////////////
// (1) 순번변수
let seqNum = 0;
////////////////////////////////

// 1. 대상선정 //////////////////
// 전체 슬라이드 박스 : .slide-box
const slideBox = myFn.qs(".slide-box");
// 전체 박스 하위의 요소로 상대적으로 잡아준다!
// 이유는 다른 슬라이드 박스를 카피하여 만든경우
// 동일한 기능이 될 수 있게 해준다!
// 이벤트대상: .abtn
const abtn = myFn.qsaEl(slideBox, ".abtn");
// 변경대상: .slide
const slide = myFn.qsEl(slideBox, ".slide");

// console.log("대상:",slideBox,abtn,slide);

// 2. 이벤트 설정하기 ////////////////////
abtn.forEach((el) => {
  // console.log('요소:',el);
  // 각 요소에 이벤트 설정하기
  // click이벤트를 addEventListener로 설정!
  myFn.addEvt(el, "click", goSlide);
}); //////////// forEach ////////////////

// 3. 함수만들기 /////////////////////
function goSlide() {
  // 1. 함수호출확인
  // console.log('나함수!',this);

  // 2. 오른쪽버튼여부 확인
  let isRight = this.classList.contains("ab2");
  // classList.contains(클래스명) -> 클래스있으면 true
  console.log("나함수!", isRight);

  // 3. 분기하여 슬라이드순번 변수 증감하기
  // (1) 오른쪽일때 증가
  if (isRight) {
    seqNum++;
    // 한계값 설정 : 
    // -> 마지막 슬라이드 순번보다 크면 마지막번호고정
    if(seqNum > 4) seqNum = 4;
  } /// if ///
  // (2) 왼쪽일때 감소
  else {
    seqNum--;
    // 한계값설정 : 
    // -> 0보다 작아지면 0으로 고정
    if(seqNum < 0) seqNum = 0;
  } /// else ///

  console.log('슬순번:',seqNum);

  // 4. 슬라이드 CSS변경하여 슬라이드 이동하기
  slide.style.translate = seqNum * -100 + "%";
  slide.style.transition = ".4s ease-in-out";
} ////////// goSlide함수 /////////////
