// 쇼핑몰 배너 JS - 02.세로방향 배너 슬라이드 //

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(.slide)
    4. 기능 설계:

        (1) 아랫쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 translate Y축방향값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 translate Y축방향값을 0으로 변경한다!

        (2) 윗쪽 버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 translate Y축방향값을
            -100%로 변경한다.
            그 후 translate Y축방향값을 0으로 애니메이션하여
            슬라이드가 윗쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// [ 1. 대상선정 ]
// 이벤트 대상: 이동버튼(.abtn)
const $btnMove = $(".abtn");
// 변경 대상: 슬라이드 박스(.slide)
const $slide = $(".slide");
// 변경 대상: 블릿 박스(.indic)의 li
const $indic = $(".indic li");

// 광클금지 상태변수
let stsClick = false;
// 슬라이드 애니시간상수
const TIME_ANI = 500;

// [ 2. 이벤트 설정 및 함수구현 ]
$btnMove.click(function () {
  // 광클금지 설정 ///////
  if (stsClick) return; // 함수를 나가!
  stsClick = true; // 문잠금!
  setTimeout(() => {
    stsClick = false; // 잠금해제!
  }, TIME_ANI);
  //////////////////////

  // (1) 방향구분하기 : 아랫쪽버튼(.ab2)이면 true
  let isBtn = $(this).is(".ab2");
  console.log("나야나!", this, isBtn);

  // (2) 방향별 분기하기
  // (2-1) 윗쪽방향으로 이동
  if (isBtn) {
    // 슬라이드의 translate Y값을 -100%
    // 제이쿼리 animate로 transform은 적용안됨!
    // CSS로만 적용함
    // (2-1.1) 윗쪽방향으로 이동
    $slide.css({
      translate: "0 -100%",
      transition: TIME_ANI + "ms",
    });
    // (2-1.2) 이동후 맨앞요소 맨뒤로 이동
    setTimeout(() => {
      $slide
        // 맨앞것 맨뒤로 이동
        .append($slide.find("li").first())
        // 이때 translate값 초기화
        .css({
          translate: "0 0",
          transition: "none",
        });
    }, TIME_ANI);
  } /// if ///
  // (2-2) 아랫쪽방향으로 이동
  else {
    // (2-2.1) 맨뒤요소 맨앞으로 이동
    $slide
      .prepend($slide.find("li").last())
      // (이때 translate Y축값 -100% 변경 )
      .css({
        translate: "0 -100%",
        transition: "none",
      });
    // (2-2.2) translate Y축값을 0으로 위쪽에서 들어오기
    // 실행구역을 setTimeout으로 분리함!
    setTimeout(() => {
      $slide.css({
        translate: "0 0",
        transition: TIME_ANI + "ms",
      });
    }, 0);
  } /// else ///

  // (3) 블릿 변경하기 : 해당순번에 클래스"on"넣기
  // 대상: .indic li
  // 순번은 슬라이드 방향별로 아래와 같이 읽어옴
  // 아랫쪽 버튼은 두번째순번, 윗쪽버튼은 첫번째순번
  let currIdx = $slide
    .find("li")
    .eq(isBtn ? 1 : 0)
    .attr("data-seq");
  console.log("읽은순번:", currIdx);

  // 해당순번의 블릿li 클래스 "on"넣기 (나머지는 빼기)
  $indic.eq(currIdx).addClass("on")
  .siblings().removeClass("on");
}); /// click ///

// [3. 처음 슬라이드에 고유번호 속성넣기 ]
// 제이쿼리 순회 메서드 : each((순번,요소)=>{})
$slide.find("li").each((idx, el) => {
  // console.log("돌아~!", idx, el);
  // 각 요소의 속성추가하기
  // 속성명: data-seq
  // 제이쿼리 속성셋팅 메서드 : attr(속성명,값)
  $(el).attr("data-seq", idx);
}); //// each ////
