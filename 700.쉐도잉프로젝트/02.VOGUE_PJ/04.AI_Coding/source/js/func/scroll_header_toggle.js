// 헤더 스크롤 반응형 기능 함수
export default function scrollHeaderToggle() {
    const $header = $('header');
    let lastScrollTop = 0; // 이전 스크롤 위치 저장

    // 스크롤 이벤트 핸들러
    $(window).on('scroll', function() {
        const currentScrollTop = $(this).scrollTop();
        const headerHeight = $header.outerHeight(); // 헤더의 전체 높이

        // 스크롤 다운 (아래로)
        if (currentScrollTop > lastScrollTop && currentScrollTop > headerHeight) {
            // 현재 스크롤 위치가 헤더 높이보다 클 때 (헤더가 화면을 벗어나기 시작할 때) 숨김
            $header.addClass('hidden');
        } 
        // 스크롤 업 (위로)
        else if (currentScrollTop < lastScrollTop) {
            // 스크롤 방향이 위쪽일 때 표시
            $header.removeClass('hidden');
        }
        
        // 스크롤 위치 업데이트
        lastScrollTop = currentScrollTop;
    });
}