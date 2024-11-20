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
// 1-1. new 키워드로 배열선언 및 할당하기 /////////////////
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
  function () {
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
          display: none; 
          transition: .4s ease-out;
          translate: -50% -50%;
          z-index: 100;
          pointer-events: none;
        "
        id="kim"
      >
    `;

    // [위의 CSS 코드 체크!!!]
    // pointer-events: none -> 실제 이벤트는 부모박스인데
    // 자식요소인 이미지가 매번 가림으로 인해 이벤트가
    // 순간 없어졌가 다시 걸렸다가 함으로 떨림증상발생!!!
    // 이 설정으로 본 이미지는 이벤트를 없애고 아래쪽 요소가
    // 그대로 이벤트를 발생하게됨! 따라다니는 기능에서
    // 매우 중요한 설정임!!!

    // 앱솔루트의 부모자격을 this에게 준다!
    this.style.position = "relative";

    // 위에서 생성된 id="kim" 요소를 변수에 할당함!
    const kim =
      document.querySelector("#kim");

    // 2.마우스 오버시 나타나고
    this.onmouseenter = () => {
      kim.style.display = "block";
    };
    // 3.마우스 아웃시 사라지고
    this.onmouseleave = () => {
      kim.style.display = "none";
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
      console.log(
        "offsetX:",
        헐.offsetX
      );
      console.log(
        "offsetY:",
        헐.offsetY
      );

      // 위치값 반영대상 : 김태리 이미지 -> #kim
      kim.style.left = `${헐.offsetX}px`;
      kim.style.top = `${헐.offsetY}px`;
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
target[0].onclick =
  arr1[arr1.length - 1];

// click 이벤트 강제 실행!
// click() 메서드 호출!
target[0].click();

// 1-2. 배열 리터럴 방식의 선언과 할당 /////////////////////
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
    console.log("this:", this);
    // 배경넣기
    this.style.background = `
    url(https://blog.kakaocdn.net/dn/H4k8p/btqUUqx7TLT/VAMfjsV79wqyKIfOGXn5P0/img.jpg) repeat-x 0/auto 100%`;
    // 트랜스폼 변경 : 스케일 1.5, 회전 720도
    this.style.scale = "1.5";
    this.style.rotate = "720deg";
    // 트랜지션 : 2초 ease-in-out
    this.style.transition =
      "2s ease-in-out";

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

console.log(
  "arr2는 배열인가? ",
  Array.isArray(arr2) ? "응" : "아니"
);

// 출력대상 : target의 두번째
target[1].innerHTML = `
    ${arr2[0]}은 ${arr2[2]}년에 일제에 항거하여
    ${arr2[1]}를 들고 일어난 민중봉기를 기념하는 날이다!
`;

// 두번째 출력박스를 클릭하면 배열 값에 있는 함수 호출하기
target[1].onclick = arr2[3];

// 두번째 박스에 타이틀 출력
target[1].title =
  "클릭하시면 만세를 합니다!";
// 두번째 박스에 손가락표시
target[1].style.cursor = "pointer";

// console.log("배열안의 함수:",arr2[3]);

// 1-3. 배열을 미리 생성하여 각각 할당하기 //////////
// 배열변수명 = [] -> 배열리터럴
// 배열변수명.length = 숫자 -> 숫자만큼 배열이 생성됨
// 배열변수명.length 는 배열개수를 읽기/쓰기 모두 가능함!

const arr3 = [];
// const 상수로 리터럴선언, 할당후
// 배열값 변경은 자유롭다!
// 그러나 배열형을 변경할 수 없다! 즉, 재할당불가!!!
// 그래서 상수임! (코드 보안상, 안전상 이유로 많이씀)

console.log("arr3배열:",arr3);

// 배열개수 미리 셋팅하기
arr3.length = 8;
// 배열의 개수를 미리 셋팅해도 배열을 더 추가할 수 있음!
// 의미는? 미리 배열개수를 정하고 이것을 지키려는 의도임!

console.log("arr3배열:",arr3);

// 각 배열주소에 값을 할당하기
arr3[0] = "산";
arr3[1] = "할아버지";
arr3[2] = "구름모자";
arr3[3] = "썼네~!";
arr3[4] = "나비같이";
arr3[5] = "훨훨";
arr3[6] = "훠얼훨";
arr3[7] = "날아서~!";

// 배열전체값 출력하기 : valueOf()
console.log("arr3배열전체값:",arr3.toString());
console.log("arr3배열전체값:",arr3.valueOf().toString());
// 현재 브라우저는 valueOf()안해도 배열값을 보여준다!
// toString() 출력은 배열값을 콤마로 연결한 문자열로 변환한다!

// 변수값 사이에 구분자 넣고 문자형으로 배열값 변경하기
// join(구분자) -> 구분자 넣고 문자값 생성
console.log("arr3배열 join():",arr3.join("♥"));

// 배열값 맨뒤에 값 추가하기 메서드 : push()
arr3.push("김창환작사");

// 배열값을 세번째 target박스에 출력하기
// join()으로 사이에 별표 넣고 문자열 변환출력
target[2].innerHTML = arr3.join("★");

// -> 배열 메서드는 중요하므로 별도로 훈련함!!!

