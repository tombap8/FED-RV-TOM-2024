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

$('.preview-box').html(
    previewData.map(v=>`
        <li data-idx="2">
                  <h3>2화 미리보기</h3>
                  <p>
                    방송일 : 2016-12-03 ▶ 캐나다에서 꿈같은 하루를 보내는
                    도깨비(공유)와 은탁(김고은). 자신을 향한 은탁의 맑은 미소에
                    순간 신의 마음이 일렁이는데...! ▶ 도깨비 신과
                    저승사자(이동욱)의 천둥번개 몰아치는 동거 라이프! 2016년
                    마지막을 장식할 tvN 10주년 특별기획 &lt;도깨비&gt; 매주
                    금.토 저녁 8시 tvN 방송
                  </p>
                </li>
    `).join('')
);