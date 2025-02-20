/// [ 상품 상세보기 서브컴포넌트 : GoodsDetail ] ///

// 공유신발 데이터 불러오기
import guData from "../data/gu_data";
// 효진드레스 데이터 불러오기
import hjData from "../data/hj_data";
// console.log(guData);

export default function GoodsDetail() {

    // 데이터 선택하기 ////
    const selData = guData[16];
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
          src="./images/vans/vans_8.jpg"
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
