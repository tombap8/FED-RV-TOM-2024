// 달력 컴포넌트를 부르는 메인 JS - main.js

// 달력 컴포넌트 불러오기 : default로 export했으므로 이름변경가능
import Dalcom from "./CalendarComp.js";
// import MakeDallyeok from "./CalendarComp.js";
// console.log(MakeDallyeok);

// 달력 컴포넌트 함수 호출하여 달력 셋팅하기!
// 대상: .dalcom1, .dalcom2
const dc1 = new Dalcom('.dalcom1');
const dc2 = new Dalcom('.dalcom2');

// 두번째 달력은 앞의 달력보다 한달 뒤의 달력으로 출력
dc2.chgCalendar(1);


////////////////////////////////////////////////////
// 제이쿼리로 달력 컴포넌트를 사용할때 추가기능구현 ///

// 1. 대상: 달력 .calendar .date

$('.calendar .date').click((e)=>{
    // 1. 클릭된 자신
    let tg = $(e.currentTarget);
    // console.log(tg);

    // 2. 클릭된 요소의 부모들 중 .calendar찾기
    let cal = tg.parents('.calendar');

    // 3. 히든필드값 읽기
    let dateInfo = cal.find('.date-info').val();
    
    // 히든필드 슬래쉬로 자르기
    dateInfo = dateInfo.split('/');
    console.log(dateInfo);

    // 4. 출력 포멧 변경하기
    // 선택박스이름
    let selBoxName = cal.parent().attr('class');
    console.log(selBoxName);
    if(selBoxName==='dalcom1'){
        // 형식: yyyy년 m월 d일 (w요일)
        dateInfo = 
        `${dateInfo[0]}년 ${dateInfo[1]}월 ${dateInfo[2]}일 (${dc1.week[dateInfo[3]]}요일)`;

    }/// if ///
    else if(selBoxName==='dalcom2'){
        // 형식: yyyy-mm-dd (w)

    }

    // 5. 해당 달력의 input박스에 출력하기
    // 해당달력 부모박스의 이전 형제요소가 input이다!
    cal.parent().prev().val(dateInfo);
    
}); ////////////// click ///////////////////