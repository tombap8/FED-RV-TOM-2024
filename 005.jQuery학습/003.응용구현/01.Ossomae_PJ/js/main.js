// 옷소매 갤러리 JS - main.js

// import mFn from "./my_function.js";

/*********************************************************** 
    1. 기능정의: 
        버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함

    1-1. 오른쪽버튼 클릭시 - 맨앞div 맨뒤로 이동
        JS -> 갤러리부모박스.appendChild(맨앞자식div)
        제이쿼리 -> 갤러리부모박스.append(맨앞자식div)

    1-2. 왼쪽버튼 클릭시 - 맨뒤div 맨앞으로 이동
        JS -> 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)
        제이쿼리 -> 갤러리부모박스.prepend(맨뒤자식div)

 ***********************************************************/

// 변경대상 변수할당 : .gbx>div
const $target = $('.gbx');


// 1. 오른쪽 버튼 클릭시 기능구현
// 오른쪽 버튼 : .rb
$('.rb').click(()=>{
    // 광클금지 ///////
    if(blockCode()) return;

    // 맨앞 div 맨뒤로 이동
    $target.append($target.find('div').first());
});
// 2. 왼쪽 버튼 클릭시 기능구현
// 왼쪽 버튼 : .lb
$('.lb').click(()=>{
    // 광클금지 ///////
    if(blockCode()) return;

    // 맨뒤 div 맨앞으로 이동
    $target.prepend($target.find('div').last());
});

// 광클금지 상태변수
let clickSts = false;

/////// 광클 금지 함수 /////
function blockCode(){
    // 1. 광클상태 true 이면 리턴 true
    if(clickSts) return true;

    // 2. 클릭상태 전역변수 셋팅 ///
    clickSts = true;//잠금
    setTimeout(()=>{
        clickSts = false;//잠금 해제
    }, 400); // 0.4초후 실행

    // 3. 광클상태 false이면 전역셋팅후 리턴 false
    return false;
} //////// blockCode 함수 //////


////////////////////////////////
//////// 자동넘김 셋팅 하기 /////
////////////////////////////////
// 인터발, 타임아웃 저장용 변수
let autoI, autoT;

// 최초호출
slideAuto();    

// 1. 자동호출함수 ///
function slideAuto(){
    autoI = setInterval(()=>{
        $target.append($target.find('div').first());
    }, 2000);
} /// slideAuto함수 ///

// 2. 지우기 함수 ////
function clearAuto(){
    clearInterval(autoI);
    clearTimeout(autoT);
    autoT = setTimeout(slideAuto, 5000);
} /// clearAuto 함수 ////

// 3. 버튼 클릭시 지우기 함수 호출 셋팅 ///
$('.abtn').click(clearAuto);

   