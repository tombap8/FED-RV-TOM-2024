/// 상단영역 컴포넌트 : TopArea.jsx /////

// GNB 데이터 가져오기 ////
import { gnbData } from "../../js/data/gnb";

// 전체메뉴 컴포넌트 불러오기

export default function TopArea() {

   /// GNB메뉴 리스트 만들기 함수
   const makeList = (dataName) => {
    console.log('데이터이름:',dataName);
    return(
      gnbData[dataName].map((v,i)=>
        <li key={i}>
          <a href={"#c"+(i+1)}>{v}</a>
        </li>
      )
    )

  }; ///////// makeList /////////

  /// 리턴 코드구역 ////////
  return (
    <>
      <div id="top-area">
        <header className="top-area ibx">
          <h1 id="logo">
            <a href="#">
              <img
                src="/images/main_logo.png"
                alt="파일럿로고"
              />
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li className="bld">배너순번 li 숨기기</li>
              {makeList('main')}
            </ul>
          </nav>
          <div className="ham">
            <span></span> <span></span> <span></span>
          </div>
          {/* 전체메뉴 컴포넌트 */}
        </header>
      </div>
    </>
  );
} //////////// TopArea 컴포넌트 ///////////
