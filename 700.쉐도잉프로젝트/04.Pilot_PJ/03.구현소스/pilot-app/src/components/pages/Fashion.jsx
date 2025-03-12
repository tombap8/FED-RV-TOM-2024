// 파일럿 PJ -  패션 페이지(남성/여성/스타일 공통) - Fashion.jsx

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 페이지 CSS 불러오기 ////
import '../../css/fashion.scss';

// 제이쿼리 불러오기 //////
import $ from "jquery";
import SwiperBan from "../plugin/SwiperBan";
import SinSang from "../modules/SinSang";

function Fashion() {
  // 라우터 전달객체 받기 ///
  const { state } = useLocation();

  // 라우터 이동 객체 생성하기 ////
  const goPage = useNavigate();
  // 사용시 goPage(라우터주소, {전달객체})

  // 카테고리 이름 가져오기 ///
  const catName = state ? state.catName : "아무거나";

  // 랜더링후 실행구역 : 한번만실행 /////////
  useEffect(()=>{

    // 스크롤바 생성하기 ///
    $('html,body').css({overflow:'visible'});


    // 홈버튼 첫 페이지로 이동기능 셋팅하기
    $("#logo a").on('click',(e) => {
      e.preventDefault();
      // 라우터이동 : 첫페이지로!
      goPage('/');      
    }); //////// click ////////

  },[]); //// useEffect : 한번만실행 ////////

  // useEffect : state 변수 의존성 실행구역 시작 //////
  useEffect(()=>{
    // 스크롤바 위치 최상위
    window.scrollTo(0,0);
  },[state]); 
  // useEffect : state 변수 의존성 실행구역 끝 ////////

  // 리턴 코드 구역 ////////////////
  return (
    <>
      {/* 1. 배너영역 */}
      <section id="ban" className="page">
        <SwiperBan catName={catName} />
      </section>
      {/* 2. 신상품영역 */}
      <section id="c1" 
      className={"cont sc-ani c1 "+catName}
      style={{
        position: 'relative',
        zIndex: '999'
      }}
      >
        {/* 신상품 모듈 */}
        <SinSang catName={catName} />
      </section>
    </>
  );
}

export default Fashion;
