// 로봇 PJ JS - robot.js

// 로딩구역 만들기 /////////////
// 대상 : window (최상위 JS 객체)
// 이벤트 등록 메서드 :
// addEventListener(이벤트,함수)
// -> 이벤트와 함수를 연결시키는 메서드
// -> 이벤트 : JS에 등록된 이벤트명을 사용
// 예) click, scroll, mouseenter, keypress,...
// 함수는 외부함수 또는 직접 익명함수를 사용함!

/////// 로딩구역 ////////////////////////
// [ 로딩관련 이벤트는 2가지! ]
// 1) load : 모든 컨텐츠 내용이 로딩된 후 실행
// -> 이미지나 모든 시간이 걸리는 컨텐츠도
// 모두 로딩될때까지 기다림!
// 2) DOMContentLoaded : 태그만 다그리면 실행

window.addEventListener(
  "DOMContentLoaded",
  loadFn
);
///////// 로드구역 //////////////

/// 로딩실행 함수 //////////////////
function loadFn() {
  console.log("로딩완료!");

  // 0. 요구사항 분석:
  // 1) TV버튼 클릭시 기능을 수행함
  // 2) 확대/축소 버튼클릭 : 확대/축소함
  // 3) 채널버튼 클릭 : 유튜브 동영상 변경
  // - 확대/축소시 트랜지션 적용하기

  // 1. 대상선정
  // 1-1. 이벤트 대상 : TV버튼 - .btns button
  const btns =
    document.querySelectorAll(
      ".btns button"
    );
  // 1-2. 변경대상 : .tv
  const tv =
    document.querySelector(".tv");

  // 1-3. 변경대상 : .tv iframe (동영상변경)
  const mv = tv.querySelector("iframe");

  console.log("대상:", btns, tv, mv);

  // 2. 이벤트 설정하기 : addEventListener사용!
  // 버튼개수변수
  const btnCnt = btns.length;
  // for문으로 돌면서 이벤트 한꺼번에 설정하기
  //   for(시;한;증){코드}
  for (let i = 0; i < btnCnt; i++) {
    btns[i].addEventListener(
      "click",
      controlTV
    );
  } ///// for /////

  // 3.  함수만들기
  function controlTV() {
    // this - 호출한 요소 자신!
    // 1. 이벤트호출요소의 클래스명 읽어오기
    // 속성명은 getAttribute('class')
    // 클래스명은 특별하므로 className으로 가져옴
    // 참고)class라고 못하는 이유는 class가 따로있음!
    // 아이디명도 특별하므로 id로 가져옴
    let className = this.className;
    //   this.getAttribute("class");

    // 4. 스타일시트 scale값 읽어오기
    let scaleValue =
      getComputedStyle(tv).scale;
    // 값이 1.4 이면 3, 3이면 1.4로 변경하기
    scaleValue =
      scaleValue === "1.4"
        ? "3"
        : "1.4";
    // 삼항연산자의 결과가 scaleValue값을 덮어쓴다!

    // 2. 함수호출확인!
    console.log(
      "티비틀어!",
      className,
      scaleValue,
      scaleValue == "1.4",
      getComputedStyle(tv).width
    );

    // 3. tv에 트랜지션 주기
    tv.style.transition =
      ".6s ease-in-out";

    // [ CSS 스타일값 읽기방법 2가지 ]
    // 1) style.속성명 방법 (인라인CSS만 읽어옴)
    // -> 왜 인라인만인가? style.속성명=값 설정을
    // 생각해 보면 이것이 인라인 CSS를 설정하는 방법이기때문
    // 2) getComputedStyle(대상요소).속성명 방법
    // -> 2번 방법은 실제로 화면에 셋팅된 CSS값을 읽어옴

    // 5. 기능별 분기하기
    switch (className) {
      case "scale":
        /* 축소/확대 css변경하기 */
        tv.style.scale = scaleValue;
        /* 클릭된 스케일 버튼 title변경하기 */
        this.title =
          scaleValue == "3"
            ? "축소"
            : "확대";
        break;
      case "ch1":
        mv.src =
          "https://www.youtube.com/embed/RMD91n01DuA?autoplay=1";
        break;
      case "ch2":
        mv.src =
          "https://www.youtube.com/embed/3P1CnWI62Ik?autoplay=1";
        break;
      case "ch3":
        mv.src =
          "https://www.youtube.com/embed/xLD8oWRmlAE?autoplay=1";
        break;
    }
  } ///// controlTV 함수 //////////////
} //////////// loadFn 함수 //////////////
