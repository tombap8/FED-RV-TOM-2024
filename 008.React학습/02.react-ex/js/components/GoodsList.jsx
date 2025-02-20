/***************************************** 
    [ 상품리스트 서브컴포넌트 : GoodsList ]
*****************************************/

// 공유신발 데이터 불러오기
import guData from "../data/gu_data";

// 효진드레스 데이터 불러오기
import hjData from "../data/hj_data";
// console.log(guData);

// 공통함수 불러오기
import * as comFn from "./common/com_fn";

export default function GoodsList() {
  /// 리턴 코드구역 ///////////////
  return (
    <ul>
      {
        // 반복 데이터로 li태그 만들기
        guData.map((v) => (
          <li>
            <a href="#">
              <ol className="glist">
                <li>
                  <img
                    src={"./images/vans/vans_" + v.idx + ".jpg"}
                    alt="신발"
                  />
                </li>
                <li>👟상품명 : {v.gname}</li>
                <li>🥾가격 : {comFn.addCommas(v.gprice)}원</li>
              </ol>
            </a>
          </li>
        ))
      }
    </ul>
  );
} //////////// GoodsList 컴포넌트 ////////////
