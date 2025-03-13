// DC PJ 게시판 읽기 모드 모듈 - Read.jsx

import React, { useContext } from "react";
import { dCon } from "../dCon";

function Read({ setMode, selRecord }) {
  // setMode - 모든 변경 상태변수 setter
  // selRecord - 선택데이터 참조변수

  // 선택된 참조변수 데이터 넣기
  const selData = selRecord.current;

  // 전역 컨텍스트 API 사용하기!!
  const myCon = useContext(dCon);
  // console.log('Read에서 loginSts:',myCon.loginSts);

  // 리턴 코드구역 ///////////////////
  return (
    <main className="cont">
      <h1 className="tit">OPINION</h1>
      <table className="dtblview readone">
        <caption>OPINION : Read</caption>
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
                readOnly={true}
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
                readOnly={true}
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
              <button
                onClick={() => {
                  // 리스트 모드('L')로 변경하기
                  setMode("L");
                }}
              >
                List
              </button>
              {
                // 로그인한 사용자가 글쓴이와 같은 아이디일 경우
                // 수정버튼 보이기
                myCon.loginSts && myCon.loginSts.uid === selData.uid && (
                  <button
                    onClick={() => {
                      // 수정모드로 변경하기
                      setMode("M");
                    }}
                  >
                    Modify
                  </button>
                )
              }
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Read;
