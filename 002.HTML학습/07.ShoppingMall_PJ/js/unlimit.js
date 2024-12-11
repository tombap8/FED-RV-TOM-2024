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
// let seqNum = 0;
////////////////////////////////

// 1. 대상선정 //////////////////
// (1) 전체 슬라이드 박스 : .slide-box
const slideBox = myFn.qs(".slide-box");
// 전체 박스 하위의 요소로 상대적으로 잡아준다!
// 이유는 다른 슬라이드 박스를 카피하여 만든경우
// 동일한 기능이 될 수 있게 해준다!

// (2) 이벤트대상: .abtn
const abtn = myFn.qsaEl(slideBox, ".abtn");

// (3) 변경대상: .slide
const slide = myFn.qsEl(slideBox, ".slide");

// (4) 최초 슬라이드 li 수집하기
const firstSlide = myFn.qsaEl(slide, "li");

// 최초슬라이드 li에 data-seq 속성 만들고 순번넣기
// 왜 넣는가? 슬라이드 li순서가 계속 변경되므로
// 블릿 인디케이터의 표시 순서를 잡기 위해 넣어준다!
firstSlide.forEach((el, idx) => {
  // 속성셋팅은 setAttribute(속성명,값)
  el.setAttribute("data-seq", idx);
}); ////// forEach /////////////

// 슬라이드 개수 변수할당!
// 보통 변경없이 사용하는 변수는 상수라고 하고
// 상수는 보통 대문자로 쓰고 스네이크 케이스 사용함!
const SLIDE_CNT = firstSlide.length;
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
  // 이동버튼 클릭시 인터발지우기함수 호출
  myFn.addEvt(el, "click", ()=>{clearAuto()});
}); //////////// forEach ////////////////

// 광클금지 상태변수
let stsClick = false;
// 슬라이드 애니시간상수
const TIME_ANI = 600;

// 3. 함수만들기 /////////////////////
function goSlide() {
  // 광클금지 설정 ///////
  if (stsClick) return; // 함수를 나가!
  stsClick = true; // 문잠금!
  setTimeout(() => {
    stsClick = false; // 잠금해제!
  }, TIME_ANI);
  //////////////////////

  // 1. 함수호출확인
  console.log('나함수!',this,this.classList);

  // 2. 오른쪽버튼여부 확인(기본값 true할당)
  let isRight = true;
  // 만약 this.classList가 undefined가 아니면
  // 클래스 오른쪽 여부를 판단한다!
  if(this.classList) 
    isRight = this.classList.contains("ab2");
  // 일반적으로 버튼을 클릭하지 않고 호출하면
  // window객체가 this로 잡히므로 classList객체가 없어서
  // undefined로 나오고 하위 클래스인 contains()가
  // 없으므로 에러 메시지가 나온다! 따라서 이런 경우를
  // 대비하여 기본값으로 isRight변수에 true를 주고
  // 직접호출시 오른쪽으로 이동하게 해준다!
  // 만약 버튼을 클릭하면 if문에서 걸러주므로
  // 실제 버튼 클래스 존재 여부를 판단하여 오른쪽/왼쪽
  // 이동버튼 분기가 작동된다!

  // classList.contains(클래스명) -> 클래스있으면 true
  console.log("나함수!", isRight);

  // 3. 현재 변경된 li수집용 변수
  let list = myFn.qsaEl(slide, "li");

  // 3. 분기하여 슬라이드 이동하기 /////////
  // (1) 오른쪽버튼 클릭시 : 왼쪽으로 이동
  if (isRight) {
    // [1] translate x축방향 -100% 이동
    slide.style.translate = "-100%";
    slide.style.transition = TIME_ANI + "ms ease-in-out";

    // [ 슬라이드 이동후 실행해야함 ]
    // 따라서 setTimeout으로 시간 지연실행코드작성
    setTimeout(() => {
      // [2] 맨앞li 선택하여 맨뒤로 이동하기
      slide.appendChild(list[0]);
      // 슬라이드.appendChild(맨앞li)

      // [3] 이때 translate값 0으로 초기화함!
      slide.style.translate = "0";

      // [4] 초기화할 경우 트랜지션 없애기
      slide.style.transition = "none";
    }, TIME_ANI); /// setTimeout ///
  } /////////// if ///////////
  // (2) 왼쪽버튼 클릭시 : 오른쪽으로 이동
  else {
    // [1] 맨뒤li 맨앞으로 이동하기 /////////
    slide.insertBefore(list[list.length - 1], list[0]);
    // 슬라이드.insertBefore(맨뒤li,맨앞li)
    // 맨뒤 li순번은 (개수-1)임!

    // [2] 이때 슬라이드 translate값을 -100%로 설정
    slide.style.translate = "-100%";
    slide.style.transition = "none";

    // 코드 실행순서를 분리하여 비동기처리하면
    // 위의 변경사항과 같은 변경이 시차를 두고
    // 실행됨! 큐에서 대기하고 스택에서 실행된다!
    setTimeout(() => {
      // [3] translate값을 0으로 변경하여 들어오기
      slide.style.translate = "0";

      // [4] 이때 트랜지션 애니메이션 설정
      slide.style.transition = TIME_ANI + "ms ease-in-out";
    }, 0);
  } ///////// else ///////

  // 명령어 코드는 콜 스택(Call Stack)에서 순서대로 실행됨
  //   console.log('1');
  // 타임아웃메서드는 태스크 큐(Task Queue)에 대기하다가
  // 콜 스택의 명령어가 모두 실행후 큐에 쌓인 명령어를
  // 스택으로 옮겨서 순서대로 실행함!
  //   setTimeout(()=>console.log('2'),0);
  //   console.log('3');
  //   console.log('4');

  // 위에서 변경된 li를 다시 읽어들인다!
  list = myFn.qsaEl(slide, "li");

  // 슬라이드 data-seq값과
  // 일치하는 순번li에 클래스 "on"넣기
  // 이때 오른쪽버튼은 1번, 왼쪽버튼은 0번째 li의
  // data-seq값을 읽어온다!
  let num = list[isRight ? 1 : 0].getAttribute("data-seq");
  console.log("num:", num, typeof num);

  // 4. 인디케이터 변경하기 : 대상 .indic li
  indic.forEach((el, idx) => {
    // console.log(el,idx,typeof idx);

    // 속성값은 문자형이므로 비교시 === 형까지 비교할 경우
    // 반드시 숫자형으로 변환해야한다! Number(문자형숫자)
    if (idx === Number(num)) {
      el.classList.add("on");
    } /// if ///
    // (2) 나머지 li는 "on" 제거하기
    else {
      el.classList.remove("on");
    } /// else ///
  }); /// forEach ////

  // -> seqNum 값 즉, 슬라이드 순번과
  // 인디케이터 li 순번이 같으므로
  // 해당순번의 li에 클래스"on"을 넣고
  // 나머지는 "on"을 제거한다!
} ////////// goSlide함수 /////////////




/**************************************** 
        인터발 호출 설정하기
****************************************/
// 인터발 및 타임아웃설정을 지우기 위해 변수에 할당한다!
let autoI, autoT;
// 인터발함수 최초호출
autoSlide();

// [1] 인터발 설정함수 ////
function autoSlide(){
  autoI = setInterval(goSlide, 2000);
} ///// autoSlide 함수 //////

// [2] 인터발 지우기 함수 ////
// -> 버튼 직접 조작시 호출함!
function clearAuto(){
  // (1) 인터발 지우기
  clearInterval(autoI);
  // (2) 타임아웃 지우기(실행쓰나미방지)
  clearTimeout(autoT);
  // (3) 일정시간후 인터발 재호출(최종하나만 남는다!)
  autoT = setTimeout(autoSlide, 5000);
} /////// clearAuto 함수 ////////
