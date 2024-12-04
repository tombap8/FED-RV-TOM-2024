// 공통함수 JS - my_function.js

// 나의 함수 객체 //////
// const myFn = 

// 변수할당없이 값을 바로 default로 내보내기!
// export defualt 값
export default
{
    // 요소 선택함수
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
    // 이벤트 셋팅함수
    addEvt: (el, evt, fn) => 
      el.addEventListener(evt, fn),
  }; ///// myFn 객체 ///////

// 변수에 할당한 경우 유일한 것을 export
// 하는 방법은 default를 사용한다!
// export default myFn;
// export {myFn};