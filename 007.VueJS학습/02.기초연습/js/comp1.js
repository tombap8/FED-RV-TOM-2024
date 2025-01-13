// 01. 컴포넌트 연습1 JS

// 1. 상단영역 전역 컴포넌트 만들기
// Vue.component(컴포넌트명,{template:코드})
Vue.component("tit-comp", {
  template: `
    <strong>
        <span>
          😉Vue JS😎 컴포넌트 :
        </span>
        쇼핑모~~~올 갤러리 리스트
      </strong>
    `,
}); ///// 전역컴포넌트1 /////

new Vue({el:'.tit'});


// [갤러리용 변수]
let inum = 0;

// 2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기 ///
Vue.component('list-comp',{
    // (1) 템플릿 설정
    template: `
        <div>
            <img v-bind:src="gsrc" alt="아이템">
            <aside>
            <h2>{{gname}}</h2>
            <h3>{{gprice}}</h3>
            </aside>
        </div>
    `, //// template /////
    // v-bind:src 속성은 일반 src속성과 달리
    // 뷰JS에서 속성값을 바인딩하여 넣는다는 코딩법이다!
    // -> 일반적으로 v-bind:속성 이렇게 쓰면
    // 뷰JS용 바인딩 속성이 된다!!!

    // 부모가 공개한 바인딩 속성을 가져온다!
    // 프롭스 다운!!! -> 부모요소에 만든 요소명을 등록함!
    // props: [] -> 배열형태로 여러개 등록 가능!
    props:['list-num','my-seq'],
    // 주의: 이것을 변수로 쓸때는 캐밥케이스를 캐믈케이스로 
    // 바꿔서 쓴다~! 예) 'list-num' -> listNum
    // 그리고 프롭스 다운변수도 내부에 등록되었으므로
    // this키워드로 호출함! 예) this.listNum

    // (2) data속성 : 컴포넌트에서 쓸 데이터
    // data: function(){ 이형태 또는 메서드형으로!
    data(){ // 메서드형!
        // 컴포넌트 data는 함수형태로 반드시 return을 써야함!
        return{
            // 이미지 src
            // gsrc: `./images/${this.setNum()}.jpg`,
            gsrc: `./images/${this.listNum}.jpg`,
            // 상품명
            gname: 'KM'+this.mySeq,
            // gname: this.key,
            // ->key속성은 유일키 구분목적속성이므로 
            //   일반데이터로 사용할 수 없다! 에러남!

            // 상품가격
            gprice: `100원`,
        }
    },// data속성

    // (3) methods 속성
    methods: {
        setNum(){
            return ++inum;
        },
    }
});

new Vue({el:'.grid'})
