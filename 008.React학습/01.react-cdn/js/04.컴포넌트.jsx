// 04.리액트 컴포넌트 JSX

// 내함수 불러오기
import myFn from "./my_function";

/************************************************* 
    [ 리액트 컴포넌트 ]
    - 컴포넌트는 HTML요소를 반환하는 함수다!

    [ 특징 ]
    1. 컴포넌트는 독립적이고 재사용이 가능한 코드집합
    2. JS함수와 비슷하지만
        HTML코드 반환이 필수라는 점이 다름!
    3. 컴포넌트는 다음 2가지로 생성가능함
        1) 클래스형 컴포넌트
        2) 함수형 컴포넌트
        (-> 우리는 함수형 컴포넌트에 집중할 예정!)

    -> 클래스형 컴포넌트는 리액트 초중기에 주로
    사용되었으나... React 16.8버전에서 Hooks와
    함께는 더 이상 사용되지 않는다!
    Hooks는 함수형 컴포넌트에서만 사용가능하다!

    ____________________________________________

    [ 첫번째 컴포넌트 만들기! ]
    - 리액트 컴포넌트 이름은 반드시 첫글자가 대문자로 만든다!
    (안지키면 적용안됨!!!)

    [ 클래스형 컴포넌트 ]
    클래스형 컴포넌트에서는 
    extends React.Component 상속문이 포함돼야함!

    -> 컴포넌트에서도 메서드가 필요함
    render() 메서드는 HTML을 반환함
    (함수형 컴포넌트의 return 키워드를 
        사용할 수 있는 역할을 함!)

*************************************************/
/// [ 클래스형 컴포넌트 만들기 ] /////
class GoghWork extends React.Component {
  // 클래스형 컴포넌트에서는 render() 메서드로
  // HTML 코드를 리턴한다! 내부에 return 구문필요!
  render() {
    // html코드 리턴
    return (
      <React.Fragment>
        <h2>안녕! 나는 고흐그림이야!</h2>
        <MakeImage isrc="01.png" ialt="고흐그림" />
        {/* <img src="./images/01.png" alt="고흐그림" /> */}
      </React.Fragment>
    );
  } //// render 메서드 ///
} ////// GoghWork 클래스형 컴포넌트 ////

// 전체 출력요소 대상 선정하기 ////
const target = myFn.qsa(".root");

// 첫번째 .root에 고흐출력하기 ///
// ReactDOM.render(컴포넌트,출력요소)
ReactDOM.render(<GoghWork />, target[0]);

// [ 함수형 컴포넌트 만들기 ] //////
// 첫글자는 대문자!!
function IronMan() {
  return (
    <React.Fragment>
      <h2>안녕! 나는 아이언맨이야!</h2>
      <MakeImage isrc="ab1.jpg" ialt="아이언맨" />
      {/* <img src="./images/ab1.jpg" alt="아이언맨" /> */}
    </React.Fragment>
  );
} /////// IronMan 함수형 컴포넌트 ///////

// 두번째 .root에 출력하기 ////
ReactDOM.render(<IronMan />, target[1]);

// [ 이미지생성 공통 컴포넌트 ] ////
// function MakeImage({ isrc, ialt }) {
function MakeImage(props) {
  // {ialt, isrc} - 구조분해할당
  // 객체가 들어올때 해당 속성명으로 받으면된다!
  return (
    <figure>
        <img src={"./images/" + props.isrc} alt={props.ialt} />
        <figcaption>{props.ialt}</figcaption>
    </figure>

  );
  
} ////////// MakeImage 컴포넌트 ///////
