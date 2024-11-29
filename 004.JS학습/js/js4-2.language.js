// 객체연습 - 다국어 //////////

// 언어셋팅이된 제이슨 파일을 본 JS에서 불러온다!
// 단, 제이슨 파일을 불러오려면 import 문법을 써야하는데
// 모듈문법을 사용해야 쓸 수 있다!
// 본 파일 호출하는 html에서 type="module" 이라는 속성값을
// script요소에 줘야함!!!

// import 변수 from 파일경로 with {type:'json'}
// -> 제이슨 파일을 부를 땐 with {type:'json'}
// 즉, 함께하는 것은 타입 제이슨!!!
// -> 경로는 반드시 모듈문법에서 상대경로를 사용해야함!
// 현재위치는 ./ , 한 폴더위는 ../
import langData from './data_lang.json' with {type:'json'};

console.log("다국어 셋팅객체:",langData);

// 나의 함수 불러오기 /////
import myFn from './my_function.js';
// js확장자 생략은 SPA 개발환경에서만 가능함!

console.log('나의함수객체:',myFn);


/// 1. 다국어 요구사항 //////////////
// - 언어박스에서 언어를 변경하면 코드에 맞게 다국어 데이터를
// 제이슨 파일에서 읽어와 본 페이지의 해당 요소를 변경한다!

// 2. 대상선정 ///////////////
// 2-1. 이벤트 대상 : .sel (드롭다운 선택박스)
// -> 이벤트 종류 : change 이벤트
const selBox = myFn.qs('.sel');

// 2-2. 변경대상 : GNB메뉴, 메인이미지, 하단주소
// (1) GNB메뉴 : #gnb a
const gnbList = myFn.qsa('#gnb a');

// (2) 메인이미지 : #cont img
const mainImg = myFn.qs('#cont img');

// (3) 하단주소 : #info address
const addrBox = myFn.qs('#info address');

// console.log('대상요소:',selBox, gnbList, mainImg, addrBox);

// 3. 이벤트 설정 ///////////////////////
myFn.addEvt(selBox, 'change', 내가만든함수);


