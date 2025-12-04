// ========================================
// 데이터 로드 및 렌더링
// ========================================

/**
 * JSON 파일에서 데이터를 비동기로 불러와 각 섹션을 렌더링
 */
async function loadData() {
    try {
        const response = await fetch("./data/content.json");
        const data = await response.json();

        // 네비게이션 렌더링
        renderNavigation(data.navigation);

        // 히어로 통계 렌더링
        renderHeroStats(data.hero.stats);

        // 프로필 섹션 렌더링
        renderProfile(data.profile);

        // 타임라인 렌더링
        renderTimeline(data.timeline);

        // 프로젝트 카드 렌더링
        renderProjects(data.projects);
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

/**
 * 네비게이션 메뉴 렌더링 (데스크톱 + 모바일)
 * @param {Array} navItems - 네비게이션 아이템 배열
 */
function renderNavigation(navItems) {
    const navLinks = document.querySelector(".nav-links");
    const mobileNavLinks = document.querySelector(".mobile-nav-links");

    const navHTML = navItems.map((item) => `<li><a href="${item.href}">${item.text}</a></li>`).join("");

    navLinks.innerHTML = navHTML;
    mobileNavLinks.innerHTML = navHTML;
}

// ========================================
// 모바일 메뉴 기능
// ========================================

/**
 * 모바일 햄버거 메뉴 초기화 및 이벤트 바인딩
 */
function initMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
    const mobileMenuClose = document.querySelector(".mobile-menu-close");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

    // 햄버거 버튼 클릭 시 모바일 메뉴 열기
    hamburger.addEventListener("click", () => {
        hamburger.classList.add("active");
        mobileMenu.classList.add("active");
        mobileMenuOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // 스크롤 방지
    });

    // 모바일 메뉴 닫기 함수
    const closeMobileMenu = () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        mobileMenuOverlay.classList.remove("active");
        document.body.style.overflow = ""; // 스크롤 복원
    };

    // X 버튼 클릭 시 메뉴 닫기
    mobileMenuClose.addEventListener("click", closeMobileMenu);

    // 오버레이 클릭 시 메뉴 닫기
    mobileMenuOverlay.addEventListener("click", closeMobileMenu);

    // 메뉴 링크 클릭 시 메뉴 닫기 + 부드러운 스크롤
    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            closeMobileMenu();

            // 부드러운 스크롤 이동
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 300); // 메뉴 닫힌 후 스크롤
            }
        });
    });

    // 창 크기 변경 시 데스크톱 크기면 메뉴 자동 닫기
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

// ========================================
// 섹션별 렌더링 함수
// ========================================

/**
 * 히어로 섹션 통계 카드 렌더링
 * @param {Array} stats - 통계 데이터 배열
 */
function renderHeroStats(stats) {
    const heroStats = document.querySelector(".hero-stats");
    heroStats.innerHTML = stats
        .map(
            (stat) =>
                `<div class="stat-item fade-in">
            <span class="stat-number">${stat.number}</span>
            <span class="stat-label">${stat.label}</span>
        </div>`
        )
        .join("");
}

/**
 * 프로필 섹션 렌더링 (About Tom + Tech Stack)
 * @param {Object} profile - 프로필 데이터 객체
 */
function renderProfile(profile) {
    // About Tom 리스트 렌더링
    const aboutList = document.querySelector(".profile-card:first-child ul");
    aboutList.innerHTML = profile.aboutTom.map((item) => `<li>${item}</li>`).join("");

    // 기술 스택 태그 렌더링
    const techTags = document.querySelector(".tech-tags");
    techTags.innerHTML = profile.techStack.map((tech) => `<span class="tech-tag">${tech}</span>`).join("");
}

/**
 * 타임라인(경력) 섹션 렌더링
 * @param {Array} timeline - 타임라인 데이터 배열
 */
function renderTimeline(timeline) {
    const timelineContainer = document.querySelector(".timeline");
    timelineContainer.innerHTML = timeline
        .map(
            (item) =>
                `<div class="timeline-item fade-in">
            <div class="timeline-period">${item.period}</div>
            <h3 class="timeline-title">${item.title}</h3>
            <div class="timeline-content">
                ${item.description ? `<p>${item.description}</p>` : ""}
                <ul>
                    ${item.details.map((detail) => `<li>${detail}</li>`).join("")}
                </ul>
            </div>
        </div>`
        )
        .join("");
}

/**
 * 프로젝트 카드 렌더링
 * @param {Array} projects - 프로젝트 데이터 배열
 */
function renderProjects(projects) {
    const projectsGrid = document.querySelector(".projects-grid");
    projectsGrid.innerHTML = projects
        .map(
            (project) =>
                `<div class="project-card fade-in clickable" onclick="window.open('${project.url}')">
            <div class="project-image">${project.icon}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>`
        )
        .join("");
}

// ========================================
// 스크롤 및 애니메이션 효과
// ========================================

/**
 * 앵커 링크 클릭 시 부드러운 스크롤 적용
 */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

/**
 * IntersectionObserver 옵션 설정
 * 요소가 화면에 10% 보일 때 애니메이션 트리거
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

/**
 * 스크롤 시 fade-in 애니메이션 적용을 위한 Observer
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

/**
 * fade-in 클래스를 가진 모든 요소에 Observer 적용
 */
function observeElements() {
    document.querySelectorAll(".fade-in").forEach((el) => {
        observer.observe(el);
    });
}

/**
 * 히어로 섹션 패럴랙스 효과
 * 스크롤 시 히어로 섹션이 천천히 이동
 */
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// 페이지 초기화
// ========================================

/**
 * DOM 로드 완료 시 모든 기능 초기화
 */
window.addEventListener("DOMContentLoaded", async () => {
    // 데이터 로드 및 렌더링
    await loadData();
    
    // 스크롤 애니메이션 Observer 시작
    observeElements();
    
    // 모바일 메뉴 기능 초기화
    initMobileMenu();

    // 동적으로 생성된 링크에 부드러운 스크롤 재적용
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});
