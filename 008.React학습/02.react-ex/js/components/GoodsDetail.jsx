/// [ 상품 상세보기 서브컴포넌트 : GoodsDetail ] ///

// 공유신발 데이터 불러오기
import guData from "../data/gu_data";
// 효진드레스 데이터 불러오기
import hjData from "../data/hj_data";
// console.log(guData);

export default function GoodsDetail() {
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
        상품명 : 반스어얼리
        <br />
        가격 : 55000
        <br />
        <div>
          소재 : 천연가죽(소), 면100%
          <br />
          색상 : BLACK/TRUE WHITE
          <br />
          치수 : 상단표기
          <br />
          제조자/수입자 :(유)브이에프코리아
          <br />
          제조국 : 베트남
          <br />
          제조연월 : 상품라벨에서 확인
          <br />
          A/S 책임자와 전화번호 : <br />
          (유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882
          <br />
          Model : VN000CYU1702
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
