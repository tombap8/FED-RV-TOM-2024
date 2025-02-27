/// 메인페이지 컴포넌트 : Main.jsx /////

import Banner from "../modules/Banner";
import SecIntro from "../modules/SecIntro";
import VidIntro from "../modules/VidIntro";

export default function Main({catName}){

    /// 리턴 코드구역 ////////
    return (
        <>
            {/* 1. 배너 컴포넌트 
                -> 배너는 3가지 타입 셋팅됨(main1,main2,main3)
                -> main뒤의 숫자가 1~3사이의 램덤수로 셋팅되게함!
            */}
            <Banner catName={catName+(Math.ceil(Math.random()*3))} />
            {/* 2. 섹션 인트로 컴포넌트 */}
            <SecIntro />
            {/* 3. 비디오 소개 컴포넌트 */}
            <VidIntro catName={catName} clsName="off" />
        </>
    );

} //////////// Main 컴포넌트 ///////////