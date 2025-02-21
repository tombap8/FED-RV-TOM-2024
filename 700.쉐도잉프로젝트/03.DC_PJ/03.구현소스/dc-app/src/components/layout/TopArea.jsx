/// 상단영역 컴포넌트 : TopArea.jsx /////

import { Link } from "react-router-dom";

// GNB 데이터 불러오기 ////////
import { menu } from "../../js/data/gnb";

// 상단영역 CSS 불러오기 ///
import "../../css/common/top_area.scss";
import Logo from "../modules/Logo";

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
            <li>
              <Link to="/">
                <Logo logoStyle="top" />
              </Link>
            </li>
            {/* 2. GNB 메뉴 데이터로 map 바인딩 */}
            {menu.map((v, i) => (
              <li key={i}>
                {
                  // 하위메뉴가 있는 상위메뉴는 일반링크로!
                  // 없으면 라우터 이동 메뉴로 만들기!
                  v.sub ? (
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {v.txt}
                    </a>
                  ) : (
                    <Link to={v.link}>{v.txt}</Link>
                  )
                }

                {
                  // 서브메뉴가 있는 경우 출력하기
                  v.sub && (
                    <div className="smenu">
                      <ol>
                        {v.sub.map((v, i) => (
                          <li key={i}>
                            <Link to={v.link}>{v.txt}</Link>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )
                }
              </li>
            ))}
          </ul>
        </nav>
        {/* 모바일용 햄버거 버튼 */}
        <button className="hambtn"></button>
      </header>
    </>
  );
} //////////// TopArea 컴포넌트 ///////////
