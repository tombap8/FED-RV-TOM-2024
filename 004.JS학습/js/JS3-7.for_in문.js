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