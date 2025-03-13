// DC PJ 게시판 수정 모드 모듈 - Modify.jsx

import React from "react";

function Modify({ setMode, selRecord }) {
  // setMode - 모든 변경 상태변수 setter
  // selRecord - 선택데이터 참조변수

  // 선택된 참조변수 데이터 넣기
  const selData = selRecord.current;

  // 글쓰기 저장 서브밋 함수 //////
  const submitFn = () => {
    // 제목입력항목
    let title = $(".subject").val().trim();
    // 내용입력항목
    let content = $(".content").val().trim();
    // trim()으로 앞뒤공백 제거후 검사!

    // (1) 공통 유효성검사
    // - 제목, 내용 모두 비었으면 리턴!
    if (title === "" || content === "") {
      alert("Insert title and content!");
      return;
    } /// if /////

    // (2) 서브밋 처리하기 //////
    else {
      // 1) 로컬스 읽어와서 객체화하기 ////////////
      // 1-1) 로컬스토리지 게시판 데이터 불러오기
      let localData = localStorage.getItem("board-data");

      // 1-2) JSON.parse()로 배열객체로 변환
      localData = JSON.parse(localData);  

      // 2) 수정할 현재 데이터 idx값(키값)
      let currIdx = selData.idx;
      console.log('수정할idx:', currIdx);


      // 4) 입력 객체를 기존 로컬스 변환 객체에 추가하기
    //   localData.push(data);

      // 5) 입력객체를 문자형변환하여 로컬스에 넣기
    //   localStorage.setItem("board-data", JSON.stringify(localData));

      // 6) 리스트 이동을 위해 모드 변경하기
    //   setMode("L");
    } /// else /////
  }; ////////// submitFn 함수 //////////////

  // 리턴 코드구역 /////////////////////
  return (
    <main className="cont">
      <h1 className="tit">OPINION</h1>
      <table className="dtblview readone">
        <caption>OPINION : Modify</caption>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                className="name"
                size="20"
                readOnly={true}
                defaultValue={selData.unm}
              />
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td>
              <input
                type="text"
                className="subject"
                size="60"
                defaultValue={selData.tit}
              />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <textarea
                className="content"
                cols="60"
                rows="10"
                defaultValue={selData.cont}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Attachment</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td>
              <button onClick={submitFn}>Submit</button>
              <button>Delete</button>
              <button
                onClick={() => {
                  // 리스트 모드('L')로 변경하기
                  setMode("L");
                }}
              >
                List
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Modify;
