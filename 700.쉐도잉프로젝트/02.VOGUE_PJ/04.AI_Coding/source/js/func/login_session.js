// 로그인 세션 관리 함수 ///////

// 아이콘 랜덤 출력하기위한 배열
let icons = {
    // 여자 아이콘 : 6개(0~5)
    w:['👩‍💼','🙋‍♀️','🦹‍♀️','🦸‍♀️','👩‍🚒','👩‍⚕️'],
    // 남자 아이콘 : 6개(0~5)
    m:['👮‍♂️','👷‍♂️','👨‍⚕️','👨‍🔧','👨‍✈️','🦸‍♂️']
};

export default function loginSession() {
    // 1. 로그인 정보가 있는지 확인
    const loginfo = sessionStorage.getItem("loginfo");
    if (loginfo) {
        // 2. 로그인 정보가 있다면 파싱하여 사용
        const user = JSON.parse(loginfo);

        // 3. 아이콘 랜덤수 만들기 (0~5)
        let iNum = Math.floor(Math.random() * 6);

        console.log("로그인 사용자 정보:", user, '/랜덤수:', iNum);
        // 4. 로그인 사용자표시 정보를 상단에 출력하기
        $('header')
        .append(`<div id="login-display">
            ${
                // 아이콘 랜덤출력
                icons[user.gender][iNum]+user.name}님 환영합니다!</div>`);
                // 랜덤수는 원하는 최대수를 랜덤에 곱하고
                // 올림처리하면 1부터 최대수까지 나옴
                // 0부터 시작하려면 내림처리하면 됨
        // 5. CSS 적용하기
        $('#login-display').css({
            position: 'absolute',
            // 상단 정중앙위치
            top: '5px',
            left: '50%',
            translate: '-50%',
            fontSize: '18px',
        }); /// css ////
        // 6. 헤더의 로그인,회원가입 버튼 숨기기 
        // + 로그아웃버튼 보이기
        $('.header-actions').addClass('on');
    } //// if /////
    else {
        console.log("로그인 정보가 없습니다.");
    } //// else /////
}; ////////////// loginSession //////////////
