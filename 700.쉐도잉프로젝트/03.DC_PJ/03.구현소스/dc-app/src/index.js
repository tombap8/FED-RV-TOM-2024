import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Main from './components/pages/Main';
import Character from './components/pages/Character';


/// 전체 PJ 공통 CSS 최상위 JS에서 불러오기 ///
import "./css/index.scss";
import Comics from './components/pages/Comics';
import Movies from './components/pages/Movies';
import Games from './components/pages/Games';
import News from './components/pages/News';
import Video from './components/pages/Video';
import Board from './components/pages/Board';
// 사스파일에서 import시엔 _와 .scss생략가능하나
// 리액트 import에서는 모두 정확히 써야함!

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
export default function MainComponent(){

    // 리턴 코드구역 ////////////
    return (
        <BrowserRouter>
            <Routes>
                {/* 최상위 Route는 쌍으로 태그를 만든다!
                슬래쉬는 루트를 말하고 레이아웃 컴포넌트 불러옴 */}
                <Route path="/" element={<Layout />}>
                {/* 하위중 첫페이지는 index라고 속성씀! */}
                    <Route index element={<Main />}  />
                    <Route path='character' element={<Character />}  />
                    <Route path='comics' element={<Comics />}  />
                    <Route path='movies' element={<Movies />}  />
                    <Route path='games' element={<Games />}  />
                    <Route path='news' element={<News />}  />
                    <Route path='video' element={<Video />}  />
                    <Route path='board' element={<Board />}  />
                </Route>
            </Routes>
        </BrowserRouter>
    );

} /////////// MainComponent ////////////////////

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(
    document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);