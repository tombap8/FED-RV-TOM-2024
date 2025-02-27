// DC.com 비디오소개 컴포넌트 - VidIntro.jsx ///
import React from "react";

// 비디오 소개 모듈용 CSS 불러오기
import '../../css/modules/vid_intro.scss';

function VidIntro(props) {
  return (
    <section className="off vidbox">
      <div>
        <div className="vb1">
          <iframe
            src="https://www.youtube.com/embed/jprhe-cWKGs"
            title="THE FLASH - FINAL TRAILER"
          ></iframe>
        </div>
        <div className="vb2">
          <h3>FEATURED VIDEO</h3>
          <h2>THE FLASH - FINAL TRAILER</h2>
          <p>Are YOU ready? THE FLASH - Only in Theaters June 16.</p>
          <p>
            Advance tickets available now!{" "}
            <a href="https://www.dc.com/theflash" target="_blank">
              Visit our official Flash
            </a>{" "}
            hub for tickets and showtimes!
          </p>
        </div>
      </div>
    </section>
  );
}

export default VidIntro;
