// 도깨비 PJ : 링크시스템 JS - linksys.js

export default function linksysFn() {
  $(".gnb a, .top-menu a, .spart-menu a").click(function (e) {
    e.preventDefault();

    // 1. 링크 텍스트 읽어오기
    let txt = $(this).text().trim();
    // trim() 앞뒤공백제거
    console.log(txt);

    // 전달변수
    let pm = "etc";

    // 2. 페이지 분기하기
    switch (txt) {
      case "로그인":
        pm = "login";
        break;
      case "회원가입":
        pm = "join";
        break;
      case "인물 관계도":
        pm = "cat";
        break;
    }

    // 3. 페이지이동 : pm값이 'etc' 가 아닌경우만 이동
    if (pm !== "etc") {
      location.href = "./content.html?page=" + pm;
    } else {
      alert("로그인/회원가입/인물관계도 만 서비스오픈!");
    }
  });

  // 로고 클릭시 홈으로!!
  $(".logo a").click(() => (location.href = "./index.html"));
} //////////// linksysFn 함수 /////////////
