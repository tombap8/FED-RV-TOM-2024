// 보그 PJ 공통 컴포넌트 - common.js

// 1. 상단컴포넌트
const TopComp = Vue.component('top-comp',{
    template:`    
      <header class="top-area inbox">
        <!-- 1-1. 로고박스 -->
        <div class="logo">
          <h1>
            <a href="index.html">
              <img src="./images/svg/logo.svg" alt="메인로고" />
            </a>
          </h1>
        </div>
        <!-- 1-2. 메뉴박스 -->
        <nav class="gnb">
          <ul>
            <li>
              <a href="#">FASHION</a>
            </li>
            <li>
              <a href="#">BEAUTY</a>
            </li>
            <li>
              <a href="#">LIFESTYLE</a>
            </li>
            <li>
              <a href="#">CULTURE</a>
            </li>
            <li>
              <a href="#">VIDEO</a>
            </li>
          </ul>
        </nav>
        <!-- 1-3. 요약메뉴박스 -->
        <nav class="sum-menu">
          <ol>
            <li>
              <a href="#">KOREA</a>
            </li>
            <li>
              <a href="#">구독하기</a>
            </li>
            <li>
              <a href="#">≡</a>
            </li>
          </ol>
        </nav>
      </header>    
    `
});
// 2. 하단컴포넌트
const BottomComp = Vue.component('bottom-comp',{});

// 3. 내보내기
export {TopComp,BottomComp};