// MPA용 화면전환효과 JS

// 가림막 요소 넣기
$("body").append(`<div class="pg-cover"></div>`);

// 가림막요소 변수할당
const $pgCover = $(".pg-cover");

// 최초화면 셋팅 및 애니설정
$pgCover.css({height:'100vh'})
.animate(
  { height: "0", top: "100%" },
  800,
  "easeInOutExpo",
  function () { // 애니후 CSS초기화
    $(this).css({top:'0'});
  }
); /// animate ///
