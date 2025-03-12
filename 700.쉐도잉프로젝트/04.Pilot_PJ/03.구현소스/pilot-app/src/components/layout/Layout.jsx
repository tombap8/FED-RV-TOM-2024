/// 레이아웃 컴포넌트 : Layout.jsx /////

import { useCallback, useState } from "react";
// 컨텍스트 API 불러오기
import { pCon } from "../modules/pCon";

import { FooterArea } from "./FooterArea";
import MainArea from "./MainArea";
import { TopArea } from "./TopArea";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  // 상태변수 셋팅구역 //////////
  // [1] 분류명 상태변수
  const [catName, setCatName] = useState("main");

  // 라우터 이동 네비게이트 객체 만들기 //
  const goNav = useNavigate();

  // [ 공통함수 구역 ] /////////
  // [1] 라우터 이동함수
  const goPage = useCallback((pm1, pm2) => {
    // pm1 - 이동할 라우터 주소
    // pm2 - state 전달변수 객체
    // 라우터 이동함수 호출!
    goNav(pm1, pm2);
  }, []);

  /// 리턴 코드구역 ////////
  return (
    // [ 전역 컨텍스트 API 변수제공자 등록 ] ////
    <pCon.Provider
      value={{
        setCatName, // 카테고리명 상태변수 setter
        goPage, // 라우터 이동함수
      }}
    >
      <TopArea catName={catName} />
      <MainArea />
      <FooterArea />
    </pCon.Provider>
  );
} //////////// Layout 컴포넌트 ///////////
