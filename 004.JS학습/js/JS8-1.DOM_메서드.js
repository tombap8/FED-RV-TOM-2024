// JS8-1.DOM_메서드

// 나의 함수 가져오기 /////
import myFn from "./my_function.js";

// console.log(myFn);

/**************************** 
    마우스오버시 
    1. 서브메뉴 보이기 
    2. 링크이동하기
****************************/

// 1. 대상선정 : .smenu -> 각 li의 공통 클래스
const smenu = myFn.qsa(".smenu");

// console.log("대상:", smenu);

// 2. 이벤트 설정하기 ///////////
smenu.forEach(setList);

// 3. 함수 만들기 //////////////
function setList(el, idx) {
  // forEach메서드 호출함수 이므로
  // 전달변수는 순서대로
  // el: li요소, idx: li요소의 index

  // 1.함수호출확인
  // console.log('나야나!',el,idx);

  // 2.이벤트 설정하기
  // (1) mouseenter
  myFn.addEvt(el, "mouseenter", () => {
    // 마우스 오버시 하위 div 서브메뉴박스
    let tg = myFn.qsEl(el, "div");
    // console.log('하위대상:',tg);

    // 마우스 오버시 하위 div 내부ol박스 높이값
    let boxH = myFn.qsEl(tg, "ol").offsetHeight;
    console.log("서브ol높이값:", boxH);

    // 높이값 주기 - 서브 ol요소의 높이값으로 넣기!
    tg.style.height = boxH + "px";
    tg.style.transition = "height .4s ease-out";
  }); //// mouseenter 함수 ////

  // (2) mouseleave
  myFn.addEvt(el, "mouseleave", () => {
    let tg = myFn.qsEl(el, "div");
    // 높이값 0
    tg.style.height = "0";
  }); ///// mouseleave 함수 ////
} ////////// setList 함수 ///////////

/*************************************************** 
    [ 선택요소의 현재 크기, 위치값 알아오는 JS속성 ]
    1. 선택요소.offsetWidth : 가로값
    2. 선택요소.offsetHeight : 높이값
    3. 선택요소.offsetTop : top 위치값
    4. 선택요소.offsetLeft : left 위치값            
***************************************************/

// [ 이벤트 비교 ]
// mouseover / mouseout -> 버블링발생함!
// -> 요소위에 오버시 / 아웃시
// mouseenter / mouseleave -> 버블링발생안함!
// -> 요소경계선 안으로 들어갈때 / 경계선을 떠날때

///////////////////////////////////////////////////
// [ 추가기능 : 링크 클릭시 페이지 새창이동하기 ] ////
// 1. 대상선정 : .smenu ol a
const link = myFn.qsa(".smenu ol a");

// 2. forEach로 순회하며 링크이동함수 호출하기
// 클릭이벤트 설정
link.forEach((el) => myFn.addEvt(el, "click", linkFn));

// 3. 이동함수 만들기
function linkFn() {
  // (1) 클릭된 요소의 글자읽어오기
  let txt = this.innerText;
  // this는 클릭된 요소

  // (2) 함수호출 확인!
  console.log("링크이동!!!", txt);

  // (3) 링크 이동하기 - 링크주소리턴 함수 호출!
  window.open(getLink(txt));
  // window.open(주소) - 새창열기

  // 참고: 현재창에서 열기는? location.href = 주소
  // location.href = 'https://www.google.com';

  // 참고: 만약 히스토리 없이 현재창 열기하려면?
  // -> location.replace(이동주소)
  // -> 이전으로 가기가 안됨!(보안이 필요한 경우 사용)
  // location.replace('https://www.google.com');
} ////// linkFn함수 ////////////////////

// 이동링크 주소 리턴함수 //////
function getLink(txt) {
  // txt - 링크구분명
  // (1) 함수호출 및 전달값 확인
  console.log("url받아와!", txt);

  // (2) 결과담을 변수
  let url;

  // (3) url주소 분기하여 할당하기
  switch (txt) {
    case "Google":
      url = "https://www.google.com/";
      break;
    case "Naver":
      url = "http://www.naver.com";
      break;
    case "Daum":
      url = "http://www.daum.net";
      break;
    case "Nate":
      url = "http://www.nate.com";
      break;
    case "SK":
      url = "http://www.sktelecom.com";
      break;
    case "KT":
      url = "http://www.kt.com";
      break;
    case "Uplus":
      url = "http://www.uplus.co.kr";
      break;
    case "CGV":
      url = "http://www.cgv.co.kr";
      break;
    case "MEGABOX":
      url = "http://www.megabox.co.kr";
      break;
    case "LOTTE CINEMA":
      url = "https://www.lottecinema.co.kr/NLCHS";
      break;
    case "GMARKET":
      url = "http://www.gmarket.co.kr";
      break;
    case "11번가":
      url = "http://www.11st.co.kr";
      break;
    case "Auction":
      url = "http://www.auction.co.kr";
      break;
    case "스토어팜":
      url = "https://shopping.naver.com/";
      break;
    case "인터파크":
      url = "http://www.interpark.co.kr";
      break;
    case "쿠팡":
      url = "http://www.coopang.co.kr";
      break;
    case "Apple":
      url = "http://www.apple.com";
      break;
    case "Samsung":
      url = "http://www.samsung.com";
      break;
    case "넷마블":
      url = "http://www.netmarble.net";
      break;
    case "넥슨":
      url = "https://www.nexon.com";
      break;
    case "IMC":
      url = "http://www.imc.co.kr";
      break;
  } /////// switch case문 ////////

  // 결과 url리턴하기 ///
  return url;
} //////////// getLink /////////////////

/************************************************** 
        
    [ 요소의 생성, 삭제, 이동하기 ]

    1. 맨뒤 생성 혹은 맨뒤 이동
    -> 선택요소.appendChild(요소)

    2. 특정위치에 요소 넣기 혹은 이동
    -> 선택요소.insertBefore(넣을놈,넣을놈전놈)

    3. 요소의 삭제
    -> 선택요소.remove()

    4. 새로운 요소 생성 (메모리상에 생성함)
    -> document.createElement(태그명)

    5. 요소에 새로운 속성넣기 (메모리상에 생성함)
    -> document.createAttribute(속성명)

    6. 생성된 속성에 값넣기
    -> 생성된속성.value = 값

    7. 요소의 새로운 속성 넣기 : 완벽하게 셋팅된 속성넣기
    -> 선택요소.setAttributeNode(새로운속성)

    참고)직접 속성값 셋팅하기
    -> 선택요소.setAttribute(속성명,속성값)

**************************************************/

//////// 새리스트 요소 생성하기 ///////
// 이벤트 종류: click
// 이벤트 대상: .nbt
// 변경대상: #div02 ul
// 1. 대상선정
// (1) 버튼대상
const btnNew = myFn.qs(".nbt");
// (2) 변경대상
const box2 = myFn.qs("#div02 ul");

// console.log('새리스트 대상:',btnNew,box2);

// 2. 이벤트 설정하기 ///////
myFn.addEvt(btnNew, "click", makeElement);

// 3. 함수만들기 ///////
function makeElement() {
  // (1) 함수호출 확인
  console.log("만들어라!");

  // 할일 : 새로운 li요소를 만들어서 넣기
  // 변경대상은 ul임!
  // DOM메서드를 이용하여 메모리상에
  // 먼저 요소를 생성한다!

  // (2) 넣을 요소 만들기 ///
  // (2-1) 새로운 li를 생상하여 변수에 할당
  let newEl = document.createElement("li");

  // (2-2) 이미지 요소 변수에 할당하기
  let imgEl = document.createElement("img");

  // (2-3) 이미지 속성 셋팅하기
  let isrc = document.createAttribute("src");
  let ialt = document.createAttribute("alt");
  let itit = document.createAttribute("title");

  // 1~5 사이랜덤수
  // Math.ceil(Math.random()*최대수)
  let rdm = Math.ceil(Math.random() * 5);
  console.log("랜덤수:", rdm);

  // 순번에 맞는 이미지 설명 배열
  const altText = ["아이언맨", "딱딱이", "토르", "닥스", "스타로드"];

  // (2-4) 메모리상 속성에 값 셋팅하기 : value로 셋팅
  isrc.value = `images/ab${rdm}.jpg`;
  ialt.value = altText[rdm - 1];
  itit.value = "클릭하시면 지워집니다!";

  // (2-5) 메모리상 생성된 이미지 속성을 이미지에 넣기
  imgEl.setAttributeNode(isrc);
  imgEl.setAttributeNode(ialt);
  imgEl.setAttributeNode(itit);

  // (2-6) 메모리상에 생성된 li에 생성된 img넣기
  newEl.appendChild(imgEl);
  // console.log(newEl);

  // (2-7) li화면 출력전 클릭이벤트 설정으로 지우기셋팅
  newEl.onclick = () => newEl.remove();

  // 3. 변경대상에 새로운 li추가하여 넣기
  // appendChild(요소) DOM메서드 사용!
  box2.appendChild(newEl);
} //////// makeElement 함수 ////////

// 처음부터 들어가 있는 li 5개를 돌면서 지우기 셋팅하기
myFn.qsaEl(box2, "li").forEach((el) => {
  // 클릭시 지우기(li)
  el.onclick = () => el.remove();
  // 이미지에 title속성 넣기
  myFn.qsEl(el, "img").title = "클릭하시면 지워집니다!";
}); ////// forEach //////

/////////////////////////////////////
// [ 맨뒤이동 버튼 클릭시 ] /////////
// 맨앞요소를 맨뒤로 이동하기 ///
// 이벤트 대상: .mvl
// 변경대상: #div02 ul -> box2에 할당됨!
myFn.qs(".mvl").onclick = () => {
  // box2 아래 li 선택
  let list = myFn.qsaEl(box2, "li");
  // 변경대상의 첫번째 요소 선택 -> list[0]
  // 맨앞요소 맨뒤로 이동 -> appendChild(맨앞요소)
  box2.appendChild(list[0]);
}; //////// click ////////

/// [ 맨앞이동버튼 클릭시 ] ////////////
// 맨뒤li가 맨 앞으로 이동됨
// 이벤트 대상: .mvf
// 변경대상: #div02 ul -> box2에 할당됨!
myFn.qs(".mvf").onclick = () => {
  // box2 아래 li 선택
  let list = myFn.qsaEl(box2, "li");
  // 변경대상의 마지막 요소 선택 -> list[개수-1]
  // 변경대상의 첫번째 요소 선택 -> list[0]
  // 맨뒤요소 맨앞으로 이동
  // -> insertBefore(넣을놈,넣을놈전놈)
  // -> insertBefore(마지막요소,첫번째요소)
  box2.insertBefore(list[list.length - 1], list[0]);
}; //////// click ////////

/************************************************** 
    ※ appendChild() 와 insertBefore()는 
    대상을 정하는 것에 따라 중간에 적용할 수 있다!
************************************************/
