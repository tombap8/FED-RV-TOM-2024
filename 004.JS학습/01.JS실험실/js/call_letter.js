// JS실험실 : 스크롤액션에서 호출할 글자등장함수 - call_letter.js

// 나의 함수 가져오기 ////
import myFn from "./my_function.js";

// 기능함수를 외부에 공개함!!!
export default function callLetter(target, txt, startTime) {
  // [ 함수 전달변수 3개 ]
  // (1) target - 전달변수에 대상요소 선택자를 받아준다!
  // (2) txt - 등장할 글자 내용전달
  // (3) startTime - 등장시간 전달 (1/1000초 숫자,단위없음)

  // 1. 요구사항 분석
  // - 글자를 박스에 넣고 하나씩 일어나면서 등장

  // 2. 대상선정
  // 글자를 넣을 박스
  // -> 전달받은 선택요소 선택자 target넣기
  const stage = myFn.qs(target);

  // console.log("대상:", stage);

  // 3. 변경내용 적용하기
  // - 박스에 글자를 span으로 싸서 하나씩 모두넣기
  // - 스페이스 문자는 b태그로 변환한다!

  // 글자내용 변수 - 전달받은 글자넣기
  const myText = txt;

  // 한글자씩 잘라서 순회하는 제어문은? for of
  let result = ""; // 결과변수
  let dTime = 0; // 지연시간변수
  for (let x of myText) {
    // myText 전달된 글자전체
    // console.log(x);

    // 스페이스값일때 b태그 넣기
    if (x == " ") result += `<b></b>`;
    // 문자값이면 span으로 싸기 + 트랜지션 지연시간
    // 지연시간은 0.08초에 0,1,2,3,...을 순서대로 곱한다
    else {
      result += `
        <span 
        style="transition-delay:${0.08 * dTime}s">
        ${x}</span>`;

      // 다음순회시 dTime 1씩증가하기 - 문자일때만!
      // console.log("지연시간곱할수:", dTime);
      dTime++;
    }
  } //// for of ///

  // 4. 결과 출력 : stage는 문자태그를 넣을 요소다!
  stage.innerHTML = result;

  // 5. 글자박스에 클래스 style1 넣기
  stage.classList.add("style1");

  // 6. 일정시간후 stage에 클래스 on넣어서 글자등장하기
  // 타임아웃 셋팅하기 ///
  setTimeout(() => {
    stage.classList.add("on");
  }, startTime);
} ////////////// callLetter 함수 //////////////
