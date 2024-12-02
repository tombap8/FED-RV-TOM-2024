// JS3-7.for_in문 JS

// module 타입으로 호출했으므로 import 사용가능!
// 제이슨 데이터 파일 불러오기!
// -> [제이슨 파일 import로 부르는 방법]
// import 변수명 from 상대경로 with {type:'json'}
import movieInfo from './data_movie.json' with {type:'json'};

// console.log('제이슨 데이터:',movieInfo);

// 나의 함수 불러오기
import myFn from './my_function.js';

// console.log('나의 함수:',myFn);

// 1. 요구사항 분석
// - 제이슨파일 영화데이터를 바탕으로 각 영화의 정보를
// 화면에 박스 구성하여 반복 데이터를 코드로 생성한다!

// 2. 대상선정
// 2-1. 이벤트 대상 : window
// -> 이벤트 종류: load 이벤트

// 2-2. 변경 대상: .wrap
const wrap =  myFn.qs('.wrap');

console.log('대상:', wrap);

// 3. 이벤트 셋팅하기 ////////
// 이벤트 대상인 window를 load이벤트와 함수로 연결
// 나의 함수에서 addEvt()사용!
// myFn.addEvt(선택요소,이벤트,함수)
myFn.addEvt(window,'load',makeList)

// 4. 함수만들기 ////////////
function makeList(){
    // (1) 함수호출 확인
    console.log('나야나!!!');

    // (2) 코드만들기
    let hCode = `
        <section class="cbx">
          <div class="minfo">
              <!-- 1. 포스터 -->
              <div class="photo">
                  <img 
                  src=${movieInfo['영웅']['포스터']} 
                  alt="영화${movieInfo['영웅']['제목']}의 포스터">  
              </div>
              <div class="cont">
                  <!-- 2. 제목 -->
                  <h2 class="tit">
                  ${movieInfo['영웅']['제목']}
                  </h2>
                  <!-- 3. 개요 -->
                  <h3 class="sum">
                    ★장르 : ${movieInfo['영웅']['개요']}
                  </h3>
                  <!-- 4. 감독 -->
                  <h3 class="dir">
                    ★감독 : ${movieInfo['영웅']['감독']}
                  </h3>
                  <!-- 5. 출연 -->
                  <h3 class="act">
                    ★배우 : ${movieInfo['영웅']['출연']}
                  </h3>
              </div>
          </div>

          <!-- 영화 한마디 -->
          <h2 class="showtit">♥ 영화한마디!</h2>
          <!-- 6. 문구 -->
          <div class="show">
          ${movieInfo['영웅']['문구']}
          </div>
      </section>
    `;

    // (3) 변경대상에 코드넣기
    wrap.innerHTML = hCode;
} /////// makeList 함수 ////////////////


/******************************************** 
    [ 객체를 위한 for in문 ]
    (1) 구문 :
    for(변수 in 객체){코드}
    -> 객체를 순회하면 변수에 담는 것은 속성(key)이다!
    for(key in Object){코드}
    -> 객체의 구성은 속성(key)과 값(value)이다!
    -> {key:value,key:value,...}

    (2) 작동원리:
    - 객체의 개수 만큼 순서대로 속성 즉, key를 가져옴!
    - 그러므로 변수에 담기는 것은 속성이다!
    
    (3) for in문에서 객체값 가져오기
    - 객체[속성]
    - Object[key]

********************************************/


