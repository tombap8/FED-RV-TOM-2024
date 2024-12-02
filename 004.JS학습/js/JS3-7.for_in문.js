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
                  <img src="https://movie-phinf.pstatic.net/20201116_276/1605491658399poUOC_JPEG/movie_image.jpg?type=m99_141_2" alt="조제의 포스터">  
              </div>
              <div class="cont">
                  <!-- 2. 제목 -->
                  <h2 class="tit">
                      조제</h2>
                  <!-- 3. 개요 -->
                  <h3 class="sum">
                    ★장르 : 멜로/로맨스, 드라마
                  </h3>
                  <!-- 4. 감독 -->
                  <h3 class="dir">
                    ★감독 : 김종관
                  </h3>
                  <!-- 5. 출연 -->
                  <h3 class="act">
                    ★배우 : 한지민, 남주혁
                  </h3>
              </div>
          </div>

          <!-- 영화 한마디 -->
          <h2 class="showtit">♥ 영화한마디!</h2>
          <!-- 6. 문구 -->
          <div class="show">
              <span>조</span><span>제</span>&nbsp;&nbsp;<span>보</span><span>러</span>&nbsp;&nbsp;<span>오</span><span>세</span><span>요</span>
          </div>
      </section>
    `;

    // (3) 변경대상에 코드넣기
    wrap.innerHTML = hCode;
} /////// makeList 함수 ////////////////
