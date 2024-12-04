// 구체적인 데이터 구성처리를 위한 JS : msg_format.js

// 내용 메시지를 구성하는 함수 ////



 /********************************************* 
    [ 선언된 변수를 export default 하기 ]

    1. 일반적으로 선언과 할당을 한 변수는 아래쪽에서
    export default로 그이름을 써주면 된다!
    단, 받는 곳에서 import시 이름은 중요치 않다!
    (내가 이름을 지을 수 있음!)

    예)
        const aa = [];
        export default aa;

    2. 변수앞에 export default를 쓸때는 변수선언과
    변수명은 쓸 수 없다!!!

    예) 
        // 배열인 경우
        export default [];
        // 객체인 경우
        export default {};
        // 화살표 함수인 경우
        export default ()=>{};

 
 
 *********************************************/