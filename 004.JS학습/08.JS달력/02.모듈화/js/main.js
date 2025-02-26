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

// 전체 달력 요소 담기
const calBox = $('.calendar');

// 1. 대상: 달력 .calendar .date
// 주의사항: 달력을 넘기게 되면 이벤트가 끊어진다!
// 따라서 달력에 마우스 들어갈때마다 이벤트를 새로 만들어야함!
// 달력변경버튼은 .header에 있으므로 .date가 있는 .main에
// 들어갈때 클릭 이벤트를 새로 걸어준다!
// -> mouseenter이벤트 사용!

calBox.find('.main').mouseenter(function(){
    console.log(this);
    $(this).find('.date').click((e)=>{
        // 1. 클릭된 자신
        let tg = $(e.currentTarget);
        console.log(tg);
    
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
            dateInfo = 
            `${dateInfo[0]}-${dc2.addZero(dateInfo[1])}-${dc2.addZero(dateInfo[2])} (${dc1.week[dateInfo[3]]})`;
        }
    
        // 5. 해당 달력의 input박스에 출력하기
        // 해당달력 부모박스의 이전 형제요소가 input이다!
        cal.parent().prev().val(dateInfo);
        
    }); ////////////// click ///////////////////

});

// 달력 둘다 처음에 안보임
calBox.hide();
// 달력에서 벗어나면 숨기기

calBox.mouseleave((e)=>{
    $(e.currentTarget).hide();
});

// 입력창을 클릭하면 달력 보임
$('.dalcom input').click(e=>{
    $(e.target).next().find('.calendar').show();
});