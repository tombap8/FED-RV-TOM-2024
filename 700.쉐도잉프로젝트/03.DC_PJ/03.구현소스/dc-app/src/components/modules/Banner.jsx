// DC.com 배너 컴포넌트 - Banner.jsx ///////
import React from "react";

// 배너 데이터 불러오기 ///
import { banData } from "../../js/data/banner";

// 배너용 CSS 불러오기 ///
import "../../css/modules/banner.scss";

function Banner({ catName }) {
  // catName - 배너 데이터 카테고리 이름

  // 선택데이터 ////
  const selData = banData[catName];

  return (
    <>
      <div className="banner">
        {/* 슬라이드 리스트 */}
        <ul className="slider">
          {selData.map((v, i) => (
            <li key={i}>
              <img src={v.src} alt={v.tit1} />
              <section className="bantit">
                <h2>{v.tit1}</h2>
                <p>{v.tit2}</p>
                <button>
                  {v.btn}
                </button>
              </section>
            </li>
          ))}
        </ul>
        {/* 양쪽이동버튼 */}
        <button className="abtn lb">＜</button>
        <button className="abtn rb">＞</button>
        {/* 블릿 표시자 */}
        <ol className="indic">
          <li className="on"></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </>
  );
}

export default Banner;
