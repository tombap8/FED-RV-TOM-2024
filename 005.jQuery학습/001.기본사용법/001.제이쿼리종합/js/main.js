// 미니언즈 좀비 탈출 애니 구현 JS - main.js

/*********************************** 
    [ 요구사항정리 ]
    1. 버튼을 클릭하여 미니언즈가
        순서대로 특정위치로 이동하며
        메시지를 보여준다
    2. 각 위치별 좀비를 등장시킨다
    3. 맨윗층에서 탈출할때 헬기를 사용한다

    [ 변경대상 ]
    1. 주인공 미니언즈
    2. 좀비 미니언즈들
    3. 주사기
    4. 헬기

    [ 이벤트와 이벤트대상  ]
    1. 이벤트 : 클릭이벤트
    2. 이벤트대상 : 버튼들
    3. 기능구분 : 버튼글자(지시사항)

***********************************/

// 0. 주인공들 변수에 할당!
// (1) 미니언즈
const $mi = $(".mi");

// (2) 건물 리스트(li요소)
const $room = $(".building li");

// (3) 버튼들
const $btns = $(".btns button");

// (4) 메시지 박스
const $msg = $(".msg");

// (5) 좀비, 주사기 요소 변수처리
let mz1 = `<img src="./images/mz1.png" alt="좀비1" class="mz">`;
let mz2 = `<img src="./images/mz2.png" alt="좀비2" class="mz">`;
let zom = `<img src="./images/zom.png" alt="좀비들" class="mz">`;
let inj = `<img src="./images/inj.png" alt="주사기" class="inj">`;

// (6) 메시지 배열 셋팅
const msgTxt = [
  // 0번방
  `도와줘요!!!`,
  // 1번방
  `이제 곧 탈출이닷!`,
  // 2번방
  `이제 조금만 더<br>가면 탈출이닷!`,
  // 3번방
  `어서 윗층으로 가자!`,
  // 4번방
  [
    [
      "무",
      "무.",
      "무.서",
      "무.서.",
      "무.서.워",
      "무.서.워.",
      "무.서.워..",
      "무.서.워...",
    ],
    `아~악! 물렸다!<br>어서 치료주사방으로!`,
  ],
  // 5번방
  "",
  // 6번방
  [`여긴없겠지?`, `그래도 무서우니<br>윗층으로 가자!`],
  // 7번방
  [`여긴없겠지?`, `악, 여기도!!!`],
  // 8번방
  `와~! 아늑하다!<br>옆방으로 가보자!`,
  // 9번방
  "악!;;;; 좀비!<br>어서피하자!",
];

// console.log('대상:',$mi,$room,$btns,$msg);

// 1. 건물 각 방에 번호넣기 + 좀비/주사기 넣기
// 대상: .building li -> $room변수
// 사용 제이쿼리 메서드
// (1) each((순번,요소)=>{코드})
// -> 요소 개수만큼 순서대로 돌아줌!
// (2) append(요소) : 선택요소 내부에 자식요소 추가(이동)

$room.each((idx, el) => {
  // console.log(idx,el);

  // 1. 각 방에 숫자로 순번넣기
  $(el).text(idx);

  // 2. 좀비/주사기 넣기
  switch (idx) {
    case 9:
      $(el).append(mz1);
      break;
    case 7:
      $(el).append(mz2);
      break;
    case 2:
      $(el).append(inj);
      break;
    case 1:
      $(el).append(zom);
      break;
  } //// switch //////
}); //// each 메서드 ////

// 좀비는 모두 숨기기
$(".mz").hide();

// 2. 버튼 셋팅하기 //////////////
// 대상: .btns button -> $btns변수
$btns.hide().first().show();
// 버튼모두.숨겨().첫번째버튼().보여()

// 임시: 5번버튼보이기
// $btns.hide().eq(5).show();

// 3. 미니언즈 공통 기능함수 ///////
// (1) 기본 공통 기능함수 /////////
const actMini = (el, seq, fn) => {
  // [1] el - 클릭된 버튼요소
  // [2] seq - 이동할 li순번
  // [3] fn - 이동후 실행할 코드(콜백함수)

  // 0-1. 메시지 숨기기
  $msg.fadeOut(300);
  // 0-2. 버튼자신 없애기(애니)
  $(el).slideUp(400);

  // 1. 특정방으로 이동하기위한 위치값 읽기
  // 이동할 li방 위치값을 읽은 후 이동함
  let myRoom = $room.eq(seq);
  // 위치값을 담을 객체변수
  const pos = {};
  // (1) top 위치값
  pos["top"] = myRoom.offset().top;
  // (2) left 위치값
  pos["left"] = myRoom.offset().left;
  // left값을 방 중앙으로 오도록 보정한다!
  pos["left"] = pos["left"] + myRoom.width() / 2 - $mi.width() / 2;
  // -> left값 + 방width절반 - 미니언즈width절반
  // 제이쿼리 가로크기 width(), 세로크기 height()

  //   console.log("top:", pos.top, "\nleft:", pos.left);

  // 2. 위치이동하기 ////
  $mi.animate(
    {
      top: pos.top,
      left: pos.left,
    },
    800,
    "easeOutElastic",
    fn // 전달된 콜백함수
  );
}; ////// actMini 함수 ///////

// (2) 다음버튼 보이기함수 ////////
const showNextBtn = (x) => $(x).next().delay(1000).fadeIn(300);
// 전달변수 x는 버튼자신을 전달한다!

// 4. "들어가기" 버튼 클릭시 ////////
$btns
  .first()
  .click(function () {
    // -> 내부화살표함수의 this가 여기에 걸림!
    // ()=>{ // -> 화살표함수는 this가 바깥으로 나감

    // (1) 버튼별 기능구현 (콜백함수) //////
    const fn =
      // function(){ // -> this는 $mi
      () => {
        // -> this는 싸고 있는 $btns.first() 버튼

        // -> 화살표함수의 this는 바깥으로 나간다!
        // -> 올라가다가 function(){}에 걸린다!
        // -> 화살표로 계속 나가면 window를 만난다!

        // 메시지 변경하기
        $msg.html(msgTxt[8]).delay(1000).fadeIn(300);

        // 다음버튼 보이기함수 호출
        showNextBtn(this);
        // console.log('나자신은?',this);
      }; //// fn 콜백함수 ////

    // (2) actMini() 함수 호출
    actMini(this, 8, fn);
  }) /// click ///

  // 5. "옆방으로!" 버튼 클릭시 ////////
  .next() // 두번째버튼
  .click(function () {
    // (1) 버튼별 기능구현 (콜백함수) //////
    const fn =
      // function(){ // -> this는 $mi
      () => {
        // 좀비 나타나기(2초후)
        $room.eq(9) // 9번방
        .find('.mz') // 이방의 좀비
        .delay(2000) // 2초후
        .fadeIn(400,()=>{ // 콜백함수 : 좀비 나타난후 액션
          // 메시지넣기/위치조정하기/보이기
          $msg.html(msgTxt[9])
          .css({left:'-88%'}).fadeIn(300);
          // 다음버튼 보이기함수 호출
          showNextBtn(this);
        }) /// fadeIn ///

      }; //// fn 콜백함수 ////

    // (2) actMini() 함수 호출
    actMini(this, 9, fn);
  }) //////////// click ////////////

  // 6. "윗층으로 도망가!" 버튼 클릭시 ////////
  .next() // 세번째버튼
  .click(function () {
    // (1) 버튼별 기능구현 (콜백함수) //////
    const fn =
      // function(){ // -> this는 $mi
      () => {
        // 첫대사출력: 배열안의 배열(다차원배열)
        $msg.text(msgTxt[7][0]).fadeIn(300);
        // 좀비나타남(대사후 1초경과)
        $room.eq(7) // 7번방
        .find('.mz') // 안에 있는 좀비선택
        .delay(1000) // 지연시간 1초
        .fadeIn(400,()=>{
          // 다음대사로 변경
          $msg.text(msgTxt[7][1]);
          // 다음버튼 보이기함수 호출
          showNextBtn(this);
        }); /// fadeIn ////

      }; //// fn 콜백함수 ////

    // (2) actMini() 함수 호출
    actMini(this, 7, fn);
  }) //////////// click ////////////

  // 7. "다시옆방으로!" 버튼 클릭시 ////////
  .next() // 네번째버튼
  .click(function () {
    // (1) 버튼별 기능구현 (콜백함수) //////
    const fn =
      // function(){ // -> this는 $mi
      () => {
        // 첫번째 대사
        $msg.html(msgTxt[6][0])
        .fadeIn(300)
        .delay(2000) // 지연시간2초
        // 지연시간을 주기위해 fadeIn을 다시줌!
        .fadeIn(300,()=>{
          // 쉬었다가 두번째 대사
          $msg.html(msgTxt[6][1]);
          // 다음버튼 보이기함수 호출
          showNextBtn(this);
        }); /// fadeIn ///
      }; //// fn 콜백함수 ////

    // (2) actMini() 함수 호출
    actMini(this, 6, fn);
  }) //////////// click ////////////

  // 8. "무서우니 윗층으로!" 버튼 클릭시 ////////
  .next() // 다섯번째버튼
  .click(function () {
    // (1) 버튼별 기능구현 (콜백함수) //////
    const fn =
      // function(){ // -> this는 $mi
      () => {
        // 무.서.워... 메시지 시간차 업데이트
        $msg
        .html(msgTxt[4][0][0])
        .fadeIn(200)
        .delay(500)
        .fadeIn(200,()=>$msg.html(msgTxt[4][0][1]))
        .delay(500)
        .fadeIn(200,()=>$msg.html(msgTxt[4][0][2]))
        .delay(500)
        .fadeIn(200,()=>$msg.html(msgTxt[4][0][3]))
        .delay(500)
        .fadeIn(200,()=>$msg.html(msgTxt[4][0][4]))
        .delay(500)
        .fadeIn(200,()=>$msg.html(msgTxt[4][0][5]))
        .delay(500)
        .fadeIn(200,()=>$msg.html(msgTxt[4][0][6]))
        .delay(500)
        .fadeIn(200,()=>$msg.html(msgTxt[4][0][7]))
        .delay(500)
        .fadeIn(200,()=>{
          // 무.서.워...대사후 좀비 올라와 달겨들기!
          // 7번방의 좀비가 올라옴!
          $room.eq(7).find('.mz')
          .animate({
            // 위층으로 뛰어오르기
            bottom: '100%'
          },500,'easeOutBack')
          .delay(500)
          .animate({
            // 방까지 뛰어오기
            right: '120%'
          },1000,'easeOutBounce',
          ()=>{ // 좀비 도착후 실행
            // 미니언즈 흑백처리
            $mi.find('img')
            .css({filter:'grayscale(100%)'});
            // 물린후 대사
            $msg.html(msgTxt[4][1])
            .css({left:'-84%'});
            // 미니언즈 좀비 이미지 변경
            $mi.find('img').delay(2000)
            .fadeIn(200,()=>{// 콜백함수
              $mi.find('img')
              .attr('src','./images/mz1.png');

              // 다음버튼 보이기함수 호출
              showNextBtn(this);
            });/// fadeIn ///
          }); /// animate ///
        }); /// fadeIn ///

      }; //// fn 콜백함수 ////

    // (2) actMini() 함수 호출
    actMini(this, 4, fn);
  }) //////////// click ////////////

  // 9. "치료주사방으로!" 버튼 클릭시 ////////
  .next() // 여섯번째버튼
  .click(function () {
    // (1) 버튼별 기능구현 (콜백함수) //////
    const fn =
      // function(){ // -> this는 $mi
      () => {
        // 주사기 돌리기
        // 주사기 회전 애니 되게하려고 jquery.rotate.js사용
        $('.inj')
        .css({zIndex:'9999'})
        .delay(500)
        .animate({
          rotate: '-150deg'
        },500,'easeInOutCirc',
        ()=>{ // 콜백함수: 주사기회전후
          // 미니언즈 이미지변경
          $mi.find('img')
          .attr('src','./images/m2.png')
          // 그레이스케일 원상복구
          .css({filter:'grayscale(0)'});

          // 주사기 없애기
          $('.inj').hide();

          // 대사날리기
          $msg.html(msgTxt[2]).fadeIn(200);

          // 다음버튼 보이기함수 호출
          showNextBtn(this);
        }); /// animate ///
      }; //// fn 콜백함수 ////

    // (2) actMini() 함수 호출
    actMini(this, 2, fn);
  }) //////////// click ////////////

  // 10. "3번방으로!" 버튼 클릭시 ////////
  .next() // 일곱번째버튼
  .click(function () {
    // (1) 버튼별 기능구현 (콜백함수) //////
    const fn =
      // function(){ // -> this는 $mi
      () => {
        // 대사보이기
        $msg.html(msgTxt[3]).fadeIn(300);

        // 다음버튼 보이기함수 호출
        showNextBtn(this);
      }; //// fn 콜백함수 ////

    // (2) actMini() 함수 호출
    actMini(this, 3, fn);
  }) //////////// click ////////////

  // 11. "1번방으로!" 버튼 클릭시 ////////
  .next() // 여덟번째버튼
  .click(function () {
    // (1) 버튼별 기능구현 (콜백함수) //////
    const fn =
      // function(){ // -> this는 $mi
      () => {
        // 메시지 보이기
        $msg.html(msgTxt[1]).fadeIn(300);

        // 다음버튼 보이기함수 호출
        showNextBtn(this);
      }; //// fn 콜백함수 ////

    // (2) actMini() 함수 호출
    actMini(this, 1, fn);
  }) //////////// click ////////////

  // 12. "헬기를 호출!" 버튼 클릭시 ////////
  .next() // 아홉번째버튼
  .click(function () {
    // (1) 버튼별 기능구현 (콜백함수) //////
    const fn =
      // function(){ // -> this는 $mi
      () => {

        // 마지막 최종 쇼쇼쇼~!!!
        // (1) 마지막 메시지 보이기
        $msg.html(msgTxt[0]).fadeIn(300);

        // (2) 1번방의 단체좀비들 달겨들기!
        $room.eq(1)
        .find('.mz')
        .fadeIn(300)
        .animate({
          right: '100%'
        },3000,'easeInCirc');

        // (3) 헬기등장 : .heli
        $('.heli')
        .css({rotate:'25deg'})
        .animate({
          left: '24%',
          rotate: '0deg'
        },3000,'easeOutBack',function(){
          // (4) 도착후 미니언즈 탄 이미지로 변경
          $(this).attr('src','./images/heli2.png');
          // this가 헬기가 되게 function(){}사용!

          // (5) 이때 미니언즈 사라짐
          $mi.hide();
        }) /// animate ///
        .delay(500) // 헬기를 0.5초지연
        // (6) 지연후 헬기 계속이동
        .animate({
          left: '70%',
          rotate: '15deg'
        },4000,'easeInOutCirc',function(){
          // (7) 조종사 좀비된 이미지로 변경
          $(this).attr('src','./images/heli3.png');
        })
        .delay(300) // 0.3초지연
        // (8) 지연후 헬기 천천히 화면바깥으로 나감!
        .animate({
          left: '110%'
        },10000,'linear',()=>{
          // (9) 최종애니 콜백함수
          // (간판떨어져,건물무너져 등)

          // (9-1) 간판떨어지기
          let tit = $('.tit');
          // 1단계: 클래스 'on'주기
          tit.addClass('on');
          // 2단계: 클래스 'on2'주기
          setTimeout(() => {
            tit.addClass('on2');
          }, 3000);

          // (9-2) 건물 무너지기 : 6초후
          setTimeout(() => {
            $room.parent().addClass('on');
            // parent()는 li의 부모인 ul로 올라감
          }, 6000);

          // (9-3) 추가구현 : 20초후 작동시작
          setTimeout(() => {
            // 1) 건물무너지고 9번방 좀비가 올라옴
            // - 건물이 돌아가 있으므로 세워놓고 올라옴
            $room.parent()
            .attr('style',
              'transform:rotate(0deg) !important');
            // 9번방 좀비
            $room.eq(9)
            .find('.mz')
            // 2)지표로 올라오기
            .animate({
              bottom: '594%'
            },3000)
            // 3)기다리기
            .delay(3000)
            // 4)오른쪽으로 사라짐(5초간)
            .animate({
              right: '-240%'
            },5000,()=>{
              // 진짜끝!!!
              // 5) 엔딩글자 나옴
              $('body').append(
                '<h1 class="ending">THE END</h1>');

              $('.ending')
              .css({                
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                margin: "0",
                padding: "0",
                color: "white",
                fontSize: "20vh",
                textShadow: "0 0 5px #000",
                fontFamily: "vladimir script",
              })
              .hide() // 숨기기
              .fadeIn(1000) // 페이드로 보이기
              .animate({color: 'red'},1000);
              // 마지막 글자색 빨간색으로 마무리!!!

            });/// animate ///
            
          }, 20000);


        });/// animate ///
        
      }; //// fn 콜백함수 ////

    // (2) actMini() 함수 호출
    actMini(this, 0, fn);
  }); //////////// click ////////////

/////////////////////////////////////////
///////// 추가 애니 구현하기 ///////////
// 1. 눈내리는 박스 넣기 + 산타넣기
$("body").append(`
    <div class="snowing"></div>
    <img class="santa" 
        src="./images/santa.png" 
        alt="산타썰매">
`);

// 2. 눈내리는 박스 셋팅
$(".snowing").css({
  position: "fixed",
  // 맨위에 올때 아래쪽 이벤트살리기
  pointerEvents: "none",
  zIndex: 99999,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "url(./images/snowing.gif)",
});

// 싼타변수
const $santa = $(".santa");

// 3. 싼타썰매 셋팅
$santa.css({
  position: "fixed",
  zIndex: -1,
  top: "20%",
  left: "-20%",
  width: "20%",
});
// 4. 싼타애니 함수 만들기
const santaAni = () => {
  $santa.animate(
    {
      top: "-10%",
      left: "110%",
    },
    10000,
    "linear",
    () => { // 콜백함수 ///
      // 값의 초기화(반복할것이므로)
      $santa.css({
        top: "20%",
        left: "-20%",
      }); /// css ///
    }
  ); /// animate ///
}; ///// santaAni 함수 /////

// 5. 싼타애니 최초호출
santaAni();

// 6. 인터발 함수로 계속 호출하기!
setInterval(santaAni,11000);
