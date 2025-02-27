// 산너머산 서브 컴포넌트

// 컨텍스트 불러오기 : 사용할 곳에서도 이것을 부른다! /////
import { 누구냐 } from "./provider";

// 산정보 불러오기
import { mtInfo } from "../data/mt_data";

// 산아이콘 불러오기
import MtIcon from "./mt_icon";

export default function 이야기() {
  // 위에서 컨텍스트를 불러오고 들어와서 useContext 훅크를 셋팅함!
  const 나야나 = React.useContext(누구냐);
  // 불러온 누구냐....를 연결시킨다! 아래쪽에서는
  // 전역으로 사용할 속성/메서드를 나야나...로 쓸 수 있다!

  // 산정보는 배열이므로 순회하여 해당 데이터를 할당함
  // 선택된 산정보 변수할당하기!
  const selMtInfo = mtInfo.find((v) => {
    if (v.이름 === 나야나.mtName) return true;
  });

  // console.log(selMtInfo);

  // [ 버튼셋팅을 위한 산이름 정보 배열만들기 ]
  // 만드는 법: 산정보배열.map(v=>v.이름)
  const mtTotalName = mtInfo.map((v) => v.이름);
  // console.log("산이름배열:", mtTotalName);

  // 코드 리턴구역 //////
  return (
    <div style={나야나.mtBoxCss}>
      {/* 1. 산이름 타이틀 */}
      <h1>
        {<MtIcon mtName={나야나.mtName} />}
        {나야나.mtName}
        {나야나.mtName!=="후지산"&&
        <MtIcon mtName={나야나.mtName} />}
      </h1>
      {/* 2. 산이미지 */}
      <img
        src={selMtInfo.이미지}
        alt={selMtInfo.이름}
        style={{ width: "100%" }}
      />
      {/* 3. 산정보박스 */}
      <div style={나야나.mtInfoBoxCss}>
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
      {mtTotalName.map(
        (v) =>
          v !== 나야나.mtName && (
            <button
              onClick={() => 나야나.setMtName(v)}
              style={{
                padding: "15px",
                fontSize: "20px",
                margin: "10px",
              }}
            >
              {v}
            </button>
          )
      )}
    </div>
  );
} ///////// 이야기 //////////////
