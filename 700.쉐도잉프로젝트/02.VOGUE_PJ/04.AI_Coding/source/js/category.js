// 보그 코리아 Category 페이지 JS - category.js

// [1] 외부 데이터 가져오기 ////
// (1) LNB 메뉴 데이터 불러오기
import { gnbMenu } from "../data/gnb_data.js";

// (2) 컨텐츠 아티클 데이터 불러오기 ////
import articleData from "../data/vogue_articles.json" with { type: "json" };

// [2] 파라미터 키값 읽기 /////////
let pm = location.search.split("=")[1];
console.log("파라미터:", pm);

// [3] 데이터 매칭하기 //////////

// (1) LNB 메뉴 매칭하기 : 객체키명이 대문자임!
const lnbData = gnbMenu[pm.toUpperCase()];

// (2) 컨텐츠 아티클 매칭하기
const selData = articleData.categories.find((val) => val.categoryName == pm);

// 제이슨확인 //
console.log("매칭데이터:", lnbData, selData);

// [4] 데이터 바인딩하기 /////////////
// (1) 대상선정 : .main-area
const mainArea = document.querySelector(".main-area");

// (2) 데이터 바인딩 /////////////////
mainArea.innerHTML = `  
      <section class="item-top-area">
        <h2 class="item-tit">${pm.toUpperCase()}</h2>
        <nav class="lnb">
          <ul>
          ${
            // 배열데이터 값이 0초과이면 li생성
            lnbData.length > 0
              ? lnbData.map((val) => `<li><a href="#">${val}</a></li>`).join("")
              : ""
          }
          </ul>
        </nav>
      </section>
      <section class="todays-stories">
        <div class="stories-grid">
          <!-- 메인 스토리 (좌측 큰 카드) -->
          <article class="main-story">
            <img
              class="main-story-image"
              src="${selData.highlight.image}"
              alt="${selData.highlight.title}"
            />
            <div class="main-story-overlay">
              <div class="main-story-meta">
                <span class="main-story-category">${
                  selData.highlight.category
                }</span>
                <span class="main-story-date">${selData.highlight.date}</span>
              </div>
              <h3 class="main-story-title">
                ${selData.highlight.title}
              </h3>
            </div>
          </article>

          <!-- 서브 스토리 -->
          ${
            // 배열데이터 값이 0초과이면 article생성
            selData.articles.length > 0
              ? selData.articles
                  .map(
                    (val) => `
                    <article class="sub-story">
                      <div class="sub-story-image-wrapper">
                        <img
                          class="sub-story-image"
                          src="${val.image}"
                          alt="${val.title}"
                        />
                      </div>
                      <div class="sub-story-content">
                        <div class="sub-story-category">${val.category}</div>
                        <h3 class="sub-story-title">${val.title}</h3>
                        <div class="sub-story-meta">
                          <span class="date">${val.date}</span>
                          <span class="divider">|</span>
                          <span class="author">${val.author}</span>
                        </div>
                      </div>
                    </article>
                  `
                  )
                  .join("")
              : `<h2 class="no-story">No Story</h2>`
            // 없는 경우는 No Story 텍스트 출력
          }          
        </div>
      </section>    
`; /////////////////// 데이터 바인딩 /////////////////////
