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
    let hCode = ''; // 변수 선언 및 초기화!

    // 제이슨 객체 데이터 만큼 반복하여 코드 생성하기
    // for(key in Object){코드}
    for(let x in movieInfo){
        // console.log('x는 무엇?',x);
        // x변수에 담긴값은 객체의 속성(key)이다!

        // 반복할 코드 대입연산자(+=)로 계속저장함!
        hCode += `
            <section class="cbx">
              <div class="minfo">
                  <!-- 1. 포스터 -->
                  <div class="photo">
                      <img 
                      src=${movieInfo[x]['포스터']} 
                      alt="영화${movieInfo[x]['제목']}의 포스터">  
                  </div>
                  <div class="cont">
                      <!-- 2. 제목 -->
                      <h2 class="tit">
                      ${movieInfo[x]['제목']}
                      </h2>
                      <!-- 3. 개요 -->
                      <h3 class="sum">
                        ★장르 : ${movieInfo[x]['개요']}
                      </h3>
                      <!-- 4. 감독 -->
                      <h3 class="dir">
                        ★감독 : ${movieInfo[x]['감독']}
                      </h3>
                      <!-- 5. 출연 -->
                      <h3 class="act">
                        ★배우 : ${movieInfo[x]['출연']}
                      </h3>
                  </div>
              </div>
    
              <!-- 영화 한마디 -->
              <h2 class="showtit">♥ 영화한마디!</h2>
              <!-- 6. 문구 -->
              <div class="show">
              ${wrapTag(movieInfo[x]['문구'])}
              </div>
          </section>
        `;
    } //////// for in문 ///////////////
    

    // (3) 변경대상에 코드넣기
    wrap.innerHTML = hCode;
} /////// makeList 함수 ////////////////

/******************************************** 
    함수명: wrapTag
    기능: 글자를 하나씩 span태그로 싸서 보내줌
********************************************/
function wrapTag(txt){
    // 결과변수
    let hCode = '';

    // (1) 함수호출 확인
    console.log('wrapTag호출!',txt);

    // (2) 태그로 싸기
    // 한글자씩 자르기는? for of문 사용!
    // 반드시 대입연산자(+=)로 결과 저장할것!
    for(let x of txt){
        // console.log('x:',x); 
        // 공백문자일 경우 처리(글자없는 i태그)
        if(x==' ') 
            hCode += `<i></i>`;
        else // 글자있으면 span태그 랩핑처리!
            hCode += `<span>${x}</span>`;
    } /// for of ////

    // 결과값 리턴하기!
    return hCode;

} /////////// wrapTag 함수 ///////////////////


/******************************************** 
    [ 객체를 위한 for in문 ]
    (1) 구문 :
        for(변수 in 객체){코드}
        -> 객체를 순회하면 변수에 담는 것은 속성(key)이다!

        ((같지만 다르게 표현하면))
        for(key in Object){코드}
        -> 객체의 구성은 속성(key)과 값(value)이다!
        -> 객체의 구성 - {key:value,key:value,...}

    (2) 작동원리:
    - 객체의 개수 만큼 순서대로 속성 즉, key를 가져옴!
    - 그러므로 변수에 담기는 것은 속성이다!
    
    (3) for in문에서 객체값 가져오기
    - 객체[속성]
    - Object[key]
    _________________________________________

    [ for of문의 부가기능 ]
    문자데이터를 넣으면 한글자씩 돌아줌! 
    for(변수 of 문자데이터변수) {실행문}
    -> 한글자씩 태그로 싸줄때 편리함!

********************************************/


