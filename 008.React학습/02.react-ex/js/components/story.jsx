// 산너머산 서브 컴포넌트

// 산정보 불러오기
import { mtInfo } from "../data/mt_data";

// 산아이콘 불러오기
import MtIcon from "./mt_icon";

export default function 이야기({ mtName, mtBoxCss, mtInfoBoxCss, setMtName }) {
  // 산정보는 배열이므로 순회하여 해당 데이터를 할당함
  // 선택된 산정보 변수할당하기!
  const selMtInfo = mtInfo.find((v) => {
    if (v.이름 === mtName) return true;
  });

  console.log(selMtInfo);

  // 코드 리턴구역 //////
  return (
    <div style={mtBoxCss}>
      {/* 1. 산이름 타이틀 */}
      <h1>
        {<MtIcon mtName={mtName} />}
        {mtName}
        {<MtIcon mtName={mtName} />}
      </h1>
      {/* 2. 산이미지 */}
      <img
        src={selMtInfo.이미지}
        alt={selMtInfo.이름}
        style={{ width: "100%" }}
      />
      {/* 3. 산정보박스 */}
      <div style={mtInfoBoxCss}>
        <ul>
          <li>◎ 이름 : {selMtInfo.이름}</li>
          <li>◎ 설명 : {selMtInfo.설명}</li>
          <li>◎ 높이 : {selMtInfo.높이}</li>
          <li>◎ 융기 : {selMtInfo.융기}</li>
          <li>◎ 최초등반 : {selMtInfo.최초등반}</li>
          <li>◎ 최초등반가 : {selMtInfo.최초등반가}</li>
          <li>◎ 산맥 : {selMtInfo.산맥}</li>
        </ul>
      </div>

      {/* 4. 현재산을 제외한 나머지 산 버튼생성하기 */}

      <button
        onClick={() => setMtName("백두산")}
        style={{
          padding: "15px",
          fontSize: "20px",
          margin: "10px",
        }}
      >
        백두산
      </button>
      <button
        onClick={() => setMtName("에베레스트산")}
        style={{
          padding: "15px",
          fontSize: "20px",
          margin: "10px",
        }}
      >
        에베레스트산
      </button>
      <button
        onClick={() => setMtName("후지산")}
        style={{
          padding: "15px",
          fontSize: "20px",
          margin: "10px",
        }}
      >
        후지산
      </button>
    </div>
  );
} ///////// 이야기 //////////////
