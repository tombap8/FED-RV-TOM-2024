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
// 개발자의 취향을 알아보자!

// 2-1. 제목을 찍기 위한 타이틀 컴포넌트
function SetTitle({ title }) {
  return <h1>👩‍🔧개발자👨‍🔧가 좋아하는 {title}</h1>;
} ///////// SetTitle 컴포넌트 /////////////

// 음식리스트 배열변수 ///
const foods = ["스파게티", "짜파게티", "냉면", "짜장면", "마라탕", "마라쌍궈", "탕수육"];

// 전달할 영화정보 배열변수 ////
const movs = [
  {
    year: "2020",
    mtit: "남산의 부장들",
    poster:
      "https://i.namu.wiki/i/d-g1xW3vvsfh71KCQIxl2es_i0wKyMJhkwEaXKdCgDAyhJVRb4vWA_TNnRHMksw0S6pK_nFrDITK2ISIJRuRpA.webp",
  },
  {
    year: "2021",
    mtit: "모가디슈",
    poster:
      "https://upload.wikimedia.org/wikipedia/ko/9/92/%EC%98%81%ED%99%94_%EB%AA%A8%EA%B0%80%EB%94%94%EC%8A%88.jpg",
  },
  {
    year: "2022",
    mtit: "범죄도시2",
    poster:
      "https://upload.wikimedia.org/wikipedia/ko/b/b9/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C_2_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
  },
  {
    year: "2023",
    mtit: "가디언즈 오브 갤럭시3",
    poster:
      "https://i.namu.wiki/i/qA_v1drdO1CusnMcmQVZDEGXEspqfuS0-sAHYUFExpgZMF_GSyCSrxSh-_IWua2lqD6GnNNlqw0hMvNzXYrefA.webp",
  },
  {
    year: "2024",
    mtit: "파묘",
    poster:
      "https://i.namu.wiki/i/EWdG2Jtlu36U1-03moAiO7Hmh1waKlbB0DIEvamksSTTzWCsqDXxUiiPSdcmpAQjh_tUFOwAGhR7LX7f6U0wXQ.webp",
  },
  {
    year: "2025",
    mtit: "히트맨2",
    poster:
      "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250122_152%2F1737520669753Byxun_JPEG%2Fmovie_image.jpg",
  },
];

// 2-2. 반복리스트를 위한 컴포넌트 ///////////
function MakeList({ foodName, movieInfo }) {
  // foodName - 음식이름
  // movieInfo - 영화정보객체
  console.log(foodName, " / ", movieInfo);

  /// 리턴코드구역 ///////////
  return (
    <li>
      {
        // 음식 데이터가 들어온 경우 출력
        // 만약 데이터가 안들어오면 undefined이므로
        // false 처리됨! 할당되면 true처리됨!
        foodName && "개발자는 " + foodName + " 좋아해!"
      }
      {
        // 영화 데이터가 들어온 경우 출력
        // 만약 데이터가 안들어오면 undefined이므로
        // false 처리됨! 할당되면 true처리됨!
        movieInfo && movieInfo.year + "년도 " + movieInfo.mtit
        // movieInfo는 객체 데이터임!
        // 하위속성으로 year는 년도 데이터
        // mtit는 영화제목 데이터가 들어있다!
      }
    </li>
  );
} ///////// MakeList 컴포넌트 //////////////////

// 2-3. 개발자 선호 음식 리스트 출력 컴포넌트 /////
function WishList({wList, gubun}) {
    // wList - 좋아하는 음식 리스트(배열)
    // gubun - 음식/영화 구분 문자값
    return (
        <React.Fragment>
            {/* 음식 리스트 타이틀 */}
            <SetTitle title={gubun} />
            {// 표현식 코드 구역의 태그는 부모가 하나여야함!
            // 배열값이 0개 이상인 경우 출력
            wList.length > 0 &&
            <div>
              { // 구분값이 "음식"인 경우
                gubun == "음식" &&
                <h2>
                    개발자가 좋아하는 음식은 모두
                    {wList.length}가지 입니다!
                </h2>
              }
              { // 구분값이 "영화"인 경우
                gubun == "영화" &&
                <h2>
                    개발자가 좋아하는 영화는 최근 
                    {wList.length}년간 아래와 같습니다!
                </h2>
              }
                <ul>
                    {// 구분값이 "음식"인 경우
                      gubun == "음식" &&
                        wList.map(v=>
                        <MakeList foodName={v} />)
                    }
                    {// 구분값이 "영화"인 경우
                      gubun == "영화" &&
                        wList.map(v=>
                        <MakeList movieInfo={v} />)
                    }
                </ul>
                {// 구분값이 "영화"인 경우 포스터출력
                  gubun == "영화" &&
                  wList.map(v=>
                    <MakeImage 
                      isrc={v.poster}
                      ialt={v.mtit}
                      icss={{width:"16%",marginLeft:"0.5%"}}
                    />
                  )
                }
            </div>

              /*배열변수.map() 메서드사용!
              map메서드는 원래 새로운배열을
              현재 자리에 출력하는 용도임
              그러나 리액트는 이것을 변경하여
              표현식안에서 출력시
              태그JSX 형식으로 변환해 줌!
              JS 처럼 map().join('')처리
              불필요!!!*/  
            }

            {/* 배열개수가 0인 경우 다른 것 출력하기 */}
            {
                wList.length == 0 && (
                    <h2>아직 개발자 {gubun} 리스트가 업데이트 되지 않았습니다!</h2>
                )
            }

        </React.Fragment>
    );
} /////////// WishList 컴포넌트 ////////

// 음식 배열값이 있는 경우 출력하기 /////
ReactDOM.render(
<WishList wList={foods} gubun="음식" />, root[2]);

// 음식 배열값이 없는 경우 출력하기 /////
ReactDOM.render(
<WishList wList={[]} gubun="음식" />, root[3]);


/* 
[ 출력형태 ]
    👨‍🔧개발자👩‍🔧가 좋아하는 영화
    개발자가 좋아하는 영화는 최근 몇년간 아래와 같습니다!
    2021년도 영화1
    2022년도 영화2
    2023년도 영화3
    ... 여기는 영화포스트 나열하기 ...
*/

// 제목 컴포넌트, 리스트 컴포넌트, 위시리스트 컴포넌트 모두 재활용한다! //

// 영화 위시리스트 출력하기 : 배열값이 있는 경우 ///
ReactDOM.render(
<WishList wList={movs} gubun="영화" />, root[4]);

// 영화 위시리스트 출력하기 : 배열값이 없는 경우 ///
ReactDOM.render(
<WishList wList={[]} gubun="영화" />, root[5]);

/********************************************************** 
    4. 조건 연산자(삼항연산자)를 사용하여 조건부 랜더링하기 
      비?집:놀이동산
**********************************************************/
// 명화 데이터
const workUrl = {
  피카소:
    "https://m.theartin.net/web/product/big/201907/30c5a0fdd153bfdfdc8f19b2f4166fa8.jpg",
  모네: "https://dimg.donga.com/wps/NEWS/IMAGE/2015/12/11/75316598.3.jpg",
};

// 개발자가 좋아하는 그림(명화) 찍기

// 4-1. 작가타이틀과 그림찍기 컴포넌트 //////
// 구성 : 작가이름 + 작품이미지
// 데이터 : 작가이름 (painter)
//          이미지경로(작가이름의 객체 - workUrl)
//          작품명(wname)
function MakePainting({ painter, wname }){
  // painter - 작가이름
  // wname - 작품명

  // 코드리턴구역 ///////
  return(
    <div>
      {/* 작가이름 타이틀 */}
      <h2>{ painter }</h2>
      {/* 이미지 태그 출력 */}
      <img 
        src={workUrl[painter]} 
        alt={painter + "의 작품:" + wname} 
        style={{width:"400px"}}
        title={wname}
      />
    </div>
  );


} ///////// MakePainting 컴포넌트 ///////////


// 4-2. 전체출력 컴포넌트 //////////////
// 구성 : 전체타이틀(SetTitle 컴포넌트) + 변경버튼
//      + 작가타이틀과 그림출력(MakePainting 컴포넌트)
// 특이사항 : 변경버튼 클릭시 MakePainting 컴포넌트의
// 데이터를 변경하여 다시 출력하도록 함!(Hook사용!)
function ShowLikePainter({isChange}){
  // isChange - 기존작가를 변경하는 여부 전달변수
  // true / false -> 이 값에 따라 출력작가가 변경됨!

  // [ 후크 상태관리 변수 만들기 ] ////
  const [result, setResult] = React.useState(isChange);
  // result 변수의 초기값은 컴포넌트에 보낸 변수값으로 셋팅!
  // result 는 읽기 전용변수
  // setResult 는 쓰기 전용메서드 -> setResult(값)

  // 리턴 코드구역 ////
  return (
    <React.Fragment>
      {/* 1. 큰제목 */}
      <SetTitle title="명화" />
      {/* 2. 변경버튼
        -> 클릭시 상태관리변수를 업데이트하여
        상태변수를 사용하고 있는 곳이 변경되게한다!
        !result 는 true값이면 false, false값이면 true
      */}
      <button
        onClick={()=>{
          setResult(!result);
          console.log('리랜더링전result변수값:',result);
        }}
        style={{
          fontSize: "30px",
          padding: "10px",
          fontWeight: "bold",
          backgroundColor: result?"blue":"red",
          color: result?"aqua":"yellow"
        }}
      >작가변경!!!</button>
      {/* 3. 작품출력 */}
      {
        // 삼항연산자로 isChange 값에 따라 출력변경하기
        // -> 상태관리변수 result를 사용하여
        // result값이 변경될때 컴포넌트가 갱신되도록 한다!

        // isChange ? -> 처음한번만 셋팅
        result ? // -> 변경될때 마다 갱신!
        <MakePainting 
          painter="모네"
          wname="양산을 쓴 여인"
        /> :
        <MakePainting 
          painter="피카소"
          wname="우는여인"
        />
      }
    </React.Fragment>
  );

} /////////// ShowLikePainter 컴포넌트 //////////

// 4-3. 컴포넌트 호출하기 ////////
ReactDOM.render(
  <ShowLikePainter isChange={false} />, root[6]
);


/********************************************************* 
    [ 리액트 훅크 : React Hook ]
    - 일반적으로 리액트에 사용되는 변수는 처음에 
    컴포넌트에 전달되어 초기 셋팅에 활용된다.
    그런데 이 변수가 변경될 경우 컴포넌트의 변경이
    자동적으로 이루어지지 않는다!
    이런 종류의 변수 업데이트가 가상돔과 실제돔에
    바로 반영되도록 실시간 감시역할을 하는
    리액트의 기술내용을 담고 있는 것이 후크다!

    1. 목적 : 어떤 특정 데이터가 변경될때
        이 데이터를 할당하여 사용하고 있는 컴포넌트의
        변경이 반영되도록 하고자 할때 후크를 사용한다!

    2. 구현방법:
        1) 노드JS SPA 개발환경에서는 상단에 
        import useState를 한다!
        -> CDN 에서는 React.useState 로 사용함!
        2) 코딩법 : useState() 메서드사용
            배열변수 = useState(초기값)
            (CDN) -> 배열변수 = React.useState(초기값)

            ((일반형))
            const [변수명,set변수명] = useState(초기값)
            -> set변수명 작성시 변수명 첫글자는 대문자로 씀
            예) 변수명 myname -> setMyname
            -> set변수명(값) : 메서드형태로 후크변수의 값을 셋팅함!

        3) 작동원리 
            - useState에 쓴 초기값이 배열변수 첫번째변수에 할당된다!
            - 코드에서 set변수명에 값을 할당하면
            useState메서드가 이것을 체크하여 이 변수를 사용한
            다른부분의 업데이트를 실행한다!
            예컨데 컴포넌트 내부에 사용한 경우 컴포넌트가 업데이트 됨!
        4) 사용결과
            - 별도의 메서드 호출없이 후크 상태변수를 사용한 곳이
            자동으로 변경될대마다 다시 갱신되는 것을 확인 할 수 있다!

        -> 뷰JS의 리액티브 데이터와 매우 유사함!

*****************************************************************/


