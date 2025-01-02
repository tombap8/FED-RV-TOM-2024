// Racing PJ 메인 JS - main.js

// DOM 메서드 모듈
import myFn from "./my_function.js";

// 결과 메시지 제이슨 불러오기
import msgTxt from "./data_racing.json" with { type: "json" };
// console.log(msgTxt);

// (( 제이슨 호출형식 ))
// import 내가지은제이슨담을변수
// from 제이슨파일경로
// with {type:'json'}

/********************************************** 
            [ 게임 기능정의 ]
    _________________________________

    1. 게임룰: 거북버튼 클릭하여 거북을
        왼쪽에서 오른쪽으로 이동함
        이때 토끼는 자동으로 이동하여
        결승선에 먼저 도달하는 레이서가 승리함
    2. 토끼의 이동속도는 레벨로 설정함
    3. 결승선 도착은 둘 중 하나가 먼저
        도착할 경우 판별함수에서 결과를
        화면에 출력한다.
    4. 포커스가 버튼에 갈 경우 마우스가
        아닌 키보드 버튼으로 조작할 수 없게함
        (마우스만 사용하도록 함!)
    5. 기본적으로 거북이동버튼 클릭시
        토끼는 자동으롤 작동됨!
    6. 토끼이동버튼은 토끼만 미리 작동가능
    7. 처음으로 버튼은 전체를 리셋함
    
**********************************************/

// 1. 대상선정 ///////////////////
// (1) 거북 : #t1
const t1 = myFn.qs("#t1");

// (2) 토끼 : #r1
const r1 = myFn.qs("#r1");

// (3) 버튼 : #btns a
const btns = myFn.qsa("#btns a");

// (4) 레벨 : #level
const level = myFn.qs("#level");

// (5) 메시지박스 : #msg
const msg = myFn.qs("#msg");

// (6) 토끼, 거북 위치값 변수
let r1pos = 0,
  t1pos = 0;
// 토끼위치 : r1pos / 거북위치 : t1pos

// (7) 거북이동값 상수
const T1_NUM = 16;

// (8) 결승선 위치 상수
const FINAL_NUM = 650;

// (9) 거북작동멈춤 상태변수
let t1Stop = false;

// console.log('대상:',t1,r1,btns,level,msg);

// 2. 이벤트 설정하기 ////////////
// 대상: 버튼 .bnts -> btns변수
btns.forEach((el) => myFn.addEvt(el, "click", goGame));

// 3. 함수 만들기 ///////////////////
/*********************************** 
    함수명: goGame
    기능: 버튼별 기능분기
***********************************/
function goGame() {
  // (1) 클릭된 버튼 텍스트 읽기
  let btxt = this.innerText;
  //   console.log("고고씽~!", btxt);

  // (2) 기능별 분기하기

  // (2-1) '토끼출발'일경우
  if (btxt === "토끼출발") {
    // 토끼자동이동함수 호출
    goR1();
  } /// if ///

  // (2-2) '거북출발'일경우
  else if (btxt === "거북출발") {
    // 1) 거북멈춤 상태값이 true 이면 함수나가!
    if (t1Stop) return;

    // 2) 거북 위치값 증가
    t1pos += T1_NUM;
    // t1pos += 100;
    // t1pos = t1pos + 100;

    // 3) 거북요소 위치이동값 반영
    t1.style.left = t1pos + "px";

    // 4) 거북버튼 포커스 이동하여 엔터버튼 사용못하게함!
    this.blur();
    // 초점이 들어가게 하는 메서드 : focus()
    // 초점이 빠지게 하는 메서드 : blur()

    // 5) 이때 토끼자동호출
    goR1();
  } /// else if ///

  // (2-3) '처음으로'일경우
  else if (btxt === "처음으로") {
    // 페이지 리로드하기
    location.reload();
  } /// else if ///
} /////////// goGame 함수 ////////////

/*********************************** 
 함수명: goR1
 기능: 토끼자동이동(인터발함수)
 ***********************************/
// 인터발지우기용 변수
let autoI;
// console.log('autoI할당전:',autoI);
// -> undefined는 if문에서 false처리됨!
function goR1() {
  //   console.log("토끼자동이동!",autoI);

  // 인터발변수에 할당하여 멈출수 있게함
  // 이때 변수할당전에는 변수가 undefined 이므로
  // if문으로 한번 할당후엔 실행 못하게 막아준다!
  if (!autoI) {
    // 할당전 false일때 !(Not연산자)로 true로 변경
    // 인터발호출
    autoI = setInterval(() => {
      // 1) 토끼 위치값 변수 1씩증가
      r1pos++;
      // console.log(r1pos);

      // 2) 토끼 위치값 요소에 반영
      r1.style.left = r1pos + "px";

      // 3) 승자판별함수 호출
      whoWinner();
    }, level.value);
    // -> 레벨옵션값을 읽어와서 넣어줌
    // -> 레벨1 ~ 레벨7 : 10 ~ 4

    // 레벨 적용위해 드롭다운 선택값 읽어오기
    console.log("레벨옵션값:", level.value);
  } /// if ///
} ///////// goR1함수 //////////////////

/***************************************** 
    함수명: whoWinner
    기능: 기준값 보다 레이서위치값이 큰경우
        승자를 판별하여 메시지를 보여준다!
*****************************************/
function whoWinner() {
  //   console.log("승자판별!",
  //     '\n토끼위치:',r1pos,
  //     '\n거북위치',t1pos);

  // 1) 토끼 / 거북 위치값이 기준값 이상일때
  // -> 토끼 인터발 멈추기 + 거북 클릭작동 막기
  if (r1pos >= FINAL_NUM || t1pos >= FINAL_NUM) {
    // (1) 토끼야 멈춰라!
    clearInterval(autoI);

    // (2) 거북아 멈춰라! (거북멈춤상태값 true로 변경!)
    t1Stop = true;

    // 승자판별변수(메시지때문에씀 : 토끼/거북/비김)
    let winner;

    // (3) 승자판별하기
    if (r1pos > t1pos) winner = "토끼";
    else if (t1pos > r1pos) winner = "거북";
    else winner = "비김";

    // (4) 선택된 객체의 배열값 개수로 랜덤수 만들기
    let rdmNum = Math.floor(Math.random() * msgTxt[winner].length);

    // (5) 선택된 메시지 변수에 담기
    let lastMsg = msgTxt[winner][rdmNum];

    console.log("결과:", winner, msgTxt[winner], rdmNum, lastMsg);

    // (6) 메시지 박스에 메시지 넣기
    msg.innerText = lastMsg;

    // (7) 메시지 박스 보이기 + 커버보다위(z-index)
    msg.style.display = "block";
    msg.style.zIndex = "100";

    // (8) 전체 반투명 커버 암전주기
    myFn.qs(".cover").style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: black;
        opacity: .5;
        z-index: 99;
    `;

    // (9) 버튼박스 위로 올리기
    myFn.qs("#btns").style.zIndex = 200;
  } ////// if ///////
} ///////// whoWinner 함수 ////////////////

/**************************************** 
    [ 내가 원하는 랜덤수 만들기 ]
    1. Math.random() 
    -> 0~1사이 소수점 16자리 랜덤수 생성됨

    2. 내가원하는 1~몇까지의 랜덤수 만들기
    (1) Math.random() * 원하는 최대수
    -> 0~원하는수보다 1작은수까지 랜덤수발생~
    (2) 올림처리하여 1~원하는수 를 만들어준다!
    -> Math.ceil(Math.random() * 원하는 최대수)
    -> 만약 0부터 1작은 최대수를 만들고싶으면
    내림처리하면된다! Math.floor()
    (3) 중간범위의 랜덤수를 만들고자 할때는
    1부터 최대수를 구하고 특정 시작수를 더해주면된다!
    예) 4~12 랜덤수는 
    Math.ceil(Math.random() * 8)+3
****************************************/

// console.log('Math.random():',
// Math.random());
// console.log('Math.random()*8:',
// Math.random()*8);
// console.log('Math.ceil(Math.random()*8):',
// Math.ceil(Math.random()*8));
// console.log('4~12 랜덤수:',
// Math.ceil(Math.ceil(Math.random() * 8)+3));
