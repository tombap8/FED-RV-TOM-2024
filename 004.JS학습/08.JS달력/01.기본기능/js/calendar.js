// 달력구현 JS - calendar.js ////////////

// DOM 메서드 //////
const myFn = {
  qs: (x) => document.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsEl: (el, x) => el.querySelector(x),
  qsaEl: (el, x) => el.querySelectorAll(x),
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  cs: (x) => console.log(x),
  addZero: (x) => (x < 10 ? "0" + x : x),
  dfm: (x) =>
    `${x.getFullYear()}-${myFn.addZero(x.getMonth() + 1)}-${myFn.addZero(
      x.getDate()
    )}(${week[x.getDay()]})`,
}; ///////// dFn 객체 //////////

// 요일변경배열 ////
const week = ["일", "월", "화", "수", "목", "금", "토"];

// 달력함수 호출
makeDallyeok();

function makeDallyeok() {
  myFn.cs("달력만들어!");

  // 1. 변수셋팅 ////////////////////
  // (1) 변경할 현재날짜 객체
  const currDate = new Date();
  // (2) 오늘날짜 객체
  const today = new Date();
  // (3) 년도요소 : .yearTit
  const yearTit = myFn.qs(".yearTit");
  // (4) 월요소 : .monthTit
  const monthTit = myFn.qs(".monthTit");
  // (5) 날짜요소 : .dates
  const dates = myFn.qs(".dates");
  // (6) 날짜넣을 배열변수
  const dateSet = [];
  // (7) html 코드 저장변수
  let hcode = "";

  // 2. 함수 만들기 //////////////
  // (1) 달력 초기화 구성 함수 ////
  const initDallyeok = () => {
    // 1) 변수초기화

    // 2) 변수할당 //////////
    // 현재년
    let cYr = currDate.getFullYear();

    // 현재달 : 배열순번
    let cMt = currDate.getMonth();

    // [선택달  끝날짜, 첫날짜 알아오기]
    // new Date(년도,월,옵션)
    // (1) 년도
    // (2) 월
    // (3) 옵션 : 0 - 이전달끝날짜 / 1 - 현재달첫날짜

    // 3) 날짜 데이터 셋업 //////
    // [1] 전달 마지막 날짜(옵션:0)
    const prevLast = new Date(cYr, cMt, 0);

    myFn.cs("전달 마지막 날짜:" + myFn.dfm(prevLast));

    // [2] 현재달 첫째 날짜(옵션:1)
    const thisFirst = new Date(cYr, cMt, 1);

    myFn.cs("현재달 첫째 날짜:" + myFn.dfm(thisFirst));

    // [3] 현재달 마지막날짜(다음달 옵션:0)
    const thisLast = new Date(cYr, cMt + 1, 0);

    myFn.cs("현재달 마지막날짜:" + myFn.dfm(thisLast));

    // 4) 년도 월 정보 화면표시하기 ///////
    // [1] 년도표시
    yearTit.innerHTML = cYr;
    // [2] 월표시(배열순번+1)
    monthTit.innerHTML = cMt + 1;

    // ★★★★★★★★★★★★★★★★★★★★
    // 5) 날짜 데이터 태그 구성하기 //////////
    // ★★★★★★★★★★★★★★★★★★★★

    // [1] 전달 날짜 앞쪽 채우기 ★★★★★★★
    // 조건 : 현재달 첫날짜 요일이 0이 아니면 내용있음!
    // 왜? 0이면 일요일 이니까 첫칸부터 채워진다!
    let fDay = thisFirst.getDay();
    myFn.cs("이번달첫날요일:" + fDay);
    if (fDay != 0) {
      // 만약 요일순번이 0이 아니면 for문돌린다!
      for (let i = 0; i < fDay; i++) {
        // 반복횟수만큼 배열 앞쪽에 추가
        // 이때 숫자를 i만큼 빼서 1씩 감소시킨다!
        // 이전달은 클래스 'bm'으로 구분
        dateSet.unshift(`
                <span style="color: #ccc" class="bm">
                    ${prevLast.getDate() - i}
                </span>
            `);
      } //// for /////
    } /// if ///

    // [2] 현재월 날짜 삽입하기 ★★★★★★★
    // 반복문구성 : 현재월 1일부터 마지막 날짜까지 반복 배열추가
    for(let i=1; i<=thisLast.getDate(); i++){
        dateSet.push(i);
    } ////// for /////

    // [3] 다음달 나머지 칸 삽입하기 ★★★★★★★
    // 다음달은 클래스 'am'으로 구분
    // 반복구성: 1부터 2주분량정도 넣는다!
    for(let i=1; i<=14; i++){
        dateSet.push(`
            <span style="color: #ccc" class="am">
                ${i}
            </span>
        `);
    } /// for ///

    // 날짜배열값 확인
    myFn.cs("dateSet:" + dateSet);

    // ★★★★★★★★★★★★★★★★★★★★
    // 6) 날짜 배열로 날짜태그 구성하기 /////
    // ★★★★★★★★★★★★★★★★★★★★
    // 구성요건 : 7일 * 6주 = 42일
    for(let i = 0; i < 42; i++){
        hcode += `<div class="date">${dateSet[i]}</div>`;
    } //// for ////

    // 날짜태그 출력 ///
    dates.innerHTML = hcode;

  }; //////////// initDallyeok 함수 ///////

  // 초기셋팅함수 호출!
  initDallyeok();
} /////////////// makeDallyeok함수 ////////////
