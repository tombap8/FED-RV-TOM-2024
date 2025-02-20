// 01.공유신발 JSX

// 상품리스트 서브컴포넌트 불러오기
// import GoodsList from "./components/goods_list";

// 상품상세보기 서브컴포넌트 불러오기
// import GoodsDetail from "./components/goods_detail";

// 공통함수 불러오기
// import * as comFn from "./common/com_fn";

// 주의사항!!! CDN에서 여기 import대상은 모두
// html페이지에서 불러와야 사용할 수 있다!

// [ 메인 컴포넌트 ] ////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종ㅈ거으로 랜더링하는 구성 컴포넌트를 말한다!

// 그렇다면 컴포넌트란?
// 특정 모듈로 구성된 HTML코드를 리턴하는 객체

// 함수형 컴포넌트는 첫글자 대문자인 함수키워드로 만든다

function MainComponent() {
  /************************************** 
            [ 코드구성 ]
            1. 타이틀 : h1.tit
            2. 내용박스 : section
            ㄴ> 제목 : h2
            ㄴ> 이미지박스 : div.img-box > img
            3. 기능버튼박스 : div.btn-box
            ㄴ> 기능버튼 : button
            4. 상품리스트박스 : div.gwrap
            ㄴ> 상품리스트 : 
                ul > li > ol > li > (img/text)
            ㄴ> 상품상세보기 :
                ol > li > (img/text/button)
        **************************************/
  ////////////////////////////////////
  // 코드리턴구역 /////////////////////
  return (
    <React.Fragment>
        
    </React.Fragment>
);
} ////////// MainComponent 컴포넌트 /////////////

// 메인 컴포넌트 출력하기 ////////////
ReactDOM.render(<MainComponent />, document.querySelector("#root"));
// ReactDOM.render(어쩌구,저쩌구);
// 어쩌구를 저쩌구에 출력해라!
