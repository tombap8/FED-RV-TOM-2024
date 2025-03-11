import React, { useState } from "react";

// 제이쿼리 불러오기 ///
import $ from "jquery";

// 게시판용 CSS 불러오기 ////
import "../../css/pages/board.scss";

// 로컬스토리지 확용 JS ////
import { initBoardData } from "../../js/func/board_fn";

function Board() {
  // [ 후크 상태관리 변수구역 ] ///////////////
  // [1] 기능모드
  const [mode, setMode] = useState("L");
  // (1) 리스트 모드(L) : List Mode
  // (2) 글보기 모드(R) : Read Mode
  // (3) 글쓰기 모드(W) : Write Mode
  // (4) 수정 모드(M) : Modify Mode (삭제포함)

  // 로컬스토리지 게시판 데이터 정보확인 함수호출!
  initBoardData();

  // 로컬스 데이터 변수할당하기!
  const baseData = JSON.parse(localStorage.getItem("board-data"));

  // 데이터 정렬 : 기준-> 최신날짜로 내림차순
  baseData.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));

  // 일부 데이터만 선택하기
  // -> 정렬후 상위 10개만 선택
  // -> 페이징을 하면 일정단위수만큼 보이기
  const selData = [];
  for (let i = 0; i < 10; i++) {
    selData.push(baseData[i]);
  }

  // 리턴 코드구역 /////////////////
  return (
    <>
      {
        // [1] 리스트 모드 출력하기 : mode -> "L" ////
        mode === "L" && (
          <main className="cont">
            <h1 className="tit">OPINION</h1>
            <div className="selbx">
              <select name="cta" id="cta" className="cta">
                <option value="tit">Title</option>
                <option value="cont">Contents</option>
                <option value="unm">Writer</option>
              </select>
              <select name="sel" id="sel" className="sel">
                <option value="0">Descending</option>
                <option value="1">Ascending</option>
              </select>
              <input id="stxt" type="text" maxlength="50" />
              <button className="sbtn">Search</button>
              <select name="sort_cta" id="sort_cta" className="sort_cta">
                <option value="idx">Recent</option>
                <option value="tit">Title</option>
              </select>
            </div>
            <table className="dtbl" id="board">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Title</th>
                  <th>Writer</th>
                  <th>Date</th>
                  <th>Hits</th>
                </tr>
              </thead>
              <tbody>
                {selData.map((v, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <a href="#">{v.tit}</a>
                    </td>
                    <td>{v.unm}</td>
                    <td>{v.date}</td>
                    <td>{v.cnt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <table className="dtbl btngrp">
              <tbody>
                <tr>
                  <td>
                    <button>Write</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        )
      }
    </>
  );
}

export default Board;
