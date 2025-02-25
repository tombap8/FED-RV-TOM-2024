// DC.com 캐릭터 페이지 컴포넌트 - Character.jsx ////

import React from "react";
import Banner from "../modules/Banner";

function Character(props) {
  return (
    <>
      {/* 1. 배너 컴포넌트 */}
      <Banner catName="CHARACTERS" />
    </>
  );
}

export default Character;
