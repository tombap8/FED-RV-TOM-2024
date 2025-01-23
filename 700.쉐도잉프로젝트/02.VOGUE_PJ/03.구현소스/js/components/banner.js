// 보그 PJ 메인배너 컴포넌트 - banner.js

import banData from '../../data/banner_data.json' with{type:'json'};
console.log(banData);

// 1. 상단컴포넌트
export const BannerComp = Vue.component("banner-comp", {
  // 1-1. 템플릿코드설정 /////
  template: `
    
  `,
  // 1-2. 데이터 셋업 리턴 메서드 /////
  data() {
    return {
      // (1) GNB 메뉴 데이터
      gnbMenu: ["FASHION", "BEAUTY", "LIFESTYLE", "CULTURE", "VIDEO"],
      // (2) 요약 메뉴 데이터
      sumMenu: ["KOREA", "구독하기", "≡"],
    };
  },
});
