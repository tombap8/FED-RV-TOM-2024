// 도깨비 PJ : 링크시스템 JS - linksys.js

export default function linksysFn(){
    $('.gnb a, .top-menu a').click(function(e){
        e.preventDefault();

        // 1. 링크 텍스트 읽어오기
        let txt = $(this).text().trim();
        // trim() 앞뒤공백제거
        console.log(txt);

        
    });

} //////////// linksysFn 함수 /////////////