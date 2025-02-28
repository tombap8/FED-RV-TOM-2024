// DC.com 비디오 스와이프 컴포넌트 - VidSwipe.jsx ///

import React from "react";

// 비디오 스와이프 CSS 불러오기


function VidSwipe(props) {
  return (
    <section className="vid-swbox">
      {/* 1. 모듈 타이틀 */}
      <h2 className="tit">LATEST TRAILERS, CLIPS &amp; MORE</h2>
      {/* 2. 스와이퍼 컴포넌트 : SwiperVid
      -> 전달속성 catName으로 데이터선택값 보내기 */}
      {/* 3. 비디오 재생창 */}
      <section className="vid-bx">
        {/* 비디오 중앙박스 */}
        <div className="play-vid">
          {/* 비디오 타이틀 */}
          <h2 className="ifr-tit">BLUE BEETLE - OFFICIAL TRAILER</h2>
          {/* 아이프레임 */}
          <iframe src="" allow="autoplay"></iframe>
          {/* 닫기버튼 */}
          <button className="cbtn">×</button>
        </div>
      </section>
    </section>
  );
}

export default VidSwipe;
