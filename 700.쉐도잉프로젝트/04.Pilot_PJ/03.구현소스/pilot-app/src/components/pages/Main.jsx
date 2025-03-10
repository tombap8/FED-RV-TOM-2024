// Pilot PJ 메인 페이지 컴포넌트 - Main.jsx

import React, { useContext, useEffect } from "react";

// 자동스크롤 기능 JS 불러오기 ///
import * as autoFn from "../../js/func/jquery-autoScroll";

// 드래그배너 기능 JS 불러오기 ////
import { dragBanner } from "../../js/func/drag_banner";

import { Banner } from "../modules/Banner";
import { FashionIntro } from "../modules/FashionIntro";

// 제이쿼리 불러오기 //////
import $ from "jquery";
import { pCon } from "../modules/pCon";

function Main() {
  // 컨텍스트 API 사용하기 ////
  const myCon = useContext(pCon);


  // 컴포넌트 로딩후 실행구역 : 한번만 (빈의존성[]) /////
  useEffect(() => {   
    // 메인페이지 로딩후 한번실행에서
    // 메뉴 변경 상태변수를 업데이트 함!
    myCon.setCatName('main');

    // 스크롤바 없애기 ///
    $('html,body').css({overflow:'hidden'});

    
    // 스크롤바 위치 최상위
    window.scrollTo(0,0);

    // 자동스크롤 이벤트 설정하기
    window.addEventListener("wheel", autoFn.wheelFn);
    // -> window 이벤트 설정을 여기서한 이유는?
    // ->>> 소멸자를 통해 이벤트를 다른 페이지가 나올때
    // 해재해 주기 위해 여기서 셋팅함!

    // 메뉴+인디케이터 이벤트 기능 설정함수 호출 ///
    autoFn.evtFn();

    // 초기화 함수 호출
    autoFn.initSet();

    // 페이지번호 초기화 함수 호출
    autoFn.zeroPno();

    // 드래그배너 기능함수 호출하기
    dragBanner();

    // 컴포넌트 제거시 실행구역 ////////
    return () => {
      console.log("메인제거됨!!!");

      // 자동스크롤 이벤트 제거하기
      window.removeEventListener("wheel", autoFn.wheelFn);
      // -> 이 구역에서 window이벤트 설정을 했으므로
      // 등록된 함수와 동일한 이름으로 셋팅된 함수를 해제할 수 있다!

      // 기존 이벤트 제거하기 함수호출
      autoFn.removeEvtFn();
    }; ////// 제거시 실행 구역 ///////////
  }, []); ///////// useEffect : 한번만 //////////////

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
      <section className="page">
        <FashionIntro cat="men" subcat="etc" />
      </section>

      {/* 3. 여성패션 페이지 */}
      <section className="page">
        <FashionIntro cat="women" subcat="etc" />
      </section>

      {/* 4. 스타일패션 페이지 */}
      <section className="page">
        <FashionIntro cat="style" subcat="etc" />
      </section>

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
