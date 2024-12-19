// 쇼핑몰 배너 JS - 03.페이드효과 //

/******************************************** 
 * 
    [ 페이드 효과 슬라이드 기능정의 ]
    -> 슬라이드 순번에 대한 전역변수를 사용한다!

    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!

    2. 왼쪽버튼은 이전순번이 나오며 위와 동일

    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.

    4. 블릿은 현재 슬라이드와 일치된 순번표시

********************************************/

// 전역변수 //////
// 슬라이드 번호 변수
let sNum = 0;

// 1. 슬라이드 대상선정
const $slide = $('.slide>li');
// 슬라이드개수(length속성)
const SLIDE_CNT = $slide.length;

// 블릿대상
const $indic = $('.indic>li');

// 2. 이벤트 설정 및 기능구현
// 2-1. 오른쪽 버튼
$('.ab2').click(()=>{
    // 슬라이드 번호증가(한계값 설정)
    sNum++;
    if(sNum == SLIDE_CNT) sNum = 0;

    // 슬라이드에 클래스 넣기 (지우기)
    $slide.eq(sNum).addClass('on')
    .siblings().removeClass('on');
    
    // 블릿변경
    $indic.eq(sNum).addClass('on')
    .siblings().removeClass('on');
});
// 2-2. 왼쪽 버튼
$('.ab1').click(()=>{
    // 슬라이드 번호감소(한계값 설정)
    sNum--;
    if(sNum == -1) sNum = SLIDE_CNT-1;

    // 슬라이드에 클래스 넣기 (지우기)
    $slide.eq(sNum).addClass('on')
    .siblings().removeClass('on');
    
    // 블릿변경
    $indic.eq(sNum).addClass('on')
    .siblings().removeClass('on');
});
