// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 - 무한이동 //

// 나의 함수 불러오기
import myFn from "./my_function.js";

/***************************************************** 
    [ 슬라이드 무한이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(.slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 
            translate X축 이동값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 translate X축 이동값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 
            translate X축 이동값을
            -100%로 변경한다.
            그 후 translate X축 이동값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
          - 블릿 대상: .indic li
          - 변경 내용: 슬라이드 순번과 같은 순번의
          li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// [전역변수구역] ///////////////
// (1) 순번변수
let seqNum = 0;
////////////////////////////////

// 1. 대상선정 //////////////////
// (1) 전체 슬라이드 박스 : .slide-box
const slideBox = myFn.qs(".slide-box");
// 전체 박스 하위의 요소로 상대적으로 잡아준다!
// 이유는 다른 슬라이드 박스를 카피하여 만든경우
// 동일한 기능이 될 수 있게 해준다!

// (2) 이벤트대상: .abtn
const abtn = myFn.qsaEl(slideBox, ".abtn");
// 처음에 첫번째 버튼 숨기기
abtn[0].style.display = "none";

// (3) 변경대상: .slide
const slide = myFn.qsEl(slideBox, ".slide");
// 슬라이드 개수 변수할당!
// 보통 변경없이 사용하는 변수는 상수라고 하고
// 상수는 보통 대문자로 쓰고 스네이크 케이스 사용함!
const SLIDE_CNT = myFn.qsaEl(slide, "li").length;
console.log("슬라이드개수:", SLIDE_CNT);

// (4) 인디케이터 블릿대상
const indic = myFn.qsaEl(slideBox, ".indic li");

// console.log("대상:",slideBox,abtn,slide,indic);

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
  // (1) 오른쪽버튼 클릭시 : 왼쪽으로 이동
  if (isRight) {
    // [1] translate x축방향 -100% 이동
    slide.style.translate = '-100%';
    slide.style.transition = '.4s ease-in-out';

    // [ 슬라이드 이동후 실행해야함 ]
    // 따라서 setTimeout으로 시간 지연실행코드작성
    setTimeout(() => {
        // [2] 맨앞li 선택하여 맨뒤로 이동하기
        // 슬라이드.appendChild(맨앞li)
        slide.appendChild(myFn.qsaEl(slide,'li')[0]);
        
    }, 400); /// setTimeout ///
  } /////////// if ///////////
  // (2) 왼쪽버튼 클릭시 : 오른쪽으로 이동
  else {
    
  } ///////// else ///////

  

  // 6. 인디케이터 변경하기 : 대상 .indic li
//   indic.forEach((el, idx) => {
//     // console.log(el,idx);
//     // (1) 페이지번호와 일치하는 순번li에 클래스 "on"넣기
//     if (idx === seqNum) {
//       el.classList.add("on");
//     } /// if ///
//     // (2) 나머지 li는 "on" 제거하기
//     else {
//       el.classList.remove("on");
//     } /// else ///
//   }); /// forEach ////

  // -> seqNum 값 즉, 슬라이드 순번과
  // 인디케이터 li 순번이 같으므로
  // 해당순번의 li에 클래스"on"을 넣고
  // 나머지는 "on"을 제거한다!
} ////////// goSlide함수 /////////////
