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

export default function GoodsList({ selItem, setGIdx, setViewList }) {
  // selItem - 대분류(공유/효진) -> 데이터선택
  // setGIdx - 부모의 상태관리변수 gIdx 업데이트 메서드
  // setViewList - 부모의 상태관리변수 viewList 업데이트 메서드

  // 데이터 종류 선택하기 ////
  const selDB =
    selItem === "공유" ? guData : selItem === "효진" ? hjData : null;

  // 조건 랜더링 : null값일 경우
  if (!selDB)
    return (
      <ul>
        <li>데이터가 없습니다</li>
      </ul>
    );

  // [ useEffect 코드 구역 :  화면업데이트 후 실행구역 ]
  React.useEffect(() => {
    console.log("나는 리스트 컴포넌트다!");

    // 컴포넌트 소멸시 실행구역은 useEffect 함수안에
    // 함수 리턴코드를 만들어준다!
    return () => {
      console.log("나는 리스트 컴포넌트 소멸시 실행이다!");
    };
  }); /////////// useEffect ////////////////

  /// 리턴 코드구역 ///////////////
  return (
    <ul>
      {
        // [ 반복 데이터로 li태그 만들기 ]
        // 반복 요소를 만들때 필수로 key속성을 셋팅할것!
        // 반복 요소 구분을 위한 필수키로 리액트에서 설정
        // 할것을 강제하고 있음(cdn에서는 에러안남)
        selDB.map((v, i) => (
          <li key={i}>
            <a
              href="#"
              onClick={(e) => {
                // 기본이동막기
                e.preventDefault();
                // 확인 - idx값 찍기
                console.log("나,클릭!", v.idx);
                // 상태관리변수 gIdx를 업데이트하기!
                setGIdx(v.idx);
                // viewList를 업데이트하기
                setViewList(false);
                // false값으로 변경시 상세페이지만 보임
              }}
            >
              <ol className="glist">
                <li>
                  {selItem === "공유" ? (
                    <img
                      src={"./images/vans/vans_" + v.idx + ".jpg"}
                      alt="신발"
                    />
                  ) : (
                    <img
                      src={"./images/gallery/" + v.idx + ".jpg"}
                      alt="드레스"
                    />
                  )}
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
