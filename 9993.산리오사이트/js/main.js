// 산리오 사이트 메인 JS - main.js

import myFn from './my_function.js';

// 캐릭터 데이터 가져오기 ////
import catData from './cat_data.json' with{type:'json'};
// console.log(catData);

// 1. GNB메뉴 대문자글자변경 ////
myFn.qsa(".gnb ul li a")
.forEach(el=>el.innerText=
    el.innerText.toUpperCase());
// toUpperCase() 대문자변경
// toLowerCase() 소문자변경

// 모바일 모드에서 GNB DB디자인을 
// 미디어쿼리가 모바일로 변경하였으므로
// 보여주는 코드는 클래스 show 를 넣어서
// 햄버거 버튼 기능과 연관시킨다!

// 대상: GNB메뉴 - .gnb
const gnbMenu = myFn.qs('.gnb');

// 2. 모바일 GNB 햄버거 버튼 클릭시 ///
myFn.qs('.gnb-mob').onclick=function(){
    // 클래스 on 넣기/빼기 토글!
    this.classList.toggle('on');
    // GNB 메뉴 보여주기/숨기기
    gnbMenu.classList.toggle('show');

};

// 3. 캐릭터 영역 데이터 연결하여 출력태그 만들기 ////
myFn.qs('.cat-list').innerHTML = 
`
    <ul>
    ${catData.map(v=>`
        <li>
            <img src="./images/${v.isrc}.png" alt="${v.title}">
            <img src="./images/${v.isrc}_ov.png" alt="${v.title}">
            <h3>
                <p class="title">${v.title}</p>
                <p class="title-en">${v.title_en}</p>
            </h3>
        </li>
    `).join('')}


    </ul>
`;

