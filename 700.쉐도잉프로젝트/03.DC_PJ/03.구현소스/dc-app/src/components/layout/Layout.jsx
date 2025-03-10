/// 레이아웃 컴포넌트 : Layout.jsx /////

// 컨텍스트 API 로 전역변수구역 설정하기! ////
import { useState } from "react";
import { dCon } from "../modules/dCon";

import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  // [ 전역 상태관리 변수 설정하기 ] ////
  // [1] 로그인 상태관리변수
  const [loginSts, setLoginSts] = useState(sessionStorage.getItem("minfo"));
  // -> 초기값으로 세션스토리지 'minfo'를 할당함!

  // [2] 로그인 환영 메시지 상태변수 ////
  const [loginMsg, setLoginMsg] = useState(null);

  // [ 공통함수 ] /////////////////
  // [1] 라우터 이동함수 ////
  const goPage = useNavigate();

  // [2] 로그인 환영 메시지 생성함수 ///
  const makeMsg = (name) => {
    // 유저아이콘
    let usrIcon = ["🙍‍♂️", "🧏‍♀️", "🦸‍♂", "👨‍🎤", "🦸‍♀"];
    // 랜덤수 : 0~4사이의 수
    let rdm = Math.floor(Math.random() * 5);
    // 로그인 메시지 상태변수 업데이트
    setLoginMsg(`Welcome ${name} ${usrIcon[rdm]}`);
  }; ///////// makeMsg /////////////

  /// 리턴 코드구역 ////////
  return (
    // 컨텍스트API Provider 에서
    // value속성에 등록하면 전역사용가능해짐!
    <dCon.Provider
      value={{
        loginSts,
        setLoginSts,
        loginMsg,
        makeMsg,
      }}
    >
      <TopArea />
      <MainArea />
      <FooterArea />
    </dCon.Provider>
  );
} //////////// Layout 컴포넌트 ///////////
