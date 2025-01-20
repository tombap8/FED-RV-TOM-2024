// 보그 PJ 공통 컴포넌트 - common.js

// 1. 상단컴포넌트
const TopComp = Vue.component('top-comp',{
    // 1-1. 템플릿코드설정 /////
    template:`  
    <div id="top-area">
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
            <li v-for="v in this.gnbMenu">
              <a href="#">{{v}}</a>
            </li>
          </ul>
        </nav>
        <!-- 1-3. 요약메뉴박스 -->
        <nav class="sum-menu">
          <ol>
            <li v-for="v in this.sumMenu">
              <a href="#">{{v}}</a>
            </li>
          </ol>
        </nav>
      </header>      
    </div>   
    `,
    // 1-2. 데이터 셋업 리턴 메서드 /////
    data(){
        return{
            // (1) GNB 메뉴 데이터
            gnbMenu:['FASHION','BEAUTY','LIFESTYLE','CULTURE','VIDEO'],
            // (2) 요약 메뉴 데이터
            sumMenu:['KOREA','구독하기','≡'],
        };
    },
});
// 2. 하단컴포넌트
const BottomComp = Vue.component('bottom-comp',{});

// 3. 내보내기
export {TopComp,BottomComp};