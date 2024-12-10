// 메인배너 슬라이드 기능 함수 - slide_fn.js

// 나의 함수 불러오기
import myFn from "./my_function.js";

// 슬라이드 기능함수 export하기
export default function slideFn() {
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
    // console.log('나함수!',this);

    // 2. 오른쪽버튼여부 확인
    let isRight = this.classList.contains("ab2");
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
} ////////// slideFn 함수 /////////
