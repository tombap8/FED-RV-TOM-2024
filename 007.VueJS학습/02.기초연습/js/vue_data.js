// 뷰JS 데이터 처리 JS - vue_data.js

// 뷰엑스 스토어 불러오기
import store from "./vuedata_store.js";

// [ 컴포넌트 생성하기 ]
// 이미지 src속성 바인드시
// (v.idx > 50 ? 1 : v.idx) 문장해석:
// 데이터 idx 값이 50초과이면 1을 넣고 아니면 idx데이터 넣기

// 엑시오스로 가져온 데이터는 {data:{실제데이터}} 형식으로
// 한번더 랩핑하여 들어온다! 따라서 이 데이터만 사용하려면
// $store.state.items.data -> data속성까지 써줘야 바로사용됨!

// 반면 뷰엑스 스토어의 actions에서 받은 제이슨 데이터는
// 원본 그대로 할당하여 들어오므로
// $store.state.items -> 원본 변수를 바로 사용해야함!!!

Vue.component("my-comp", {
  template: `
        <div class="grid">
            <div v-for="
            (v,i) in $store.state.items         
            
            /* 스토어 데이터 items를 직접 연결함
            따라서 이값이 업데이트되면 리스트도
            리랜더링됨! */

            ">
                <img 
                v-bind:src="
                // 이미지번호 50초과시 1번이미지 출력
                    './images/' +
                    (v.idx > 50 ? 1 : v.idx) +
                    '.jpg'
                " 
                alt="dress" />
                <aside>
                    <h2>{{v.gname}}</h2>
                    <h3>{{v.gprice}}</h3>
                </aside>
            </div>
        </div>
    `,
  data() {
    return {
      myt: "나야나야나!",
    };
  },
}); ////////// component //////////////

// 뷰인스턴스 생성하기
new Vue({
  el: "#app",
  store, // 뷰엑스 스토어 등록필수!
  data: {
    items: {}, // json데이터 담을 변수(여기서안씀!)
    myt: "나야나!",
  },
  // 뷰인스턴스 생성직후(가상돔/돔 생성전)
  created() {
    // 1. 제이슨 데이터를 가져오기 위한
    // 출발 코드 구역은 바로 여기! careated()!
    store.dispatch('getData');


    // 제이슨 데이터를 DB에서 가져온다고할때
    // 가져오는 시간이 걸리므로
    // 뷰엑스 스토아쪽에 호출하여 데이터를
    // 가져오도록 한다! 이때 비동기 호출인
    // actions 메서드구역에 메서드를 만드고
    // 이것을 호출한다! 호출시 대리호출 메서드인
    // dispatch("엑션메서드명",전달값)
}, //////// created /////////////
});
