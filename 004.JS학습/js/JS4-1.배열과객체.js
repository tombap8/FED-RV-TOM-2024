// JS4-1.배열과객체 JS

/**********************************************
     [ 배열(Array) 변수란? ]

    - 여러개의 데이터를 묶음으로 변수하나에 저장함
    - 장점: 데이터를 취급하고 다루는데 편의성 제공
    - 각 데이터를 하나의 이름으로 구분하여 호출할
    수 있는 메모리공간이다!
    (예: 계란한판, 아파트 등)

    [ 배열의 선언의 2가지 방식 ]

    1. new 키워드 선언방식
    - new Array()
    객체를 실제로 메모리안에 생성하는 방법을 제공
    이를 인스턴스(instance)라고 함!

    2. 리터럴 선언방식 (배열리터럴)
    - 변수 = []


    - 객체란 속성과 메서드를 가지고 있는 프로그램 단위체
    - 객체는 독립된 특성을 가지고 있어야함!

    예컨데 자동차, 볼펜, 물통, 가방 등
    독립된 별도의 기능이 있어야하고 명사적특징과
    동사적 특징이 모두 있어야 객체다!

**********************************************/

// 1. 배열 셋팅하고 출력하기 ////////////////
// 1-1. new 키워드로 배열선언 및 할당하기
// 그런데 배열은 굳이 new키워드로 선언할 필요는 없다!
// 배열 리터럴로 생성할 수 있다!
const arr1 = new Array(
  "1990년 4월 24일",
  "166cm",
  "46kg",
  [2014, "더바디샵"],
  [
    "미스터션샤인",
    "리틀 포레스트",
    "정년이",
  ],
  "김태리",
  function(){
    // this는 누구? 호출한 요소자신!!!
    // alert("김태리 멋찜!!!");

    // 1.호출한요소 박스에 김태리 사진 이미지를 넣고(+=대입연산자로 기존 데이터 살림!)
    this.innerHTML += `
      <img src="https://cdn.mhnse.com/news/photo/202410/333921_379284_5123.jpg" alt="김태리이미지"
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 150px;
          height: 200px;
          border-radius: 20px;
          border: 4px ridge hotpink;        
          transition: all 0.5s ease-out;  
        "
        id="kim"
      >
    `;

    // 앱솔루트의 부모자격을 this에게 준다!
    this.style.position = "relative";

    const aa = document.querySelector("#kim")

    // 2.마우스 오버시 나타나고
    this.onmouseenter = ()=>{
      document.querySelector("#kim")
      .style.display = "block";
    };
    // 3.마우스 아웃시 사라지고
    this.onmouseleave = ()=>{
      document.querySelector("#kim")
      .style.display = "none";
    };
    // 4.마우스 움직이면 따라다니게 해요!
    // mousemove 이벤트 : 
    // 마우스 포인터가 대상요소 위에서 움직일때 계속발생
    this.onmousemove = (헐) => {
      // "헐" 변수는 이벤트 전달변수임!
      // 어떤 함수도 전달값이 없는데 변수하나를 쓰면
      // 곧 그것이 이벤트 전달변수가 됨!
      // 그 요소에서 발생하는 이벤트를 객체로 가지고 있음
      // 대체해서 event 라고 직접 전체 이벤트 객체를 쓸 수 있음!


      // 이벤트 객체하위 pageX, pageY는 최상단, 최왼쪽으로부터
      // 마우스 커서의 위치를 x,y축으로 단위없는 px값을 리턴한다!
      // 이 값은 사이트 전체를 이동하는 어떤 요소를 구현할때
      // 많이 사용함
      // console.log("pageX:",헐.pageX);
      // console.log("pageY:",헐.pageY);

      // 여기서는 본 박스 안에서만 그 위치를 알면 되므로
      // -> offsetX, offsetY -> 해당부모요소 박스로 부터
      // 위치를 리턴함!
      console.log("offsetX:",헐.offsetX);
      console.log("offsetY:",헐.offsetY);
    };

  }
);

// new 키워드로 선언과 할당을 동시에 할 수 있다!
// 소괄호안에 컴마로 값을 구분하여 사용함!

// 배열변수에 할당한 데이터 불러오기
// 호출방법 : 배열변수명[순번] -> 순번은 0부터!
console.log(
  "arr1:",
  arr1,
  typeof arr1,
  "배열이니?",
  Array.isArray(arr1)
    ? "응, 배열맞아!"
    : "아니, 배열아냐!"
  // 비?집:놀이동산 -> 삼항연산자(조건연산자)
);
// typeof(변수) / typeof 변수 -> 데이터형 출력!
// 배열의 데이터형을 찍으면 object라고 나옴
// 이것은 배열도 객체이기 때문!
// 배열인지 검사하는 방법은 Array.isArray(변수)
// -> 배열여부를 알아내는 메서드는 중요함!

// 출력 대상 : .cont (여러개임!)
const target =
  document.querySelectorAll(".cont");

console.log("출력대상:", target);

// 여기서 출력대상은 .cont중 첫번째것!
target[0].innerHTML = `
    이름: ${arr1[5]}/
    키: ${arr1[1]}/
    몸무게: ${arr1[2]}/
    대표작: ${arr1[4]}/
    데뷔년도: ${arr1[3][0]}
`;
// 배열안에 배열이 또 있으면 대괄호를 추가하여
// 해당 순번을 써준다! 변수[순번][순번]

// 김태리 기능추가!
// 배열마지막 번호 == 배열개수-1
target[0].onclick = arr1[arr1.length - 1];

// click 이벤트 강제 실행!
// click() 메서드 호출!
target[0].click();




// 1-2. 배열 리터럴 방식의 선언과 할당
// 배열변수명 = [값1, 값2,...]
// new 키워드 없이 바로 쓸 수 있는 객체임!
// 이런 배열과 같은 객체를 정적객체(Static Object)라고 함!

const arr2 = [
  "삼일절",
  "태극기",
  1919,
  function () {
    alert("대한독립만세~!");
    // this는 누구인가? 호출한 요소자신!
    console.log("this:",this);
    // 배경넣기
    this.style.background = `
    url(https://blog.kakaocdn.net/dn/H4k8p/btqUUqx7TLT/VAMfjsV79wqyKIfOGXn5P0/img.jpg) repeat-x 0/auto 100%`;
    // 트랜스폼 변경 : 스케일 1.5, 회전 720도
    this.style.scale = "1.5";
    this.style.rotate = "720deg";
    // 트랜지션 : 2초 ease-in-out
    this.style.transition = "2s ease-in-out";

    // 4초후에 다시 원래크기로 돌아가기
    // setTimeout(함수,시간)
    setTimeout(() => {
      this.style.scale = "1";
    }, 4000);
  },
];
// 배열끝에 콤마는 원래는 쓰면 에러나지만
// 최신브라우저에서 에러안나게 처리됨!
// 요즘은 추가 배열 데이터를 위해 마지막 콤마를
// 쓰는 것이 일반적임!(프리티어도 마지막콤마 넣어줌)

// function(){} 익명함수 - 이름없고 코드만 저장
// -> 배열값으로 문자,숫자,배열,객체,함수 등 사용가능!

console.log("arr2는 배열인가? ", 
    Array.isArray(arr2)?"응":"아니");

// 출력대상 : target의 두번째
target[1].innerHTML = `
    ${arr2[0]}은 ${arr2[2]}년에 일제에 항거하여
    ${arr2[1]}를 들고 일어난 민중봉기를 기념하는 날이다!
`;

// 두번째 출력박스를 클릭하면 배열 값에 있는 함수 호출하기
target[1].onclick = arr2[3];

// 두번째 박스에 타이틀 출력
target[1].title = "클릭하시면 만세를 합니다!";
// 두번째 박스에 손가락표시
target[1].style.cursor = "pointer";

// console.log("배열안의 함수:",arr2[3]);
