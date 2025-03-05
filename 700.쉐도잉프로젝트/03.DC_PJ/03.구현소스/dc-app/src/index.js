import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

/// 전체 PJ 공통 CSS 최상위 JS에서 불러오기 ///
import "./css/index.scss";
// 사스파일에서 import시엔 _와 .scss생략가능하나
// 리액트 import에서는 모두 정확히 써야함!

// 컴포넌트 불러오기 ////
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Character from "./components/pages/Character";
import Comics from "./components/pages/Comics";
import Movies from "./components/pages/Movies";
import Games from "./components/pages/Games";
import News from "./components/pages/News";
import Video from "./components/pages/Video";
import Board from "./components/pages/Board";
import CatDetail from "./components/pages/CatDetail";
import SearchPage from "./components/pages/SearchPage";
// import SwiperApp from './components/plugin/SwiperApp';

/********************************************* 
    [ 리액트 라우터 ]
    -> 컴포넌트를 연결하여 특정 이벤트에 모듈을
    변경해주는 중계역할을 함
    1. <BrowserRouter> - 라우터 Root
    2. <Routes> - 개별 라우터를 묶어주는 역할
    3. <Route> - 개별 라우터
        (속성)
            (1) path : 경로를 지정함
                    (Link의 to속성 경로와 일치함!)
            (2) element : 연결할 컴포넌트 지정

        (하위 라우트 만들기)
            <Route path="/">
                <Route />
                <Route />
                <Route />
            </Route>
    4. 라우터를 구성하는 컴포넌트는 자체적으로
    내보내기 셋팅을 해야한다!
    -> export default 라우터 컴포넌트

    [ 리액트 라우터 흐름 ]
    1. index.js 에 라우터 중앙 셋팅
    2. Layout.jsx 레이아웃 컴포넌트를 루트로 선택
    3. 상단영역 GNB에 <Link to> 셋팅
    4. 메인영역에 <Outlet /> 셋팅
    5. 라우터 연결흐름:
      (1) Route 의 path 정보셋팅
      (2) Link to 정보 클릭시 1번정보와 대조
      (3) 1번정보 일치시 element에 등록된 컴포넌트로딩
      (4) Outlet 표시 컴포넌트에 삽입
    
*********************************************/

//// 메인 컴포넌트 ///////////////////////////////
export default function MainComponent() {
  // 리턴 코드구역 ////////////
  return (
    <BrowserRouter>
      {/* 라우터 경로 변경시 최상단이동 컴포넌트 */}
      <ScrollTop />

      {/* 라우터 경로 및 컴포넌트 매칭셋팅 */}
      <Routes>
        {/* 최상위 Route는 쌍으로 태그를 만든다!
                슬래쉬는 루트를 말하고 레이아웃 컴포넌트 불러옴 */}
        <Route path="/" element={<Layout />}>
          {/* 하위중 첫페이지는 index라고 속성씀! */}
          <Route index element={<Main catName="main" />} />
          <Route path="character" element={<Character />} />
          <Route path="comics" element={<Comics catName="COMICS" />} />
          <Route path="movies" element={<Movies catName="MOVIES" />} />
          <Route path="games" element={<Games catName="GAMES" />} />
          <Route path="news" element={<News />} />
          <Route path="video" element={<Video catName="VIDEO" />} />
          <Route path="board" element={<Board />} />
          <Route path="detail" element={<CatDetail />} />
          <Route path="search" element={<SearchPage />} />
          {/* <Route index element={<SwiperApp />}  /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
} /////////// MainComponent ////////////////////

/********************************************** 
  컴포넌트로 만들고 라우터 안에 넣고
  라우터 경로변경시 스크롤 최상단이동!
**********************************************/
const ScrollTop = () => {
  // 라우터 경로 변경시 path값 읽어오기
  // pathname 객체 속성에 담긴다!
  const { pathname } = useLocation();

  // 화면 랜더링구역에 스크롤 상단이동 코드 넣기
  useLayoutEffect(() => {
    // 스크롤 상단이동코드 넣기
    window.scrollTo(0, 0);
    // 변경된 라우터 경로 확인
    // console.log("라우터경로:", pathname);

    // 의존성을 라우터 경로로 등록함!
  }, [pathname]);

  // 컴포넌트 리턴구역 : 리턴할 게 없어서 null 리턴
  return null;
}; ///////// ScrollTop 컴포넌트 ////////////////

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);
