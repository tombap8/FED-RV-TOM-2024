// 보그 메인 페이지 데이터 바인딩 JS - main_data_binding.js

// 제이슨 가져오기
// (1) 배너정보 제이슨
import bannerData from "../data/banner_data.json" with { type: "json" };

// (2) 보그사이트정보 제이슨
import siteData from "../data/vogue_korea_data.json" with { type: "json" };

console.log("제이슨확인:", siteData);

// [1] 배너파트 데이터 바인딩하기 //////////
// 대상: .hero-slider .swiper-wrapper
document.querySelector(".hero-slider .swiper-wrapper").innerHTML = bannerData
  .map(
    (v) =>
      `
    <div class="swiper-slide">
        <img
        class="hero-image"
        src="./images/main_banner/banner_0${v.idx}.jpg"
        alt="Hero"
        />
        <div class="hero-text">
        <p>${v.category} | ${v.date}</p>
        <h1>${v.title}</h1>
        </div>
    </div>
`
  )
  .join("");

// [2] TODAY'S STORIES 파트 데이터 바인딩하기 //////////
const todaysStories = siteData.sections.todaysStories;

// 대상: .todays-stories .stories-grid
document.querySelector(".todays-stories .stories-grid").innerHTML = `
  <!-- 메인 스토리 (좌측 큰 카드) -->
  <article class="main-story">
    <img
      class="main-story-image"
      src="${todaysStories.mainHighlight.image}"
      alt="${todaysStories.mainHighlight.title}"
    />
    <div class="main-story-overlay">
      <div class="main-story-meta">
        <span class="main-story-category">${
          todaysStories.mainHighlight.category
        }</span>
        <span class="main-story-date">${todaysStories.mainHighlight.date}</span>
      </div>
      <h3 class="main-story-title">
        ${todaysStories.mainHighlight.title}
      </h3>
    </div>
  </article>

  ${todaysStories.articles
    .map(
      (article) => `
  <!-- 서브 스토리 -->
  <article class="sub-story">
    <div class="sub-story-image-wrapper">
      <img
        class="sub-story-image"
        src="${article.image}"
        alt="${article.title}"
      />
    </div>
    <div class="sub-story-content">
      <div class="sub-story-category">${article.category}</div>
      <h3 class="sub-story-title">${article.title}</h3>
      <div class="sub-story-meta">
        <span class="date">${article.date}</span>
        <span class="divider">|</span>
        <span class="author">by ${article.author}</span>
      </div>
    </div>
  </article>
  `
    )
    .join("")}
`;

// [3] BEST STORIES 파트 데이터 바인딩하기 //////////
const bestStories = siteData.sections.bestStories;

// 대상: .best-stories-slider .swiper-wrapper
document.querySelector(".best-stories-slider .swiper-wrapper").innerHTML =
  bestStories.articles
    .map(
      (article) => `
  <div class="swiper-slide">
    <article class="card">
      <div class="card-image">
        <div class="placeholder-img">
          <img
            src="${article.image}"
            alt="${article.title}"
          />
        </div>
      </div>
      <div class="card-content">
        <p class="category">${article.category}</p>
        <h3 class="s_tit">${article.title}</h3>
        <p class="date">${article.date}<span>by ${article.author}</span></p>
      </div>
    </article>
  </div>
  `
    )
    .join("");

// [4] MUST READ 파트 데이터 바인딩하기 //////////
const mustRead = siteData.sections.mustRead;

// 대상: .must-read .grid
document.querySelector(".must-read .grid").innerHTML = mustRead.articles
  .map(
    (article) => `
  <article class="card">
    <div class="card-image">
      <div class="placeholder-img">
        <img
          src="${article.image}"
          alt="${article.title}"
        />
      </div>
    </div>
    <div class="card-content">
      <p class="category">${article.category}</p>
      <h3 class="s_tit">${article.title}</h3>
      <p class="date">${article.date}<span>by ${article.author}</span></p>
    </div>
  </article>
  `
  )
  .join("");

  // [5] PEOPLE NOW 파트 데이터 바인딩하기 //////////
const peopleNow = siteData.sections.peopleNow;

// 대상: .people-grid (첫 번째 카드는 타이틀이므로 제외)
const peopleGridHTML = `
  <article class="people-card">
    <div class="section-header">
      <h2 class="section-title">${peopleNow.title.split(' ')[0]}<br />${peopleNow.title.split(' ')[1]}</h2>
      <h3>${peopleNow.subtitle}</h3>
    </div>
  </article>
  ${peopleNow.people
    .map(
      (person) => `
  <article class="people-card">
    <img
      src="${person.image}"
      alt="${person.title}"
    />
    <div class="post_content">
      <p><span>${person.category}</span></p>
      <h3>${person.title}</h3>
    </div>
  </article>
  `
    )
    .join("")}
`;

document.querySelector(".people-grid").innerHTML = peopleGridHTML;

// [6] FASHION 파트 데이터 바인딩하기 //////////
const fashion = siteData.sections.fashion;

// 대상: .fashion .stories-grid
document.querySelector(".fashion .stories-grid").innerHTML = `
  <!-- 메인 스토리 (오른쪽 큰 카드) -->
  <article class="main-story">
    <img
      class="main-story-image"
      src="${fashion.mainHighlight.image}"
      alt="${fashion.mainHighlight.title}"
    />
    <div class="main-story-overlay">
      <div class="main-story-meta">
        <span class="main-story-category">${fashion.mainHighlight.category}</span>
        <span class="main-story-date">${fashion.mainHighlight.date}</span>
      </div>
      <h3 class="main-story-title">
        ${fashion.mainHighlight.title}
      </h3>
    </div>
  </article>

  ${fashion.articles
    .map(
      (article) => `
  <!-- 서브 스토리 -->
  <article class="sub-story">
    <div class="sub-story-image-wrapper">
      <img
        class="sub-story-image"
        src="${article.image}"
        alt="${article.title}"
      />
    </div>
    <div class="sub-story-content">
      <div class="sub-story-category">${article.category}</div>
      <h3 class="sub-story-title">${article.title}</h3>
      <div class="sub-story-meta">
        <span class="date">${article.date}</span>
        <span class="divider">|</span>
        <span class="author">by ${article.author}</span>
      </div>
    </div>
  </article>
  `
    )
    .join("")}
`;

// [7] BEAUTY 파트 데이터 바인딩하기 //////////
const beauty = siteData.sections.beauty;

// 대상: .beauty .stories-grid
document.querySelector(".beauty .stories-grid").innerHTML = `
  <!-- 메인 스토리 (좌측 큰 카드) -->
  <article class="main-story">
    <img
      class="main-story-image"
      src="${beauty.mainHighlight.image}"
      alt="${beauty.mainHighlight.title}"
    />
    <div class="main-story-overlay">
      <div class="main-story-meta">
        <span class="main-story-category">${beauty.mainHighlight.category}</span>
        <span class="main-story-date">${beauty.mainHighlight.date}</span>
      </div>
      <h3 class="main-story-title">
        ${beauty.mainHighlight.title}
      </h3>
    </div>
  </article>

  ${beauty.articles
    .map(
      (article) => `
  <!-- 서브 스토리 -->
  <article class="sub-story">
    <div class="sub-story-image-wrapper">
      <img
        class="sub-story-image"
        src="${article.image}"
        alt="${article.title}"
      />
    </div>
    <div class="sub-story-content">
      <div class="sub-story-category">${article.category}</div>
      <h3 class="sub-story-title">${article.title}</h3>
      <div class="sub-story-meta">
        <span class="date">${article.date}</span>
        <span class="divider">|</span>
        <span class="author">by ${article.author}</span>
      </div>
    </div>
  </article>
  `
    )
    .join("")}
`;

// [8] LIVING 파트 데이터 바인딩하기 //////////
const living = siteData.sections.living;

// 대상: #living .grid
document.querySelector("#living .grid").innerHTML = living.articles
  .map(
    (article) => `
  <article class="card">
    <div class="card-image">
      <div class="placeholder-img">
        <img
          src="${article.image}"
          alt="${article.title}"
        />
      </div>
    </div>
    <div class="card-content">
      <p class="category">${article.category}</p>
      <h3 class="s_tit">${article.title}</h3>
      <p class="date">${article.date}<span>by ${article.author}</span></p>
    </div>
  </article>
  `
  )
  .join("");

// [9] LATEST STORIES 파트 데이터 바인딩하기 //////////
const latestStories = siteData.sections.latestStories;

// 대상: .latest-stories-box .grid
document.querySelector(".latest-stories-box .grid").innerHTML = latestStories.articles
  .map(
    (article) => `
  <article class="card">
    <div class="card-image">
      <div class="placeholder-img">
        <img
          src="${article.image}"
          alt="${article.title}"
        />
      </div>
    </div>
    <div class="card-content">
      <div class="card-category">${article.category}</div>
      <h3 class="card-title">${article.title}</h3>
      <p class="card-subtitle">${article.date} by ${article.author}</p>
    </div>
  </article>
  `
  )
  .join("");