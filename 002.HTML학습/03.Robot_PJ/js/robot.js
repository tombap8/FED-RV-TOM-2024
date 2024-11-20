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
    let className =
      this.getAttribute("class");

    // 2. 함수호출확인!
    console.log("티비틀어!", className);

    // 3. 기능별 분기하기
    switch (className) {
      case "scale": tv.style.scale = "2"; break;
    }
  } ///// controlTV 함수 //////////////
} //////////// loadFn 함수 //////////////
