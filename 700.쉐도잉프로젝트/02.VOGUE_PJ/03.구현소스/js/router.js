// 보그 PJ - 뷰 라우터 셋팅 JS - router.js

// 컴포넌트 불러오기 /////
// [1] 공통컴포넌트
import { TopComp } from "./components/common_spa.js";
import { BannerComp } from "./components/banner.js";
import { JoinComp } from "./components/join.js";
import { LoginComp } from "./components/login.js";
import { TodayAreaComp } from "./components/today_area.js";
import { FashionAreaComp } from "./components/fashion_area.js";

// console.log(TopComp, BannerComp, JoinComp, LoginComp);

// 메인페이지 컴포넌트 : 구성할 여러개의 컴포넌트호출 ////
const MainComp = Vue.component("main-comp", {
  template: `
        <main>
            <!-- 배너영역 -->
            <banner-comp></banner-comp>

            <!-- Today’s Stories 영역 -->
            <today-area-comp></today-area-comp>

            <!-- fashion 영역 -->
            <fashion-area-comp></fashion-area-comp>
        </main>
    `,
  // DOM구성후
  mounted() {
    // CSS 변경하기 ///
    $("#css-set").attr("href", "./css/main.css");
  },
}); ///////////// MainComp ///////////////////

// [ 뷰라우터 인스턴스 내보내기 ] /////
// -> 라우터 셋팅 방식
// new VueRouter({routes:[]})
// -> 만약 외부에 셋팅될 경우
// -> const routes = []
// -> new VueRouter({routes})
// -> routes라는 속성명은 정해진이름임!
export default new VueRouter({
  routes: [
    // [ 루트 첫 페이지 셋팅 ]
    {
      // (1) 경로설정 : path
      // -> router-link의 to 속성값과 같은값으로 셋팅!
      path: "/", // 슬래쉬(/)만 쓰면 첫페이지임!
      // (2) 연결할 컴포넌트 설정 : component
      // -> 외부의 변수로 셋팅할 수 있고 직접 쓸 수 있음
      component: MainComp,
    },
    // [ 회원가입 페이지 셋팅 ]
    {
      path: "/join",
      component: JoinComp,
    },
    // [ 로그인 페이지 셋팅 ]
    {
      path: "/login",
      component: LoginComp,
    },
  ],
}); ///////// VueRouter ////////////////
