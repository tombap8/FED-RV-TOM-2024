// 신상품 컴포넌트 ////////////////

import React from "react";

function SinSang({ catName, chgItemFn }) {
  // 전달값
  // (1) catName - 카테고리 분류명
  // (2) chgItemFn - 선택상품정보변경 부모함수

  // 리턴 코드구역 ////////////////////
  return (
    <>
      <h2 className="c1tit">
        NEW {catName.toUpperCase()}'S ARRIVAL
        <button>전체리스트</button>
      </h2>
      <div className="flowbx">
        <ul className="flist"></ul>
      </div>
    </>
  );
}

export default SinSang;
