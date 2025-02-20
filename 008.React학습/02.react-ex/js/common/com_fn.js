// 공통 처리 JS - com_fn.js

// [ 세자리마다 콤마 함수 ] ///
const addCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 초이스 인트로 애니 실행함수

export { addCommas };