// 스크롤 방향에 따른 메뉴 보이기/숨기기 JS
// - scroll_menu.js

import myFn from './my_function.js';

myFn.addEvt(window,'wheel',(e)=>{
    console.log('휠',e.wheelDelta);
}); ///////// wheel 이벤트 함수 ////////