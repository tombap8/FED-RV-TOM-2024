// JS1.기본사용법 JS ////////////

console.log("JS1.기본사용법 시작~!");

// 함수는 코드를 저장하는 구역임
// 함수명은 코드저장소의 주소다!
// 함수의 호출은 함수명()
/**************************************** 
    함수명 : 김비서나와라
    기능 : 김비서박스에 각종 변경하기
****************************************/
function 김비서나와라(){
    // 1. 함수호출확인!
    console.log('김비서 나왔다~!');

    // 2. HTML넣기 : 이벤트 속성에서 인라인코드로
    // 이미 실행함!(이미지 넣기)

    // 3. CSS변경하기 //////
    // 대상선정 : .pbox
    // 클래스는 여러개 사용할 수 있으므로
    // HTML컬랙션 집합에 수집되어 사용됨!
    // getElementsByClassName(클래스명)
    // 0,1,2,... 이런 순서로 수집함
    // 하나뿐이어도 0번째라고 해야함!
    console.log(
        document.getElementsByClassName('pbox'));

    ////// 변경내용 ////////////////////
    // 3-1. 배경이미지 넣기
    document.getElementsByClassName('pbox').item(0)
    .style.background = "url(./images/kimbs.jpg) no-repeat top/cover";
    // .pbox중 첫번째 (0번)를 선택함!
    // item(순번)




    
} //////////// 김비서나와라 함수 //////////