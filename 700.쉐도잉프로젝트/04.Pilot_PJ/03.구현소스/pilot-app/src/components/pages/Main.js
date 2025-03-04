// Pilot PJ 메인 페이지 컴포넌트 - Main.jsx

import React, { useEffect } from "react";

// 자동스크롤 기능 JS 불러오기 ///
import * as autoFn from "../../js/func/jquery-autoScroll";

// 드래그배너 기능 JS 불러오기 ////
import { dragBanner } from "../../js/func/drag_banner";

import { Banner } from "../modules/Banner";

function Main() {
    // 컴포넌트 로딩후 실행구역 : 한번만 (빈의존성[]) /////
    useEffect(()=>{

        // 자동스크롤 이벤트 설정하기
        window.addEventListener('wheel', autoFn.wheelFn);
        // -> window 이벤트 설정을 여기서한 이유는?
        // ->>> 소멸자를 통해 이벤트를 다른 페이지가 나올때
        // 해재해 주기 위해 여기서 셋팅함!

        // 드래그배너 기능함수 호출하기
        dragBanner();

    },[]); ///////// useEffect : 한번만 //////////////

  // 리턴 코드구역 //////////////
  return (
    <>
      {/* 1. 배너 페이지 */}
      <section
        id="ban"
        className="page none-sel"
        style={{ background: "lightblue" }}
      >
        {/* 배너모듈 */}
        <Banner />
      </section>

      {/* 2. 남성패션 페이지 */}
      <section className="page"></section>

      {/* 3. 여성패션 페이지 */}
      <section className="page"></section>

      {/* 4. 스타일패션 페이지 */}
      <section className="page"></section>

      {/* 메인에만 나오는 사이드 인디케이터 */}
      <nav className="indic">
        <ul>
          <li className="on">
            <a href="#ban">
              <span>배너</span>
            </a>
          </li>
          <li>
            <a href="#men">
              <span>남성의류</span>
            </a>
          </li>
          <li>
            <a href="#women">
              <span>여성의류</span>
            </a>
          </li>
          <li>
            <a href="#style">
              <span>스타일</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Main;
