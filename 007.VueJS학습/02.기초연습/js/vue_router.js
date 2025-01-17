// 05.Vue Router JS : vue_router.js

// 라우터 셋팅 JS 불러오기
import router from "./router.js";

// 링크 셋팅 객체 데이터 ///
const linkSetData = {
  세계여행사: {
    link: { path: "/trip" },
    menu: "",
  },
  세계먹거리: {
    link: { path: "/foods" },
    menu: {
      피자: {
        name: "umsik",
        params: { item: "피자", cls: "pizza" },
      },
      파스타: {
        name: "umsik",
        params: { item: "파스타", cls: "pasta" },
      },
      똠양꿍: {
        name: "umsik",
        params: { item: "똠양꿍", cls: "ddom" },
      },
    },
  },
};

// 뷰 인스턴스 객체 생성하기 /////////
new Vue({
  // 1. 대상선정 : #app
  el: "#app",
  // 2. 라우터설정
  router,
  // 3. 데이터 설정
  data: {},
  // 4. 메서드
  methods: {},
  // 5. 라이프 사이클 메서드 :
  // mounted -> DOM 랜더링
  mounted() {},
});
