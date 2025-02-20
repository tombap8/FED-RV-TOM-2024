// 01.공유신발 JSX

// 상품리스트 서브컴포넌트 불러오기
import GoodsList from "./components/GoodsList";

// 상품상세보기 서브컴포넌트 불러오기
import GoodsDetail from "./components/GoodsDetail";

// 공통함수 불러오기
import * as comFn from "./common/com_fn";

// 주의사항!!! CDN에서 여기 import대상은 모두
// html페이지에서 불러와야 사용할 수 있다!

// [ 메인 컴포넌트 ] ////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종ㅈ거으로 랜더링하는 구성 컴포넌트를 말한다!

// 그렇다면 컴포넌트란?
// 특정 모듈로 구성된 HTML코드를 리턴하는 객체

// 함수형 컴포넌트는 첫글자 대문자인 함수키워드로 만든다

function MainComponent() {
    // [ 후크 상태관리 변수 셋팅!!! ]
    // 1. 리스트 / 상세보기 전환용 상태관리변수
    const [ viewList, setViewList ] = React.useState(true);
    // 2. 상품 데이터 인덱스값 상태관리변수
    const [ gIdx, setGIdx ] = React.useState(1);
    // 3. 선택 아이템 고유이름 상태관리변수
    const [ selItem, setSelItem ] = React.useState("공유");
    // 4. 테스트용 상태관리변수(의존성 테스트용!)
    const [ test, setTest ] = React.useState(true);



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

    __________________________________________

    [ 일반 html 태그를 가져온 경우 수정사항 ]
     1. 홀로태그는 반드시 끝에 스스로 닫기처리
     예) <br> -> <br />
     2. className 속성명은 classNameName으로 변경
     3. 인라인 스타일은 객체형태로 변경
      
     

**************************************************/
  ////////////////////////////////////
  // 코드리턴구역 /////////////////////
  return (
    <React.Fragment>
      <h1 className="tit">
        <img
          id="logo"
          src="./images/logo.png"
          alt="로고"
          style={{
            width: "50px",
            verticalAlign: "-6px",
            marginRight: "10px",
          }}
        />
        <span>공유가 신고 다닌다는!</span>
      </h1>
      <section>
        <h2 className="stit">공유는 오늘도 멋찝니다!</h2>
        <div className="img-box">
          <img src="./images/vans/gongyoo.jpg" alt="멋진공유" />
        </div>
      </section>
      <div className="btn-box">
        <button>효진초이스 바로가기</button>
        <br />
        <button>useEffect 의존성 테스트</button>
      </div>
      <div className="gwrap">
        {/* 상품리스트 하위 컴포넌트 */}
        <GoodsList 
            selItem={selItem} 
            // 상태변수업데이트를 위해 자식에게 보내준다!
            setGIdx={setGIdx}
        />
        {/* 상품상세보기 하위 컴포넌트 */}
        <GoodsDetail selItem={selItem} gIdx={gIdx} />
      </div>
    </React.Fragment>
  );
} ////////// MainComponent 컴포넌트 /////////////

// 메인 컴포넌트 출력하기 ////////////
ReactDOM.render(<MainComponent />, document.querySelector("#root"));
// ReactDOM.render(어쩌구,저쩌구);
// 어쩌구를 저쩌구에 출력해라!

