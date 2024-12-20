// 도깨비 PJ 메인페이지 JS - main.js

// 메인배너 슬라이드 기능함수 불러오기
import slideFn from "./slide_fn.js";

// 도깨비 PJ 데이터 불러오기
import { previewData } from "../data/dkb_data.js";

console.log(previewData);

// 1. 슬라이드함수 호출하여 실행하기
slideFn();

// 2. 데이터 셋팅하기 ////
// (1) 미리보기 데이터 셋팅하기
// 대상: .previewBox ul
// 데이터: previewData
// map메서드 사용!!!
// 배열값 변형출력은? 맵죠잉!!!
// -> 원래는 일반 JS에서 html넣을때
// 배열값을 직접 넣으면 사이에 콤마가 출력됨
// 그래서 join('')으로 없애고 출력함!
// -> 제이쿼리 html() 메서드에서는 join()없이
// 콤마없애고 출력해줌!!!

$(".preview-box ul").html(
  previewData.map(
    (v) => `
        <li>
            <h3>${v.title}</h3>
            <p>${v.story}</p>
        </li>
    `
  )
);

// document.querySelector('.preview-box ul')
// .innerHTML = previewData.map(v=>`
//     <li>
//         <h3>${v.title}</h3>
//         <p>${v.story}</p>
//     </li>
// `)
// .join('')

//스와이퍼 인스턴스 생성하기
const swiper = new Swiper(".clip-box", {
  // 한화면에 볼 슬라이드수
  slidesPerView: 4,
  // 슬라이드 사이 간격(숫자는 px단위임)
  spaceBetween: 0,
}); /// swiper /////

// 스와이퍼 API를 이용한 개별 코딩
// 내가 만든 버튼에 이동 기능 부여하기!
const myBtns = document.querySelectorAll(".btn-box .abtn");
console.log("대상:", myBtns);

// 클릭이벤트 설정하기
myBtns.forEach((el) => {
  el.addEventListener("click", controlSwp);
});

// 기능구현함수
function controlSwp() {
  // 버튼구분하기
  let isBtn = this.classList.contains("ab2");
  console.log("나야나!", isBtn);

  // 분기하기
  // 다음버튼
  if (isBtn) {
    swiper.slideNext();
  } // if //
  // 이전버튼
  else {
    swiper.slidePrev();
  } // else //
} ////////// controlSwp함수 /////////


/////////////////////////////////////////////////
///////// 리스트 내용 서브 페이지 별창형 구현 /////
/////////////////////////////////////////////////
// 공통변경대상 : .sub-cont
const $subCont = $('.sub-cont');


// 1. 미리보기영역 클릭시 세부내용 보기 ////
// 이벤트 대상 : .preview-box li
$('.preview-box li').click(function(){
  console.log('미리봐봐~!');
}); //// click ///