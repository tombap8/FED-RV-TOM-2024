import React, { useContext } from "react";

// CSS 불러오기 ////
import "../../css/glist.scss";

// 데이터 불러오기 /////
import gdata from "../../js/data/glist-items";

import { pCon } from "../modules/pCon";

function GList(props) {
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

    retVal = gdata.map((v,i)=>
    <div key={i}>
        <a>
            <img src={
                process.env.PUBLIC_URL+
                "/images/goods/" +
                v.cat + "/" + v.ginfo[0] + ".png"
                } alt={v.ginfo[1]} />
            <aside>
                <h2>{v.ginfo[1]}</h2>
                <h3>{v.ginfo[3]}원</h3>
            </aside>
        </a>
    </div>
);


    // 리턴하기 ////
    return retVal;
      
  }; ////////////// makeCode 함수 //////////

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
            <input type="checkbox" className="chkbx" id="men" defaultChecked />
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
      )}
      {
      // 2. Paging List 출력코드
      myCon.gMode === "P" && (
        <section>
          <h2 style={{ fontSize: "10vw" }}>Paging List</h2>
        </section>
      )}
      {
      // 3. More List 출력코드
      myCon.gMode === "M" && (
        <section>
          <h2 style={{ fontSize: "10vw" }}>More List</h2>
        </section>
      )}
    </main>
  );
}

export default GList;
