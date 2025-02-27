import React from "react";
import VidIntro from "../modules/VidIntro";

function Video({ catName }) {
  return (
    <>
      {/* 1. 비디오 소개 컴포넌트 */}
      <VidIntro catName={catName} clsName="on" />
    </>
  );
}

export default Video;
