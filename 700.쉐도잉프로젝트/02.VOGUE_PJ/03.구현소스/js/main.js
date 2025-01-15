// 보그 PJ 메인페이지 JS - main.js

// 아이템 데이터 불러오기
import itemData from '../data/item_data.json' with{type:'json'};

console.log(itemData);

// 패션 영역 셋팅 ///
document.querySelector(".post-list").innerHTML = `
    <ul>
        ${itemData
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
