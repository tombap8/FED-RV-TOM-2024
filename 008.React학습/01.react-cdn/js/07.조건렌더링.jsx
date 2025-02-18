// 07.리액트 : 조건 렌더링  + 리스트 렌더링

// 나의 함수 불러오기
import myFn from "./my_function.js";

// 출력대상: .root
const root = myFn.qsa(".root");
console.log(root);

/**************************************** 
    1. if문을 사용하여 조건부 렌더링하기
    - 리액트에서는 조건부로 구성요소를
    렌더링 할 수 있다!
****************************************/

// 1번 컴포넌트 /////////////////////
function MakeDeveloper() {
  return <h1>나는 개발자야!</h1>;
} /////// MakeDeveloper 컴포넌트 ///////////

// 2번 컴포넌트 /////////////////////
function LostDeveloper() {
  return <h1>개발자가 뭐지?</h1>;
} /////// LostDeveloper 컴포넌트 ///////////

// 3번 컴포넌트 /////////////////////
function MakeImage({ isrc, ialt, itit, icss }) {
  // isrc - 파일경로, ialt - 설명
  // itit - 툴팁, icss - 스타일설정
  // -> 만약 속성중 안보낸것은 출력되지 않는다!
  return <img src={isrc} alt={ialt} title={itit} style={icss} />;
} ////////// MakeImage 컴포넌트 ////////////

// 메인 출력 컴포넌트 ////////////////////
// 컴포넌트 내부에서 호출하는 다른 컴포넌트를
// 보통 서브컴포넌트라고 부른다~!
function Developer({ isNormal, isrc, ialt, itit }) {
  // isNormal은 개발자가 아니면 true
  if (isNormal) {
    return (
      <React.Fragment>
        <LostDeveloper />
        <MakeImage isrc={isrc} ialt={ialt} itit={itit} />
      </React.Fragment>
    );
  } ////////////// if ////////////

  // 위의 if문에 들어가면 그 안의 return문 때문에
  // 아랫쪽의 return문은 실행되지 않는다!!!
  //  else문 불필요!!!
  // 리턴 코드 만들기 ///////////
  return (
    <React.Fragment>
      <MakeDeveloper />
      <MakeImage isrc={isrc} ialt={ialt} itit={itit} />
    </React.Fragment>
  );

  ///////// return ///////////
} //////////// Developer 컴포넌트 //////////////

// 이미지경로 배열
const devImg = [
  "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
  "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png",
];

// 컴포넌트 호출하기 1 : 개발자 찍기
// 먼저 가상돔에 컴포넌트 리턴코드를 넣어준다!
ReactDOM.render(
    <Developer
        isNormal={false}
        isrc={devImg[0]}
        ialt="개발자 공유"
        itit="프론트엔드 개발자 공유입니다!"
    />,
    root[0]
);


// 컴포넌트 호출하기 2 : 일반인 찍기
// 먼저 가상돔에 컴포넌트 리턴코드를 넣어준다!
ReactDOM.render(
    <Developer
        isNormal={true}
        isrc={devImg[1]}
        ialt="일반인 동석"
        itit="개발자가 뭡니까?"
    />,
    root[1]
);

/**************************************************** 
      2. if문이 아닌 조건 표현하기
      -> 조건식 && JSX표현식
      조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
      -> 조건식은 true / false 의 결과가 나오는 식이며
      AND 조건, OR 조건, NOT조건식이 모두 사용가능함!
      예) (A == "사자" && (B > 10 || C == "별" || !D)) 
****************************************************/
