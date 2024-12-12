// JS실험실 : 03.글자등장2 JS - show_letter2.js


// 나의 함수 가져오기 ////
import myFn from "./my_function.js";

// 1. 요구사항 분석
// - 글자를 박스에 넣고 단어 단위로 날아오면서 등장애니

// 2. 대상선정 - .stage-letters
const stage = myFn.qs('.stage-letters');

console.log('대상:',stage);

// 3. 글자 데이터 변수 할당
const myText = 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";