// JS9-3. 로컬 스토리지 JS

// 나의 함수 불러오기
import myFn from "./my_function.js";

/*************************************************************** 
    [ JS 로컬스토리지 : localStorage ]
    - window하위객체 window.localStorage
    -> window는 주로 생략함!
    -> 개발자 모드 'Application' 탭에서 확인가능!!

    1. 정의 : 
        브라우저별 로컬 어플리케이션 영역에 저장되는 
        스트링데이터 저장소(JS API)
    2. 유지 : 같은 PC, 같은 브라우저(재설치없이사용) 일 경우 계속유지됨
        (단, 같은파일일 지라도 여는 경로에 따라 같은 변수도
        따로 관리된다! - 기준이 도메인경로/주소)
    3. 특징 : 모드 데이터는 키,값 쌍으로 구성되며 
        데이터값은 반드시 문자형으로 사용됨
    4. 응용 : 데이터로 배열/객체를 사용할 경우 문자형 변환하여 넣고
                다시 객체형으로 파싱하여 사용한다!
            (1) 입력시 : JSON.stringify(배열/객체)
            (2) 사용시 : JSON.parse(문자형배열/객체)
            -> JS의 제이슨 데이터 파싱 메서드 : 
                JSON.parse()
            -> JS의 제이슨 형식 데이터를 문자열로 변환하는 메서드:   
                JSON.stringify()
    5. 사용메서드 : 
        (1) 값설정 : setItem(키명,값)
        (2) 값읽기 : getItem(키명)
        (3) 전체지우기 : clear()
        (4) 키번호읽기 : key(순번) -> 0부터 (키이름리턴)
        (5) 개별항목삭제 : removeItem(키명)
        (6) 개수 : length

    [ JS 세션 스토리지 : sessionStorage ]
    -> 로컬스토리지와 세션 스토리지의 메서드는 동일함!
    -> 로컬스토리지와 차이점은?
    -> 브라우저가 닫히면 데이터가 사라진다!
    (로컬세션의 개념은 서버세션과 달리 하나의 브라우저탭을
    단위로 한다!)
    -> 서버세션은 접속된 로그인정보세션을 서버에서 관리하는 단위임

    [ JS 로컬 스토리지 / 세션 스토리지 장단점 ]
    (1) 장점: 
        간단한 프론트엔드 데이터를 DB없이 테스트해보는데 탁월함
        쿠키와 같이 사용자 동의를 필요로하는 로컬 기록수단의 단점은
        이것을 거부하면 쓸 수 없는데 JS 스토리지는 이런 제약이
        없다! 보안상 안전이 보장되므로 사용가능함!
    (2) 단점: 데이터의 지속 보장이 없다!
        (그나마 로컬 스토리지는 브라우저 경로가 같고 PC가 같고
        브라우저종류가 같다면 지우기 전까지는 데이터를 유지한다!)


    -> w3 schools 참고
    https://www.w3schools.com/js/js_api_web_storage.asp
***************************************************************/

// 로컬스토리지 테스트
// localStorage.setItem('my-name','톰소여');
// localStorage.setItem('your-name','제이슨');
// console.log(localStorage.getItem('my-name'));
// console.log(localStorage.getItem('your-name'));
// myFn.qs('body').onclick =
// ()=>{localStorage.clear()};
// myFn.qs('body').onclick =
// ()=>{localStorage.removeItem('your-name')};

// 세션스토리지 테스트
// sessionStorage.setItem('my-dog','포메라니안');
// sessionStorage.setItem('your-dog','요키');
// console.log(sessionStorage.getItem('my-dog'));
// console.log(sessionStorage.getItem('your-dog'));
// myFn.qs('body').onclick =
// ()=>{sessionStorage.clear()};
// myFn.qs('body').onclick =
// ()=>{sessionStorage.removeItem('my-dog')};

// [ 1. 로컬 스토리지 연습 ] ////////////////////
// 1. 버튼 기능 이벤트 대상 : .local-box button
const btnLocal = myFn.qsa(".local-box button");

// -> 추가대상 : 수정하기 선택박스요소 - select#sel
const selBox = myFn.qs("select#sel");

// -> 추가대상 : 수정항목 제목/내용
const tit2 = myFn.qs("#tit2");
const cont2 = myFn.qs("#cont2");

console.log("대상:", btnLocal, selBox, tit2, cont2);

// 2. 버튼에 이벤트 설정하기
btnLocal.forEach((ele) => myFn.addEvt(ele, "click", localsFn));

// 3. 로컬쓰 처리 함수 만들기 ///////
function localsFn() {
  // 1. 버튼 텍스트 읽기
  let btxt = this.innerText;
  console.log("로컬쓰~!", btxt);

  // 2. 버튼별 기능 분기하기 //////
  if (btxt == "처음") {
    // (1) 로컬 스토리지 셋팅하기
    // -> localStorage.setItem(키,값)
    localStorage.setItem("actor-name", "이정재");
    localStorage.setItem("actor-role", "박평호역");
    localStorage.setItem(
      "actor-cat",
      "조직내 스파이를 색출하는 해외팀 안기부장"
    );
  } /// if ////
  else if (btxt == "보여줘") {
    // 배우이름 출력
    myFn.qs(".local .nm").innerText = localStorage.getItem("actor-name");
    // 역할이름 출력
    myFn.qs(".local .role").innerText = localStorage.getItem("actor-role");
    // 캐릭터소개 출력
    myFn.qs(".local .cat").innerText = localStorage.getItem("actor-cat");
  } /// else if ////
  else if (btxt == "전체삭제") {
    // 로컬스토리지 전체 삭제
    // 해당 url 스토리지만 대상으로 모두 지움
    localStorage.clear();

    // 개별삭제는 removeItem(키)
    // localStorage.removeItem("actor-name");
  } //// else if ////
  else if (btxt == "처리") {
    // 배열/객체 만들기
    // 1. 로컬쓰에 "minfo"키가 없으면 새로만들기
    // 만약 키가 없으면 null값을 리턴함
    // 이것은 if문에서 false처리됨!
    // false일때 처리해야하므로 NOT(!)연산자사용
    // 또는 빈 배열값일 경우도 생성함수호출 처리
    // if (
    //   !localStorage.getItem("minfo") ||
    //   localStorage.getItem("minfo") == "[]"
    // ) {
    //   // 최초 객체데이터 만들기 함수 호출
    //   makeObj();
    // } /// if ///
    // console.log(localStorage.getItem("minfo"));
    // // 2. 화면에 출력하기 : 데이터 바인딩하기
    // bindData();
  } //// else if ////
} /////////// localsFn //////////

// 추가로 각 출력 영역을 클릭하면 해당 로컬쓰만 지우기셋팅
// 배우이름 삭제
myFn.qs(".local .nm").onclick = () => localStorage.removeItem("actor-name");

// 역할이름 삭제
myFn.qs(".local .role").onclick = () => localStorage.removeItem("actor-role");

// 캐릭터소개 삭제
myFn.qs(".local .cat").onclick = () => localStorage.removeItem("actor-cat");

// "minfo" 로컬쓰 키가 없으면 객체를 만들어 넣기 함수 //
function makeObj() {
  console.log("minfo만들기!");

  // 1. 게시판 형식의 객체 생성하기 ///
  // 배열안에 객체데이터 한개 넣기 [{},]
  let obj = [
    {
      idx: 1,
      tit: "내가 왕이될 상인가?",
      cont: "이정재형님은 진정한 왕이십니다!",
    },
  ];
  // 2. 로컬 스토리지에 배열/객체데이터 넣기
  // 만약 배열데이터를 직접 넣으려고하면
  // 로컬쓰는 문자형만 받기때문에 데이터형이름만
  // 문자형으로 데이터를 대신 넣게된다!
  // 즉, 배열데이터는 못들어간다! ㅠ.ㅠ
  // 그러므로 배열데이터는 문자형으로 변환하여
  // 넣어야 로컬쓰에 들어간다!
  // -> JSON.stringify(배열/객체)
  localStorage.setItem("minfo", JSON.stringify(obj));
  // 화면에 게시판 바인딩하기
  bindData();
} ///////// makeObj //////

//// 화면에 게시판을 뿌려주는 바인딩함수 ///////
function bindData() {
  // 1. 로컬쓰 데이터 읽어오기 : minfo -> 문자형데이터임!
  let localData = localStorage.getItem("minfo");
  console.log("로컬쓰 파싱전!", localData);

  // 2. 로컬쓰 데이터 파싱하기 : JSON.parse() -> 배열객체!
  localData = JSON.parse(localData);
  console.log("로컬쓰 파싱후!", localData);

  // 출력대상 : .board
  // 3. 화면에 출력하기 ////////
  myFn.qs(".board").innerHTML = `
    <table>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>삭제</th>
        </tr>
        <!-- 데이터에 따른 반복바인딩 -->
        ${localData
          .map(
            (v, i) => `
            <tr>
                <td>${v.idx}</td>
                <td>${v.tit}</td>
                <td>${v.cont}</td>
                <td class="del-link">
                    <a href="#" data-idx="${i}">×</a>
                </td>
            </tr>
        `
          )
          .join("")}
    </table>
`;

  // 4. 삭제버튼 링크함수 호출!
  setDelLink();

  // 5. 수정을 위한 선택박스 바인딩하기!
  // 대상 : #sel -> selBox변수
  // 데이터 : 파싱된 로컬쓰 (배열) 중 idx만 사용!->map()
  selBox.innerHTML =
    `<option value="sel">선택하세요</option>` +
    localData
      .map(
        (v) =>
          `<option value="${v.idx + "♨" + v.tit + "♨" + v.cont}">${
            v.idx
          }</option>`
      )
      .join("");
} ////////////// bindData //////////////////

//////////////////////////////////////
// 수정항목 선택박스 변경시 함수구현 ////
//////////////////////////////////////
myFn.addEvt(selBox, "change", function () {
  // 읽어온 value값을 split으로 잘라서 넣기
  let newVal = this.value.split("♨");

  console.log("선택변경:", this.value, newVal);

  // 수정할 데이터의 원본 제목/내용 보여주기!
  tit2.value = newVal[1];
  cont2.value = newVal[2];
}); ///////// change 이벤트함수 ////////

/////////////////////////////////////////////////
////// [ 게시판 최초호출 및 데이터 셋업 ] //////////
//////////////////////////////////////////////////

// 게시판 최초호출 : 로컬쓰 minfo 존재여부에 따라처리
console.log("최초minfo로컬쓰가 있는가?", localStorage.getItem("minfo"));
// 만약 결과가 null이면 이 로컬쓰는 없는것임!
// 따라서 if문의 조건문에 사용하면 코드를 지정할 수 있다!

// 만약에 minfo 로컬쓰가 존재하면 bindData()함수호출!
if (localStorage.getItem("minfo")) bindData();
// 만약 minfo 로컬쓰가 없으면 생성하라!
else makeObj();

/////////////////////////////////////////////////
/// [ 데이터 추가 버튼 클릭시 데이터 추가하기 ] ////
/////////////////////////////////////////////////
// 대상 : #sbtn (입력버튼)
// 데이터 읽어올 대상 : #tit, #cont
const tit = myFn.qs("#tit");
const cont = myFn.qs("#cont");

// 이벤트 함수 설정하기 /////
myFn.qs("#sbtn").onclick = () => {
  console.log("입력하라!", tit, cont);
  // 1. 입력데이터 유효성 검사 : try ~ catch사용!
  try {
    // trim() 앞뒤공백 제거 처리해야 공백만 넣기막음!
    if (tit.value.trim() == "" || cont.value.trim() == "") {
      throw "제목과 내용은 반드시 입력해야합니다!";
    }
  } catch (err) {
    /// try ////
    // catch문에 들어온 경우는 에러상황임!
    alert(err);
    // 함수 아랫부분 실행 못하도록 리턴함!
    return;
  } /// catch ///

  // 로컬쓰 처리함수 호출! : call() 대리호출
  setLS.call({ key: "minfo", opt: "add" });
}; ///////////// click 이벤트 함수 ///////////////

/////////////////////////////////////////////////
/// [ 데이터 수정 버튼 클릭시 데이터 수정하기 ] ////
/////////////////////////////////////////////////
// 대상 : #mobtn (수정버튼)
// 데이터 읽어올 대상 : #tit2, #cont2 -> tit2,cont2변수
// 이벤트 함수 설정하기 /////
myFn.qs("#mobtn").onclick = () => {
  console.log("수정하라!");
  // 1. 입력데이터 유효성 검사 : try ~ catch사용!
  try {
    // trim() 앞뒤공백 제거 처리해야 공백만 넣기막음!
    if (tit2.value.trim() == "" || cont2.value.trim() == "") {
      throw "제목과 내용은 반드시 입력해야합니다!";
    }
  } catch (err) {
    /// try ////
    // catch문에 들어온 경우는 에러상황임!
    alert(err);
    // 함수 아랫부분 실행 못하도록 리턴함!
    return;
  } /// catch ///

  // 로컬쓰 처리함수 호출! : call() 대리호출
  setLS.call({
    key: "minfo",
    opt: "update",
    upSeq: selBox.value.split('♨')[0],
    // 지울 순번은 선택박스의 value값 중 잘라서 첫번째값!
  });
}; ///////////// click 이벤트 함수 ///////////////

/////////////////////////////////////////////////
/// [ 데이터 삭제 버튼 클릭시 데이터 삭제하기 ] ////
/////////////////////////////////////////////////
// 대상 : .del-link a (삭제버튼)
// 처음 로딩시 삭제버튼에 클릭이벤트를 설정하게 되면
// 삭제후 리스트가 변경됨에따라 기존에 설정된 이벤트가 사라짐!
// ->>> ((주의!중요!!!)) 일반적으로 형제요소중 DOM구조가 변경될시
// ->>> 기존 이벤트가 리셋되는것이 기본임! 따라서 DOM이 변경될때
// ->>> 그 형제요소의 이벤트를 다시 설정해야한다!
// ->>> 이런 이유로 아래 이벤트설정 코드는 함수로 만들어준다!

function setDelLink() {
  // 삭제코드 a링크를 순회하여 이벤트 및 기능넣기!
  myFn.qsa(".del-link a").forEach((el) => {
    myFn.addEvt(el, "click", function (e) {
      // a요소 기본이동막기
      e.preventDefault();

      // 1. 지울순번 읽어오기 : data-idx속성값
      let delIdx = this.getAttribute("data-idx");
      console.log("지울순번:", delIdx);

      // 2. 로컬쓰처리함수 호출 : call() 대리호출!
      setLS.call({ key: "minfo", opt: "delete", delSeq: delIdx });
    }); //// addEvt ////
  }); ////// forEach /////
} ////// setDelLink 함수 ////////////////////////////

////////// 로컬스토리지 처리 공통함수 //////////////
/************************************************* 
  함수명 : setLS
  기능 : 로컬스토리지 데이터를 처리하는 함수
*************************************************/
function setLS() {
  // 전달변수를 하나만 받고 그값을 객체로 정의한다!
  // -> 이렇게 하면 확장성이 좋아진다!
  // -> 예컨데 지울때는 지울순번을 더 보내야한다! 이럴때 좋음!
  // ->>> 전달변수 없이 객체를 받는 방법이 있음!!!
  // 바로 call(객체) / apply(객체) 로 대리호출해줌!
  // 받을때는 this.속성명 으로 받아준다!!!

  // 아래 속성명정의! /////////
  // {key:값, opt:값, delIdx:값}
  // -> call(객체)로 호출하면 this로 받아라!
  // this.key - 로컬스토리지 키명
  // this.opt - 처리옵션(add/delete/update)
  // this.upSeq - 수정할순번
  // this.delSeq - 지울순번
  // -> 일반적으로 데이터 처리는 4가지를 말한다!
  // ->>> 크루드!(CRUD) -> Create/Read/Update/Delete

  // [ 로컬쓰 처리 기본과정 ]
  // 로컬쓰읽기->로컬쓰파싱->데이터변경->로컬쓰문자변경후 업데이트!

  // 1. 전달값 및 호출확인
  console.log("로컬쓰처리!", this.key);

  // 2. 로컬쓰 minfo 데이터 읽어오기 : 문자형 데이터임!
  let locals = localStorage.getItem(this.key);

  // 3. 로컬쓰 minfo 파싱후 데이터 처리하기
  locals = JSON.parse(locals);
  // 문자형 로컬쓰를 파싱하여 배열객체로 변환함!

  console.log("Math.max(1,50,24)", Math.max(1, 50, 24));
  console.log(
    "locals.map(v=>v.idx)",
    locals.map((v) => v.idx)
  );

  // 3-1. 'add'일때 데이터 추가하기 ////
  if (this.opt == "add") {
    locals.push({
      // 고유번호는 데이터 중 최대값에 1을 더해야함
      // Math.max(1,50,24) -> 결과는 50!
      // Math.max.apply(보낼객체,배열) -> 보낼객체가 없으면 null
      // -> max하위 apply는 배열값 대상으로 최대값을 적용함!
      idx:
        Math.max.apply(
          null,
          locals.map((v) => v.idx)
        ) + 1,
      tit: tit.value,
      cont: cont.value,
    });
  } /// if ///

  // 3-2. 'update'일때 데이터 수정하기 ////
  else if (this.opt == "update") {
    // 파싱된 객체값을 순회하여 해당순번idx값과
    // 일치된 값을 찾아서 제목과 내용을 변경한다!
    // 순회가능한 배열 메서드는 뭐가있지?
    // -> forEach(), map(), find(), filter()
    // ->>> 위의 메서드들은 대상배열을 모두 순회한다!
    // 그래서 효율성이 떨어진다!
    // 찾으면 바로 순회를 끝내는 메서드가 있다! 
    // ->>>> 썸타는 메서드 : some()
    locals.some(v=>{
      console.log('배열순회중!');
      if(v.idx == this.upSeq){ 
        // 데이터 업데이트
        v.tit = tit2.value;
        v.cont = cont2.value;
        // 리턴 true 하면 some메서드 끝내기!
        return true;
      } /// if ///
    }); /// some ///
  } /// else if ///

  // 3-3. 'delete'일때 데이터 삭제하기 ////
  else if (this.opt == "delete") {
    // 삭제처리 배열함수 : splice(지울순번,1)
    locals.splice(this.delSeq, 1);
  } /// else if ///

  // 4. 로컬쓰 변경된 데이터 다시 넣기 : 넣을땐 문자화(stringify)
  localStorage.setItem(this.key, JSON.stringify(locals));

  // 5. 다시 데이터 바인딩하기
  bindData();
} //////////// setLS 함수 //////////////////////

//******************************************** */
///////////////////////////////////////////////
// [ 2. 세션 스토리지 연습 ] ////////////////////
// 1. 버튼 기능 이벤트 대상 : .session-box button
const btnSession = myFn.qsa(".session-box button");
console.log("대상:", btnSession);

// 2. 버튼에 이벤트 설정하기
btnSession.forEach((ele) => myFn.addEvt(ele, "click", sessionsFn));

// 3. 세션쓰 처리 함수 만들기 ///////
function sessionsFn() {
  // 1. 버튼 텍스트 읽기
  let btxt = this.innerText;
  console.log("세션쓰~!", btxt);

  // 2. 버튼별 기능 분기하기 //////
  if (btxt == "처음") {
    // (1) 세션 스토리지 셋팅하기
    // -> sessionStorage.setItem(키,값)
    sessionStorage.setItem("actor-name", "정우성");
    sessionStorage.setItem("actor-role", "김정도역");
    sessionStorage.setItem("actor-cat", "국내팀 안기부팀장, 박평호랑 사이나쁨");
  } /// if ////
  else if (btxt == "보여줘") {
    // 배우이름 출력
    myFn.qs(".session .nm").innerText = sessionStorage.getItem("actor-name");
    // 역할이름 출력
    myFn.qs(".session .role").innerText = sessionStorage.getItem("actor-role");
    // 캐릭터소개 출력
    myFn.qs(".session .cat").innerText = sessionStorage.getItem("actor-cat");
  } /// else if ////
  else if (btxt == "전체삭제") {
    // 로컬스토리지 전체 삭제
    // 해당 url 스토리지만 대상으로 모두 지움
    sessionStorage.clear();

    // 개별삭제는 removeItem(키)
    // sessionStorage.removeItem("actor-name");
  } //// else if ////
} /////////// sessionsFn //////////

// 세션스토리지 개별 삭제 구현하기 ///////
// 배우이름 삭제
myFn.qs(".session .nm").onclick = () => sessionStorage.removeItem("actor-name");
// 역할이름 삭제
myFn.qs(".session .role").onclick = () =>
  sessionStorage.removeItem("actor-role");
// 캐릭터소개 삭제
myFn.qs(".session .cat").onclick = () => sessionStorage.removeItem("actor-cat");
