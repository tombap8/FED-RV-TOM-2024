import React from "react";
import Banner from "../modules/Banner";
import VidIntro from "../modules/VidIntro";

function Movies({catName}) {
  return (
    <>
      {/* 1. 배너 컴포넌트 */}
      <Banner catName={catName} />
      {/* 2. 비디오 소개 컴포넌트 */}
      <VidIntro catName={catName} clsName="on" />
    </>
  );
}

export default Movies;
