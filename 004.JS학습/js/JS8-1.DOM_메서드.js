// JS8-1.DOM_메서드

// 나의 함수 가져오기 /////
import myFn from "./my_function.js";

console.log(myFn);

/**************************** 
    마우스오버시 
    1. 서브메뉴 보이기 
    2. 링크이동하기
****************************/

// 1. 대상선정 : .smenu -> 각 li의 공통 클래스
const smenu = myFn.qsa('.smenu');

console.log('대상:',smenu);

// 2. 이벤트 설정하기 ///////////
smenu.forEach(setList);

// 3. 함수 만들기 //////////////
function setList(el,idx){
    // forEach메서드 호출함수 이므로
    // 전달변수는 순서대로 
    // el: li요소, idx: li요소의 index

    // 1.함수호출확인
    // console.log('나야나!',el,idx);

    // 2.이벤트 설정하기
    // (1) mouseenter
    myFn.addEvt(el,'mouseenter',()=>{
        // 마우스 오버시 하위 div 서브메뉴박스
        let tg = myFn.qsEl(el,'div');
        // console.log('하위대상:',tg);

        // 마우스 오버시 하위 div 내부ol박스 높이값
        let boxH = myFn.qsEl(tg,'ol').offsetHeight;
        console.log('서브ol높이값:',boxH);

        // 높이값 주기 - 서브 ol요소의 높이값으로 넣기!
        tg.style.height = boxH + 'px';
        tg.style.transition = 'height .4s ease-out';
    }); //// mouseenter 함수 ////
    
    // (2) mouseleave
    myFn.addEvt(el,'mouseleave',()=>{
        let tg = myFn.qsEl(el,'div');
        // 높이값 0
        tg.style.height = '0';
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
const link = myFn.qsa('.smenu ol a');

// 2. forEach로 순회하며 링크이동함수 호출하기
// 클릭이벤트 설정
link.forEach(el=>myFn.addEvt(el,'click', linkFn));

// 3. 이동함수 만들기
function linkFn(){
    // (1) 클릭된 요소의 글자읽어오기
    let txt = this.innerText;
    // this는 클릭된 요소

    // (2) 함수호출 확인!
    console.log('링크이동!!!',txt);

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
function getLink(txt){ // txt - 링크구분명
    // (1) 함수호출 및 전달값 확인
    console.log('url받아와!',txt);

    // (2) 결과담을 변수
    let url;



    // 결과 url리턴하기 ///
    return 'https://www.naver.com';

} //////////// getLink /////////////////

// 4. 페이지 이동하기 ////




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



/////////////////////////////////////
// [ 맨뒤이동 버튼 클릭시 ] /////////
// 맨앞요소를 맨뒤로 이동하기 ///
// 이벤트 대상: .mvl
// 변경대상: #div02 ul



/// [ 맨앞이동버튼 클릭시 ] ////////////
// 맨뒤li가 맨 앞으로 이동됨
// 이벤트 대상: .mvf
// 변경대상: #div02 ul



/************************************************** 
    ※ appendChild() 와 insertBefore()는 
    대상을 정하는 것에 따라 중간에 적용할 수 있다!
************************************************/
