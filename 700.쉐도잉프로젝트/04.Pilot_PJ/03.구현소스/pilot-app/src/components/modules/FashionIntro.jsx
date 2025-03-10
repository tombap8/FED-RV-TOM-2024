// Pilot PJ - 패션인트로 컴포넌트 ////////


// 패션 인트로 데이터 불러오기
import { fsData } from "../../js/data/fashion_intro";

// 패션 인트로 CSS 불러오기
import "../../css/fashion_intro.scss";
import { Link } from "react-router-dom";

// 컨텍스트 API 불러오기
import { useContext } from "react";
import { pCon } from "./pCon";

export function FashionIntro({ cat, subcat }) {
  // cat - 카테고리 분류명
  // subcat - 서브페이지 분류명

  // 컨텍스트 사용
  const myCon = useContext(pCon);
  // pCon에 Provider value 속성에 공개한 변수/함수를 사용함!

  // 선택데이터
  let selData = fsData[cat];

  // 만약 서브 페이지 데이터일 경우 다시 선택함
  if (subcat !== "etc") {
    // selData값을 덮어씀 : cat 값이 'sub'임
    // subcat 값은 배열로 전달됨 : [카테고리,순번]
    selData = fsData[cat][subcat[0]][subcat[1]];
    // 예컨데 fs['sub']['men'][0]
  } //////// if ////////////

  // 새로적용할 스타일객체
  const newStyle = {};
  // 'women'일 경우 값을 셋팅
  if (cat == "women") newStyle.flexDirection = "row-reverse";

  // 리턴 코드 ////////////////////////////
  return (
    <div id={cat} className="fs-page">
      <ul
        className="pgc"
        style={newStyle}
        //   style={cat=='women'?{flexDirection:'row-reverse'}:{}}
      >
        {/* 스타일일때 이미지경로는 배열! */}
        {
          // 메인에서 호출하는 subcat이 etc인 경우만 해당!
          subcat === "etc" && (
            <li className="imgc">
              <img
                src={cat == "style" ? selData.isrc[0] : selData.isrc}
                alt={cat == "style" ? selData.ialt[0] : selData.ialt}
              />
            </li>
          )
        }
        {/* 스타일이면 타이틀2개, 아니면 1개 */}
        {subcat === "etc" && (
          <li className="txtc">
            {cat != "style" && (
              <h2 onClick={()=>myCon.setCatName(cat)}>
                <Link to="/fashion" state={{ catName: cat }}>
                  {selData.tit[0]} <br />
                  {selData.tit[1]}
                </Link>
              </h2>
            )}
            {cat == "style" && (
              <>
                <h2 className="tm" 
                onClick={()=>myCon.setCatName(cat)}>
                  <Link to="/fashion" state={{ catName: cat }}>
                    {selData.tit[0][0]} <br />
                    {selData.tit[0][1]}
                  </Link>
                </h2>
                <h2 className="tw" 
                onClick={()=>myCon.setCatName(cat)}>
                  <Link to="/fashion" state={{ catName: cat }}>
                    {selData.tit[1][0]} <br />
                    {selData.tit[1][1]}
                  </Link>
                </h2>
              </>
            )}
          </li>
        )}
        {/* 스타일 패션에서만 나오는 이미지 */}
        {cat == "style" && (
          <li className="imgc">
            <img src={selData.isrc[1]} alt={selData.ialt[1]} />
          </li>
        )}

        {/* 서브페이지용 구성 */}
        {
          // sub인고 첫번째 sub 분류 데이터 사용!
          cat == "sub" && subcat[1] === 0 && (
            <>
              {/* 글자박스 */}
              <li className="txtc">
                <h2 className="sc-ani">
                  <a href="#">
                    {selData.tit[0]} <br />
                    {selData.tit[1]}
                  </a>
                </h2>
              </li>
              {/* 이미지박스 */}
              <li className="imgc sc-ani">
                <img src={selData.isrc} alt={selData.ialt} />
              </li>
            </>
          )
        }
        {
          // sub인고 두번째 sub 분류 데이터 사용!
          cat == "sub" && subcat[1] === 1 && (
            <>
              {/* 이미지박스 */}
              <li className="imgc sc-ani">
                <img src={selData.isrc[0]} alt={selData.ialt[0]} />
              </li>
              {/* 글자박스 */}
              <li className="txtc">
                <h2 className="tm sc-ani">
                  <a href="#">
                    {selData.tit[0][0]} <br />
                    {selData.tit[0][1]}
                  </a>
                </h2>
                <h2 className="tw sc-ani">
                  <a href="#">
                    {selData.tit[1][0]} <br />
                    {selData.tit[1][1]}
                  </a>
                </h2>
              </li>
              {/* 이미지박스 */}
              <li className="imgc sc-ani">
                <img src={selData.isrc[1]} alt={selData.ialt[1]} />
              </li>
            </>
          )
        }
      </ul>
    </div>
  );
} //////////// FashionIntro 컴포넌트 ////////
