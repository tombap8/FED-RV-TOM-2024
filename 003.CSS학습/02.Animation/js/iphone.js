// 아이폰 회전하기 : 따라보기 기능구현

// 요구사항 분석 : 아이폰이 x축, y축으로
// 앞에 분할된 영역에 오버시 해당 수치로
// 회전하여 마우스 포인터를 따라보게 한다!
// (CSS에서 마우스 포인터도 이미지로 바꿔준다!)

// 1. 이벤트 대상 : .evt-bx li
const target = document.querySelectorAll('.evt-bx li');
console.log("대상요소:", target);