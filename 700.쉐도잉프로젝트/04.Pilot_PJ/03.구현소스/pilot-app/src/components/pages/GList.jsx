import React, { Fragment, useContext, useRef, useState } from "react";

// CSS 불러오기 ////
import "../../css/glist.scss";

// 데이터 불러오기 /////
import gdata from "../../js/data/glist-items";

import { pCon } from "../modules/pCon";
import ItemDetail from "../modules/ItemDetail";

// 제이쿼리 불러오기 ///
import $ from "jquery";

function GList(props) {
  // [1] 리액트 후크 상태변수 셋팅 ////
  // 1. 페이지용 상태변수 : 현재페이지번호
  const [pgNum, setPgNum] = useState(1);
  // 2. 체크박스 그룹 상태변수 : men/women/style 세가지 상태값
  const [chkSts, setChkSts] = useState([true, true, true]);
  // 3. 리랜더링을 위한 상태변수 : 무조건 리랜더링설정목적
  const [force, setForce] = useState(false);

  // [2] 리액트 참조변수 셋팅 : 리랜더링없이 값유지! ////
  // 1. 아이템 코드(m1,m2,m3,...)
  const item = useRef("m1");
  // 2. 카테고리명(men/women/style)
  const catName = useRef("men");
  // 3. 한 페이지당 페이지크기
  const pgSize = useRef(10);
  // 4. 전체 페이징 개수
  const pgCnt = useRef(Math.ceil(gdata.length / pgSize.current));
  // 전체데이터수/한페이지당 페이지크기 -> 올림처리 Math.ceil()
  // 소수점아래가 나오면 1을 올리고 아니면 아무것도 안올림!

  console.log("전체데이터수", gdata.length);
  console.log("한페이지당 페이지크기", pgSize.current);
  console.log("전체 페이징 개수", pgCnt.current);

  // 컨텍스트 API 불러오기
  const myCon = useContext(pCon);

  /* 
        [ 기본 데이터 구조 ]

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
  // [ 데이터 선택하기 ] /////////
  // 체크박스 상태값에 따른 데이터선택
  const selData =
    // 각 모드별 데이터 선택 코드 분기하기 ///
    // [1] 'F'모드 : men/women/style 데이터선택
    myCon.gMode === "F"
      ? gdata.filter(
          (v) =>
            v.cat === (chkSts[0] ? "men" : "") ||
            v.cat === (chkSts[1] ? "women" : "") ||
            v.cat === (chkSts[2] ? "style" : "")
        )
      : // [2] 'P'모드 : 페이징 데이터선택
        // -> 한페이지당 페이지크기에 맞게 현재 페이지 데이터선택
        // -> 시작수 = (현재페이지번호 - 1) * 한페이지당 페이지크기
        // -> 끝수 = 현재페이지번호 * 한페이지당 페이지크기
        gdata.slice((pgNum - 1) * pgSize.current, pgNum * pgSize.current);

  console.log("선택데이터:", selData);

  // [ 코드 만들기 함수 ] //////
  const makeCode = () => {
    // 리턴용변수
    let retVal;

    // [ 코드 만들기 : selData사용!!! ] /////////
    retVal =
      // 데이터가 없는 경우 /////////
      selData.length === 0 ? (
        <div style={{ margin: "0 auto" }}>
          <p>상품없음</p>
        </div>
      ) : (
        // 데이터가 있는경우 ////////
        selData.map((v, i) => (
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
        ))
      );

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
                checked={chkSts[0]}
                onChange={(e) => {
                  // 체크박스 상태변수값 변경
                  setChkSts([e.target.checked, chkSts[1], chkSts[2]]);
                  console.log(e.target.checked);
                }}
              />
              <label htmlFor="women">여성</label>
              <input
                type="checkbox"
                className="chkbx"
                id="women"
                checked={chkSts[1]}
                onChange={(e) => {
                  // 체크박스 상태변수값 변경
                  setChkSts([chkSts[0], e.target.checked, chkSts[2]]);
                  console.log(e.target.checked);
                }}
              />
              <label htmlFor="style">스타일</label>
              <input
                type="checkbox"
                className="chkbx"
                id="style"
                checked={chkSts[2]}
                onChange={(e) => {
                  // 체크박스 상태변수값 변경
                  setChkSts([chkSts[0], chkSts[1], e.target.checked]);
                  console.log(e.target.checked);
                }}
              />
            </div>
            <div
              className="grid"
              style={{
                gridTemplateColumns:
                  selData.length === 0 ? "repeat(1, 1fr)" : "",
              }}
            >
              {makeCode()}
            </div>
          </section>
        )
      }
      {
        // 2. Paging List 출력코드
        myCon.gMode === "P" && (
          <section>
            <div
              className="grid"
              style={{
                gridTemplateColumns:
                  selData.length === 0 ? "repeat(1, 1fr)" : "",
              }}
            >
              {makeCode()}
            </div>
            {/* 페이징 코드 */}
            <div id="paging">
              {
                // [개수만큼 배열 만드는 방법]
                // [1] Array.from({length:개수}) 개수만큼 배열생성
                // [2] [...Array(개수)] 개수만큼 배열생성
                // -> 개수만큼 빈값 배열 순회시 map((_,i)=>{})
                // 값으로 언더바(_)를 쓰면 값을 자리만 표시한다는 의미임
                // Array.from({ length: pgCnt.current }).map((v, i) => (
                [...Array(pgCnt.current)].map((_, i) => (
                  <Fragment key={i}>
                    {
                      // 페이지번호 셋업하기
                      pgNum === i + 1 ? (
                        // 현재 페이지와 같은번호는 b요소로 출력
                        <b>{i + 1}</b>
                      ) : (
                        // 다른번호는 a요소로 출력
                        <a
                          href="#"
                          onClick={(e) => {
                            // 기본이동막기
                            e.preventDefault();
                            // 페이지번호 업데이트하기
                            setPgNum(i + 1);
                          }}
                        >
                          {i + 1}
                        </a>
                      )
                    }
                    {
                      // 바 기호 사이에 넣기
                      i + 1 < pgCnt.current && <span> | </span>
                    }
                  </Fragment>
                ))
              }
            </div>
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
