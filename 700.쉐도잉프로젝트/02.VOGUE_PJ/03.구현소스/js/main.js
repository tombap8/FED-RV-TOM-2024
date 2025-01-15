// 보그 PJ 메인페이지 JS - main.js

// 아이템 데이터 불러오기
import itemData from '../data/item_data.json' with{type:'json'};

console.log(itemData);

// 패션 영역용 데이터수집하기
// filter() 메서드는 조건이 맞을때 true리턴!
// -> 결과: 필터링된 배열값
const fashionData = itemData.filter(v=>{
    if(v.mainCat=='fashion')return true
});

console.log('fashion데이터:',fashionData);

// 패션 영역 셋팅 ///
document.querySelector(".post-list").innerHTML = `
    <ul>
        ${fashionData
          .map(
            (v) => `                
                <li>
                <figure>
                    <img src="${v.imgSrc}" alt="${v.mainCat}">
                    <figcaption>
                    <p class="category">${v.catName}</p>
                    <h3 class="s-tit">${v.title}</h3>
                    <p class="date">${v.dateWriter}</p>
                    </figcaption>
                </figure>
                </li>
            `
          )
          .join("")}
    </ul>
`;
