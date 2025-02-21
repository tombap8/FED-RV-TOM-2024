/// 상단영역 컴포넌트 : TopArea.jsx /////

// GNB 데이터 불러오기 ////////
import { Link } from "react-router-dom";
import { menu } from "../../js/data/gnb";

// 상단영역 CSS 불러오기 ///
import "../../css/common/top_area.scss";

export default function TopArea() {
  /// 리턴 코드구역 ////////
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 로그인 환영메시지 박스 */}
        <div className="logmsg"></div>
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
            {/* 1. 로고 컴포넌트 */}
            {
                menu.map((v,i)=>
                    <li key={i}>
                        <Link to={v.link}>{v.txt}</Link>
                    </li>
                )
            }
          </ul>
        </nav>
        {/* 모바일용 햄버거 버튼 */}
        <button className="hambtn"></button>
      </header>
    </>
  );
} //////////// TopArea 컴포넌트 ///////////
