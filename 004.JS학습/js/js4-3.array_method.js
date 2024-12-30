// 배열의 메서드 활용 JS

// 나의 함수 호출
import myFn from "./my_function.js";

/************************************************ 
    [ 여기 등장하는 배열 메서드 정리 ]

    1. push(값) - 뒷배열추가!
    2. pop() - 뒷배열삭제!(뒷배열값 읽기)
    3. unshift(값) - 앞배열추가!
    4. shift() - 앞배열삭제!(앞배열값 읽기)
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