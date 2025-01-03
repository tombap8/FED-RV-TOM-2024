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
