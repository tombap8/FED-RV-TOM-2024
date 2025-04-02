import React, { useContext, useRef, useState } from "react";

// CSS 불러오기 ////
import "../../css/glist.scss";

// 데이터 불러오기 /////
import gdata from "../../js/data/glist-items";

import { pCon } from "../modules/pCon";
import ItemDetail from "../modules/ItemDetail";

// 제이쿼리 불러오기 ///
import $ from "jquery";

function GList(props) {
  // 변경될 데이터 원본과 분리하여 데이터 변경하기위한 참조변수
  const transData = useRef(JSON.parse(JSON.stringify(gdata)));
  // -> 깊은복사로 원본데이터와 연결성 없음!!!
  // 주의: 사용시 current 속성을 씀!

  // 참조변수셋팅 : 리랜더링없이 값유지!
  // 1. 아이템 코드(m1,m2,m3,...)
  const item = useRef("m1");
  // 2. 카테고리명(men/women/style)
  const catName = useRef("men");

  // 리랜더링을 위한 상태변수 : 무조건 리랜더링설정목적
  const [force, setForce] = useState(false);

  // 데이터 상태관리 변수
  const [currData, setCurrData] = useState(gdata);

  // 컨텍스트 API 불러오기
  const myCon = useContext(pCon);

  // [ 코드 만들기 함수 ] //////
  const makeCode = () => {
    // 리턴용변수
    let retVal;

    /* 
        기본 데이터 구조
        {
            idx: "1",
            cat: "men",
            ginfo: [
            "m1", 
            "[남성]카모전판프린트 PQ 티셔츠", 
            "DMTS7K731-MG", 
            "99000"],
        }
    */

    retVal = gdata.map((v, i) => (
      <div key={i}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            // 상품 상세페이지 함수호출
            showDetail(v.ginfo[0], v.cat);
            // showDetail(상품코드, 분류명);
          }}
        >
          {/* 1,2,3,4 일련번호 출력 */}[{i + 1}]
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/goods/" +
              v.cat +
              "/" +
              v.ginfo[0] +
              ".png"
            }
            alt={v.ginfo[1]}
          />
          <aside>
            <h2>{v.ginfo[1]}</h2>
            <h3>{myCon.addCommas(v.ginfo[3])}원</h3>
          </aside>
        </a>
      </div>
    ));

    // 리턴하기 ////
    return retVal;
  }; ////////////// makeCode 함수 //////////

  // [상품클릭시 상세보기 보여주는 함수] ////
  const showDetail = (gCode, catCode) => {
    // gCode - 상품코드, catCode - 분류명
    console.log("상세보여!", gCode, catCode);

    // 1. 값업데이트
    item.current = gCode;
    catName.current = catCode;

    // 2. 리랜더링 상태변경
    setForce(!force);
    // -> 리랜더링시 변경된 부분만 업데이트 한다!
    // -> ItemDetail 컴포넌트 파트가 업데이트됨!

    // 대상 보이기
    $(".bgbx").slideDown(600);
  }; //////////// showDetail 함수 ///////////

  // ★★★★★★★★★★★★ ///
  // 코드 리턴구역 /////////////
  return (
    <main id="cont">
      <h1 className="tit">All ITEMS List</h1>
      {
        // 1. Filter List 출력코드
        myCon.gMode === "F" && (
          <section>
            <div id="optbx">
              <label htmlFor="men">남성</label>
              <input
                type="checkbox"
                className="chkbx"
                id="men"
                defaultChecked
              />
              <label htmlFor="women">여성</label>
              <input
                type="checkbox"
                className="chkbx"
                id="women"
                defaultChecked
              />
              <label htmlFor="style">스타일</label>
              <input
                type="checkbox"
                className="chkbx"
                id="style"
                defaultChecked
              />
            </div>
            <div className="grid">{makeCode()}</div>
          </section>
        )
      }
      {
        // 2. Paging List 출력코드
        myCon.gMode === "P" && (
          <section>
            <h2 style={{ fontSize: "10vw" }}>Paging List</h2>
          </section>
        )
      }
      {
        // 3. More List 출력코드
        myCon.gMode === "M" && (
          <section>
            <h2 style={{ fontSize: "10vw" }}>More List</h2>
          </section>
        )
      }

      {/* 4. 상세보기박스 */}
      <div
        className="bgbx"
        style={{
          position: "fixed",
          top: 0,
          paddingTop: "12vh",
          backdropFilter: "blur(8px)",
          height: "100vh",
          zIndex: 9999,
        }}
      >
        {/* 아이템 디테일 컴포넌트 */}
        <ItemDetail catName={catName.current} goods={item.current} />
      </div>
    </main>
  );
}

export default GList;
