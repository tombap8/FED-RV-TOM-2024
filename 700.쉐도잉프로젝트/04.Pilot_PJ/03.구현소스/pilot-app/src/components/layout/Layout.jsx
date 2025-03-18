/// 레이아웃 컴포넌트 : Layout.jsx /////

import { useCallback, useState } from "react";
// 컨텍스트 API 불러오기
import { pCon } from "../modules/pCon";

import { FooterArea } from "./FooterArea";
import MainArea from "./MainArea";
import { TopArea } from "./TopArea";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  // [ ★★★ 상태변수 셋팅구역 ★★★ ] //////////
  // [1] 분류명 상태변수
  const [catName, setCatName] = useState("main");

  // [ ★★★ 참조변수 셋팅구역 ★★★ ] //////////
  // [1] 자식 카트 컴포넌트와 함께 상태값 공유할 변수
  const flag = useRef(true);
  // -> 이값이 true일때만 새로추가하는 데이터가 반영됨
  // -> 이값이 false이면 카트 컴포넌트의 삭제 등 자체기능이 작동함!
  // useRef를 사용한 이유는 리랜더링시에도 값을 유지하면서
  // 이 값이 변경되어도 리랜더링 되지 않아야 하기 때문에 선택함!!!

  // 카트 사용여부 초기값은 로컬스 'cart'가 있으면 1
  // 없으면 0 으로 셋팅해준다!
  let stsVal = false;
  let transVal = null;

  // 카트셋팅에 필요한 데이터를 로컬스에 따라 셋팅함!
  if (localStorage.getItem("cart")) {
    // 로컬스가 있으므로 객체화하기!
    transVal = JSON.parse(localStorage.getItem("cart"));
    // 로컬스 객체화 데이터 개수가 0이 아닐때만 상태값 1로 노출하기
    if (transVal.length !== 0) stsVal = true;
  } ///// if ////////

  console.log("로컬스있니?", stsVal);

  // 로컬스 변환값 변수 - 상태변수로 리랜더링시 값을 유지하게함!
  const [transData, setTransData] = useState(transVal);

  // 카트사용여부 상태변수 /////////
  const [csts, setCsts] = useState(stsVal);

  // 라우터 이동 네비게이트 객체 만들기 //
  const goNav = useNavigate();

  // [ 공통함수 구역 ] /////////
  // [1] 라우터 이동함수
  const goPage = useCallback((pm1, pm2) => {
    // pm1 - 이동할 라우터 주소
    // pm2 - state 전달변수 객체
    // 라우터 이동함수 호출!
    goNav(pm1, pm2);
  }, []);

  /// 리턴 코드구역 ////////
  return (
    // [ 전역 컨텍스트 API 변수제공자 등록 ] ////
    <pCon.Provider
      value={{
        setCatName, // 카테고리명 상태변수 setter
        goPage, // 라우터 이동함수
      }}
    >
      <TopArea catName={catName} />
      <MainArea />
      <FooterArea />
    </pCon.Provider>
  );
} //////////// Layout 컴포넌트 ///////////
