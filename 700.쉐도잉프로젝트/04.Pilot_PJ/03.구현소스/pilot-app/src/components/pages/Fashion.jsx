// 파일럿 PJ -  패션 페이지(남성/여성/스타일 공통) - Fashion.jsx

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 페이지 CSS 불러오기 ////
import "../../css/fashion.scss";

// 제이쿼리 불러오기 //////
import $ from "jquery";
import SwiperBan from "../plugin/SwiperBan";
import SinSang from "../modules/SinSang";
import ItemDetail from "../modules/ItemDetail";

function Fashion() {
  // 라우터 전달객체 받기 ///
  const { state } = useLocation();

  // 라우터 이동 객체 생성하기 ////
  const goPage = useNavigate();
  // 사용시 goPage(라우터주소, {전달객체})

  // 카테고리 이름 가져오기 ///
  const catName = state ? state.catName : "아무거나";

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
    $("html,body").css({ overflow: "visible" });

    // 홈버튼 첫 페이지로 이동기능 셋팅하기
    $("#logo a").on("click", (e) => {
      e.preventDefault();
      // 라우터이동 : 첫페이지로!
      goPage("/");
    }); //////// click ////////
  }, []); //// useEffect : 한번만실행 ////////

  // useEffect : state 변수 의존성 실행구역 시작 //////
  useEffect(() => {
    // 스크롤바 위치 최상위
    window.scrollTo(0, 0);
  }, [state]);
  // useEffect : state 변수 의존성 실행구역 끝 ////////

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
      <div className="bgbx"
        onClick={(e)=>{
          // 닫기버튼 클릭시 이벤트 버블링되어서
          // 부모박스도 클릭효과가 나타남!
          // 이때 스크롤 위치를 하단 상품상세박스만큼
          // 이동애니메이션 하기!
          // 이동할 크기 = 윈도우스크롤Y축위치값 - 현재박스높이값
          let pos = window.scrollY - e.currentTarget.offsetHeight;
          // 스크롤바 애니메이션 이동하기 (제이쿼리로!)
          $('html,body').animate({scrollTop: pos+'px'},400);
        }}
      >
        {/* 아이템 디테일 컴포넌트 */}
        <ItemDetail catName={catName} goods={item} />
        </div>
    </>
  );
}

export default Fashion;
