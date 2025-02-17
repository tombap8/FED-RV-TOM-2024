// 보그 JS 서브페이지 아이템 컴포넌트 - item.js

// GNB 메뉴 데이터 불러오기
import { gnbMenu } from "../../data/gnb_data.js";

export const ItemComp =  
Vue.component("item-comp",{
    // 1. 템플릿
    template: `
    <main>
        <header class="item-top-area">
            <h2 class="item-tit">
                {{$route.query.id}}
            </h2>
            <nav class="lnb">
                <ul>
                    <li v-for="v in this.menuSet">
                        <a href="#">{{v}}</a>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- 
            [ Today’s Stories 유형 영역 ]
            list-tit 속성은 타이틀이 없으므로 빈값셋팅
            data-name 속성은 라우터 query의 id값에 따라
            데이터 이름을 변경해야하므로 속성을 바인딩하여
            v-bind:data-name="코드" 로 작성한다! 줄이면
            :data-name="코드" 로 작성할 수 있다!

            코드로 작성된 $route.query.id는 파라미터로
            넘어온 값 즉, 카테고리명과 같다!
            이 값이 대문자 이므로 소문자로 보내려고
            toLowerCase() 메서드를 사용했다!
        -->
        <today-area-comp
            list-tit=""
            :data-name="$route.query.id.toLowerCase()"
        ></today-area-comp>

        <!--
        <div style="font-size:10vw">
            출력확인:{{$route.query.id.toLowerCase()}}
        </div>
        -->
    </main>
    `,
    // 2. 리턴함수 데이터
    data(){
        return{ 
            menuSet: gnbMenu[this.$route.query.id],
        };
    },
    // 3. 메서드
    methods: {},
    // 4. 데이터셋업파트
    created(){
        // 처음 인스턴스 생성시 실행구역
        // 라우터 전달 파라미터 받기
        // this.$route.query.셋팅속성명
        console.log(this.$route.query.id);
        // -> 만약 값을 숨겨서 전달하려면 params사용!
        // this.$route.params.셋팅속성명
    },
    // 5. 업데이트시 실행구역
    updated(){
        console.log('아이템, 업데이트!');
        // 서브메뉴 변수 업데이트하기
        this.menuSet = 
        gnbMenu[this.$route.query.id]
    },
    // 6. DOM 셋업파트
    mounted(){
        // CSS 변경하기 ///
        $("#css-set").attr("href", "./css/item.css");
    },
});