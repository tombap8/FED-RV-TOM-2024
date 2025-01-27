// 산리오 사이트 메인 JS - main.js

import myFn from './my_function.js';


// 1. GNB메뉴 대문자글자변경 ////
myFn.qsa(".gnb ul li")
.forEach(el=>el.innerText=
    el.innerText.toUpperCase());
// toUpperCase() 대문자변경
// toLowerCase() 소문자변경