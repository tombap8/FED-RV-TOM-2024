// DC.com 캐릭터 상세 페이지 모듈 - CatDetail.jsx

import React from "react";
import Banner from "../modules/Banner";
import CatList from "../modules/CatList";

// 모듈 CSS 불러오기 
import '../../css/pages/cat_detail.scss';

function CatDetail(props) {
  return (
    <>
      {/* 1. 배너모듈 */}
      <Banner catName="BATMAN" />
      {/* 2. 상세정보박스 */}
      <div className="detail">
        {/* 2-1. 캐릭터 설명박스 */}
        <div className="desc-box">
          {/* (1) 캐릭터명 */}
          <h2>BATMAN</h2>
          {/* (2) 캐릭터소개 */}
          <div className="cdesc">
            <p>
              In the name of his murdered parents, Bruce Wayne wages eternal war
              on the criminals of Gotham City. He is vengeance. He is the night.
              He is Batman.
            </p>
            <p>
              One of the most iconic fictional characters in the world, Batman
              has dedicated his life to an endless crusade, a war on all
              criminals in the name of his murdered parents, who were taken from
              him when he was just a child. Since that tragic night, he has
              trained his body and mind to near physical perfection to be a
              self-made Super Hero. He's developed an arsenal of technology that
              would put most armies to shame. And he's assembled teams of his
              fellow DC Super Heroes, like the Justice League, the Outsiders and
              Batman, Incorporated.
            </p>
            <p>
              A playboy billionaire by day, Bruce Wayne’s double life affords
              him the comfort of a life without financial worry, a loyal
              butler-turned-guardian and the perfect base of operations in the
              ancient network of caves beneath his family’s sprawling estate. By
              night, however, he sheds all pretense, dons his iconic scalloped
              cape and pointed cowl and takes to the shadowy streets, skies and
              rooftops of Gotham City.
            </p>
          </div>
        </div>
        {/* 2-2. 캐릭터명세 */}
        <div className="facts">
          <div>
            <h3>CHARACTER FACTS</h3>
            <table>
              <tbody>
                <tr>
                  <td>Powers : </td>
                  <td>
                    exceptional martial artist, combat strategy, inexhaustible
                    wealth, brilliant deductive skill, advanced technology
                  </td>
                </tr>
                <tr>
                  <td>First Appearance : </td>
                  <td>DETECTIVE COMICS #27 (1939)</td>
                </tr>
                <tr>
                  <td>Alias/Alter Ego : </td>
                  <td>Bruce Wayne</td>
                </tr>
                <tr>
                  <td>AKA : </td>
                  <td>Dark Knight, Caped Crusader, Matches Malone</td>
                </tr>
                <tr>
                  <td>Base of Operations : </td>
                  <td>Gotham City</td>
                </tr>
                <tr>
                  <td>Occupation : </td>
                  <td>CEO of Wayne Enterprises</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* 3. 캐릭터 리스트 모듈 */}
      <CatList />
    </>
  );
}

export default CatDetail;
