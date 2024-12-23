// MPA용 화면전환효과 JS ///////

// 가림막 요소 넣기
// -> 로딩시 화면이 늦게 나타나는 현상이 생기므로
// html과 CSS 원본에 셋팅하는 것이 해결책이 된다!
// $("body").append(`<div class="pg-cover"></div>`);

// 1. 가림막요소 변수할당 //////
const $pgCover = $(".pg-cover");

// 2. 최초화면 셋팅 및 애니설정 ///////
$pgCover
  // .css({ height: "100vh" }) -> CSS에 미리해줌!
  .animate({ height: "0", top: "100%" }, 800, "easeInOutExpo", function () {
    // 애니후 CSS초기화
    $(this).css({ top: "0" });
  }); /// animate ///

// 링크시스템에서 0.8c초 지연후 이동셋팅했으므로
// 여기에서 0.8초간 화면가리막 요소 내려오게 애니함
// 즉, .gnb a 클릭시!!

// 3. 이동클릭시 가림막 내려오기 애니 ///////
$(".gnb a").click(() => {
  $pgCover.animate(
    {
      height: "100vh",
    },
    800,
    "easeInOutExpo"
  );
}); /// click ////
