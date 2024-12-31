// 배열의 메서드 활용 JS

// 나의 함수 호출
import myFn from "./my_function.js";

/************************************************ 
    [ 여기 등장하는 배열 메서드 정리 ]

    1. push(값) - 뒷배열추가!
    2. pop() - 뒷배열삭제!(뒷배열값 리턴함)
    3. unshift(값) - 앞배열추가!
    4. shift() - 앞배열삭제!(앞배열값 리턴함)
    5. splice(순번,0,값) - 중간배열삽입!
    6. splice(순번,개수) - 중간배열삭제!
    _________________________________

    7. join(구분자) - 배열값 구분자로 문자열변환!
    8. map(v=>`<새값>${v}</새값>`) - 새배열!(배열리턴)
    9. forEach(v=>{}) - 배열/유사배열 순회!
    10. Object.keys(객체) - 객체의 키로 배열변환!
    11. Object.values(객체) - 객체의 값으로 배열변환!
    
****************************************************/

// 0. 기본정보 셋팅 //////////////////
// (1) 배열변수 선언과 할당
const fruit = ["배", "사과", "용과", "딸기"];

// (2) 과일명과 배경이미지명을 매칭함 -> 객체
const frObj = {
  배: "fruits_01",
  사과: "fruits_02",
  용과: "fruits_14",
  딸기: "fruits_09",
  두리안: "fruits_17",
  바나나: "fruits_15",
  수박: "fruits_12",
  파인애플: "fruits_13",
  망고: "fruits_24",
  오렌지: "fruits_03",
  체리: "fruits_05",
  멜론: "fruits_11",
  블루베리: "fruits_20",
  레몬: "fruits_04",
  산딸기: "fruits_25",
}; ////////// frObj 객체 /////

// 1. 요구사항 :
// 배열에 과일정보를 담아서 '과일주세요'버튼 클릭시
// 과일 이미지요소를 화면에 출력해준다!
// 배열구성을 수정, 삭제 등 배열 메서드로 변경할 수 있게 한다!

// 2. 대상선정 :

// 2-1. 이벤트 대상 : .mbtn (기능버튼들)
const mbtn = myFn.qsa(".mbtn");

// 2-2. 변경 대상 : .showit (배열정보출력) / .cont (과일출력박스)
const showit = myFn.qs(".showit");
const cont = myFn.qs(".cont");

// 2-3. 전체과일콤보박스 : #sel
const sel = myFn.qs("#sel");

// 2-4. 선택과일콤보박스(anum=array number) : #anum
const aNum = myFn.qs("#anum");

// 2-5. 지울개수입력창 : #delnum
const delNum = myFn.qs("#delnum");

// console.log('대상:',mbtn,showit,cont,sel,aNum,delNum);

// 3. 초기화 작업 : 처음배열 출력 / 콤보박스 바인딩

// 3-1. 처음 배열 출력 /////////////////////////
// - fruit 배열 변경시 다시 출력해야하므로 함수로 만들기
const showArray = () => {
  // (1) 배열 보여주기 업데이트
  showit.innerText = fruit.join("♥");

  // (2) 현재배열 선택박스 업데이트
  aNum.innerHTML = fruit.map((v, i) => `<option value="${i}">${v}</option>`);

  // (3) 지울개수 선택박스 업데이트(개수만큼)
  delNum.innerHTML = fruit.map((v, i) => `<option>${i + 1}</option>`);
}; //////// showArray 함수 ///////

// 처음배열출력함수 최초호출은 아랫쪽에서!!!
showArray();

// 3-2. 과일 선택 콤보박스에 과일이름 바인딩하기 ////
// 대상 : #sel -> sel변수
// 데이터 : frObj 객체 -> 키값으로 배열만들기
// -> Object.keys(객체명) -> 키값 배열됨!

sel.innerHTML = Object.keys(frObj)
  .map((v) => `<option>${v}</option>`)
  .join("");
// 오브젝트 키쓰 맵쬬잉~~!

// 4. 이벤트 설정하기 /////////////////////
// -> 각 기능버튼에 클릭이벤트를 설정함 ////
mbtn.forEach((el) => {
  myFn.addEvt(el, "click", showFruit);
}); //////// forEach /////////////

// 5. 함수만들기 /////////////////////////
function showFruit() {
  // (1) 버튼 텍스트 읽기
  let btxt = this.innerText;

  console.log(btxt);

  // (2) 버튼별 기능분기하기 /////
  // (2-1) '과일주세요~!' 버튼 : 하단박스에 과일이미지출력
  if (btxt === "과일주세요~!") {
    // 출력대상: .cont -> cont변수
    cont.innerHTML = `
            <ul>
            ${fruit
              .map(
                (v) =>
                  `<li
                    style="
                    background: 
                    url(./addimg/${frObj[v]}.png)
                    no-repeat center/cover"
                    >${v}</li>`
              )
              .join("")}
            </ul>
        `;
  } //// if /////
  // (2-2) '뒷배열추가요~!' 버튼 : push() 메서드사용!
  else if (btxt === "뒷배열추가요~!") {
    fruit.push(sel.value);
    // sel.value는 선택박스의 value값임
    // 만약 value속성이 없으면 요소의 데이터를 읽어감!
  } //// else if /////
  // (2-3) '뒷배열삭제요~!' 버튼 : pop() 메서드사용!
  else if (btxt === "뒷배열삭제요~!") {
    // let lastArr = fruit.pop();
    // console.log('지우기찍기:',lastArr);
    fruit.pop();
  } //// else if /////
  // (2-4) '앞배열추가요~!' 버튼 : unshift() 메서드사용!
  else if (btxt === "앞배열추가요~!") {
    fruit.unshift(sel.value);
  } //// else if /////
  // (2-5) '앞배열삭제요~!' 버튼 : shift() 메서드사용!
  else if (btxt === "앞배열삭제요~!") {
    fruit.shift();
  } //// else if /////
  // (2-6) '중간배열삭제' 버튼 : splice() 메서드사용!
  // -> 삭제일 경우 옵션 : splice(순번,개수)
  // -> 개수가 0이 아닐경우에 삭제함
  // -> 순번만 쓰고 개수를 안쓰면 순번부터 뒤엣것 모두지움!
  else if (btxt === "중간배열삭제") {
    fruit.splice(aNum.value, delNum.value);
  } //// else if /////
  // (2-7) '중간배열삽입' 버튼 : splice() 메서드사용!
  // -> 삽입일 경우 옵션 : splice(순번,0,넣을값,넣을값,...)
  // -> 선택순번 앞에 삽입된다!
  // -> 개수를 0으로 셋팅!
  // -> 뒤에 값을 넣고 컴마로 연결하면 여러개 삽입가능
  else if (btxt === "중간배열삽입") {
    fruit.splice(aNum.value, 0, sel.value);
  } //// else if /////

  // (2-8) 출력배열 업데이트 함수 호출은 공통!
  if (btxt !== "과일주세요~!") showArray();
  // 조건 : '과일주세요~!'버튼이 아닐때만 실행!
} //////////// showFruit 함수 ////////////
