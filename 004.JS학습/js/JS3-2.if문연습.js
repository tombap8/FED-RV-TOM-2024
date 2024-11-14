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

    // 4. 이미지 변경하기
    scene.src = isrc;

} /////// changeImage함수 ///////

