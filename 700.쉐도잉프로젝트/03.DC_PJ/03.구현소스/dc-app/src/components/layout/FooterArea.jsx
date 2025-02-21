/// 하단영역 컴포넌트 : FooterArea.jsx /////

// 하단메뉴 데이터 불러오기 ////
import { bmData } from "../../js/data/bmenu";

export default function FooterArea() {
  /// 리턴 코드구역 ////////
  return (
    <footer className="info">
      <ul>
        {/* 하단로고 컴포넌트 넣기 */}
        <li>
          <Logo logoStyle="bottom" />
        </li>
        <li>
          {/* 하단링크박스 */}
          <ol className="bmenu"></ol>
        </li>
        <li>© & ™ DC. ALL RIGHTS RESERVED</li>
      </ul>
    </footer>
  );
} //////////// FooterArea 컴포넌트 ///////////
