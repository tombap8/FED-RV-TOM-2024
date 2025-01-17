// 뷰 라우터 셋팅 JS : router.js

// [ 라우터 옵션 셋팅하기 ] ///
// (1) 라우터 출력 템플릿 만들기 ///
const Trip = {
  template: `
  <div class="trip router">World Trip</div>`,
};

// 어떤 속성이든지 뷰 인스턴스에서 변경하려면
// 그 속성을 바인드 디렉티브로 셋팅하면 된다!
// v-bind:속성명="값"
// ->>> 속성을 바인딩하는 순간 따옴표구역은 문자열이 아니고
// ->>> 코딩구역으로 바뀐다!! 따라서 일반문자는 반드시 다른
// ->>> 따옴표 기호로 싸야한다! 안싸면 변수다!

// this.$route.params.cls 는 전역 라우터에서 파라미터속성읽기
// this.$route.params.item 은 전역 라우터에서 파라미터속성읽기
// 넘어오는 객체는 params: { item: "피자", cls: "pizza" }
// 즉, 라우터에서 넘어오는 객체값을 가져올 수 있다!
// cls속성은 클래스명을 담아오도록 내가 정하였다!
const Foods = {
  template: `
  <div v-bind:class="
    'foods router ' + this.$route.params.cls
  ">
    World Foods {{ this.$route.params.item }}
  </div>`,
};

const Game = {
  template: `
  <div v-bind:class="
    'game router ' + this.$route.params.cls
  ">
    World Game {{ this.$route.params.item }}
  </div>
  `,
};

const Corp = {
  template: `
    <div class="corp router">Introduction</div>`,
};

/********************************************************* 
    [파라미터로 전달된 라우터 값을 읽는 코드법]
    this.$route.params.cls
    1. this 는 현재 라우터를 사용하는 뷰인스턴스
    2. $route 는 현재 연결된 라우트 정보객체
    3. params 는 라우트 하위 파라미터 전달속성
    4. cls / item 은 전달된 파라미터이름 (여기서 값이 나옴)
******************************************************/

// [ 뷰라우터 인스턴스 내보내기 ] /////
// -> 라우터 셋팅 방식
// new VueRouter({routes:[]})
// -> 만약 외부에 셋팅될 경우
// -> const routes = []
// -> new VueRouter({routes})
// -> routes라는 속성명은 정해진이름임!
export default new VueRouter({
  routes: [
    {
      // (1) 경로설정 : path
      // -> router-link의 to 속성값과 같은값으로 셋팅!
      path: "/trip",
      // (2) 연결할 컴포넌트 설정 : component
      // -> 외부의 변수로 셋팅할 수 있고 직접 쓸 수 있음
      component: Trip,
    },
    {
      // (1) 경로설정 : path
      // -> router-link의 to 속성값과 같은값으로 셋팅!
      path: "/foods",
      // (2) 연결할 컴포넌트 설정 : component
      // -> 외부의 변수로 셋팅할 수 있고 직접 쓸 수 있음
      component: Foods,
    },
    {
      // (1) 경로설정 : path
      // -> router-link의 to 속성값과 같은값으로 셋팅!
      path: "/game",
      // (2) 연결할 컴포넌트 설정 : component
      // -> 외부의 변수로 셋팅할 수 있고 직접 쓸 수 있음
      component: Game,
    },
    {
      // (1) 경로설정 : path
      // -> router-link의 to 속성값과 같은값으로 셋팅!
      path: "/corp",
      // (2) 연결할 컴포넌트 설정 : component
      // -> 외부의 변수로 셋팅할 수 있고 직접 쓸 수 있음
      component: Corp,
    },
    // [ 하위 메뉴 라우트 셋팅!!! ] //////
    {
      // (1) 하위메뉴를 위한 구분명 필수!
      name: "umsik",
      // (2) 경로설정 : path -> 경로뒤에 콜론(:)을쓰고 파라미터변수 넣는다!
      // -> router-link의 to 속성값과 같은값으로 셋팅!
      path: "/foods:item",
      // (2) 연결할 컴포넌트 설정 : component
      // -> 외부의 변수로 셋팅할 수 있고 직접 쓸 수 있음
      component: Foods,
    },
    {
      // (1) 하위메뉴를 위한 구분명 필수!
      name: "my-game",
      // (2) 경로설정 : path -> 경로뒤에 콜론(:)을쓰고 파라미터변수 넣는다!
      // -> router-link의 to 속성값과 같은값으로 셋팅!
      path: "/game:item",
      // (2) 연결할 컴포넌트 설정 : component
      // -> 외부의 변수로 셋팅할 수 있고 직접 쓸 수 있음
      component: Game,
    },
  ],
}); ///////// VueRouter ////////////////
