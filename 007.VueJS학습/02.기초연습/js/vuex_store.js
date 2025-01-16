// 04. 뷰엑스 스토아 - 저장공간 활용하기 JS

// [1] 전역 컴포넌트 만들기 ///////
// (1) 상단영역 컴포넌트
Vue.component('top-area',{
    // 템플릿설정
    template: `
        <header>
            <ul class="gnb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </header>
    `,
    // 데이타설정 : 컴포넌트는 객체리턴메서드로 해야함!
    data(){
        return{};
    },
    // 메서드 설정
    methods:{},
});
// (2) 메인영역 컴포넌트
Vue.component('main-area',{
    // 템플릿설정
    template: `
        <main>
            <img src="https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg" alt="지역이미지" />

            <p>
                도시소개에 오신것을 환영합니다!
            </p>
        </main>
    `,
    // 데이타설정 : 컴포넌트는 객체리턴메서드로 해야함!
    data(){
        return{};
    },
    // 메서드 설정
    methods:{},
});
// (3) 하단영역 컴포넌트
Vue.component('info-area',{
    // 템플릿설정
    template: `
        <footer>
            <address>
                서울시 강남구 역삼동 119 뷰엑스B
            </address>
        </footer>
    `,
    // 데이타설정 : 컴포넌트는 객체리턴메서드로 해야함!
    data(){
        return{};
    },
    // 메서드 설정
    methods:{},
});


// [2] 뷰 인스턴스 생성하기 ////////
// 대상요소 : #app
new Vue({
    // 대상선정
    el: "#app",
    // 데이터
    data: {},
    // 메서드
    methods: {},
});