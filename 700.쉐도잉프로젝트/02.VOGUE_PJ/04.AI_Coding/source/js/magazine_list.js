// 보그 JS 매거진 리스트 JS - magazine_list.js

// 매거진 데이터 불러오기
import productsData from '../data/magazine_data.json' with { type: 'json' };

// 숫자를 원화 형식으로 변환
function formatPrice(price) {
  // toLocaleString(투로케일스트링)을 사용한 방법
  // -> 국가별 형식에 맞게 숫자를 변환
  // "ko-KR" : 한국형식
  // "en-US" : 미국형식
  // "ja-JP" : 일본형식
  return price.toLocaleString("ko-KR") + "원";
  // 정규식을 사용한 방법
  // return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
}

// 상품 카드 HTML 생성 함수
function createProductCard(product) {
  const badgeHTML = product.badge
    ? `<span class="badge">${product.badge}</span>`
    : "";

  const priceHTML = product.memberOnly
    ? `<p class="member-only">이 제품은 회원가입후 구매가 가능합니다.</p>`
    : `<span class="sale-price">${formatPrice(product.salePrice)}</span>`;

  return `
      <div class="product-card">
          <div class="product-image">
              <span class="discount-badge">${product.discount}%</span>
              ${badgeHTML}
              <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-info">
              <h3 class="product-name">${product.name}</h3>
              <p class="product-desc">${product.description}</p>
              <div class="price-box">
                  <span class="original-price">${formatPrice(
                    product.originalPrice
                  )}</span>
                  ${priceHTML}
              </div>
          </div>
      </div>
  `;
}

// 상품 렌더링 함수
function renderProducts() {
  const productGrid = document.getElementById("productGrid");
  const productsHTML = productsData.products
    .map((product) => createProductCard(product))
    .join("");
  productGrid.innerHTML = productsHTML;
}

// 페이지 로드 시 상품 렌더링
document.addEventListener("DOMContentLoaded", ()=>{
  renderProducts();
  
  // 2. 카드요소를 수집하여 각 요소에 click 이벤트 설정하기 ////
  const cardList = document.querySelectorAll(".product-card");
  console.log(cardList);

  cardList.forEach((card, idx) => {
    card.addEventListener("click", () => {

      // 클릭된 카드의 상품 데이터 가져오기
      const product = productsData.products[idx];

      // 객체를 전송하기 위해 URLSearchParams 객체 생성
      const params = new URLSearchParams(product);

      // Get방식으로 데이터 전달하기 코드 ////
      location.href = `./magazine_detail.html?${params}`;
      // params로 객체를 전달한다!


      // post방식으로 데이터 전송하기
      // -> 공식 서버에 배포했을때 작동함!
      // const formData = new FormData();
      // formData.append("product", product);
      // fetch("./magazine_detail.html", {
      //   method: "POST",
      //   body: formData
      // }); /// fetch ////

      // Post방식으로 데이터를 전달하는 방법 ///
      // 1) FormData 객체 생성
      // 2) .append("키",값) 메서드로 데이터 추가
      // 3) fetch() 메서드로 전송
      //    - method: "POST"
      //    - body: FormData 객체




      // 클릭된 카드의 상품 데이터 가져오기
      // const product = productsData.products[idx];
      // console.log(product);
    }); //// click ////
  }); ///////////////// forEach ////
}); /////////////// 로딩구역 //////////////////
// DOMContentLoaded : HTML문서가 모두 로드된 후 실행되는 이벤트
// load 이벤트와 비교할것!
// load 이벤트는 모든 리소스(이미지, 스타일시트 등)가 로드된 후 실행됨


