// DC.com 날씨위젯 컴포넌트 - Weather.jsx
// -> 클래스형 컴포넌트로 구현!!!

// 날씨 컴포넌트 SCSS
import { Component } from "react";
import "../../css/modules/weather.scss";

// 클래스형 컴포넌트는 기본적으로 Component 를
// 상속받아 구현한다!!!
// extents 부모클래스명
class Weather extends Component {
  //  생성자 메서드는 호출하지 않아도 자동생성됨!
  // -> constructor(){}
  // 이것이 클래스의 인스턴스를 생성해준다!
  constructor(props) {
    // 부모 Component 에게 전달변수를 전달한다!
    // 부모 클래스는 super 키워드로 호출!
    super(props);
    // 생성자함수 구역에 맴버변수 즉, 클래스 속성을
    // 만들면 이것이 상태변수가 된다!
    // 클래스 내부 속성은 this 키위드를 사용함!
    // 받아온 날씨정보를 셋업할 객체임!
    // state 이름의 상태변수에 setState()로 셋팅함
    this.state = {
      // 1. 기온
      temp: "",
      // 2. 설명
      desc: "",
      // 3. 날씨 아이콘
      icon: "",
      // 4. 정보로딩여부
      loading: true,
      // 5. 도시명
      city: "",
    }; // state 객체 셋팅 ////
  } //////// constructor ////

  // 컴포넌트 생성후 날씨정보 조회하여 화면에 보이기
  // 함수형 컴포넌트에서는 랜더링후는 useEffect()이지만
  // 클래스형은 componentDidMount() 메서드 사용함!

  // 참고) 함수형 컴포넌트의 후크인 useEffect()는
  // 클래스형 컴포넌트의 아래 3가지가 통합된 것이다!
  // (1) componentDidMount : 컴포넌트 생성후
  // 후크비교 -> useEffect(()=>{},[]) : 처음 한번만 실행
  // (2) componentDidUpdate : 컴포넌트 업데이트후
  // 후크비교 -> useEffect(()=>{}) : 매번 리랜더링 후 실행
  // (3) componentWillUnmount : 컴포넌트 소멸후
  // 후크비교 -> useEffect(()=>{return(()=>{})},[]) :
  // 소멸자로 소멸후 실행

  // 컴포넌트가 마운트 되었을때 실행하는 메서드는?
  // -> componentDidMount(){}
  componentDidMount(){
    // [ 날씨조회 정보 사이트 ]
    // https://openweathermap.org/
    
  } //////////// componentDidMount /////////////






} /////// Weather 컴포넌트 ////////

// 내보내기 ///
export default Weather;
