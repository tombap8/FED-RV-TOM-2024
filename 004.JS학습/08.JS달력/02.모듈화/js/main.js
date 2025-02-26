// 달력 컴포넌트를 부르는 메인 JS - main.js

// 달력 컴포넌트 불러오기
import MakeDallyeok from "./CalendarComp.js";
// console.log(MakeDallyeok);

// 달력 컴포넌트 함수 호출하여 달력 셋팅하기!
// 대상: .dalcom1, .dalcom2
const dc1 = new MakeDallyeok('.dalcom1');
const dc2 = new MakeDallyeok('.dalcom2');