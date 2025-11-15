// 보그 JS 링크 시스템 JS - linksys.js

export default function () {
  // [1] 로고 클릭시 홈으로 가기
  document.querySelector(".logo img").onclick = () => {
    location.href = "index.html";
  }; ////////////// click //////////////

  // [2] GNB 메뉴 링크셋팅 하기
  document.querySelectorAll(".gnb-menu a").forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      // 카테고리 페이지에 보낼값
      const pm = this.getAttribute("href").substr(1);
      // substr(시작순번, 개수) -> 개수를 안쓰면 시작순번부터 끝까지임
      location.href = "category.html?pm=" + pm;
    }); ///////////// click //////////////
  }); ///////////// forEach //////////////

  // [3] 헤더 액션스 버튼 링크셋팅 하기
  document.querySelectorAll(".header-actions button").forEach((el) => {
    el.addEventListener("click", function () {
      // (1) 클릭된 버튼의 클래스 읽기
      const cls = this.getAttribute("class");
      console.log("버튼클릭:", cls);

      // (2) 부모요소에 클래스 on이 있는지 확인
      // 왜? -> 로그인 상태인지 확인하기 위함
      const isLogin = this.parentElement.classList.contains("on");
      console.log("로그인상태?", isLogin);

      // (3) 클래스별 페이지 이동하기
      // switch 문으로 분기하기
      switch (cls) {
        case "login-btn": // 로그인/로그아웃
          console.log("로그인 페이지로 이동합니다.");
          // 만약 로그인 상태이면 로그아웃 처리하기
          if (isLogin) {
            // 세션스토리지 지우기
            sessionStorage.removeItem("loginfo");

            // 알림창 띄우기
            alert("로그아웃 되었습니다.");

            // 페이지 새로고침(현재페이지 다시로드)
            // location.reload();

            // 또는 첫페이지로 이동
            location.href = "index.html";
          } /// if ///
          else{
            // 로그인 상태가 아니면 로그인 페이지로 이동
            location.href = "login.html";
          } /// else ///
          break;
        case "mem-btn": // 회원가입
          console.log("회원가입 페이지로 이동합니다.");
          location.href = "member.html";
          break;

        // 구독버튼 클릭시
        case "gudok-btn":
          console.log("구독 페이지로 이동합니다.");
          location.href = "magazine_list.html";
      }
    }); ///////////// click //////////////
  }); ///////////// forEach //////////////
} //////////////// export default //////////////
