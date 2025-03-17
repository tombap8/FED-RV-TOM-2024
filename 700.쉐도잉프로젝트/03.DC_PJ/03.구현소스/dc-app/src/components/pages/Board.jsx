import React, { useEffect, useRef, useState } from "react";

// 제이쿼리 불러오기 ///
import $ from "jquery";

// 게시판용 CSS 불러오기 ////
import "../../css/pages/board.scss";

// 로컬스토리지 확용 JS ////
import { initBoardData } from "../../js/func/board_fn";
import List from "../modules/board/List";
import Read from "../modules/board/Read";
import Write from "../modules/board/Write";
import Modify from "../modules/board/Modify";

function Board() {
  // [ 로컬스토리지 게시판 데이터 정보확인 함수호출! ] ////
  initBoardData();

  // [ 로컬스 데이터 변수할당하기! ] //////
  const baseData = JSON.parse(localStorage.getItem("board-data"));

  // [ ★★ 후크 상태관리 변수구역 ★★ ] //////
  // [1] 기능모드 /////
  const [mode, setMode] = useState("L");
  // (1) 리스트 모드(L) : List Mode
  // (2) 글보기 모드(R) : Read Mode
  // (3) 글쓰기 모드(W) : Write Mode
  // (4) 수정 모드(M) : Modify Mode (삭제포함)

  // [2] 페이징을 위한 페이지 번호 ////
  const [pageNum, setPageNum] = useState(1);

  // [ ★★ 리액트 참조변수 셋팅구역 ★★ ] //////

  // [1] 게시글 선택 데이터 : 글 내용보기시
  const selRecord = useRef(null);
  // -> 읽기/쓰기시 변수.current 로 사용함!
  // console.log("선택데이터 참조변수값:", selRecord);

  // [2] 전체 레코드 개수(배열데이터 개수)
  // -> 매번 계산하지 않도록 참조변수로 생성한다!
  const totalCount = useRef(baseData.length);
  console.log("전체개수:", totalCount);

  // [3] 페이징의 페이징 번호
  const pgPgNum = useRef(1);
  // -> 상태변수로 만들지 않은 이유는?
  // 페이징의 페이징번호가 변경될때 어차피
  // 상태변수인 페이징번호가 업데이트되어서
  // 전체 리랜더링된다! 따라서 이것은 값만 유지하면 됨!

  // [ ★★ 일반변수 셋팅구역 ★★ ] ///////////
  // ->>> 매번 같은 값을 유지해야하는 변수들

  // [1] 페이지당 개수 : 페이지당 레코드수
  const unitSize = 7;
  // [2] 페이징의 페이징 개수 : 한번에 보여줄 페이징 개수
  const pgPgSize = 3;

  // [ 데이터 정렬 ] /////////////
  baseData
    // ((기준1))-> 최신날짜로 내림차순
    .sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
    // ((기준2))-> idx로 내림차순
    .sort((a, b) => (a.idx > b.idx ? -1 : a.idx < b.idx ? 1 : 0));

  // [ 일부 데이터만 선택하기 ]
  // -> 페이징을 하기위해 일정단위수만큼 보이기
  // -> pageNum, unitSize 사용하여 구성

  // 페이지 시작번호 : 단위수 * (페이지번호-1)
  let initNum = unitSize * (pageNum - 1);
  // 한계수 번호 : 단위수 * 페이지번호
  let limitNum = unitSize * pageNum;
  // 샘플계산 (단위수는 5, 1~3)
  // 시작수(5*(1-1)) = 0 / 한계수 (5*1) = 5
  // 시작수(5*(2-1)) = 5 / 한계수 (5*2) = 10
  // 시작수(5*(3-1)) = 10 / 한계수 (5*3) = 15

  // 선택 데이터 담을 배열변수 ///
  const selData = [];

  // [ ★★ 페이징에 맞게 데이터를 다시 담기 ★★ ] ///
  for (let i = initNum; i < limitNum; i++) {
    // ★★★매우중요함!!! 여분 페이지에서
    // (전체레코드수-1)보다 크면 for문을 나가야함!
    if (i > totalCount.current - 1) break;

    // 데이터 골라담기! ///
    selData.push(baseData[i]);
  } //////////// for : 선택데이터 담기 ///////////

  // DOM 랜더링 실행구역 ///////
  useEffect(() => {
    // 스크롤 최상단 이동하기 ///
    window.scrollTo(0, 0);
  }); //// useEffect /////////

  // 리턴 코드구역 /////////////////
  return (
    <>
      {
        // [1] 리스트 모드 출력하기 : mode -> "L" ////
        mode === "L" && (
          <List
            selData={selData} // 선택 리스트 배열데이터
            setMode={setMode} // 모드 상태변수 setter
            selRecord={selRecord} // 선택데이터 참조변수
            // 페이징에 필요한 정보들 /////
            pageNum={pageNum} // 리스트 페이지번호 getter
            setPageNum={setPageNum} // 리스트 페이지번호 setter
            unitSize={unitSize} // 페이지당 레코드수
            totalCount={totalCount} // 전체 개수 참조변수
            pgPgSize={pgPgSize} // 페이징의 페이징 개수
            pgPgNum={pgPgNum} // 페이징의 페이징 번호
          />
        )
      }

      {
        // [2] 보기모드 출력하기 : mode -> "R" ///
        mode === "R" && (
          <Read
            setMode={setMode} // 모드 상태변수 setter
            selRecord={selRecord} // 선택데이터 참조변수
          />
        )
      }

      {
        // [3] 쓰기모드 출력하기 : mode -> "W" ///
        mode === "W" && (
          <Write
            setMode={setMode} // 모드 상태변수 setter
            totalCount={totalCount} // 전체 개수 참조변수
            setPageNum={setPageNum} // 리스트 페이지번호 setter
            pgPgNum={pgPgNum} // 페이징의 페이징 번호
          />
        )
      }

      {
        // [4] 수정모드 출력하기 : mode -> "M" ///
        mode === "M" && (
          <Modify
            setMode={setMode} // 모드 상태변수 setter
            selRecord={selRecord} // 선택데이터 참조변수
            totalCount={totalCount} // 전체 개수 참조변수
          />
        )
      }
    </>
  );
}

export default Board;
