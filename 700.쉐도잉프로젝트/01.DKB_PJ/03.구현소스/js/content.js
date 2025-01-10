// 서브 페이지 JS - content.js

// 메뉴를 넣기위한 공통함수 불러오기
import comFn from "./common.js";
comFn();//실행!

// 서브 소스 데이터 가져오기
import subSource from "../data/sub_data.js";
// console.log(subSource);

// 1. 파라미터 확인하기!
// URL로 넘어온 물음표가 없으면 첫페이지로 돌려보내기

let pm = location.search;
console.log('파라미터값:', pm);

if(pm.indexOf("?") == -1) {
    alert("올바른 접근이 아닙니다~!");
    location.href = "index.html";
} // if //

// 2. 물음표가 있는 파라미터 잘라내기!
pm = pm.split('=')[1];
console.log('원하는값:',pm,subSource[pm]);

// 3. 데이터 매칭하여 html 넣기
// 대상: .main-area
// 데이터: subSource["login/join/cat"]
$('.main-area').html(subSource[pm]);



