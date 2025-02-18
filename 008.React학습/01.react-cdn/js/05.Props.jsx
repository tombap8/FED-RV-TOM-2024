// 05.리액트 Props

// 나의 함수 불러오기
import myFn from "./my_function";

// 자동차정보 불러오기
import { carInfo, carImage } from "./car_data";

// console.log(carInfo, carImage);

/********************************************************** 
    [ 리액트 Props ]

    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 태그 속성형태를 통해서 구성요소에 전달된다
    3. 속성명은 일반 변수명 작명스타일로 지어준다!(캐믈케이스)
    4. 컴포넌트에서 속성받기
      (1) 속성받을 변수를 하나만 쓸 경우 :  변수.속성명
      (2) 전달 객체값을 구조분해 할당으로 직접쓸 경우
        {변수명,변수명,...}
        -> 보내준 속성명과 같은 이름의 변수로 설정함!

        (( 구조분해할당으로 받을 경우의 장점 ))
        특정 속성명을 지정하는 효과가 있어서
        컴포넌트 호출시에 이 이름으로 속성명을 설정하며
        몇개의 어떤 속성을 받는지 개발자가 
        명시적으로 알 수 있다!
**********************************************************/

// 자기차를 소개하는 컴포넌트1 /////////////////
function IntroCar({brand, modelNum}){
    // 전달속성값 : 
    // brand - 자동차브랜드명
    // modelNum - 데이터 배열순번

    /*********************************** 
        carInfo객체 데이터구조 : {[{}]}
        carInfo = {
            자동차브랜드명: [
                {
                    color: 자동차색,
                    model: 모델명,
                    opt: 이미지변경CSS옵션                
                }
            ]
        }
    ***********************************/

    // 구체적인 자동차 정보를 셋팅하여 변수에 할당!
    let setInfo = carInfo[brand][modelNum];
    console.log('선택객체확인:',setInfo);

    // 코드리턴 구역 /////////////
    return(
        <React.Fragment>
            <h2>나의 차는 {brand}입니다!</h2>
            {/* 추가질문 컴포넌트호출 */}
            <AskMoreInfo
                brand={brand}
                model={setInfo.model}
                color={setInfo.color}
                opt={setInfo.opt}
            />
        </React.Fragment>
    );

} /////////// IntroCar 컴포넌트 ////////////

// 추가질문 컴포넌트 ///////////////////
function AskMoreInfo({brand, model, color, opt}){
    // brand - 자동차브랜드명
    // model - 자동차 모델명
    // color - 자동차 색상
    // opt - CSS변경옵션
    return(
        <React.Fragment>
            <h2>더 자세히 말씀해주세요?!</h2>
            {/* 디테일 정보구성 컴포넌트 호출하기 */}
            <DetailCarInfo
                brand={brand}
                model={model}
                color={color}
                opt={opt}
            />
        </React.Fragment>
    );
} //////////// AskMoreInfo 컴포넌트 ///////////

// 디테일 정보구성 컴포넌트 ////////////////
function DetailCarInfo({ brand, model, color, opt }) {
    // info는 세부적인 모델정보 객체가 들어온다!
    // 전달속성은 model(모델명), color(차색), opt(css옵션)
    console.log("CSS옵션객체:", opt);
  
    // 객체값 추가는 (객체변수.속성명=값)
    opt.width = "600px";
    // 실제 CSS변수형 속성명으로 사용해야 효과있음
  
    return (
      <React.Fragment>
        <h2>
          모델명은 {model}이고 자동차색은 {color}입니다!
        </h2>
        {/* 이미지 출력 */}
        <img src={"./images/" + carImage[brand]} alt={brand} style={opt} />
        {/* 리액트 style속성의 값으로 객체를 CSS속성에
        맞게 주면 인라인코드로 CSS를 셋팅할 수 있다! */}
      </React.Fragment>
    );
  } ////////// DetailCarInfo 컴포넌트 ////////////////

  // 전체 자동차 브랜드 소개 컴포넌트 /////////////
function ShowBrandCar({ brand, modelNum }) {
    return (
      <React.Fragment>
        <h1>당신의 차는 무슨차죠?</h1>
        <IntroCar brand={brand} modelNum={modelNum} />
      </React.Fragment>
    );
} ////////// ShowBrandCar 컴포넌트 ////////////

// 화면 출력하기 /////////////////
//ReactDOM.render(출력코드,출력대상)
ReactDOM.render(
    <div>
      <ShowBrandCar brand="기아레이" modelNum={2} />
      <ShowBrandCar brand="현대제네시스" modelNum={0} />
      <ShowBrandCar brand="기아레이" modelNum={0} />
      <ShowBrandCar brand="현대제네시스" modelNum={1} />
      <ShowBrandCar brand="기아레이" modelNum={1} />
      <ShowBrandCar brand="현대제네시스" modelNum={2} />
    </div>,
    myFn.qs("#root1")
  );
