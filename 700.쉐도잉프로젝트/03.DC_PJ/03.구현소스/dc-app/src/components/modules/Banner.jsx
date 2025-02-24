// DC.com 배너 컴포넌트 - Banner.jsx ///////
import React from "react";

// 배너용 CSS 불러오기 ///
import '../../css/modules/banner.scss';

function Banner(props) {
  return (
    <>
      <div className="banner">
        <ul className="slider">
          <li>
            <img
              src="./images/dcm21.jpg"
              alt="GOTHAM GAZETTE"
            />
            <section className="bantit">
              <h2>GOTHAM GAZETTE</h2>
              <p>WORLDS TRAVELER</p>
              <button>New Places, Familiar Faces</button>
            </section>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Banner;
