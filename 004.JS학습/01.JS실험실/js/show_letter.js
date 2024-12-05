// JS실험실 : 01.글자등장1 JS - show_letter.js

// 나의 함수 가져오기 ////
import myFn from './my_function.js';

// 1. 요구사항 분석
// - 글자를 박스에 넣고 하나씩 일어나면서 등장

// 2. 대상선정
// 글자를 넣을 박스(3개임!)
const stage = myFn.qsa('.stage-letters');

console.log('대상:',stage);

// 3. 변경내용 적용하기
// - 박스에 글자를 span으로 싸서 하나씩 모두넣기
// - 스페이스 문자는 b태그로 변환한다!

// 글자내용 배열변수
const myText = [
    '너의 췌장을 먹고싶어🐷',
    '추락하는 것은 날개가 있다🦅',
    '뻐꾸기 둥지 위로 날아간 새🐓',
];

// 배열만큼 돌면서 셋팅하기 : forEach() 메서드
myText.forEach(v=>{
    console.log(v);
}); ///////// forEach //////////

// 한글자씩 잘라서 순회하는 제어문은? for of
// let result="";
// for(let x of myText){
//     // console.log(x);
//     result += `<span>${x}</span>`;
// } //// for of ///

// 4. 결과 출력
// stage.innerHTML = result;