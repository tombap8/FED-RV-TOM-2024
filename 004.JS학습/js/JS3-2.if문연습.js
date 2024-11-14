// if문 연습 - 알라딘 스틸컷 변경하기 /////

// [기능 요구사항:]
// (1) 버튼을 클릭하면 메인 이미지가 변경된다
// (2) 버튼 클릭시 먼저 이미지가 왼쪽으로 사라진후
// 오른쪽에서 변경된 이미지가 들어온다!

// 1. 대상선정
// 1-1. 이벤트 대상 : 버튼들 - .btns
var btns = document.querySelectorAll(".btns");
// 1-2. 변경 대상 : 메인 이미지 - #scene
var scene = document.querySelector("#scene");

console.log("대상:",btns,scene);

// 2. 이벤트 걸기 ////////
btns[0].onclick = changeImage;
btns[1].onclick = changeImage;
btns[2].onclick = changeImage;
btns[3].onclick = changeImage;


// 3. 함수만들기
function changeImage() {
    // 1. 함수호출확인!
    console.log("알라딘딘딘!!!",this);
    // this키워드는 함수를 호출한 요소 자신!

    // 2. 호출한 요소(버튼)의 텍스트 읽기
    var bTxt = this.innerText;
    console.log("버튼텍스트:",bTxt);

    // 3. 이미지 경로 if문으로 분기하여 만들기
    var isrc = "";
    if(bTxt === "포스터"){
        isrc = "./images/ala1.jpg";
    }
    else if(bTxt === "장면1"){
        isrc = "./images/ala4.jpg";
    }
    else if(bTxt === "장면2"){
        isrc = "./images/ala2.jpg";
    }
    else if(bTxt === "장면3"){
        isrc = "./images/ala3.jpg";
    }

    // 4. 이미지 나가게 하기 : 클래스 off 넣기
    scene.classList.add("off");

    // 일정시간뒤에 코드 실행하기
    // 타임아웃!!! 셋타임아웃!!!
    // setTimeout(함수,시간)
    // 함수에는 실행코드, 시간은 1/1000초 (단위안쓰고)

    // 0.5초후 코드 실행 //////
    setTimeout(function(){
        // 5. 이미지 변경하기
        scene.src = isrc;
        // 6. 클래스 off 제거하기 : 왼쪽바깥에 투명
        scene.classList.remove("off");
        // 7. 클래스 on 넣기 : 오른쪽바깥에 투명
        scene.classList.add("on");
    },500);

    // 1초후 코드실행 : 위의 타임아웃보다 0.5초후 ////
    setTimeout(function(){
        // 8. 클래스 on 제거하기 : 원래위치로 등장!
        scene.classList.remove("on");
    },1000);

} /////// changeImage함수 ///////



 /********************************* 
    [ 클래스를 컨트롤하는 JS classList 객체 ]
    1. 클래스 넣기 : add(클래스명)
    예) document.querySelector('.my').classList.add('on')
    2. 클래스 빼기 : remove(클래스명)
    예) document.querySelector('.my').classList.remove('on')
    3. 클래스 토글 : toggle(클래스명)
    예) document.querySelector('.my').classList.toggle('on')

    [ 타이밍 내장함수 : setTimeout(함수,시간) ]
    -> 함수호출 또는 코드실행을 일정시간후 할 수 있는 JS내장함수
    사용법:
      setTimeout(함수/익명함수코드구역,시간)
      시간은 1/1000초 를 사용함(예: 1000을쓰면 1초임)
      ->시간에 s단위를 쓰지 않는다!

  *********************************/

