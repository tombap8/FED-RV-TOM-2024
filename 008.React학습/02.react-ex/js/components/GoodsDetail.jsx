/// [ 상품 상세보기 서브컴포넌트 : GoodsDetail ] ///

// 공유신발 데이터 불러오기
import guData from "../data/gu_data";
// 효진드레스 데이터 불러오기
import hjData from "../data/hj_data";
// console.log(guData);

export default function GoodsDetail({selItem, gIdx}) {
    // selItem - 대분류(공유/효진) -> 데이터선택
    // gIdx - 구체적인 선택 데이터 idx값
    console.log('selItem:', selItem, '\ngIdx:', gIdx);

    // 데이터 종류 선택하기 ////
    const selDB = 
        selItem === "공유" ? 
        guData : 
        selItem === "효진" ?
        hjData : null;

    // 조건 랜더링 : null값일 경우
    if(!selDB) return <ol>
    <li>데이터가 없습니다</li>
  </ol>;

    // [ 상세데이터 선택하기 ] ////
    // selDB값이 null이면 false처리됨!
    // Number(v.idx)===Number(gIdx)
    // 위의 비교는 형까지 비교할때 에러를 방지하기 위함
    const selData = selDB ?    
    selDB.find(v=>{
        if(Number(v.idx)===Number(gIdx))return true}):
        "데이터가 없습니다!";

    console.log('선택데이터:',selData);

  // 리턴 코드구역 ////////////
  return (
    <ol
      style={{
        display: "flex",
        listStyle: "none",
        justifyContent: "center",
      }}
    >
      <li>
        <img
          src={
            "./images/vans/vans_"+selData.idx+".jpg"}
          alt="반스신발"
          style={{ width: "100%" }}
        />
      </li>
      <li
        style={{
          lineHeight: "2",
          padding: "10px",
          textAlign: "left",
        }}
      >
        상품명 : {selData.gname}
        <br />
        가격 : {selData.gprice}
        <br />
        <div>
          소재 : {selData.소재}
          <br />
          색상 : {selData.색상}
          <br />
          치수 : {selData.치수}
          <br />
          제조자/수입자 :{selData["제조자/수입자"]}
          <br />
          제조국 : {selData.제조국}
          <br />
          제조연월 : {selData.제조연월}
          <br />
          A/S 책임자와 전화번호 : <br />
          {selData["A/S 책임자와 전화번호"]}
          <br />
          Model : {selData.Model}
          <br />
        </div>
        <div
          className="btnbx"
          style={{
            textAlign: "right",
            padding: "15px",
          }}
        >
          <button
            style={{
              fontSize: "24px",
            }}
          >
            리스트로 가기
          </button>
        </div>
      </li>
    </ol>
  );
} //////////// GoodsDetail 컴포넌트 /////////
