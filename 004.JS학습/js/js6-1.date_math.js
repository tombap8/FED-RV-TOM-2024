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

// 1초간격으로 계속 호출셋팅하기!
setInterval(showTime, 1000);

// 참고: canvas를 이용한 아날로그 시계
// https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_clock_start

/***************************** 
    함수명 : showTime
    기능: 날짜와 시간을 찍어준다
*****************************/
function showTime() {
  // 호출확인
  //   console.log("시간찍어~!!");

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
  //   H = 23;
  //   M = 30;
  //   S = 50;

  // (1) 오전/오후
  tt[4].innerText = H < 12 ? "오전" : "오후";

  // -> 시/분/초 공통으로 한자리수는 앞에 "0"을 넣어준다
  // 0넣기 함수 만들기 ///
  const addZero = (x) => (x < 10 ? "0" + x : x);

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

// 난수 발생시키기
let rdm = Math.random();
console.log("난수:", rdm);

// 1~7 사이 난수 발생하기
// 방법 :
// 1. 난수에 발생할 최대수를 곱한다!
// 결과: 0 ~ 최대수-1
rdm = rdm * 7;
console.log("난수*7:", rdm);
// 2. 0부터 생기므로 올림처리한다!
// 올림 메서드는 ceil()
// 만약 0부터 필요하면 내림처리함 -> floor()
console.log("난수*7 올림:", Math.ceil(rdm));
console.log("난수*7 내림:", Math.floor(rdm));

// 중간 난수는 어떻게하나?
// 4~12 사이 난수 만들기
// 우선 두 수를 빼고 (12-4=8)
// 최대수는 8일까?
// 올림을 하므로 1을 더해서 9를 만듬
rdm = Math.random() * 8;
console.log("난수*9 올림:", Math.ceil(rdm));
// 시작수 - 1 = 4 - 1 = 3
// 3을 더함!
console.log("난수*9 올림+3:", Math.ceil(rdm) + 3);

/**************************************** 
    [ 내가 원하는 난수 만들기 ]

    1. 먼저 난수를 발생시킨다!
    Math.random()

    2. 1부터 원하는 최대수일 경우 최대수를 곱한다
    Math.random() * 최대수

    3. 원하는 범위의 난수를 올림처림함
    Math.ceil(Math.random() * 최대수)

    ________________________________

    [ 중간 범위의 난수 만들기 ]

    1. 1부터 최대수 랜던수를 먼저구한다
    Math.random() * 최대수

    2. 원하는 범위의 시작수 만큼 더함
    Math.ceil(Math.random() * 최대수) + 시작수만큼

    (만약 0부터 시작수로 하면 내림을 적용!
    -> Math.floor())
    ___________________________________

    예) 4~9 사이의 난수 구하기 : 1~6먼저구함
    -> 최대수는 6, 시작수 만큼 더할 수는 3
    Math.ceil(Math.random() * 최대수) + 시작수만큼
    Math.ceil(Math.random() * 6) + 3
    ________________________________

    [ 중간범위 수 계산 ]
    작은수 ~ 큰수
    1. 최대수 = 큰수 - 작은수 + 1
    2. 시작수차이 = 작은수 - 1;


****************************************/

// 이미지 웹경로 배열
const rimg = [
  "https://img.etnews.com/photonews/2110/1461216_20211007085904_466_0001.jpg",
  "https://i.namu.wiki/i/bFpYClpzX-ErL1Kdad69t09fhPPeVb2VwOB_qpH-9qxQ3Tx2Nz9zVIiLPWSMkvnVG5XWnUdQM5hHrGZ4cWneZA.webp",
  "https://img.imbc.com/adams/Program/202111/132804027350463581.jpg",
  "https://image.ytn.co.kr/general/jpg/2021/0925/202109251350012465_d.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MDhfMTE0%2FMDAxNzEyNTQ1NzM5NzY4.CV2JuRLzs91cZq5shllTYdMDo3I1R_4OH1dI_YXcMQUg.f4SqGMxPZxxJK2pM7tWUUACuHuyCc4MagUl-lIgk8ugg.JPEG%2F0.jpg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5772%2F2024%2F05%2F13%2F0000035704_001_20240513113602787.jpg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MTlfMTYy%2FMDAxNzEzNTI2MjE5Mzcy.Mys4WMAjK_r6yuPhS51-zQDbUrqOxhceeEYtB5dtKsYg.Sdm58bbJDhJzZ6fhRnPEN2roaXbatSz16IDXe5NhcM0g.JPEG%2F%25BC%25F6%25BB%25E7.JPG&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MDRfMjYy%2FMDAxNzE0Nzk1MjExNzQw._LK_QpLL0eoy7AVSDfW41pO5Fiva-7wQYvgFjkKj5UIg.TK26jlIQKHLgGImBnWxH8LKnDWoXRmvT2YQGSyV9m2Ig.JPEG%2FUPEqlo.jpg&type=sc960_832",
];

// 배열개수
const rimgCnt = rimg.length;

// 1. 요구사항 : 웹경로 이미지를 화면에 넣고 랜덤하게
// 이미지를 칼라로 약간커지게 클래스 on을 주어서 변경함!

// 2. 대상선정: .imbx
const imbx = myFn.qs(".imbx");

// 3. 이미지넣기
// 배열만큼 이미지 넣기

// forEach로 배열을 먼저 사용하여 이미지 넣기
rimg.forEach((v) => {
  imbx.innerHTML += `
        <div>
            <img src="${v}" alt="드라마 포스터">
        </div>
    `;
});

// 4. 랜덤 처리 대상 div 선택하기
const target = myFn.qsa(".imbx div");
console.log("랜덤대상:", target);

// 전에 발생한 난수 저장변수(함수호출전 선언해야함!)
let beNum = 99999;
// 초기값은 해당 난수범위외의 수(처음에 통과!)

// 함수최초호출
randomAddOn();
// 인터발호출
setInterval(randomAddOn, 1500);

// 5. 랜덤 처리함수 만들기 ///////
function randomAddOn() {
  // 1. 먼저 난수를 발생시킨다!
  let rdm = Math.floor(Math.random() * rimgCnt);
  console.log("난수:", rdm);

  // 2. 전에 발생한 난수와 같으면 다시한번 난수발생
  // 직전 난수는 beNum에 저장함
  while (rdm == beNum) {
    rdm = Math.floor(Math.random() * rimgCnt);
    console.log("다시난수:", rdm);
  } //////// while ////

  // 3.while문 통과후 결정된 난수를 직전난수 변수에 할당
  beNum = rdm;

  // 4. 랜덤으로 발생한 난수에 해당하는 div에
  // on클래스를 추가한다!(나머지는 on제거)
  target.forEach((ele, i) => {
    if (i == rdm) ele.classList.add("on");
    else ele.classList.remove("on");
  });
} //////// randomAddOn 함수 ////////
