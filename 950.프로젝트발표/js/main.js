// 발표 메인 페이지 JS - main.js

$(function () {
  // jQB /////////////////

  // 이름원을 클릭할때 상세 프로젝트 열기
  $(".sbox li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
  // 이름원에서 마우스 떠날때 프록젝트 닫기
  $(".sbox li").mouseleave(function () {
    $(this).removeClass("on");
  });

  // 메인타이틀 클릭시
  $(".mainTit").click(function () {
    $(".mtit").css({
      top: "60%",
      left: "50%",
      transform: "translate(-50%,-50%) scale(1)",
    }); /// css ///
    $(".s1").css({
      left: "150%",
    }); /// css ///
  });

  // 링크 클릭시 //
  $(".desc a").click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    // a링크의 href값
    const tgsrc = $(this).attr("href");

    window.open().location.href = tgsrc;
  }); //// click ///////

  $("#dpbox>span").click(function () {
    // 숨기기
    $("#dpbox").fadeOut(300);
  }); //// click ///////

  $("body").append('<button class="back">메인페이지</button>');
  $(".back")
    .css({
      position: "fixed",
      bottom: "5px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "cyan",
      fontSize: "3vh",
      lineHeight: "5vh",
      borderRadius: "5px",
    })
    .click(function () {
    //   location.href = "../../index.html";
    });
}); ///////// jQB /////////////////////
/////////////////////////////////////

window.addEventListener("DOMContentLoaded", function () {
  var tg = document.getElementsByClassName("mtit");
  var tg2 = document.getElementsByClassName("sbox");
  tg[0].addEventListener("click", function () {
    //                alert("하하");
    this.style.top = "10%";
    this.style.left = "70%";
    this.style.transform = "translateY(-50%) scale(.4)";
    this.style.transition = "all .5s ease-in-out";

    tg2[0].style.left = "50%";
    tg2[0].style.transition = "all .5s ease-in-out";
  }); ///// click //////////////////////////////
});
