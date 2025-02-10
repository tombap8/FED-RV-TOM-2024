// 발표 메인 페이지 JS - main_2nd.js

const tgEle = $(".part ol li a");

tgEle.mouseenter((e) => {
  $(e.target).next(".team-img").css({ display: "block" });
});
tgEle.mouseleave((e) => {
  $(e.target).next(".team-img").css({ display: "none" });
});
tgEle.mousemove((e) => {
  $(e.target)
    .next(".team-img")
    .css({
      top: e.pageY - 150 + "px",
      left: e.pageX - 200 + "px",
    });
});
