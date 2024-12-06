// JS6-1.Date객체와 Math객체 JS

// 나의 함수 불러오기
import myFn from "./my_function.js";

// 1. 요구사항: 화면에 시간을 찍으시오
// 2. 대상: .tt
const tt = myFn.qsa(".tt");
// console.log('대상:',tt);

// 3. 날짜/시간찍기

// 시간날짜함수 최초호출
showTime();

/***************************** 
    함수명 : showTime
    기능: 날짜와 시간을 찍어준다
*****************************/
function showTime() {
  // 호출확인
  console.log("시간찍어~!!");

  // 1. 날짜객체 생성하기 : Data객체
  const today = new Date();

  // 월을 부르는 이름과 매칭하기
  const monthName = [
    "하하월",
    "파파월",
    "카카월",
    "토토월",
    "코코푸월",
    "싹스월",
    "칸단월",
    "차즈민월",
    "라우딘월",
    "차호호월",
    "테테월",
    "상그리아월",
  ];

  // 요일 이름 배열만들기
  const weekName = ["일", "월", "화", "수", "목", "금", "토"];

  // 2. 년도/월/일/요일 찍기

  // (1) 년도
  tt[0].innerText = today.getFullYear();
  // 참고로 getYear()는 1900년을 뺀 년도가 나옴

  // (2) 월
  tt[1].innerText = today.getMonth() + 1;
  //   tt[1].innerText = monthName[today.getMonth()];
  // 월정보는 나라마다 부르는 이름이 달라서 순번으로 리턴함!
  // 그래서 숫자로 출력할때는 1을 더해준다!

  // (3) 일
  tt[2].innerText = today.getDate();

  // (4) 요일
  tt[3].innerText = weekName[today.getDay()];
  // 요일도 나라마다 부르는 이름이 다르므로 순번을 리턴함!
  // 단, 일요일부터 시작하며 시작번호는 0번이다!

  // 3. 시/분/초 찍기
  let H = today.getHours();
  let M = today.getMinutes();
  let S = today.getSeconds();

  // 테스트용 시분초 할당
  H = 16;
  M = 7;
  S = 5;

  // (1) 오전/오후
  //   tt[4].innerText =

  // -> 시/분/초 공통으로 한자리수는 앞에 "0"을 넣어준다
  // 0넣기 함수 만들기 ///
  const addZero = x => x < 10 ? '0' + x : x;

  // (2) 시
  // -> 24시간제로 표시됨 그래서 12초과시 12를뺌
  if (H > 12) H = H - 12;
  tt[5].innerText = addZero(H);

  // (3) 분
  tt[6].innerText = addZero(M);

  // (4) 초
  tt[7].innerText = addZero(S);
} /////////// showTime 함수 /////////////

/*************************************** 
    [ Math 객체 ]
    - 수학객체로써 다른 객체와 달리
    new키워드 없이 바로 사용할 수 있게 설계됨
    - 이런객체를 정적객체(Static Object)라고함
    -> 정적객체들!
        Array(), Object(), Math()
    ______________________________

    [ 주요 Math 객체의 메서드들 ]
    Math.min(값들) - 최소값
    Math.max(값들) - 최대값
    Math.round(실수값) - 반올림
    Math.floor(실수값) - 내림
    Math.ceil(실수값) - 올림
    Math.abs(양수나 음수값) - 절대값
    ______________________________

    Math.random() - 난수발생
    -> 0~1  사이의 소수점값 17자리수

***************************************/
