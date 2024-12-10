// 나의 함수 객체 //////
const myFn = {
  // 요소 선택함수
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),
  // 이벤트 셋팅함수
  addEvt: (el, evt, fn) => 
    el.addEventListener(evt, fn),
}; ///// myFn 객체 ///////

// import해서 사용할 파일이므로 객체를 내보내야함!
export default myFn;
