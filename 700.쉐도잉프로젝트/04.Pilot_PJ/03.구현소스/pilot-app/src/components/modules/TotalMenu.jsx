// Pilot PJ 전체메뉴 컴포넌트

// 컨텍스트 API 불러오기
import { useContext } from "react";
import { pCon } from "./pCon";

export function TotalMenu() {

  // 컨텍스트 사용
  const myCon = useContext(pCon);
  // pCon에 Provider value 속성에 공개한 변수/함수를 사용함!

  // 메뉴 클릭시 처리함수 ///
  const setPage = (catName) => { // catName 호출시 카테고리명
    // (1) 카테고리명 상태변수 변경 : 상단메뉴 변경
    myCon.setCatName(catName);
    // (2) 이동 페이지 셋팅 : 라우터 이동
    myCon.goPage("/fashion",{state:{ catName: catName }})
    // (3) 전체박스 숨기기
    document.querySelector('.ham').click();
  }; //////// setPage 메서드 ///////////

  // 코드 리턴 //////////////////////
  return (
    <>
      <div className="mbox">
        <video
          src={"/images/disc2018.mp4"}
          loop="loop"
          muted="muted"
          className="bgm"
        ></video>
        <nav className="mlist">
          <dl>
            <dt>
              <a href="#" 
              onClick={(e)=>{
                e.preventDefault();
                setPage('men');
              }}>MEN</a>
            </dt>
            <dd>
              <a href="#">T-SHIRT</a>
            </dd>
            <dd>
              <a href="#">JACKET</a>
            </dd>
            <dd>
              <a href="#">TRAINING WARE</a>
            </dd>
            <dd>
              <a href="#">BEACH WARE</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="#" 
              onClick={(e)=>{
                e.preventDefault();
                setPage('women');
              }}>WOMEN</a>
            </dt>
            <dd>
              <a href="#">T-SHIRT</a>
            </dd>
            <dd>
              <a href="#">JACKET</a>
            </dd>
            <dd>
              <a href="#">TRAINING WARE</a>
            </dd>
            <dd>
              <a href="#">BEACH WARE</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="#" 
              onClick={(e)=>{
                e.preventDefault();
                setPage('style');
              }}>STYLE</a>
            </dt>
            <dd>
              <a href="#">COLLECTION</a>
            </dd>
            <dd>
              <a href="#">SEASON AD</a>
            </dd>
            <dd>
              <a href="#">STAR &amp; NEWS</a>
            </dd>
            <dd>
              <a href="#">MAIN ITEM</a>
            </dd>
          </dl>
        </nav>
      </div>
    </>
  );
} ///////// TotalMenu 컴포넌트 //////////
