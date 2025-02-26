// 달력컴포넌트 JS - CalendarComp.js ////////////

/*********************************************** 
 * [ 생성자 함수로 변환하여 사용하기 ]
 * 1. 함수명을 첫글자 대문자로 변경
 *  (생성자함수로 사용할 것을 알림)
 * 
 * 2. 호출하는 곳에서 new 키워드로 인스턴스생성
 * -> 이때부터 생성자함수로 사용하는것!
 * 
 * 3. 만약 생성자 함수의 속성/메서드를
 * 인스턴스 코딩구역에서 활용코자 할 경우
 * this키워드로 생성자함수 맴버등록하여 사용함!
 * 
 * -> 인스턴스 코딩구역에서 생성된 인스턴스를
 * 변수에 담아 하위 속성/메서드로 호출이 가능해짐!
 * 
 * 4. 유의사항: 생성자함수 내부에서 this키워드로
 * 등록된 속성/메서드는 내부에서 호출시에도 반드시
 * this키워드를 사용하여 호출해야함!(안쓰면 에러!)

*************************************************/

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

// 달력함수 호출 -> 이젠 여기서 안함!
// makeDallyeok();

export default function MakeDallyeok(selEl) {
  // selEl 전달변수 - 달력을 넣을 요소(선택자만 보냄!)
  // myFn.cs("달력만들어!");

  // [ 생성자함수 속성/메서드 공개 연습하기 ] //////
  // 요일정보 변환배열 ////
  this.week = ["일", "월", "화", "수", "목", "금", "토"];
  // 한자리수 날짜 앞에 0추가 메서드
  this.addZero = (x) => (x < 10 ? "0" + x : x);
  ////////////////////////////////////////////////

  // 0. 달력 컴포넌트 html 넣기
  myFn.qs(selEl).innerHTML = insertHcode();

  // 1. 변수셋팅 ////////////////////
  // (1) 변경할 현재날짜 객체
  const currDate = new Date();
  // (2) 오늘날짜 객체
  const today = new Date();
  // (3) 년도요소 : .yearTit
  const yearTit = myFn.qs(selEl+" .yearTit");
  // (4) 월요소 : .monthTit
  const monthTit = myFn.qs(selEl+" .monthTit");
  // (5) 날짜요소 : .dates
  const dates = myFn.qs(selEl+" .dates");
  // (6) 날짜넣을 배열변수
  const dateSet = [];
  // (7) html 코드 저장변수
  let hcode = "";

  // 2. 함수 만들기 //////////////
  // (1) 달력 초기화 구성 함수 ////
  const initDallyeok = () => {
    // 1) 변수초기화 : 배열변수, html코드변수
    // -> 날짜배열 초기화 : splice(시작순번,개수)
    // -> 배열변수.splice(0) 첫배열부터 모두지움
    dateSet.splice(0);
    // -> html 코드 변수 초기화
    hcode = "";

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

    // myFn.cs("전달 마지막 날짜:" + myFn.dfm(prevLast));

    // [2] 현재달 첫째 날짜(옵션:1)
    const thisFirst = new Date(cYr, cMt, 1);

    // myFn.cs("현재달 첫째 날짜:" + myFn.dfm(thisFirst));

    // [3] 현재달 마지막날짜(다음달 옵션:0)
    const thisLast = new Date(cYr, cMt + 1, 0);

    // myFn.cs("현재달 마지막날짜:" + myFn.dfm(thisLast));

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
    // myFn.cs("이번달첫날요일:" + fDay);
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
    for (let i = 1; i <= thisLast.getDate(); i++) {
      dateSet.push(i);
    } ////// for /////

    // [3] 다음달 나머지 칸 삽입하기 ★★★★★★★
    // 다음달은 클래스 'am'으로 구분
    // 반복구성: 1부터 2주분량정도 넣는다!
    for (let i = 1; i <= 14; i++) {
      dateSet.push(`
            <span style="color: #ccc" class="am">
                ${i}
            </span>
        `);
    } /// for ///

    // 날짜배열값 확인
    // myFn.cs("dateSet:" + dateSet);

    // ★★★★★★★★★★★★★★★★★★★★
    // 6) 날짜 배열로 날짜태그 구성하기 /////
    // ★★★★★★★★★★★★★★★★★★★★
    // 구성요건 : 7일 * 6주 = 42일
    for (let i = 0; i < 42; i++) {
      // 오늘날짜와 같은 경우 클래스 'today' 넣기 ///
      if (
        // [년,월,일 모두 일치하는 오늘만 표시]
        // (1) 오늘날짜 === 배열값 날짜 AND
        today.getDate() === dateSet[i] &&
        // (2) 현재달 === 선택달 AND
        today.getMonth() === currDate.getMonth() &&
        // (3) 현재년도 === 선택년도
        today.getFullYear() === currDate.getFullYear()
      ) {
        hcode += `<div class="date today">${dateSet[i]}</div>`;
      } else {
        hcode += `<div class="date">${dateSet[i]}</div>`;
      }
    } //// for ////

    // 날짜태그 출력 ///
    dates.innerHTML = hcode;

    // ★★★★★★★★★★★★★★★★★★★★
    // 7) 날짜 정보를 사용하도록 셋팅하기 /////
    // ★★★★★★★★★★★★★★★★★★★★
    // (1) 대상선정 : .date -> 위에서 새로 담겼으므로 새로읽음!
    let newDate = myFn.qsa(selEl+" .date");
    // console.log(newDate);

    // (2) 각 날짜 .date요소에 링크설정하기
    newDate.forEach((el) => {
      // 각 .date요소에 클릭이벤트 설정하기
      myFn.addEvt(el, "click", () => {
        // 1. 년도읽기
        let nowY = yearTit.innerText;

        // 2. 월읽기
        let nowM = monthTit.innerText;

        // 3. 날짜읽기
        let nowD = el.innerText;

        // 4. 이전달/다음달 구분하기
        let isSpan = myFn.qsEl(el, "span");
        // console.log('span있니?',isSpan);
        // span이 있으면 null이 아니므로  true처리됨!
        if (isSpan) {
          // span의 클래스가 'bm'/'am' 인지 구분하기
          let isAM = isSpan.classList.contains("am");
          // console.log('클래스가 am이니?',isAM);
          if (isAM) {
            // 다음달이므로 1을 더함
            nowM++;
            if (nowM == 13) {
              // 한계값 체크!
              // 13월은 1월로 처리
              nowM = 1;
              // 1월은 다음해로 처리
              nowY++;
            } // if : 한계값 체크 ///
          } /////// if : 클래스'am'이냐? ///////
          else {
            // 'bm'일 경우 즉, 이전달이므로 1을뺌
            nowM--;
            if (nowM == 0) {
              // 한계값 체크!
              // 0월은 12월로 처리
              nowM = 12;
              // 12월은 이전해로 처리
              nowY--;
            } /// if : 한계값 체크 ///
          } ///// else : 클래스 'bm'일 경우 처리 //////
        } ///////// if : 이전/다음달처리(span있냐?) ////////

        // 5. 날짜형식 구성하기 : yyyy-mm-dd
        let setDate = `${nowY}-${myFn.addZero(nowM)}-${myFn.addZero(nowD)}`;

        // 6. 요일 셋팅하기 : 해당날짜의 요일 -> getDay()
        let setDay = new Date(setDate).getDay();

        // 날짜형식 + 요일 찍기
        // console.log(setDate + `(${week[setDay]})`);

        // 7. 선택날짜 정보 히든필드에 저장하기
        // -> 활용도를 높이기 위해 일반구분자로 정보공개
        // 예) 년도/월/일/요일 -> 2025/2/28/5
        myFn.qs(selEl+" .date-info").value = 
        `${nowY}/${nowM}/${nowD}/${setDay}`;
        // 요일 정보는 원본 배열정보로 넣어 놓는다!
      }); //// addEvt //////
    }); //// forEach //////////
  }; //////////// initDallyeok 함수 ///////

  // 2. 함수 만들기 //////////////
  // (2) 이전/다음 달력 출력하기 함수 ////
  // this키워드로 생성자함수에 등록하여
  // 인스턴스 생성시 접근할 수 있도록 한다!
  this.chgCalendar = (num) => {
    // num (1이면 다음, -1이면 이전)
    console.log("달력변경 고고!");

    // 이전/다음달로 변경하여 initDallyeok() 함수 호출!
    currDate.setMonth(currDate.getMonth() + num);
    // getMonth() 월가져오기 / setMonth() 월 셋팅하기!

    // 달력초기화 함수 다시 호출!
    initDallyeok();
  }; //////////// chgCalendar //////////////

  // 3. 이벤트 설정하기 ////////////////////////
  // (1) 이전버튼에 함수 연결하기 : 달을 빼기위해 -1전달
  myFn.addEvt(myFn.qs(selEl+" .btnL"), "click", 
  () => this.chgCalendar(-1));
  // (2) 다음버튼에 함수 연결하기 : 달을 더하기위해 1전달
  myFn.addEvt(myFn.qs(selEl+" .btnR"), "click", 
  () => this.chgCalendar(1));
  // -> this키워드로 등록된 생성자 함수 속성/메서드는
  // 반드시 this키워드를 사용하여 호출해야함!

  // 4. 초기셋팅함수 호출!
  initDallyeok();
} /////////////// MakeDallyeok 생성자함수 ////////////

/****************************************** 
    함수명 : insertHcode
    기능 : 달력의 HTML 코드 넣기
******************************************/
function insertHcode() {
  // 달력 html코드를 리턴함!
  return `    
    <!-- 달력전체박스 -->
    <div class="calendar">
      <!-- 달력상단:해당년/월표시 -->
      <header class="header">
        <!-- 달력이동버튼:이전 -->
        <button class="mbtn btnL">〈</button>
        <div class="title">
          <div class="yearTit"></div>
          <div class="monthTit"></div>
        </div>
        <!-- 달력이동버튼:다음 -->
        <button class="mbtn btnR">〉</button>
      </header>
      <!-- 달력날짜표시박스 -->
      <section class="main">
        <!-- 주단위 구분박스 -->
        <div class="week">
          <div class="day">Sun</div>
          <div class="day">Mon</div>
          <div class="day">Tue</div>
          <div class="day">Wed</div>
          <div class="day">Thu</div>
          <div class="day">Fri</div>
          <div class="day">Sat</div>
        </div>
        <!-- 해당월의 달력날짜 구성박스 -->
        <div class="dates"></div>
      </section>
      <!-- 달력 선택날짜데이터 저장용 히든필드 -->
      <input type="hidden" class="date-info">
    </div>
  `;
} ///////////// insertHcode 함수 ///////////////
