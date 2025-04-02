// 파일럿 PJ -  패션 페이지(남성/여성/스타일 공통) - Fashion.jsx

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 페이지 CSS 불러오기 ////
import "../../css/fashion.scss";

// 리액트용 패럴랙스 - 설치 : npm i react-parallax
import { Parallax } from "react-parallax";

// GNB 데이터 불러오기 //////
import { gnbData } from "../../js/data/gnb";

// 부드러운 스크롤 함수 불러오기 ////
import { scrolled, setPos } from "../../js/func/smoothScroll24";

// 제이쿼리 불러오기 //////
import $ from "jquery";
import SwiperBan from "../plugin/SwiperBan";
import SinSang from "../modules/SinSang";
import ItemDetail from "../modules/ItemDetail";
import { pCon } from "../modules/pCon";
import { FashionIntro } from "../modules/FashionIntro";

function Fashion() {
  // 라우터 전달객체 받기 ///
  const { state } = useLocation();

  // 라우터 이동 객체 생성하기 ////
  const goPage = useNavigate();
  // 사용시 goPage(라우터주소, {전달객체})

  // 전역 catName을 받기위해 Context API 사용하기
  const myCon = useContext(pCon);

  // 카테고리 이름 가져오기 ///
  const catName = state ? state.catName : myCon.catName;
  // -> 파라미터 전달 state가 null이면 전역 catName을 할당함!

  // 후크 상태변수
  const [item, setItem] = useState("m1");

  // 신상컴포넌트에서 상세컴포넌트로 값을 전하기 위한
  // 상태변수를 셋팅하여 함수로 이것을 변경하게 해준다!
  // 프롭스 펑션다운~!!
  const chgItemFn = (v) => {
    console.log("상품정보:", v);
    // 상태변수 업데이트
    setItem(v);
    // 상세박스 슬라이드 애니로 보이기
    $(".bgbx").slideDown(400);
  }; /////////// chgItem 함수 //////

  // 랜더링후 실행구역 : 한번만실행 /////////
  useEffect(() => {
    // 스크롤바 생성하기 ///
    $("html,body").css({
      overflow: "visible",
      overflowX: "hidden", // 가로스크롤 숨기기
    });

    // [부드러운 스크롤 함수 이벤트 설정하기] ///
    document.addEventListener("wheel", scrolled, { passive: false });

    // 홈버튼 첫 페이지로 이동기능 셋팅하기
    $("#logo a").on("click", (e) => {
      e.preventDefault();
      // 라우터이동 : 첫페이지로!
      goPage("/");
    }); //////// click ////////

    // [ 메뉴가 변경되었으므로 새롭게 링크이동설정하기 ]
    // 대상: .gnb a
    $(".gnb a").on("click", (e) => {
      e.preventDefault();
      console.log("메뉴이동", e.target);
      // 1. 아이디이름
      let idName = $(e.target).attr("href");
      // 2. 이동위치
      let pos = $(idName).offset().top;
      // 3. 스크롤 이동
      $("html,body").animate(
        {
          scrollTop: pos + "px",
        },
        500
      ); ////// animate //////
      // 4. 부드러운 스크롤 위치값 일치하기!!!
      setPos(pos);
    }); ///////// click //////////

    //// 소멸자 리턴구역 ////////////////////////
    return () => {
      // 컴포넌트 소멸시 부드러운 스크롤 휠이벤트 지우기
      document.removeEventListener("wheel", scrolled, { passive: false });
      // 부드러운 스크롤 위치값 초기화!!!
      setPos(0);

      // 등장액션 체크함수 이벤트 설정하기
      window.removeEventListener("scroll", chkPos);
    }; //////// 소멸자 리턴 ////////
  }, []); //// useEffect : 한번만실행 ////////

  // useEffect : state 변수 의존성 실행구역 시작 //////
  useEffect(() => {
    // 스크롤바 위치 최상위
    window.scrollTo(0, 0);
    // 부드러운 스크롤 위치값 초기화!!!
    setPos(0);

    /////////////////////////////////////
    // 스크롤 등장액션 만들기 /////////////
    /////////////////////////////////////
    // 등장액션 초기화 : 투명하고 약간 아래쪽에 배치
    setEle();
    // 등장액션은 원래위치로 복귀하며 투명도회복 애니

    // 등장액션 체크함수 이벤트 설정하기
    window.addEventListener("scroll", chkPos);
  }, [state]);
  // useEffect : state 변수 의존성 실행구역 끝 ////////

  // 등장액션 위치체크 및 적용함수 ///////
  const chkPos = () => {
    // 등장액션 대상은 모두 순회함!
    $(".sc-ani").each((idx, ele) => {
      // 화면기준 위치값 알아오기
      let cpos = retClient(idx);
      // 위치값이 화면의 1/3위치보다 위로 올라오면 등장!
      if (cpos < ($(window).height() / 3) * 2) {
        $(ele).css({
          opacity: 1,
          transform: "translateY(0)",
        }); //// css ////
      } ////////// if ////////
    }); //////// each ///////////
  }; //////// chkPos 함수 ////////////

  // 위치값 리턴함수 //////////
  const retClient = (idx) => {
    // console.log(idx);
    return document.querySelectorAll(".sc-ani")[idx].getBoundingClientRect()
      .top;
  }; //////////// retClient함수 /////

  // 등장액션 일괄 셋팅 ////////
  const setEle = () => {
    // 클래스명은 .sc-ani 로 준 모든 요소를 초기화함
    $(".sc-ani").css({
      opacity: 0,
      transform: "translateY(20%)",
      transition: "1s ease-in-out",
    }); ////// css /////
  }; //////// setEle 함수 ////////////

  // 리턴 코드 구역 ////////////////
  return (
    <>
      {/* 1. 배너영역 */}
      <section id="ban" className="page">
        <SwiperBan catName={catName} />
      </section>
      {/* 2. 신상품영역 */}
      <section
        id="c1"
        className={"cont sc-ani c1 " + catName}
        style={{
          position: "relative",
          zIndex: "999",
        }}
      >
        {/* 신상품 모듈 */}
        <SinSang catName={catName} chgItemFn={chgItemFn} />
      </section>
      {/* 3. 상세보기박스 */}
      <div
        className="bgbx"
        onClick={(e) => {
          // 닫기버튼 클릭시 이벤트 버블링되어서
          // 부모박스도 클릭효과가 나타남!
          // 이때 스크롤 위치를 하단 상품상세박스만큼
          // 이동애니메이션 하기!
          // 이동할 크기 = 윈도우스크롤Y축위치값 - 현재박스높이값
          let pos = window.scrollY - e.currentTarget.offsetHeight;
          // 스크롤바 애니메이션 이동하기 (제이쿼리로!)
          $("html,body").animate({ scrollTop: pos + "px" }, 400);
        }}
      >
        {/* 아이템 디테일 컴포넌트 */}
        <ItemDetail catName={catName} goods={item} />
      </div>
      {/* 4. 패럴렉스 영역 : 리액트용 패럴렉스 적용하기 */}
      <section id="c2" className="cont">
        <Parallax
          className="c2"
          // 패럴렉스 배경이미지 설정속성 bgImage
          bgImage={
            process.env.PUBLIC_URL +
            "/images/sub/" +
            catName +
            "/02.special.png"
          }
          // 패럴렉스 이동정도 조정속성 strength
          // 수치범위 : -500 ~ 1000 -> 높은숫자는 반대방향
          strength={200}
        >
          <h2 className="c2tit sc-ani">2025 {gnbData[catName][1]}</h2>
          {/* gnbData[catName][1] - 해당 카테고리 2번째 데이터 */}
        </Parallax>
      </section>
      {/* 5. 단일상품영역 */}
      <section id="c3" className="cont c3">
        <FashionIntro cat="sub" subcat={[catName, 0]} />
      </section>
      {/* 6. 스타일상품영역 */}
      <section id="c4" className="cont c4">
        <FashionIntro cat="sub" subcat={[catName, 1]} />
      </section>
    </>
  );
}

export default Fashion;
