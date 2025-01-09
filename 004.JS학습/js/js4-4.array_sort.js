// JS4-4.배열정렬 및 검색 JS

// 나의 함수 불러오기
import myFn from "./my_function.js";

// console.log(mFn);

/****************************************************** 
    [ JS 배열의 정렬 ]
    -> 용어의 정의: 정렬이란?
    : 배열의 값을 기준으로 순서를 다시 정하는것!
    배열의 정렬은 sort() 메서드 사용!
    sort() 메서드를 사용하여 배열의값을 오른차순,내림차순으로
    정렬할 수 있음!

    [ sort() 메서드의 특징 ]
    1. 기본정렬 :  오름차순(1,2,3,.../a,b,c,...)
        -> 기본 내림차순 메서드 -> reverse()
    2. 원리 : 배열값을 문자열로 캐스팅(형변환)한후
            변환된 문자열을 비교하여 순서를 결정함
    (참고: undefined 값일 경우 배열 맨뒤에 배치함)
    -> 주의: 숫자를 비교해도 문자열로 비교하기 때문에
    "25"와 "100" 중 큰 숫자는 100이지만 25를 더 큰
    데이터로 인식한다! 
    -> sort() 메서드 비교함수로 처리!

    [ sort() 메서드 비교함수 ]
    -> sort() 메서드 내부에 2개의 전달값을 가지는 함수를 쓰면
    sort메서드 자체에서 값을 비교하여 배열값의 순서를 바꾼다!
    -> 숫자일 경우 빼기 연산을 함!

    숫자데이터배열.sort(function(a,b){return a-b;}) => 오름차순
    숫자데이터배열.sort((a,b)=>a-b) => 오름차순

    숫자데이터배열.sort(function(a,b){return b-a;}) => 내림차순
    숫자데이터배열.sort((a,b)=>b-a) => 내림차순

    -> a는 앞 데이터, b는 뒷 데이터

    [-> 기준정렬 : 오름차순]
    배열변수.sort() -> 기본정렬

    [-> 기준정렬 : 내림차순]
    배열변수.reverse() -> 기본정렬

    ++++++++++++++++++++++++++++++++++++++++++++++

    ->>> 숫자형, 문자형에 무관하게 하나로 처리하기!!!
     [ sort() 메서드만 사용하여 정렬잡기 ]

    ((비교함수사용))
    배열변수.sort(function(x,y){
        if(x>y) return 1;
        if(x<y) return -1;
        return 0;
    })
    
    -> 단순화하기(삼항연산자사용!)

    배열변수.sort(function(x,y){
        return x == y ? 0 : x > y ? 1 : -1;
    })

    -> 더 줄이기! (화살표함수 사용!)

    배열변수.sort((x,y)=> x == y ? 0 : x > y ? 1 : -1)


    -> 리턴값의 의미(오름차순)
    1) if(x>y) return 1; -> x가 y뒤에 옴 (리턴값 양수)
    2) if(x<y) return -1; -> x가 y앞에 옴 (리턴값 음수)
    3) return 0; -> x,y 정렬을 유지 (리턴값 0)

    -> 내림차순은 양수/음수만 반대로 써주면 된다!

    [ 정렬시 데이터 유의사항 ]

    1. 문자형일 경우 대소문자가 섞여있으면 대문자나 소문자중
    하나로 통일하여 비교해야함(toUpperCase()/toLowerCase())

    예)
        배열변수.sort((x,y)=>{
            let a = x.toUpperCase(),
                b = y.toUpperCase();
            
            return a == b ? 0 : a > b ? 1 : -1;
        })

    2. 날짜정렬도 숫자와 동일함
    (날짜데이터 자체가 숫자형으로 되어있음)

    3. 특정언어의 특수문자일 경우 
    localeCompare() 메서드로 문자열 비교를 한다!

    예) 특수문자 x변수를 y변수와 변환후 비교 
        x.localeCompare(y)

*************************************************************

      [ 배열의 검색 : find() / filter() / indexOf() ]

      1. find() 메서드
      (1) 검색후 첫번째 일치값 하나만을 리턴
      (2) 결과가 없으면 undefined 리턴(if문에서 false처리!)
      (3) 콜백함수구성 : function(val,idx,obj){}
          1) val : 처리중 배열의 값
          2) idx : 처리중 배열의 순번
          3) obj : 처리중 배열전체
      (4) 리턴데이터 : 배열의 값 하나(값의 데이터형)
      (5) 활용케이스 : 아이디검사 결과 리턴
      (6) 코드예 :
          변수 = 배열.find(v=>{
              if(v[속성명].indexOf(검색어)!==-1) 
              return true;
          })
          -> 배열을 자동순회하여 if문에 해당되는 데이터가 있으면
          return true 하여 할당된 변수에 저장하고 문장이 바로 끝난다!


      2. filter() 메서드
      (1) 검색후 모든 일치값을 리턴
      (2) 결과가 없으면 빈배열 리턴([]->배열.length 값이 0)
      (3) 콜백함수구성 : function(val,idx,obj){}
          1) val : 처리중 배열의 값
          2) idx : 처리중 배열의 순번
          3) obj : 처리중 배열전체
      (4) 리턴데이터 : 배열형데이터(하나여도 배열값으로 넘어옴!)
      (5) 활용케이스 : 검색리스트 결과 리턴
      (6) 코드예 :
          변수 = 배열.filter(v=>{
              if(v[속성명].indexOf(검색어)!==-1) return true;
          })
          -> 배열을 자동순회하여 if문에 해당되는 데이터가 있으면
          return true 하여 다른값이 계속 나올때까지 배열로 값을
          할당변수에 저장한다!(배열을 전체순회함!)

      3. LIKE 검색방법 : 값의 일부만 넣어도 검색되는 방법

        -> indexOf(값) 을 사용함!
        결과값으로 문자열의 위치순번을 리턴하는데
        만약 없으면 -1을 리턴하므로 이것을 이용하여 
        조건문에 -1이 아닌경우가 검색결과가 있는 경우가 됨!
        예) 
        if(문자열.indexOf(검색문자열)!==-1){결과리턴}
        _______________________________________

        다른방법으로 찾기 : 전체문자열.includes(문자열)
        -> 존재하면 true, 없으면 false를 리턴함
        if(문자열.includes(검색문자열)){결과리턴}

      *********************************************
      (( 참고 : 배열과 문자열 객체의 indexOf() / include() 비교 ))

      [ 배열(Array)의 indexOf() ]
       -> 정확히 일치하는 값의 배열 순번을 리턴(없으면 -1 리턴)
      [ 배열(Array)의 includes() ]
       -> 정확히 일치하는 값의 배열이 존재할때 true 리턴

      [ 문자열(String)의 indexOf() ]
       -> 문자열중 찾는 문자열의 순번을 리턴(없으면 -1 리턴)
      [ 문자열(String)의 includes() ]
       -> 문자열중 찾는 문자열과 일치하는 것이 존재하면 true 리턴
       

*************************************************

      [ 객체를 배열로 변환하여 리스트 만들기 : 정렬시 필수! ]

      1. 대상: 배열이 아닌 객체형식으로 되어 있는 데이터를
              리스트로 만들고 이를 배열정렬 메서드를 사용코자할때
      
      2. 변경방법:
          (1) 객체의 속성(키)만 배열로 만들어준다!
          Object 객체는 객체를 위한 인터페이스 제공 객체임!
          -> Object.keys(객체) : 객체의 키로 배열만들기!
          -> Object.values(객체) : 객체의 값으로 배열만들기!

          : 하는일 - 객체의 속성을 모아 배열로 만들어준다!
          -> 키배열을 만드는 이유는?
          ->>> 키배열 === 값배열 왜????
          -> 객체는 키를 통해 값을 부를 수 있기 때문이다!

          (2) 변경확인 
              변경전 : {속성1:값1,속성2:값2}
              결과:
              키배열 - Object.keys(객체)
              변경후 : [속성1,속성2]

              값배열 - Object.values(객체)
              변경후 : [값1,값2]

          (3) 객체의 키를 값으로 하는 배열로 정렬을 변경할 수 있다
          -> Object.keys(객체).sort()

          (4) 객체의 값을 값으로 하는 배열로 정렬을 변경할 수 있다
          -> Object.values(객체).sort()

          (5) 객체값으로 구성되는 배열일 경우 아래와 같이 변환한다
          -> 객체를 변환후 map으로 값을 다시 담아준다!

          객체변수 = 객체

          [ 한번에 값배열로 변환 : 오브젝트.키쓰.맵! ]
          새변수 = Object.keys(객체변수).map(v=>객체변수[v])
          새변수 = Object.values(객체변수).map(v=>객체변수[v])

          ((유의사항: 키배열과 값배열 중 무엇을 써야하나?))
          -> 키가 의미가 있는 경우 키를 기준으로 사용하여 값도 활용하며
          키의 의미가 단순 분류라면 값을 그대로 배열로 변환하여 사용한다!

      3. 새로구성한 객체 변환 배열로 기존 배열 메서드를 사용하여
          정렬, 검색 후 정렬 등을 수행한다!!


******************************************************/

// 숫자값 배열
const arrNumber = [4, 5, 8, 10, 2, 1, 9, 3, 7, 6];

// console.log("숫자배열원본:", arrNumber);
// console.log("숫자배열정렬-sort()", arrNumber.sort());
// console.log(
//   "숫자배열정렬-sort((a,b)=>a-b)",
//   arrNumber.sort((a, b) => a - b)
// );
// console.log(
//   "숫자배열정렬-sort((닭가슴살,계란후라이)=>닭가슴살-계란후라이)",
//   arrNumber.sort((닭가슴살, 계란후라이) => 닭가슴살 - 계란후라이)
// );
// console.log(
//   "숫자배열정렬-sort((닭가슴살,계란후라이)=>계란후라이-닭가슴살)",
//   arrNumber.sort((닭가슴살, 계란후라이) => 계란후라이 - 닭가슴살)
// );
// console.log(
//   "숫자배열정렬-sort((a,b)=>{return a-b})",
//   arrNumber.sort((a, b) => {
//     return a - b;
//   })
// );
// console.log(
//   "숫자배열정렬-sort(function(a,b){return a-b})",
//   arrNumber.sort(function (a, b) {
//     return a - b;
//   })
// );

// 예를 위한 숫자값 배열
const arrNumber2 = [380, 1000, 245, 2278];
// console.log("숫자값배열원본:", arrNumber2);
// console.log("숫자값배열-sort():", arrNumber2.sort());

// 문자값 배열
const arrString = ["파", "타", "하", "가", "바", "사", "다", "라", "차"];

// console.log("문자값 배열원본:", arrString);
// console.log('문자값 배열-sort():',arrString.sort());
// console.log('문자값 배열-reverse():',arrString.reverse());

// 숫자가 아니면 빼기 연산을 못하므로 정렬불가!!!
// console.log('문자값 배열-sort((a,b)=>a-b):',
//     arrString.sort((a,b)=>a-b));
// console.log('문자값 배열-sort((a,b)=>b-a):',
//     arrString.sort((a,b)=>b-a));

/************************************************* 
 ★★★★★★★★★★★★★★★★★★★★★★★★★★
    [ 숫자, 문자 모두 정렬가능한 함수 만들기 ]
    - 숫자나 문자 모두 가능한 것은? 크다/작다/같다
    -> 즉 비교연산자 사용함!

    ((3가지 시그널))
    1번 시그널 : 0 -> 변경없음
    2번 시그널 : 음수(마이너스) -> 음, 그대로 유지
    3번 시그널 : 양수(플러스) -> 양쪽을 바꿔서 유지

    (1) 오름차순
    sort((a,b) => a==b? 0 : a < b ? 음수:양수)
    sort((a,b) => a==b? 0 : a < b ? -1 : 1)

    (2) 내림차순
    sort((a,b) => a==b? 0 : a > b ? 음수:양수)
    sort((a,b) => a==b? 0 : a > b ? -1 : 1)
★★★★★★★★★★★★★★★★★★★★★★★★★★
*************************************************/

// console.log(
//   "문자값 배열-sort() 오름차순",
//   arrString.sort((a, b) => (a == b ? 0 : a < b ? -1 : 1))
// );

// console.log(
//   "문자값 배열-sort() 내림차순",
//   arrString.sort((a, b) => (a == b ? 0 : a > b ? -1 : 1))
// );
// console.log(
//   "숫자값 배열-sort() 오름차순",
//   arrNumber.sort((a, b) => (a == b ? 0 : a < b ? -1 : 1))
// );

// console.log(
//   "숫자값 배열-sort() 내림차순",
//   arrNumber.sort((a, b) => (a == b ? 0 : a > b ? -1 : 1))
// );

///////////////////////////////////////////////////////////////////////

// [1] 숫자로만된 배열의 정렬 //////////////////

// [1-1] 출력 대상: .showNum
const showNum = myFn.qs(".showNum");

// [1-2] 현재 숫자배열 출력하기
// 배열대상: arrNumber
const showNumFn = (newArray) => {
  // newArray는 변경할 배열전달
  // map은 원본배열을 변경하지 않는다!
  showNum.innerHTML = newArray
    .map(
      (v) => `
        <img src="./images/num/num_0${v}.png" alt="숫자이미지">
        `
    )
    .join("");
}; //////// showNumFn함수 //////

// 최초호출
showNumFn(arrNumber);
console.log("숫자배열원본:", arrNumber);

// [1-3] 정렬 선택박스 이벤트 설정하기
myFn.qs("#sel").addEventListener("change", function () {
  console.log(this.value);

  // 원본 배열을 보존하고자 깊은복사를 해줌!
  const newArray = [...arrNumber];
  // 스프레드 연산자로 처리함!

  if (this.value == 1)
    // 오름차순
    newArray.sort((a, b) => (a == b ? 0 : a < b ? -1 : 1));
  else if (this.value == 2)
    // 내림차순
    newArray.sort((a, b) => (a == b ? 0 : a > b ? -1 : 1));

  // 정렬후 화면출력
  showNumFn(newArray);

  console.log("숫자배열원본:", arrNumber);
}); /////// addEventListener /////////////

// [2] 문자로만된 배열의 정렬 //////////////////

// [2-1] 배열 태그변형후 출력하기 ////
const showNum2 = myFn.qs(".showNum2");

const showNum2Fn = (newArray) => {
  // newArray는 처리할 배열전달
  showNum2.innerHTML = newArray.map((v) => `<span>${v}</span>`).join("");
}; ////// showNum2Fn 함수 ////////////

// 최초호출
showNum2Fn(arrString);

// [2-2] 선택박스 변경 이벤트 발생시 정렬변경하기
myFn.addEvt(myFn.qs("#sel2"), "change", function () {
  // 원본보존을 위해 깊은복사로 처리
  const newArray = [...arrString];

  // 1) 오름차순/내림차순 변경처리 ///
  if (this.value == 1)
    // 오름차순
    newArray.sort();
  else if (this.value == 2)
    // 내림차순
    newArray.reverse();

  // 2) 화면출력
  showNum2Fn(newArray);

  console.log("문자값 배열 원본:", arrString);
}); ////// change 이벤트 함수 ///////

// [3] 객체데이터 배열의 정렬 //////////////
// [3-1] 객체데이터 배열
// - 객체구조 :
// (1) idx - 순번 / (2) tit - 제목 / (3) cont - 내용
const list1 = [
  {
    idx: 8,
    tit: "나는 구누?",
    cont: "공동구매) 슬로건 공구 (계좌와 네이버폼)",
  },
  {
    idx: 4,
    tit: "여기는 어디?",
    cont: "총공 공지] 오늘부터 일 2회, 총공 진행합니다",
  },
  {
    idx: 1,
    tit: "나야나",
    cont: "연합 갈라 서포트 계좌오픈",
  },
  {
    idx: 15,
    tit: "이제 얼마나 남은거니?",
    cont: "음악프로그램에 출연 요청글도 써볼까요?",
  },
]; /////////////// list1 /////////////

console.log(list1);

// [3-2] 데이터 바인딩하기 : 함수화하여 재사용!
// 바인딩 출력대상
const showList3 = myFn.qs(".showList3");

const showList3Fn = (newArray) => {
  // newArray 데이터 바인딩할 배열
  showList3.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
          ${newArray
            .map(
              (v) => `            
                <tr>
                    <td>${v.idx}</td>
                    <td>${v.tit}</td>
                    <td>${v.cont}</td>
                </tr>
                `
            )
            .join("")}
            
            </tbody>
                </table>
    
    `;
}; //////// showList3Fn 함수 //////////

// 바인딩함수 최초호출!
showList3Fn(list1);
console.log("객체배열원본:", list1);

// [3-3] 정렬하기 ////////////////
// 대상: 기준선택박스 / 정렬선택박스
const cta3 = myFn.qs("#cta3");
const sel3 = myFn.qs("#sel3");

// 이벤트 설정하기 : 대상 - sel3
myFn.addEvt(sel3, "change", function () {
  // (1) 깊은복사 : 배열 순서를 바꾸는 경우엔 효과있음!
  const newArray = list1.slice(); // -> slice() 방식!
  // -> slice(시작순번,끝순번) -> 끝순번 앞에서 잘라서 새배열생성
  // 예)list1.slice(1,3) -> 1,2번째 배열값만 가져옴
  // -> slice() 아무것도 안쓰면 전체배열을 새로생성함!(부가기능)
  // const newArray = [...list1]; -> 스프레드 연산자방식!
  // const newArray = list1;

  // -> 객체데이터를 변경하는 경우엔
  // 위의 깊은 복사가 아닌 JASON.parse()방식 써야함
  // newArray[0].idx = 999;

  // (2) 정렬 기준값 읽어오기 ///////
  let cta = cta3.value;
  console.log("정렬기준:", cta);

  // (3) 정렬변경하기 /////////////
  // (3-1) 오름차순 //////
  if (this.value == "1")
    newArray.sort((a, b) => (a[cta] == b[cta] ? 0 : a[cta] < b[cta] ? -1 : 1));
  // (3-2) 내림차순 ///////
  else if (this.value == "2")
    newArray.sort((a, b) => (a[cta] == b[cta] ? 0 : a[cta] > b[cta] ? -1 : 1));

  // (4) 화면출력 ////////////
  showList3Fn(newArray);
  console.log("객체배열원본:", list1);
}); //////// change 이벤트함수 /////////

///////////////////////////////////////////
// [4] 객체데이터 검색후 배열의 정렬 ////////
// [4-1] 객체데이터 배열
// - 객체구조 :
// (1) idx - 순번 / (2) tit - 제목 / (3) cont - 내용
const list2 = [
  {
    idx: 58,
    tit: "당근마켓에 가자",
    cont: "당근마켓이 항상 좋은건 아니야~!!ㅠ.ㅠ",
  },
  {
    idx: 15,
    tit: "당근마켓에 가자",
    cont: "당근마켓이 정말로 싸고 좋다구~!",
  },
  {
    idx: 74,
    tit: "점심에 뭐먹지? 당근이지!",
    cont: "오스틴님 생일 서포트 안내",
  },
  {
    idx: 18,
    tit: "직돌이는 쉬고싶다~!",
    cont: "활동정지에 대한 파생글 무통보 삭제 및 경고",
  },
  {
    idx: 104,
    tit: "올해는 다른 회사로 이직한다!",
    cont: "⚜️갈라콘 서포트에 많은 참여 부탁드립니다!",
  },
]; /////////////// list1 /////////////

console.log(list2);

// [4-2] 데이터 바인딩하기 : 함수화하여 재사용!
// 바인딩 출력대상
const showList4 = myFn.qs(".showList4");

const showList4Fn = (newArray) => {
  // newArray 데이터 바인딩할 배열
  showList4.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
          ${newArray
            .map(
              (v) => `            
                <tr>
                    <td>${v.idx}</td>
                    <td>${v.tit}</td>
                    <td>${v.cont}</td>
                </tr>
                `
            )
            .join("")}
            
            </tbody>
                </table>
    
    `;
}; //////// showList4Fn 함수 //////////

// 바인딩함수 최초호출!
showList4Fn(list2);
console.log("객체배열원본:", list2);

// [4-3] 정렬하기 ////////////////
// 대상: 기준선택박스 / 정렬선택박스
const cta4 = myFn.qs("#cta4");
const sel4 = myFn.qs("#sel4");

// 정렬할 배열데이터 담을 변수
let tgArray4 = list2.slice();
// 처음엔 기본전체배열값 할당함!

// 이벤트 설정하기 : 대상 - sel4
myFn.addEvt(sel4, "change", function () {
  // (1) 깊은복사 : 배열 순서를 바꾸는 경우엔 효과있음!
  const newArray = tgArray4.slice(); // -> slice() 방식!
  // -> slice(시작순번,끝순번) -> 끝순번 앞에서 잘라서 새배열생성
  // 예)list1.slice(1,3) -> 1,2번째 배열값만 가져옴
  // -> slice() 아무것도 안쓰면 전체배열을 새로생성함!(부가기능)
  // const newArray = [...list1]; -> 스프레드 연산자방식!
  // const newArray = list1;

  // -> 객체데이터를 변경하는 경우엔
  // 위의 깊은 복사가 아닌 JASON.parse()방식 써야함
  // newArray[0].idx = 999;

  // (2) 정렬 기준값 읽어오기 ///////
  let cta = cta4.value;
  console.log("정렬기준:", cta);

  // (3) 정렬변경하기 /////////////
  // (3-1) 오름차순 //////
  if (this.value == "1")
    newArray.sort((a, b) => (a[cta] == b[cta] ? 0 : a[cta] < b[cta] ? -1 : 1));
  // (3-2) 내림차순 ///////
  else if (this.value == "2")
    newArray.sort((a, b) => (a[cta] == b[cta] ? 0 : a[cta] > b[cta] ? -1 : 1));

  // (4) 화면출력 ////////////
  showList4Fn(newArray);
  console.log("객체배열원본:", list2);
}); //////// change 이벤트함수 /////////

// [4-4] 검색하기 ///////////////////////
// 대상 :
// 검색항목 : #search-cta4
const sCta4 = myFn.qs("#search-cta4");
// 검색입력창 : #stxt
const stxt = myFn.qs("#stxt");
// 검색버튼 : .sbtn
const sbtn = myFn.qs(".sbtn");
// 전체버튼 : .fbtn
const fbtn = myFn.qs(".fbtn");

// (1) 버튼 클릭시 이벤트 설정하기 //////
myFn.addEvt(sbtn, "click", () => {
  console.log("검색해~!!!");
  // 1) 검색어가 없으면 경고창띄우기
  if (stxt.value.trim() == "") {
    alert("검색어를 입력해주세요~!");
  } /// if ///
  // 2) 검색어가 있으면 filter로 검색결과 배열만들기
  else {
    console.log("검색어:", stxt.value.trim());
    let result = list2.filter((v) =>
      String(v[sCta4.value]).includes(stxt.value.trim())
    );

    // 이해를 위해 직접 값을 넣어본다!
    // let result = list2.filter(v=>
    //   v.tit.includes('당근'));

    // let result = list2.filter((v) => {
    //   // 숫자형이 들어오면 indexOf()에러남!
    //   // 따라서 데이터를 문자형변환야함! String()
    //   // if (String(v[sCta4.value])
    //   //   .indexOf(stxt.value.trim()) !== -1) return true;
    //   if (String(v[sCta4.value])
    //     .includes(stxt.value.trim())) return true;
    // });
    console.log("검색결과:", result);

    // 3) 검색에서 사용할 배열값 업데이트하기
    tgArray4 = result;

    //
    // 4) 결과배열을 화면 바인딩 함수를 호출시 보내준다!
    showList4Fn(result);
  } /// else ////
}); ///////// click 이벤트 함수 ///////

// [4-5] 전체 버튼 클릭시 전체리스트 보이기
myFn.addEvt(fbtn, "click", () => {
  // 1) 검색입력값 지우기
  stxt.value = "";
  // 2) 검색항목 초기화
  sCta4.value = "tit";
  // 3) 정렬항목 초기화
  cta4.value = "idx";
  sel4.value = "0";
  // 4) 검색에서 사용할 배열값 업데이트하기
  tgArray4 = list2.slice();
  // 5) 실제 전체항목 리스트보이기
  showList4Fn(tgArray4);
}); /////// click 이벤트함수 ////////

///////////////////////////////////////////
// [5] 객체원본 배열로 변환하기 /////////////
// [5-1] 객체데이터 객체원본
// - 객체구조 :
// (1) idx - 순번 / (2) tit - 제목 / (3) cont - 내용
// -> 객체의 값으로 배열만들기
// -> Object.values(객체)
// 참고) 객체의 키로 배열만들기 -> Object.keys(객체)
const temp = {
  item1: {
    idx: 45,
    tit: "강남당근마켓에 가자",
    cont: "다니엘 당근마켓이 정말로 싸고 좋다구~!",
  },
  item2: {
    idx: 94,
    tit: "나라점심에 뭐먹지?",
    cont: "강남오스틴님 생일 서포트 안내",
  },
  item3: {
    idx: 22,
    tit: "다니엘 직돌이는 쉬고싶다~!",
    cont: "마동석 활동정지에 대한 파생글 무통보 삭제 및 경고",
  },
  item4: {
    idx: 111,
    tit: "라면 올해는 다른 회사로 이직한다!",
    cont: "나라 갈라콘 서포트에 많은 참여 부탁드립니다!",
  },
}; /////////////// temp 임시변수 /////////////

// 아래서 사용할 객체값을 배열로 변환
const list3 = Object.values(temp);

console.log("객체값 배열변환:", list3);
console.log("객체키 배열변환:", Object.keys(temp));

// [5-2] 데이터 바인딩하기 : 함수화하여 재사용!
// 바인딩 출력대상
const showList5 = myFn.qs(".showList5");

const showList5Fn = (newArray) => {
  // newArray 데이터 바인딩할 배열
  showList5.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
          ${newArray
            .map(
              (v) => `            
                <tr>
                    <td>${v.idx}</td>
                    <td>${v.tit}</td>
                    <td>${v.cont}</td>
                </tr>
                `
            )
            .join("")}
            
            </tbody>
                </table>
    
    `;
}; //////// showList5Fn 함수 //////////

// 바인딩함수 최초호출!
showList5Fn(list3);
console.log("객체배열원본:", list3);

// [5-3] 정렬하기 ////////////////
// 대상: 기준선택박스 / 정렬선택박스
const cta5 = myFn.qs("#cta5");
const sel5 = myFn.qs("#sel5");

// 정렬할 배열데이터 담을 변수
let tgArray5 = list3.slice();
// 처음엔 기본전체배열값 할당함!

// 이벤트 설정하기 : 대상 - sel5
myFn.addEvt(sel5, "change", function () {
  // (1) 깊은복사 : 배열 순서를 바꾸는 경우엔 효과있음!
  const newArray = tgArray5.slice(); // -> slice() 방식!
  // -> slice(시작순번,끝순번) -> 끝순번 앞에서 잘라서 새배열생성
  // 예)list1.slice(1,3) -> 1,2번째 배열값만 가져옴
  // -> slice() 아무것도 안쓰면 전체배열을 새로생성함!(부가기능)
  // const newArray = [...list1]; -> 스프레드 연산자방식!
  // const newArray = list1;

  // -> 객체데이터를 변경하는 경우엔
  // 위의 깊은 복사가 아닌 JASON.parse()방식 써야함
  // newArray[0].idx = 999;

  // (2) 정렬 기준값 읽어오기 ///////
  let cta = cta5.value;
  console.log("정렬기준:", cta);

  // (3) 정렬변경하기 /////////////
  // (3-1) 오름차순 //////
  if (this.value == "1")
    newArray.sort((a, b) => (a[cta] == b[cta] ? 0 : a[cta] < b[cta] ? -1 : 1));
  // (3-2) 내림차순 ///////
  else if (this.value == "2")
    newArray.sort((a, b) => (a[cta] == b[cta] ? 0 : a[cta] > b[cta] ? -1 : 1));

  // (4) 화면출력 ////////////
  showList5Fn(newArray);
  console.log("객체배열원본:", list3);
}); //////// change 이벤트함수 /////////

// 검색전 테스트하기 ///////////////////
let searchText1 = list2.find((v) => {
  if (v.tit == "점심에 뭐먹지? 당근이지!") return true;
});
let searchText2 = list2.find((v) => {
  if (v.tit == "점심에 뭐먹지? 당근이지") return true;
});
console.log("검색테스트1(find):", searchText1);
console.log("검색테스트2(find):", searchText2);
console.log("like검색기초(indexOf)대상문자:", list2[0].tit);
console.log(
  'like검색기초(indexOf)대상문자의 "당"문자순번:',
  list2[0].tit.indexOf("당")
);
console.log(
  'like검색기초(indexOf)대상문자의 "가"문자순번:',
  list2[0].tit.indexOf("가")
);
console.log(
  'like검색기초(indexOf)대상문자의 "헐"문자순번:',
  list2[0].tit.indexOf("헐")
);
// 결과적으로 -1은 문자열이 없다는 리턴값이다!
// 반대로 결과가 있으면 -1이 아닌것이다!

// 검색 테스트 3
let searchText3 = list2.filter((v) => {
  if (v.tit.indexOf("당") !== -1) return true;
});

console.log('검색테스트3(filter)"당"이 있는제목:', searchText3);

// 검색 테스트 4
let searchText4 = list2.filter((v) => {
  if (v.tit.indexOf("다") !== -1) return true;
});

console.log('검색테스트4(filter)"다"가 있는제목:', searchText4);

// 검색 테스트 5
let searchText5 = list2.filter((v) => {
  if (v.tit.indexOf("멍") !== -1) return true;
});

console.log('검색테스트5(filter)"멍"이 있는제목:', searchText5);
// 데이터가 없으면 빈배열을 리턴함
// 따라서 없다는 것은 배열길이가 0이라는 말
// 배열.length==0 이 값이  true면 검색결과가 없는것!

// indexOf말고 배열값 중 어떤 값을 포함하는지 여부를
// 알아내는 함수는 includes(값) -> 있으면 true, 없으면 false

// indexOf()와 includes()는 모두 배열에서도 사용하고
// 문자열(String)에서도 사용하는 메서드이다!
// 여기서는 배열값 중 특정 문자열값에서 찾는 역할을 한다!

console.log("찾을대상:", list2[0].tit);
console.log("includes('당'):", list2[0].tit.includes("당"));
console.log("includes('멍'):", list2[0].tit.includes("멍"));
