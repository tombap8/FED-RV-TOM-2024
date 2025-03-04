// DC.com 캐릭터 상세 페이지 모듈 - CatDetail.jsx

import React from "react";
import Banner from "../modules/Banner";
import CatList from "../modules/CatList";

// 모듈 CSS 불러오기
import "../../css/pages/cat_detail.scss";
import { useLocation } from "react-router-dom";

function CatDetail() {
  // 라우터 호출시 전달한 값을
  // useLocation 인스턴스 중 state속성을 같은
  // 이름의 변수로 구조분해할당 방식으로 받는다!
  const { state } = useLocation();
  // state객체의 같은 이름의 속성명으로 구조분해할당한다!
  const { cname, cdesc, facts } = state;
  // console.log(cname,cdesc,facts);
  // 전달된 변수
  // 1. cname - 캐릭터이름(배너 catName 속성정보로도 사용)
  // 2. cdesc - 캐릭터 설명
  // 3. facts - 캐릭터 상세

  // 리턴 코드구역 ///////////////
  return (
    <>
      {/* 1. 배너모듈 */}
      <Banner catName={cname} />
      {/* 2. 상세정보박스 */}
      <div className="detail">
        {/* 2-1. 캐릭터 설명박스 */}
        <div className="desc-box">
          {/* (1) 캐릭터명 */}
          <h2>{cname}</h2>
          {/* (2) 캐릭터소개 */}
          <div className="cdesc">
            {
                // cdesc 데이터의 '^'로 잘라서 p요소 할당
                cdesc.split('^').map((v,i)=>
                <p key={i}>{v}</p>)                
            }
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
