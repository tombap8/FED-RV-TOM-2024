/// 메인페이지 컴포넌트 : Main.jsx /////

import Banner from "../modules/Banner";
import SecIntro from "../modules/SecIntro";

export default function Main(){

    /// 리턴 코드구역 ////////
    return (
        <>
            {/* 1. 배너 컴포넌트 */}
            <Banner catName={"main"+(Math.ceil(Math.random()*3))} />
            {/* 2. 섹션 인트로 컴포넌트 */}
            <SecIntro />
        </>
    );

} //////////// Main 컴포넌트 ///////////