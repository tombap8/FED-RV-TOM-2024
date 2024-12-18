// JS8-2.DOM_이벤트객체 JS

// 나의 함수 가져오기 /////
import myFn from "./my_function.js";

// console.log(myFn);

/// 이벤트 객체의 이벤트 로그찍기함수 ///
const showEvtLog = (x) =>
  console.log(
    x,
    ":",
    "\n currentTarget:",
    event.currentTarget,
    "\n target:",
    event.target,
    "\n cancelable:",
    event.cancelable,
    "\n bubbles:",
    event.bubbles,
    "\n type:",
    event.type,
    "\n view:",
    event.view,
    "\n eventPhase:",
    event.eventPhase,
    "\n isTrusted:",
    event.isTrusted
  );

// 이벤트 전달을 관찰하기 위한 클릭이벤트 설정 ///

// 1. 아들방 ///////

// 아들방 a요소에 추가적인 이벤트설정 가능함!
// addEventListener로 할 수 있음!!!

// 추가 이벤트 설정
myFn.addEvt(myFn.qs('a'),'click',mySon);

// 추가기능함수
function mySon(e){
    // 이벤트 버블링 막기
    // e.stopPropagation();

    // e.stopImmediatePropagation();
    // 이벤트 버블링 막기에서 
    // stopImmediatePropagation 다른점은
    // 버블링 막기 + 나중에 등록된 같은 이벤트실행 막기
    // 여기서는 아랫쪽에 등록된 onclick 이벤트 함수기능이
    // 막아져서 버블링 막기와 함께 실행중지됨!
    // 현재 여기에 구현된 기능만 실행됨!
    
    e.currentTarget
    .style.outline = '20px dotted hotpink';
} //// mySon ///////


myFn.qs("a").onclick = (e) => {
  // e - 이벤트 전달변수
  // 이벤트 버블링 막기
  // event.stopPropagation();

  e.currentTarget.style.backgroundColor = "red"; // 이벤트발생요소

  // 이벤트 로그 찍기
  showEvtLog("아들방(a)");

  // 기본기능막기(a요소는 이동특성이 있음. 이것을 막음!)
  // event.preventDefault();
  return false;
  // 리턴시 false를 쓰면 기본기능막기가 됨!
}; /// click ///



// 2. 엄마집 ///////
myFn.qs("p").onclick = function (e) {
  // e - 이벤트 전달변수
  // e.stopPropagation();
  e.currentTarget.style.backgroundColor = "yellow"; // 이벤트발생요소
  // return false;

  // 이벤트 로그 찍기
  showEvtLog("엄마집(p)");
}; /// click ///

// 3. 친척네집 //////
myFn.qs("div").onclick = (e) => {
  // e - 이벤트 전달변수
  e.currentTarget.style.backgroundColor = "green"; // 이벤트발생요소

  // 이벤트 로그 찍기
  showEvtLog("친척네집(div)");
}; /// click ///

// 4. 대한민국 전체 /////
myFn.qs("body").onclick = (e) => {
  // e - 이벤트 전달변수
  e.currentTarget.style.backgroundColor = "blue"; // 이벤트발생요소

  // 이벤트 로그 찍기
  showEvtLog("대한민국전체(body)");
}; /// click ///

/**************************************************
    
★★★★★★★[ DOM event객체 ]★★★★★★★

-> 모두 읽기(Read) 속성 또는 호출실행 메서드임

1. DOM 표준을 준수하는 브라우저에서 이벤트 핸들러에 
    전달되는 매개변수는 event객체 오직 하나다!

2. DOM레벨(부모,자식관계)과 상관없이 event객체가 전달되며 
    event객체에는 생성에 관여한 이벤트와 관련된 프로퍼티 및 
    메서드가 포함된다


★★★★★★★[ event 객체 : 속성과 메서드 ]★★★★★★★

1. 불린값 속성
(1) bubbles (bool) : 
    이벤트가 버블링되는지 나타냄
(2) cancelable (bool) : 
    이벤트의 기본 동작 취소가능 여부
(3) defaultPrevented (bool) : 
    true면 preventDefault()호출상태

2. 숫자값 속성
(1) detail (integer) : 
    이벤트와 관련된 추가정보
(2) eventPhase (integer) : 
    이벤트 핸들러가 호출된 단계
    (1:캡처링,2:타깃,3:버블링)
(3) isTrusted (bool) : 
    브라우저에서 생성한 이벤트라면 true 
    -> 일반적으로 이것!
    개발자가 만든 자바스크립트 이벤트라면 false

3. 요소 속성
★(1) currentTarget (element) : 
    현재 이벤트를 처리중인 element
★(2) target (element) : 이벤트 타깃

4. 이벤트 메서드 (Function) 
★(1) preventDefault()
    이벤트의 기본행동 취소, 
    (cancelable가 true일때)
    -> return false로 대체될 수 있음!
★(2) stopImmediatePropagation() 
    이벤트캡처링,이벤트버블링 모두 취소. 
    다른 이벤트 핸들러 호출을 막음. 
    (같은 이벤트로 여러기능설정시)
★(3) stopPropagation()
    이벤트캡처링,이벤트버블링 모두 취소 
    (bubbles가 true일때)

5. 기타 속성
(1) type (string) : 
    발생한 이벤트 타입
(2) view (AbstractView) : 
    이벤트와 연결된 추상화된 뷰다. 
    이벤트가 발생한 window객체와 일치
★★★★★★★[ 이벤트 흐름 ]★★★★★★★

1. 캡쳐단계 : 
최상위 부모요소로부터 말단요소까지 내려감

2. target 단계 : 
현재 이벤트가 발생하는 요소 (event.target으로 구함)

3. bubling 단계 : 
target 에서 부터 최상위 부모까지 이벤트가
전달되는 현상(주의사항: 같은 종류의 이벤트가 전달된다!)
-> 느낌 참고: 토르망치!
https://mblogthumb-phinf.pstatic.net/20150915_245/qkdtoa9831_1442293878842KAb7K_GIF/glqkazhkd.gif?type=w2

4. 이벤트 버블링 차단:
-> event 객체 메서드 사용하기:
- event.stopPropagation() 메서드 사용
- 코드 위치는 어디나 사용가능
- 만약 같은 이벤트가 다른 기능으로 여러개 설정된 경우
다른 설정 기능까지 막으려면?
stopImmediatePropagation() 메서드 사용!

->>> 주의: 이벤트 버블링은 매우 유용한 기능이다!
따라서 매우 명백한 상황이 아니라면 되도록 사용말자!
예컨데 사용자 행동 분석툴에서 클릭빈도수를 분석할때
사이트에 버블링차단된 영역은 죽은영역(클릭수0)으로
표시되므로 분석이 불가능하게 되는 상황이 생길 수 있음!

★★★★★★★[ 이벤트 설정 및 해제 ]★★★★★★★

1. 이벤트 설정
(1) addEventListener(이벤트명,함수)
    -> 같은요소에 같은 이벤트로 다중설정가능!
(2) 이벤트속성 = 함수
    -> 같은요소에 같은 이벤트로 단일설정만 가능!

2. 이벤트 해제
(1) removeEventListener(이벤트명,함수)
-> 주의: 함수를 외부함수로 만들어야 해제가 가능하다!
(2) 이벤트속성 = ""; -> 빈 문자열값을 할당하여 지움
**************************************************/

// 휠 이벤트 막기 테스트 ////
window.addEventListener(
  "wheel",
  () => {
    // 기본기능막기
    event.preventDefault();

    console.log("휠~~~~");
    // 배경색 변경
    myFn.qs("body").style.backgroundColor = "lightcoral";
  },
  { passive: false }
);
// 이벤트막기할 경우 window, body, document
// 일 경우 막기를 할 수 없게 셋팅됨!
// 이것을 쓰려면 이벤트 설정시 맨뒤에 {passive:false}
// 설정을 추가한다!
