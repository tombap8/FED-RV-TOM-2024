// 화면전환효과 JS

// 버튼 클릭시 서브 페이지 변경할 경우
// 전환을 위한 클래스 넣기
// 단, SPA(Single Page Application) 구성시 예시임
// MPA(Multi Page Application)일 경우 달라짐!

// 각 페이지용 배경 이미지 경로
const isrc = {
  HOME: "https://t4.ftcdn.net/jpg/02/96/64/61/360_F_296646140_btnypVWa1CHefYgC3EgoRLzO2Qh79ITa.jpg",
  WORK: "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/02/25083908/How-to-Find-Online-Jobs-Work-From-Home-Jobs-That-Require-Little-or-No-Work-Experience.jpg",
  CONTACT:
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D",
};

// 가림막 요소 넣기
$("body").append(`<div class="pg-cover"></div>`);

// 가림막요소 변수할당
const $pgCover = $(".pg-cover");

// 1. 이벤트 설정하기
// 대상: .gnb a
$(".gnb a").click(function (e) {
  // 기본이동막기
  e.preventDefault();

  // (1) 클릭된 요소의 글자읽기
  let txt = $(this).text();
  console.log(txt);

  // (2) 화면전환 커버요소 슬라이드 다운 애니하기
  $pgCover
    .animate({ 
        height: "100vh" 
    }, 800, "easeInOutExpo",
    function(){// 덮였을때 페이지 셋팅하기
        $('body').css({
            background:
            `url(${isrc[txt]}) no-repeat center/cover`
        });/// css ///
    }) /// animate ///
    .animate(
      { height: "0", top: "100%" },
      800,
      "easeInOutExpo",
      function () { // 애니후 CSS초기화
        $(this).css({top:'0'});
      }
    );
}); //// click ///
