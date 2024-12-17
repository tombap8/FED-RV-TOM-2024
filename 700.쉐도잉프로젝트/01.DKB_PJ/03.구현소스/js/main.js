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
