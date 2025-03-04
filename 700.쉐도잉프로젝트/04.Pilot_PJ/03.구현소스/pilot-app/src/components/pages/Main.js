// Pilot PJ 메인 페이지 컴포넌트 - Main.jsx

import React from "react";

function Main(props) {
  return (
    <>
      {/* 1. 배너 페이지 */}
      <section
        id="ban"
        className="page none-sel"
        style={{ background: "lightblue" }}
      ></section>

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
