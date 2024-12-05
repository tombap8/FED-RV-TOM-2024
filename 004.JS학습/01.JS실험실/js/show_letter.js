// JS실험실 : 01.글자등장1 JS - show_letter.js

// 나의 함수 가져오기 ////
import myFn from "./my_function.js";

// 1. 요구사항 분석
// - 글자를 박스에 넣고 하나씩 일어나면서 등장

// 2. 대상선정
// 글자를 넣을 박스(3개임!)
const stage = myFn.qsa(".stage-letters");

console.log("대상:", stage);

// 3. 변경내용 적용하기
// - 박스에 글자를 span으로 싸서 하나씩 모두넣기
// - 스페이스 문자는 b태그로 변환한다!

// 글자내용 배열변수
const myText = [
  "너의 췌장을 먹고싶어🐷",
  "추락하는 것은 날개가 있다🦅",
  "뻐꾸기 둥지 위로 날아간 새🐓",
];

// 배열만큼 돌면서 셋팅하기 : forEach() 메서드
myText.forEach((v, i) => {
  // v - 배열값, i - 순번
  console.log(v, i);
  // 한글자씩 잘라서 순회하는 제어문은? for of
  let result = ""; // 결과변수
  let dTime = 0; // 지연시간변수
  for (let x of v) {
    // v 배열값
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
      console.log("지연시간곱할수:", dTime);
      dTime++;
    }
  } //// for of ///

  // 4. 결과 출력 : stage는 html컬렉션이다!
  // -> .stage-letters 3개가 담겨있음!
  // -> 순번은 배열의 순번과 같은 순번에 html넣기
  stage[i].innerHTML = result;

  // 5. 글자박스에 클래스 style1,style2,style3 넣기
  stage[i].classList.add("style" + (i + 1));
}); ///////// forEach //////////

// 6. 일정시간후 stage에 클래스 on넣어서 글자등장하기
// 시간셋팅 배열변수
const startTime = [2000, 3500, 5000];
stage.forEach((el, idx) => {
  // el - 출력할요소 , idx - 요소순번
  console.log("요소:", el, "/순번:", idx);
  // 타임아웃 셋팅하기 ///
  setTimeout(() => {
    el.classList.add("on");
  }, startTime[idx]);
}); /// forEach ////
