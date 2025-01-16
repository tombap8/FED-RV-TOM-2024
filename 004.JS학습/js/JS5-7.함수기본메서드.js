// JS5-7.함수기본메서드 JS ///////////
/*************************************
  [      전달값 없이 this키워드로     ]
  [ 객체값을 전달할때 사용하는 기본함수 ]
  ---- 함수대리호출 메서드 3인방!!!^^ ---
  ______________________________________

    1. call() 메서드

    (1) 목적 : 
    함수나 메서드에 전달변수 없이 객체를 전달함

    (2) 사용법 :
        - 전달값 1개사용시 : 
        함수명.call(객체)
        -> 받는 함수에서 this키워드로 객체값사용
        ((주의)) 함수에서 사용하는 this.변수명은 반드시
        보내주는 객체의 속성명과 일치해야한다!

        - 전달값 2개이상 사용시 : 
        함수명.call(객체, 전달값1, 전달값2,...)
        -> 받는 함수에서 객체외에 전달변수 별도로 사용

    2. apply() 메서드 : call() 메서드와 동일하나
    전달값을 배열로 전달한다!
    함수명.apply(객체, [전달값1, 전달값2,...])

    ->> call() / apply() 는 속성전달 매개 메서드
    라고 볼 수 있다!

    3. bind() 메서드
    (1) 목적 : 기존 객체 내의 속성의 this를 교체하여 함수를 호출함

    (2) 사용법 :
        - 전달값 1개사용시 : 
        함수명.bind(객체)
        -> 받는 함수에서 this키워드로 객체값사용하면
        기존 내부의 속성이 아닌 새로운 속성값으로 대체됨

    (3) 다른사용

    

*************************************************/
// 영화 드라마 연결 주연 표시하기 //

// 인간 객체 : 메서드포함 (속성이 없는 경우)
const 인간 = {
  성명: function () {
    return this.성 + " " + this.명;
    // this는 call() / apply()가 보내준 객체를 가리킴
    // this하위 속성은 보내준 객체의 속성과 같음!
  },
};
// 사람객체1
const 사람1 = {
  성: "마",
  명: "동석",
};
// 사람객체2
const 사람2 = {
  성: "이",
  명: "제훈",
};

// 대표동물 표시하기 객체 ///
const 대표동물 = {
  발표: function (지역, 분류) {
    // this.나라 / this.이름 은 객체로 보내주는 속성임
    // 지역 / 분류 는 전달값을 받아 변수로 처리함
    return this.나라 + `(${지역})` + " " + this.이름 + `(${분류})`;
  },
};
const 동물1 = {
  나라: "호주",
  이름: "코알라",
};
const 동물2 = {
  나라: "일본",
  이름: "원숭이",
};

// 일반함수 call() / apply() 사용하기 ////
function 힘내(콜콜) {
  return this.호호 + " 그리고 " + this.하하 + " AND " + 콜콜;
}

// 컬렉션을 보내면 되기도 함!
function 노래() {
  return "노래제목은 " + this.title + ":" + this.id;
}

////////////////////////////////////////////////////
// 출력 코딩구역 //////////////////
// 전체출력대상 : .ex
const exBox = document.querySelectorAll(".ex");

// 1. 영화/드라마 주연 출력하기
exBox[0].innerText = "범죄도시 : " + 인간.성명.call(사람1);
exBox[1].innerText = "수사반장 : " + 인간.성명.call(사람2);

// 2. 나라 동물 찍기
exBox[2].innerText = 대표동물.발표.call(동물1, "오세아니아", "유대류");

// 데이터 배열
const animalData = ["아시아", "영장류"];
// call과 달리 apply는 추가 데이터를 배열로 보낸다!
exBox[3].innerText = 대표동물.발표.apply(동물2, animalData);

// 3. 일반함수 call() / apply() 사용하기
exBox[4].innerText = 힘내.call(
  { 호호: "게르니카", 하하: "우는여인" },
  "피카소"
);

// 특이하게 b요소를 선택하여 보내면 과연 될까?
exBox[5].innerText = 노래.apply(document.querySelector(".iam"));
// HTML요소도 객체의 일종이다!
// 선택요소.title, 선택요소.id 이렇게 객체값을 찍는다!

// 4. Math.max.apply() / Math.min.apply() 사용하기
// apply(객체,배열) -> 앞의 객체값을 불필요해서 null보냄
// 뒤의 배열만 필요하고 이것을 보내서 최대값/최소값을 리턴함

// 단순배열
const myNum = [2400, 3600, 4200, 5300, 6700];
// 화면출력
exBox[6].innerText = myNum + "의 최대값:" + Math.max.apply(null, myNum);

// 최소값을 콘솔에 찍어봄
console.log(myNum, "의 최소값:", Math.min.apply(null, myNum));

// 객체배열
/* 
    {
      연봉년도 : 년도,
      연봉금액 : 금액,
    }
  */
const myObj = [
  {
    year: 2000,
    pay: 2400,
  },
  {
    year: 2010,
    pay: 3600,
  },
  {
    year: 2015,
    pay: 4200,
  },
  {
    year: 2020,
    pay: 5300,
  },
  {
    year: 2024,
    pay: 6700,
  },
];

// 원래배열
console.log("원래배열:", myObj);
// map돌린 배열
console.log(
  "map돌린배열:",
  myObj.map((v) => v.pay)
);

exBox[7].innerText = `내가 받았던 연봉 중 최대값은
  ${Math.max.apply(
    null,
    myObj.map((v) => v.pay)
  )}만원이다!
  내가 받았던 최소연봉은 
  ${Math.min.apply(
    null,
    myObj.map((v) => v.pay)
  )}만원이었다!`;

////////////// bind() 메서드 ////////////
// 객체에 기존 속성이 있어서 this가 확정되어 있는 경우
// 이를 변경하여 메서드를 사용할 때 bind()를 쓴다!
const 합격자들 = {
  성: "김",
  명: "재원",
  이름다: function () {
    return this.성 + " " + this.명;
  },
  시간차: function () {
    setTimeout(
      function () {
        exBox[10].innerText = this.성 + " " + this.명;
        // 비동기호출 실행일 경우 큐로 코드가 이동하므로
        // this 의미를 상실하여 이를 bind(this)로 묶어서
        // 보내면 원하는 대로 this를 읽어서 실행한다!
      }.bind(this),
      2000
    );
  },
  화살표: function () {
    setTimeout(() => {
      exBox[11].innerText = this.성 + " " + this.명;
      // 화살표함수는 bind(this)없이도 this키워드를 묶어서
      // 큐로 보내준다!(내부설계가 그렇게 되어있음!)
    }, 3000);
  },
};

const 개인1 = {
  성: "최",
  명: "수연",
};
const 개인2 = {
  성: "정",
  명: "성호",
};
const 개인3 = {
  성: "이",
  명: "나영",
};

// this가 확정된 객체의 메서드를 그냥 호출하기
exBox[8].innerText = 합격자들.이름다();

// this 의미가 bind()로 묶어서 보낸 객체로 변경되어 호출하기
exBox[9].innerText = 합격자들.이름다.bind(개인1)();
// -> bind(객체)()는 객체를 묶어보내는 역할만 하고 실행 뒤소괄호함!

// setTimeout으로 시간차 실행함수 호출하기
합격자들.시간차.bind(개인2)();
합격자들.화살표.bind(개인3)();
/////////////// 전체 출력 코딩구역 //////////////////////
