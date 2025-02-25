// 달력구현 JS - calendar.js ////////////

// DOM 메서드 //////
const myFn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    qsEl: (el, x) => el.querySelector(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
    addEvt : (ele,evt,fn) => 
            ele.addEventListener(evt,fn),
    cs : x => console.log(x),
    addZero : x => x < 10 ? '0' + x : x,
    dfm : x => `${x.getFullYear()}-${
        dFn.addZero(x.getMonth()+1)}-${
        dFn.addZero(x.getDate())}(${week[x.getDay()]})`
}; ///////// dFn 객체 //////////
    
// 요일변경배열 ////
const week = ["일","월","화","수","목","금","토"];

// 달력함수 호출
makeDallyeok();

function makeDallyeok(){
    myFn.cs('달력만들어!');
    

    // 1. 변수셋팅 ////////////////////
    // (1) 변경할 현재날짜 객체
    const currDate = new Date();
    // (2) 오늘날짜 객체
    const today = new Date();
    // (3) 년도요소 : .yearTit
    const yearTit = myFn.qs('.yearTit');
    // (4) 월요소 : .monthTit
    const monthTit = myFn.qs('.monthTit');
    // (5) 날짜요소 : .dates
    const dates = myFn.qs('.dates');
    // (6) 날짜넣을 배열변수
    const dateSet = [];
    // (7) html 코드 저장변수
    let hcode = '';

    // 2. 함수 만들기 //////////////
    // (1) 달력 초기화 구성 함수 ////
    const initDallyeok = () => {

    }; //////////// initDallyeok 함수 ///////


} /////////////// makeDallyeok함수 ////////////