// 스크롤 이벤트가 발생할 때마다 실행될 함수
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const docHeight = document.documentElement.scrollHeight; // 전체 문서 높이
    const windowHeight = window.innerHeight; // 화면에 보이는 영역의 높이
    const scrollPercent = (scrollPosition / (docHeight - windowHeight)) * 100; // 스크롤 비율 계산
    
    // 상단의 하이라이트 바의 너비를 비율에 맞게 설정
    const scrollBar = document.getElementById('scroll-highlight');
    scrollBar.style.width = scrollPercent + '%';
  });
  