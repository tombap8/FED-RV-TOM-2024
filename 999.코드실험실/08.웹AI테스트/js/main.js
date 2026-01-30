// KMAC 메인 JavaScript

// 전체 메뉴 토글
const menuToggleBtn = document.querySelector(".menu-toggle");
const fullMenu = document.querySelector(".full-menu");
const menuCloseBtn = document.querySelector(".menu-close");
const body = document.body;

// 전체 메뉴 열기
menuToggleBtn.addEventListener("click", () => {
    fullMenu.classList.add("active");
    body.style.overflow = "hidden";
});

// 전체 메뉴 닫기
menuCloseBtn.addEventListener("click", () => {
    fullMenu.classList.remove("active");
    body.style.overflow = "";
});

// ESC 키로 메뉴 닫기
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && fullMenu.classList.contains("active")) {
        fullMenu.classList.remove("active");
        body.style.overflow = "";
    }
});

// 배경 클릭시 메뉴 닫기
fullMenu.addEventListener("click", (e) => {
    if (e.target === fullMenu) {
        fullMenu.classList.remove("active");
        body.style.overflow = "";
    }
});

// 스크롤 시 헤더 스타일 변경
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
});

// 뉴스 필터 버튼
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // # 이후에 값이 있는 경우만 처리
        if (href !== "#" && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });

                // 메뉴가 열려있으면 닫기
                if (fullMenu.classList.contains("active")) {
                    fullMenu.classList.remove("active");
                    body.style.overflow = "";
                }
            }
        }
    });
});
