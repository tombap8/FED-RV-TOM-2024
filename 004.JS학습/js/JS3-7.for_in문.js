// JS3-7.for_in문 JS

// module 타입으로 호출했으므로 import 사용가능!
// 제이슨 데이터 파일 불러오기!
// -> [제이슨 파일 import로 부르는 방법]
// import 변수명 from 상대경로 with {type:'json'}
import movieInfo from './data_movie.json' with {type:'json'};

console.log('제이슨 데이터:',movieInfo);

