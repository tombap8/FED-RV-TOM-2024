import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';

// 공통 CSS 불러오기 ///
import "./css/index.scss";

import Layout from './components/layout/Layout';
import Main from './components/pages/Main';
import Fashion from './components/pages/Fashion';


/// 전체 PJ 공통 CSS 최상위 JS에서 불러오기 ///
// import "./css/index.scss";
// 사스파일에서 import시엔 _와 .scss생략가능하나
// 리액트 import에서는 모두 정확히 써야함!

//// 메인 컴포넌트 ///////////////////////////////
export default function MainComponent(){

    // 리턴 코드구역 ////////////
    return (
        // 해시라우터 사용하기 //////////////////
        <HashRouter>
            <Routes>
                {/* 최상위 Route는 쌍으로 태그를 만든다!
                슬래쉬는 루트를 말하고 레이아웃 컴포넌트 불러옴 */}
                <Route path="/" element={<Layout />}>
                {/* 하위중 첫페이지는 index라고 속성씀! */}
                    <Route index element={<Main  />}  />
                    <Route path='fashion' element={<Fashion  />}  />
                </Route>
            </Routes>
        </HashRouter>
    );

} /////////// MainComponent ////////////////////

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(
    document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);