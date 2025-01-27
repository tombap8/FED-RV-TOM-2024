// 산리오 사이트 메인 JS - main.js

import myFn from './my_function.js';


// 1. GNB메뉴 대문자글자변경 ////
myFn.qsa(".gnb ul li a")
.forEach(el=>el.innerText=
    el.innerText.toUpperCase());
// toUpperCase() 대문자변경
// toLowerCase() 소문자변경

// 모바일 모드에서 GNB DB디자인을 
// 미디어쿼리가 모바일로 변경하였으므로
// 보여주는 코드는 클래스 show 를 넣어서
// 햄버거 버튼 기능과 연관시킨다!

// 대상: GNB메뉴 - .gnb
const gnbMenu = myFn.qs('.gnb');

// 2. 모바일 GNB 햄버거 버튼 클릭시 ///
myFn.qs('.gnb-mob').onclick=function(){
    // 클래스 on 넣기/빼기 토글!
    this.classList.toggle('on');
    // GNB 메뉴 보여주기/숨기기
    gnbMenu.classList.toggle('show');

};