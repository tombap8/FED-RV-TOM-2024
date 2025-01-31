// 산리오 사이트 메인 JS - main.js

import myFn from "./my_function.js";

// 캐릭터 데이터 가져오기 ////
import catData from './cat_data.json' with{type:'json'};
// console.log(catData);

// GNB용 데이터 배열
const gnbData = ["company","character","place","recruit"];

// 1. GNB메뉴 데이터 바인딩하기 ////
myFn
  .qs(".gnb").innerHTML = `
    <ul>
      ${gnbData.map(v=>`
        <li>
          <a href="#">${v}</a>
        </li>
      `).join('')}
    </ul>
  `;


// -> JS도 대소문자 변환할 수 있다!
// myFn.qs(".gnb ul li a")
// .forEach((el) => (el.innerText = 
// el.innerText.toUpperCase()));
// toUpperCase() 대문자변경
// toLowerCase() 소문자변경

// 모바일 모드에서 GNB DB디자인을
// 미디어쿼리가 모바일로 변경하였으므로
// 보여주는 코드는 클래스 show 를 넣어서
// 햄버거 버튼 기능과 연관시킨다!

// 대상: GNB메뉴 - .gnb
const gnbMenu = myFn.qs(".gnb");

// 2. 모바일 GNB 햄버거 버튼 클릭시 ///
myFn.qs(".gnb-mob").onclick = function () {
  // 클래스 on 넣기/빼기 토글!
  this.classList.toggle("on");
  // GNB 메뉴 보여주기/숨기기
  gnbMenu.classList.toggle("show");
};

// 3. 캐릭터 영역 데이터 연결하여 출력태그 만들기 ////
myFn.qs(".cat-list").innerHTML = `
    <ul>
    ${catData
      .map(
        (v) => `
        <li>
            <figure>
                <div class="img-part">
                    <img src="./images/${v.isrc}.png" alt="${v.title}">
                    <img src="./images/${v.isrc}_ov.png" alt="${v.title}">
                </div>
                <figcaption>
                    <h3>${v.title}</h3>
                    <p class="title-en">${v.title_en}</p>
                </figcaption>     
            </figure>
        </li>
    `
      )
      .join("")}


    </ul>
`;

// 4. 컴퍼니 영역 ///////////////////////
// 데이터 : 배열
const companyData = [
  {
    title: "회사소개",
    content: "맑고 깨끗한 강가에^문화를 쌓아 올리자",
    imgsrc: "ico_company1",
  },
  {
    title: "회사연혁",
    content: "산리오의 히스토리를^확인하세요",
    imgsrc: "ico_company3",
  },
  {
    title: "사업영역",
    content: "소셜 커뮤니케이션을^산리오가 시작합니다",
    imgsrc: "ico_company4",
  },
];

// 컴퍼니 리스트 박스에 데이터 태그 출력하기 /////
myFn.qs(".company-list").innerHTML = `
    <ul class="com-type-list">
    ${companyData
      .map(
        (v) => `
        <li>
            <figure>
                <div class="img-part">
                    <img src="./images/${v.imgsrc}.png" alt="${v.title}">
                </div>
                <figcaption>
                    <h3>${v.title}</h3>
                    <p>
                        ${v.content.split('^')[0]}
                    </p>
                    <p>
                        ${v.content.split('^')[1]}
                    </p>
                    <a href="#" class="com-btn">more</a>
                </figcaption>     
            </figure>
        </li>
    `
      )
      .join("")}


    </ul>
`;


// 5. 리쿠르트 영역 ///////////////////////
// 데이터 : 배열
const recruitData = [
  {
    title: "채용공고",
    content: "산리오코리아에서^인재를 찾습니다",
    imgsrc: "ico_recruit1",
  },
  {
    title: "직무소개",
    content: "산리오코리아에서는^어떤 일을 할까요?",
    imgsrc: "ico_recruit2",
  },
  {
    title: "복리후생",
    content: "산리오코리아에서^누릴 수 있는것!",
    imgsrc: "ico_recruit3",
  },
];

// 리쿠르트 리스트 박스에 데이터 태그 출력하기 /////
myFn.qs(".recruit-list").innerHTML = `
    <ul class="com-type-list">
    ${recruitData
      .map(
        (v) => `
        <li>
            <figure>
                <div class="img-part">
                    <img src="./images/${v.imgsrc}.png" alt="${v.title}">
                </div>
                <figcaption>
                    <h3>${v.title}</h3>
                    <p>
                        ${v.content.split('^')[0]}
                    </p>
                    <p>
                        ${v.content.split('^')[1]}
                    </p>
                    <a href="#" class="com-btn">more</a>
                </figcaption>     
            </figure>
        </li>
    `
      )
      .join("")}


    </ul>
`;
