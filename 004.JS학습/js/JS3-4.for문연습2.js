// JS3-4.for문연습2 //////

// 로딩구역 //////////

window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료!");

    // 0. 요구사항분석 ////
    // 이미지개수만큼 for문을 돌려서 html태그를
    // 반복적으로 생성하여 대상요소에 삽입해준다!

    // 1. 대상선정 : .wrap
    const wrap = document.querySelector(".wrap");
    console.log("대상:",wrap);

    // 2. html코드 생성하기 ////
    let hCode = "<ul>";

    // for문으로 반복코드 생성하기
    // for(시;한;증){코드}
    // 이미지가 1~50번까지 이므로 i는 1부터 50까지 반복
    for(let i=1;i<=50;i++){
        hCode += `
            <li>
                <img src="./images/dress/${i}.jpg" alt="dress">
                <h3>옷이름</h3>
                <h4>가격</h4>
            </li>
        `;

    } /// for /////
    

    hCode += "</ul>";

    // 3. html코드 삽입하기
    wrap.innerHTML = hCode;
    
}); ///////// 로드함수 ///////////////////    
