// 영화정보 객체 JS - JS4-1.object.js

// 탐쌤의 오브젝트!
// -> 변경가능하게 let으로 선언한다!
let myObj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
myObj.title = "외계+인 2부";
// 2. 감독
myObj.director = "최동훈";
// 3. 배우
myObj.actor = "류준열, 김태리, 김우빈";
// 4. 장르
myObj.genre =
  " 액션,다크 판타지,코미디";
// 5. 관람가
myObj.ratings = "12세";
// 6. 예고편
myObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("4uSn4Dem9i0");
}; ////// trailer 메서드 ////////

// 객체확인
console.log("나의객체:", myObj);

//////// 1. 김혜민 객체 /////////////
let khmObj = {};

khmObj.title = "모아나 2";
khmObj.director = "데이브 데릭 주니어";
khmObj.actor =
  "아우이 크라발호, 드웨인 존슨";
khmObj.genre = "애니메이션";
khmObj.ratings = "전체관람가";
khmObj.trailer = function () {
  playMovie("zKIN_aZM1Qc");
};

////////// 2. 양현석 객체 /////////////
let yhsObj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
yhsObj.title = "말할 수 없는 비밀";
// 2. 감독
yhsObj.director = "주걸륜";
// 3. 배우
yhsObj.actor = "주걸륜, 계륜미";
// 4. 장르
yhsObj.genre = " 로맨스,판타지,드라마";
// 5. 관람가
yhsObj.ratings = "12세";
// 6. 예고편
yhsObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("Ceoe2wf-bbo");
}; ////// trailer 메서드 ////////

/////////// 3. 황대웅 객체 /////////////
// 대웅의 오브젝트!
// -> 변경가능하게 let으로 선언한다!
let hdwObj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
hdwObj.title = "데드풀과 울버린";
// 2. 감독
hdwObj.director = "숀 레비";
// 3. 배우
hdwObj.actor = "라이언레이놀즈,휴잭맨";
// 4. 장르
hdwObj.genre = "액션,코미디";
// 5. 관람가
hdwObj.ratings = "청소년관람불가";
// 6. 예고편
hdwObj.trailer = function () {
  console.log("ㅎㅎ");
  // 예고편 플레이 함수호출!
  playMovie("AubJhjH0MfY");
}; ////// trailer 메서드 ////////

////////// 4. 이민경 객체 ///////////////
let lmkObj = {};

// 1. 영화제목
lmkObj.title = "아바타:물의 길(2022)";
// 2. 감독
lmkObj.director = "제임스 카메론";
// 3. 배우
lmkObj.actor = "샘 워딩턴, 조 샐다나";
// 4. 장르
lmkObj.genre =
  " 액션, SF, 전쟁, 판타지 ";
// 5. 관람가
lmkObj.ratings = "12세";
// 6. 예고편
lmkObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("kihrFxwdMb4");
}; ////// trailer 메서드 ////////

///////// 5. 이민지 객체 ////////////////
let mimObj = {};

// [ 선정한 영화 정보 ]
// 1. 영화제목
mimObj.title = "노트북";
// 2. 감독
mimObj.director = "닉 카사베티스";
// 3. 배우
mimObj.actor =
  "라이언 고슬링, 레이첼 맥아담스";
// 4. 장르
mimObj.genre = "멜로, 로맨스, 드라마";
// 5. 관람가
mimObj.ratings = "15세";
// 6. 예고편
mimObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("dyuvMHc-vYc");
}; ////// trailer 메서드 ////////

///////// 6. 전정훈 객체 /////////////
let jjhObj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
jjhObj.title = "베놈: 라스트 댄스";
// 2. 감독
jjhObj.director = "켈리 마르셀";
// 3. 배우
jjhObj.actor = "톰 하디";
// 4. 장르
jjhObj.genre = "액션";
// 5. 관람가
jjhObj.ratings = "15세";
// 6. 예고편
jjhObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("yowWyxS5rXc");
}; ////// trailer 메서드 ////////

//////// 7. 윤고은 객체 ///////////

let ygeObj = {};

// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목

ygeObj.title =
  "퓨리오사: 매드맥스 사가";

// 2. 감독

ygeObj.director = "조지 밀러";

// 3. 배우

ygeObj.actor =
  "안야 테일러 조이, 크리스 헴스워스";

// 4. 장르

ygeObj.genre = " 액션";

// 5. 관람가

ygeObj.ratings = "15세";

// 6. 예고편

ygeObj.trailer = function () {
  console.log("예고편:영화아이디"); // 예고편 플레이 함수호출!

  playMovie("NXHOhQOCB6g");
}; ////// trailer 메서드 ////////


/////////// 8. 김다영 객체 ////////////////
let ssgObj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
ssgObj.title = "범죄도시4";
// 2. 감독
ssgObj.director = "허명행";
// 3. 배우
ssgObj.actor = "마동석,김무열";
// 4. 장르
ssgObj.genre =
  " 액션,범죄";
// 5. 관람가
ssgObj.ratings = "15세이상관람가";
// 6. 예고편
ssgObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("pMAPj6WVsT4");
}; ////// trailer 메서드 ////////


///////// 9. 강수현 객체 /////////////
let shkObj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
shkObj.title = "미션 임파서블: 파이널 레코닝";
// 2. 감독
shkObj.director = "크리스토퍼 맥쿼리";
// 3. 배우
shkObj.actor = "톰 크루즈";
// 4. 장르
shkObj.genre = "액션, 스릴러";
// 5. 관람가
shkObj.ratings = "15세 이상 관람가";
// 6. 예고편
shkObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("uOzcSOSGb3w");
}; ////// trailer 메서드 ////////

