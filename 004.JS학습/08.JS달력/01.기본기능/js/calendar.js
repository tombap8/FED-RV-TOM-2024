// 달력구현 JS - calendar.js ////////////

// DOM 메서드 //////
const dFn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    qsEl: (el, x) => el.querySelector(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
    addEvt : (ele,evt,fn) => 
            ele.addEventListener(evt,fn),
    cg : x => console.log(x),
    addZero : x => x < 10 ? '0' + x : x,
    fm : x => `${x.getFullYear()}-${
        dFn.addZero(x.getMonth()+1)}-${
        dFn.addZero(x.getDate())}(${week[x.getDay()]})`
}; ///////// dFn 객체 //////////
    
// 요일변경배열 ////
const week = ["일","월","화","수","목","금","토"];

// 달력함수 호출
makeDallyeok();

function makeDallyeok(){
    dFn.cg('달력만들어!');

} /////////////// makeDallyeok함수 ////////////