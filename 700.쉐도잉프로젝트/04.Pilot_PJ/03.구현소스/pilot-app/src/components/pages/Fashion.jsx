// 파일럿 PJ -  패션 페이지(남성/여성/스타일 공통) - Fashion.jsx

import React from "react";
import { useLocation } from "react-router-dom";

function Fashion() {
  // 라우터 전달객체 받기 ///
  const { state } = useLocation();

  // 카테고리 이름 가져오기 ///
  const catName = state ? state.catName : "아무거나";

  return (
    <>
      <div className="page">
        <h1 style={{ fontSize: "5vw", marginTop: "40vh" }}>
          나는 {catName}패션 페이지입니다!
        </h1>
      </div>
    </>
  );
}

export default Fashion;
