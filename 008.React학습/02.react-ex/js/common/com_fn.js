// 공통 처리 JS - com_fn.js

// [ 1. 세자리마다 콤마 함수 ] ///
const addCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// [ 2. 초이스 인트로 애니 함수 ] ///
const choiceIntroAni = () => {
    // 공유/효진 으로 선택 변경시에만 실행: useEffect(함수,[selItem])
    // 아이템 변경은 selItem 상태변수에 연관되어 있음!
    // 이변수를 의존성에 등록해 준다!!!

    // (1) 타이틀 확대/축소 애니
    $('.tit span')
    .animate({scale: "200%"}, 1000)
    .animate({scale: "100%"}, 1000);


}; ///////////// choiceIntroAni 함수 ///////////////
// [ 3. 로고 애니 함수 ] ///
const logoAni = () => {
    // 로고 최초한번만 애니하기 - useEffect(함수,[])
    $('#logo')
    .animate({ scale: "200%", rotate: "360deg" }, 1000)
    .animate({ scale: "100%", rotate: "0deg" }, 1000);
}; //////// logoAni 함수 /////////////////////////////

// [ 4. 셋팅초기화함수 ] ///

export { addCommas, logoAni, choiceIntroAni };