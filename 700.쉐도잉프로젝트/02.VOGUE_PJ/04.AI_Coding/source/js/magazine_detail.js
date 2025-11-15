// 보그 JS 매거진 상세페이지 JS - magazine_detail.js


// [ get방식으로 넘어온 상품 배열 순번 받기 ] ///
const params = new URLSearchParams(location.search);
console.log("파라미터:",params);
// 파라미터값 받는 방법
// -> .get("파라미터명") 메서드 사용

// (1) 타이틀 
const pname = params.get("name");
// (2) 이미지
const pimg = params.get("image");
// (3) 짧은 설명
const pdesc = params.get("description");
// (4) 정가
const poriprice = params.get("originalPrice");
// (5) 판매가
const psaleprice = params.get("salePrice");
// (6) 할인율
const pdiscount = params.get("discount");
// (7) 회원전용여부
const pmemberonly = params.get("memberOnly");
// (8) 배지
const pbadge = params.get("badge");
console.log("파라미터 pname:",pname);
// (9) 상품코드
const pcode = params.get("pcode");
// (10) 재고수량
const pcount = params.get("count");

/**
 * 숫자를 세자리마다 콤마로 구분해주는 함수
 * @param {number|string} num
 * @returns {string}
 */
function addComma(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 파라미터로 받은 실제 상품 가격과 재고수량을 사용
const basePrice = parseInt(psaleprice) || 72000;
const maxStock = parseInt(pcount) || 81;

// 태그 만들기 대상 : 
document.querySelector(".product-section").innerHTML = `
  <!-- 이미지 영역 -->
  <div class="image-area">
    <div class="main-image">
      <img
        src="${pimg}"
        alt="${pname}"
      />
    </div>
    <div class="thumb-list">
      <div class="thumb-item active">
        <img
          src="${pimg}"
          alt="${pname} 썸네일"
        />
      </div>
    </div>
  </div>
  <!-- 정보 영역 -->
  <div class="info-area">
    <div class="title-section">
      <h1 class="product-title">${pname}</h1>
      <button class="share-btn">공유</button>
    </div>
    <div class="info-list">
      <div class="info-row">
        <div class="info-label">짧은설명</div>
        <div class="info-value">
          ${pdesc}
        </div>
      </div>
      <div class="info-row">
        <div class="info-label">정가</div>
        <div class="info-value">
          <del>${addComma(poriprice)}원</del>
        </div>
      </div>
      <div class="info-row price-row">
        <div class="info-label">판매가</div>
        <div class="info-value">
        ${pmemberonly?'이 제품은 회원가입후 구매가 가능합니다.':addComma(psaleprice) + '원'}
        </div>
      </div>
      <div class="info-row">
        <div class="info-label">구매제한</div>
        <div class="info-value">최소 1개</div>
      </div>
      <div class="info-row">
        <div class="info-label">배송비</div>
        <div class="info-value">
          <span class="delivery-badge">무료</span>
          <span>택배</span>
        </div>
      </div>
      <div class="info-row">
        <div class="info-label">상품코드</div>
        <div class="info-value">${pcode}</div>
      </div>
      <div class="info-row">
        <div class="info-label">신간발행일</div>
        <div class="info-value">매월18~20일</div>
      </div>
      <div class="info-row">
        <div class="info-label">상품재고</div>
        <div class="info-value">${pcount}개</div>
      </div>
    </div>
    <div class="select-area">
      <div class="info-label" style="margin-bottom: 8px">시작 월</div>
      <select class="select-box">
        <option>
        ${new Date().getFullYear()}-${new Date().getMonth() + 1}월호 부터</option>
      </select>
    </div>
    <div class="selected-item">
      <div class="item-header">
        <div class="item-name">${pname}</div>
      </div>
      <div class="item-controls">
        <div class="quantity-control">
          <button type="button" id="decreaseBtn">-</button>
          <input type="number" id="quantity" value="1" min="1" max="${maxStock}" />
          <button type="button" id="increaseBtn">+</button>
        </div>
        <div class="item-price"><span id="itemPrice">${addComma(psaleprice)}</span>원</div>
      </div>
    </div>
    <div class="price-summary">
      <div class="summary-row">
        <span>총 상품금액</span>
        <span id="totalPrice">${addComma(psaleprice)}원</span>
      </div>
      <div class="summary-row total">
        <span>총 합계금액</span>
        <span class="amount" id="finalPrice">${addComma(psaleprice)}원</span>
      </div>
    </div>
    <div class="button-group">
      <button class="btn btn-cart">장바구니</button>
      <button class="btn btn-wish">찜하기</button>
    </div>
    <div class="button-group">
      <button class="btn btn-buy">바로 구매</button>
    </div>
  </div>
        
`;

// HTML 생성 후 이벤트 리스너 추가
document.getElementById("increaseBtn").addEventListener("click", increaseQty);
document.getElementById("decreaseBtn").addEventListener("click", decreaseQty);

// 수량 입력 필드 이벤트 리스너 추가
const quantityInput = document.getElementById("quantity");
quantityInput.addEventListener("input", validateAndUpdateQuantity);
quantityInput.addEventListener("blur", validateAndUpdateQuantity);

// 장바구니 버튼 이벤트 리스너 추가
document.querySelector(".btn-cart").addEventListener("click", addToCart);

// 함수들을 전역으로 등록 (onclick 속성 사용을 위해)
window.increaseQty = increaseQty;
window.decreaseQty = decreaseQty;
window.updatePrice = updatePrice;
window.validateAndUpdateQuantity = validateAndUpdateQuantity;
window.addToCart = addToCart;

/**
 * 수량 직접 입력시 유효성 검사 및 업데이트 함수
 */
function validateAndUpdateQuantity() {
  const input = document.getElementById("quantity");
  let value = parseInt(input.value);
  
  // 숫자가 아니거나 빈값인 경우
  if (isNaN(value) || input.value === "") {
    input.value = 1;
    value = 1;
  }
  // 최소값 체크
  else if (value < 1) {
    input.value = 1;
    value = 1;
    alert("최소 구매 수량은 1개입니다.");
  }
  // 최대값 체크
  else if (value > maxStock) {
    input.value = maxStock;
    value = maxStock;
    alert(`최대 구매 가능 수량은 ${maxStock}개입니다.`);
  }
  
  // 가격 업데이트
  updatePrice();
}

// [  파라미터를 받는 방법 ]
// 1) location.search : ?pid=0 형태의 문자열 받기
// 2) URLSearchParams() 생성자함수에 전달하여 객체 생성
// 3) .get("파라미터명") 메서드로 값 받기 
// console.log('파라미터값:',pid);


// [ Post 방식으로 데이터 받기 ] 
// -> 실제 서버에 배포했을때 작동함!
// document.addEventListener("DOMContentLoaded", ()=>{
//   // 1. FormData 객체 생성
//   const formData = new FormData(document.forms[0]);
//   // 2. .get("키") 메서드로 데이터 받기
//   const productData = formData.get("product");
//   console.log("상품데이터:", productData);
// }); /////////////// 로딩구역 //////////////////


// [ Post 방식으로 데이터 받는 방법 ]
// 1) DOMContentLoaded 이벤트에서 실행
// 2) FormData 객체 생성
//    - new FormData(폼요소)
//    - document.forms[0] : 첫번째 폼요소 선택
// 3) .get("키") 메서드로 값 받기

/**
 * 수량 변경시 가격을 업데이트하는 함수
 */
function updatePrice() {
  const qty = parseInt(document.getElementById("quantity").value);
  const total = basePrice * qty;
  
  // 개별 상품 가격 업데이트
  document.getElementById("itemPrice").textContent = addComma(basePrice);
  
  // 총 상품금액 업데이트
  document.getElementById("totalPrice").textContent = addComma(total) + "원";
  
  // 총 합계금액 업데이트
  document.getElementById("finalPrice").textContent = addComma(total) + "원";
}

/**
 * 수량 증가 함수
 */
function increaseQty() {
  const input = document.getElementById("quantity");
  const current = parseInt(input.value);
  
  // 최대 재고수량까지만 증가 가능
  if (current < maxStock) {
    input.value = current + 1;
    updatePrice();
  } else {
    alert(`최대 구매 가능 수량은 ${maxStock}개입니다.`);
  }
}

/**
 * 수량 감소 함수
 */
function decreaseQty() {
  const input = document.getElementById("quantity");
  const current = parseInt(input.value);
  
  // 최소 1개까지만 감소 가능
  if (current > 1) {
    input.value = current - 1;
    updatePrice();
  } else {
    alert("최소 구매 수량은 1개입니다.");
  }
}

/**
 * 장바구니에 상품을 추가하는 함수
 */
function addToCart() {
  // 현재 수량 가져오기
  const quantity = parseInt(document.getElementById("quantity").value);
  const totalPrice = basePrice * quantity;
  
  // 로그인 정보 확인
  let userInfo = "guest";
  const logInfo = sessionStorage.getItem("loginfo");
  
  if (logInfo) {
    try {
      const loginData = JSON.parse(logInfo);
      userInfo = loginData.userid || "guest";
    } catch (error) {
      console.error("로그인 정보 파싱 오류:", error);
      userInfo = "guest";
    }
  }
  
  // 장바구니에 추가할 상품 정보 객체 생성
  const cartItem = {
    id: params.get("id"),
    pcode: pcode,
    name: pname,
    description: pdesc,
    image: pimg,
    originalPrice: parseInt(poriprice),
    salePrice: basePrice,
    discount: parseInt(pdiscount),
    badge: pbadge,
    memberOnly: pmemberonly === "true",
    count: parseInt(pcount),
    quantity: quantity,
    totalPrice: totalPrice,
    userId: userInfo,
    addedDate: new Date().toISOString()
  };
  
  // 기존 장바구니 정보 가져오기
  let cartInfo = localStorage.getItem("cart-info");
  let cartArray = [];
  
  if (cartInfo) {
    cartArray = JSON.parse(cartInfo);
  }
  
  // 동일한 상품이고 같은 사용자인지 확인 (상품코드 + 사용자ID)
  const existingItemIndex = cartArray.findIndex(item => 
    item.pcode === pcode && item.userId === userInfo
  );
  
  if (existingItemIndex !== -1) {
    // 기존 상품이 있고 같은 사용자면 수량 업데이트
    cartArray[existingItemIndex].quantity += quantity;
    cartArray[existingItemIndex].totalPrice = cartArray[existingItemIndex].salePrice * cartArray[existingItemIndex].quantity;
    cartArray[existingItemIndex].addedDate = new Date().toISOString();
    alert(`${pname}의 수량이 ${cartArray[existingItemIndex].quantity}개로 업데이트되었습니다.`);
  } else {
    // 새로운 상품이거나 다른 사용자면 새로 추가
    cartArray.push(cartItem);
    alert(`${pname}이(가) 장바구니에 추가되었습니다.`);
  }
  
  // 로컬스토리지에 저장
  localStorage.setItem("cart-info", JSON.stringify(cartArray));
  
  console.log("장바구니 정보:", cartArray);
}
