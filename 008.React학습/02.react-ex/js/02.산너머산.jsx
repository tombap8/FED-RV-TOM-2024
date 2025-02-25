// 산너머산 메인 컴포넌트

// 이야기 서브컴포넌트 불러오기
import 이야기 from "./components/story";

/********************************************** 
    1. props로 데이터를 전달하여 제목출력하기 
    -> props Down으로 데이터를 하위 컴포넌트에 전달
**********************************************/

// 스타일 객체
const cssObj = {
  padding: "20px",
  borderRadius: "10px",
  width: "60%",
  margin: "20px auto",
  textAlign: "center",
  fontSize: "40px",
  color: "#fff",
  backgroundImage: "linear-gradient(to bottom,skyblue,navy)",
};

// 메인 컴포넌트 ////////////
function MyHome() {
  return <MyRoom aa="세계의 산" bb="🌄" cc={cssObj} />;
} /////// MyHome 컴포넌트 ///////////////

function MyRoom({ aa, bb, cc }) {
  return <MyBag cc={aa} dd={bb} cdata={cc} />;
} /////// MyRoom 컴포넌트 ///////////////

function MyBag({ cc, dd, cdata }) {
  return <MyEnd ee={cc} ff={dd} cdata={cdata} />;
} /////// MyBag 컴포넌트 ///////////////

function MyEnd({ ee, ff, cdata }) {
  return <div style={cdata}>🌞{ee + ff}</div>;
} /////// MyEnd 컴포넌트 ///////////////

// 화면출력 ///////////
ReactDOM.render(<MyHome />, document.querySelector("#root1"));

/****************************************************** 
    2. 컨텍스트 프로바이더를 사용하여 산정보 셋팅하기
******************************************************/

// 메인 컴포넌트 ////////////
function 큰집() {
  // 리액트 상태변수 셋팅
  const [mtName, setMtName] = React.useState("백두산");

  // 산전체박스CSS
  const mtBoxCss = {
    position: "relative",
    padding: "20px",
    border: "10px dotted skyblue",
    borderRadius: "10px",
    width: "60%",
    margin: "20px auto",
    textAlign: "center",
  };
  // 산정보박스CSS
  const mtInfoBoxCss = {
    position: "absolute",
    width: "50%",
    bottom: "105px",
    left: "20px",
    padding: "15px",
    fontSize: "16px",
    color: "#fff",
    textShadow: "0 0 5px #000",
    textAlign: "left",
    borderRadius: "20px",
    backgroundColor: "rgb(0 0 0 / .4)",
  };

  // 코드 리턴구역 ///////
  return (
    <할아버지 mtName={mtName} mtBoxCss={mtBoxCss} mtInfoBoxCss={mtInfoBoxCss} />
  );
} ////////////// 큰집 ///////////////////

///// 서브컴포넌트 ////////
function 할아버지({ mtName, mtBoxCss, mtInfoBoxCss }) {
  // 코드 리턴구역 ///////
  return (
    <아버지 mtName={mtName} mtBoxCss={mtBoxCss} mtInfoBoxCss={mtInfoBoxCss} />
  );
} ////////////// 할아버지 ///////////////////
function 아버지({ mtName, mtBoxCss, mtInfoBoxCss }) {
  // 코드 리턴구역 ///////
  return (
    <아들 mtName={mtName} mtBoxCss={mtBoxCss} mtInfoBoxCss={mtInfoBoxCss} />
  );
} ////////////// 아버지 ///////////////////
function 아들({ mtName, mtBoxCss, mtInfoBoxCss }) {
  // 코드 리턴구역 ///////
  return (
    <손녀 mtName={mtName} mtBoxCss={mtBoxCss} mtInfoBoxCss={mtInfoBoxCss} />
  );
} ////////////// 아들 ///////////////////
function 손녀({ mtName, mtBoxCss, mtInfoBoxCss }) {
  // 코드 리턴구역 ///////
  return (
    <이야기 mtName={mtName} mtBoxCss={mtBoxCss} mtInfoBoxCss={mtInfoBoxCss} />
  );
} ////////////// 손녀 ///////////////////

///// 산정보 내용 출력하기 //////
ReactDOM.render(
  <큰집 />,
  document.querySelector("#root2")
);
