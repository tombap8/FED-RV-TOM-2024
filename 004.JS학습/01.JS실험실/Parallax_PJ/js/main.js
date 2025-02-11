// 패럴렉스 PJ JS - main.js

// 나의 함수 불러오기
import myFn from "./my_function.js";

// 부드러운 스크롤 함수 불러오기 /////
import SmoothScrollFn from "./smoothScroll20.js";

// 패럴렉스 생성자 함수 불러오기 /////
import ParallaxFn from "./parallax_fn.js";

// 부드러운 스크롤 인스턴스 생성하기
const smScroll = new SmoothScrollFn();

// 1. 부드러운 스크롤 적용함수 호출하기
// this로 등록된 변수에 할당된 인스턴스 내부 함수를 호출!
smScroll.startSS();

// [ 부드러운 스크롤 적용시 해야할 것들 ]
// (1) 키보드 방향키 이동시 위치값 반영하기
myFn.addEvt(window,'keyup',
  ()=>smScroll.setPos(window.scrollY))
// window.scrollY는 현재 세로축 스크롤바 위치값

// (2) 스크롤바 트랙 잡고 이동시 위치값 반영하기
myFn.addEvt(window,'mouseup',
  ()=>smScroll.setPos(window.scrollY))
// window.scrollY는 현재 세로축 스크롤바 위치값

// 2. 패럴렉스 인스턴스 생성하기 /////
new ParallaxFn('icon',500);
