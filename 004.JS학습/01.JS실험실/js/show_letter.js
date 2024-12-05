// JS실험실 : 01.글자등장1 JS - show_letter.js

// 나의 함수 가져오기 ////
import myFn from './my_function.js';

// 1. 요구사항 분석
// - 글자를 박스에 넣고 하나씩 일어나면서 등장

// 2. 대상선정
// 글자를 넣을 박스
const stage = myFn.qs('.stage-letters');

console.log('대상:',stage);

// 3. 변경내용 적용하기
// - 박스에 글자를 span으로 싸서 하나씩 모두넣기

// 글자내용 변수
const myText = '너의 췌장을 먹고싶어!!!';

// 한글자씩 잘라서 순회하는 제어문은? for of
let result="";
for(let x of myText){
    // console.log(x);
    result += `<span>${x}</span>`;
} //// for of ///

// 4. 결과 출력
stage.innerHTML = result;