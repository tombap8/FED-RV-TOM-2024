// 04. 뷰엑스 스토아 - 저장공간 활용하기 JS

// 스토아 JS 불러오기 /////////
import store from "./store.js";
// default로 내보내기 했지만 이름은 store로 정해짐!
// -> 뷰인스턴스에서 store를 사용하도록 등록필수!!!

// [1] 전역 컴포넌트 만들기 ///////
// (1) 상단영역 컴포넌트
Vue.component("top-area", {
  // 템플릿설정
  template: `
        <header>
            <ul class="gnb">
                ${Object.keys(store.state.cityData)
                  .map(
                    (v) => `
                        <li>
                            <a href="#">${v=='처음'?'💒':v}</a>
                        </li>
                        `
                  )
                  .join("")}
            </ul>
        </header>
    `,
  // 데이타설정 : 컴포넌트는 객체리턴메서드로 해야함!
  data() {
    return {};
  },
  // 메서드 설정
  methods: {},
});
// (2) 메인영역 컴포넌트
Vue.component("main-area", {
    /* 
        컴포넌트 영역은 뷰JS에서 해석되는 부분이므로
        뷰엑스 스토어의 변수 store를 
        전역 표시 $store
        라고 표기해야 유효하다!(에러없음)
        더 정확한 문법은 this.$store 라고 써야하지만
        이 파일이 일반 JS에서 실행되므로 변수할당된
        뷰JS 인스턴스 영역안에서 실행되므로
        뷰인스턴스 자신인 this를 쓰지 않아도
        자동적으로 this로 처리된다!
    */
  // 템플릿설정
  template: `
        <main>
            <img v-bind:src="" alt="지역이미지" />
            <p></p>
        </main>
    `,
  // 데이타설정 : 컴포넌트는 객체리턴메서드로 해야함!
  data() {
    return {};
  },
  // 메서드 설정
  methods: {},
});
// (3) 하단영역 컴포넌트
Vue.component("info-area", {
  // 템플릿설정
  template: `
        <footer>
            <address>
                서울시 강남구 역삼동 119 뷰엑스B
            </address>
        </footer>
    `,
  // 데이타설정 : 컴포넌트는 객체리턴메서드로 해야함!
  data() {
    return {};
  },
  // 메서드 설정
  methods: {},
});

// [2] 뷰 인스턴스 생성하기 ////////
// 대상요소 : #app
new Vue({
  // 대상선정
  el: "#app",
  // 스토아 등록하기(필수!)
  store,
  // 데이터
  data: {},
  // 메서드
  methods: {},
});
