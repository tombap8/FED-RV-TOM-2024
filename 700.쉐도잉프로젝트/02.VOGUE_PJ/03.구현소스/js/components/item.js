// 보그 JS 서브페이지 아이템 컴포넌트 - item.js

export const ItemComp =  
Vue.component("item-comp",{
    // 1. 템플릿
    template: `
    <header class="item-top-area">
        <h2 class="item-tit">Fashion</h2>
        <nav class="lnb">
            <ul>
                <li>
                    <a href="#">전체</a>
                </li>
            </ul>
        </nav>
    </header>
    `,
    // 2. 리턴함수 데이터
    data(){
        return{};
    },
    // 3. 메서드
    methods: {},
    // 4. 데이터셋업파트
    created(){},
    // 5. DOM 셋업파트
    mounted(){},
});