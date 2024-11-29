// 객체연습 - 다국어 //////////

// 언어셋팅이된 제이슨 파일을 본 JS에서 불러온다!
// 단, 제이슨 파일을 불러오려면 import 문법을 써야하는데
// 모듈문법을 사용해야 쓸 수 있다!
// 본 파일 호출하는 html에서 type="module" 이라는 속성값을
// script요소에 줘야함!!!

// import 변수 from 파일경로 with {type:'json'}
import langData from './data_lang.json' with {type:'json'};

console.log(langData);