/// 상단영역 컴포넌트 : TopArea.jsx /////

// GNB 데이터 가져오기 ////
import { gnbData } from "../../js/data/gnb";

import { memo } from "react";

// 제이쿼리 불러오기 ///
import $ from 'jquery';

// 전체메뉴 컴포넌트 불러오기
import { TotalMenu } from "../modules/TotalMenu";

// React.memo() 를 사용하여 메모이제이션 처리하기!
export const TopArea = memo(({ catName }) => {
  console.log("상단영역 랜더링!!!");

  /// GNB메뉴 리스트 만들기 함수
  const makeList = (dataName) => {
    console.log("데이터이름:", dataName);
    return gnbData[dataName].map((v, i) => (
      <li key={i}>
        <a href={"#c" + (i + 1)}>{v}</a>
      </li>
    ));
  }; ///////// makeList /////////

  /// 리턴 코드구역 ////////
  return (
    <>
      <div id="top-area">
        <header className="top-area ibx">
          <h1 id="logo">
            <a href="#">
              <img src="/images/main_logo.png" alt="파일럿로고" />
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li className="bld">배너순번 li 숨기기</li>
              {makeList(catName)}
            </ul>
          </nav>
          <div className="ham"
            onClick={(e)=>{
              // toggle()은 show()/hide() 전환!

              // 1.전체메뉴박스 보이기/숨기기
              $('.mbox').toggle();
              // 2.햄버거메뉴 모양변경 클래스 넣기/빼기
              $(e.currentTarget).toggleClass('on');
              // 3.배경 동영상 재생/멈춤 : 
              // - 제이쿼리 동영상은 get(0)까지 선택해야함!
              let bgm = $('.bgm').get(0);
              if (bgm.paused) { // (1) 멈춤상태면 재생
                bgm.play();
              } else { // (2) 멈춤상태 아니면 멈춤
                bgm.pause();
              }
              // console.log('동영상 멈춤상태:',bgm.paused);
            }}
          >
            <span></span> <span></span> <span></span>
          </div>
          {/* 전체메뉴 컴포넌트 */}
          <TotalMenu />
        </header>
      </div>
    </>
  );
}); //////////// TopArea 컴포넌트 ///////////
