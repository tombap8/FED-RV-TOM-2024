// DC.com 검색 모듈 - Searching.jsx

import React from "react";

// 모듈용 CSS 불러오기 ///
import "../../css/modules/searching.scss";

// 폰트어썸 불러오기 ////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// 캐릭터 데이터 불러오기 : 캐릭터 리스트 데이터
import { catListData } from "../../js/data/swiper_cat";
import SearchingCat from "./SearchingCat";

function Searching({ kword }) {
  // kword - 전달받은 검색어

  console.log("kword:", kword);
  console.log("전체데이터:", catListData);

  // 검색어로 전체 데이터에서 캐릭터 이름항목으로
  // 배열 filter검색 후 결과를 캐릭터 리스트
  // 하위 컴포넌트로 보내준다!
  const selData = catListData.filter((v) => {
    // 검색어 소문자 변환
    let keyW = kword.toLowerCase();

    // 이름 데이터 소문자 변환
    let cName = v.cname.toLowerCase();

    // 해당문자열이 이름데이터에 있으면 수집!
    if (cName.indexOf(keyW) !== -1) return true;
  }); //// filter //////

  console.log("결과:", selData);

  // 리턴 코드구역 ////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon
              icon={faSearch}
              className="schbtn"
              title="Open search"
            />
            {/* 입력창 */}
            <input
              id="schin"
              type="text"
              placeholder="Filter by Keyword"
              // 기본값으로 전달받은 검색어가 입력된다!
              defaultValue={kword}
            />
          </div>
          {/* 1-2. 체크박스구역 */}
          <div className="chkbx">
            <ul>
              <li>
                {/* 타이틀 */}
                <h2>
                  ALIGNMENT
                  <span className="spbtn">＋</span>
                </h2>
                {/* 체크박스리스트 */}
                <ol>
                  <li>
                    Heroes
                    {/* 숨긴 체크박스 */}
                    <input type="checkbox" id="hero" className="chkhdn" />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="hero" className="chklb"></label>
                  </li>
                  <li>
                    It's Complicated
                    {/* 숨긴 체크박스 */}
                    <input type="checkbox" id="comp" className="chkhdn" />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="comp" className="chklb"></label>
                  </li>
                  <li>
                    Villains
                    {/* 숨긴 체크박스 */}
                    <input type="checkbox" id="villain" className="chkhdn" />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="villain" className="chklb"></label>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
          {/* 2-1. 결과 타이틀 */}
          <h2 className="restit">BROWSE CHARACTERS</h2>
          {/* 2-2. 정렬선택박스 */}
          <aside className="sortbx">
            <select name="sel" id="sel" className="sel">
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </aside>
          {/* 2-3. 캐릭터 리스트 컴포넌트 : 
            데이터 상태변수 중 첫번째값만 보냄 */}
          <SearchingCat selData={selData} />
        </div>
      </section>
    </>
  );
}

export default Searching;
