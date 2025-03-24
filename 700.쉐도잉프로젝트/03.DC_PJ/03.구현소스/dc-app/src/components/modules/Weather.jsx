// DC.com 날씨위젯 컴포넌트 - Weather.jsx
// -> 클래스형 컴포넌트로 구현!!!

// 날씨 컴포넌트 SCSS
import { Component } from 'react';
import '../../css/modules/weather.scss';

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

} /////// Weather 컴포넌트 ////////

// 내보내기 ///
export default Weather;