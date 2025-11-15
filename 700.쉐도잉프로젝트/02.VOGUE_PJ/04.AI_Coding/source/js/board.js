// 보그 게시판 메인 JS - board.js

// ★★★ 전역변수 구역 ★★★ //
let mode = "L"; // 현재 모드 (L: List, R: Read, W: Write, M: Modify)
let pageNum = 1; // 현재 페이지 번호
let keyword = { cta: "tit", kw: "" }; // 검색어 객체
let order = 1; // 정렬순서 (1: desc, -1: asc)
let sortCta = "date"; // 정렬기준
let selRecord = null; // 선택된 레코드
let pgPgNum = 1; // 페이징의 페이징 번호
let loginSts = null; // 로그인 상태

// ★★★ 상수 변수 ★★★ //
const unitSize = 7; // 페이지당 레코드 수
const pgPgSize = 3; // 페이징의 페이징 개수

// ★★★ 초기화 함수 ★★★ //
$(document).ready(function () {
  // 헤더/푸터 로드 후 실행되도록 지연
  setTimeout(() => {
    initBoard();
  }, 100);
});

function initBoard() {
  // 로컬스토리지 초기화
  initBoardData();

  // 로그인 정보 가져오기 (세션스토리지에서)
  const loginfo = sessionStorage.getItem("loginfo");
  if (loginfo) {
    loginSts = JSON.parse(loginfo);
    console.log("게시판 로그인 정보:", loginSts);
  }

  // 초기 화면 렌더링
  renderMode();

  // 이벤트 리스너 등록
  bindEvents();
}

// ★★★ 로컬스토리지 초기 데이터 설정 ★★★ //
function initBoardData() {
  if (localStorage.getItem("board-data") === null) {
    const orgBoardData = [
      {
        idx: 1,
        tit: "Welcome to VOGUE KOREA OPINION",
        cont: "This is the official opinion board for VOGUE KOREA. Share your thoughts, ideas, and perspectives on fashion, beauty, and lifestyle. We look forward to hearing from you!",
        att: "",
        date: "2024-11-30",
        userid: "admin",
        username: "VOGUE Admin",
        cnt: 25,
      },
      {
        idx: 2,
        tit: "2025 Spring Fashion Trends",
        cont: "As we approach spring 2025, let's discuss the emerging fashion trends. What styles are you most excited about? Share your predictions and preferences here.",
        att: "",
        date: "2024-12-10",
        userid: "fashionista",
        username: "Style Guru",
        cnt: 18,
      },
      {
        idx: 3,
        tit: "Sustainable Fashion Discussion",
        cont: "Sustainability is becoming increasingly important in the fashion industry. Let's talk about eco-friendly brands, sustainable materials, and how we can make more conscious fashion choices.",
        att: "",
        date: "2024-12-05",
        userid: "ecowarrior",
        username: "Green Fashion",
        cnt: 32,
      },
    ];
    localStorage.setItem("board-data", JSON.stringify(orgBoardData));
  }
}

// ★★★ 이벤트 바인딩 ★★★ //
function bindEvents() {
  // 검색 버튼 클릭
  $("#searchBtn").click(function () {
    searchFn();
  });

  // 검색어 입력란 엔터키
  $("#stxt").keyup(function (e) {
    if (e.key === "Enter") {
      $("#searchBtn").click();
    }
  });

  // 초기화 버튼
  $("#resetBtn").click(function () {
    $("#stxt").val("");
    $("#cta").val("tit");
    initVariables();
    renderMode();
  });

  // 정렬순서 변경
  $("#sel").change(function () {
    order = order * -1;
    $(this).val(order);
    pageNum = 1;
    pgPgNum = 1;
    renderMode();
  });

  // 정렬기준 변경
  $("#sort_cta").change(function () {
    sortCta = $(this).val();
    pageNum = 1;
    pgPgNum = 1;
    renderMode();
  });

  // 검색기록 버튼
  $("#historyBtn")
    .click(function () {
      $("#historyList").css("display", "flex");
    })
    .mouseleave(function () {
      $("#historyList").hide();
    });

  // 쓰기 버튼
  $("#writeBtn").click(function () {
    mode = "W";
    renderMode();
  });

  // === 읽기 모드 버튼들 === //
  $("#readListBtn").click(function () {
    mode = "L";
    renderMode();
  });

  $("#readModifyBtn").click(function () {
    mode = "M";
    renderMode();
  });

  // 코멘트 전송 버튼
  $("#commentSendBtn").click(function () {
    saveComment();
  });

  // === 쓰기 모드 버튼들 === //
  $("#writeSubmitBtn").click(function () {
    submitWrite();
  });

  $("#writeListBtn").click(function () {
    mode = "L";
    renderMode();
  });

  // === 수정 모드 버튼들 === //
  $("#modifySubmitBtn").click(function () {
    submitModify();
  });

  $("#modifyDeleteBtn").click(function () {
    deletePost();
  });

  $("#modifyListBtn").click(function () {
    mode = "L";
    renderMode();
  });
}

// ★★★ 변수 초기화 함수 ★★★ //
function initVariables() {
  mode = "L";
  pageNum = 1;
  keyword = { cta: "tit", kw: "" };
  order = 1;
  sortCta = "date";
  pgPgNum = 1;
}

// ★★★ 검색 함수 ★★★ //
function searchFn() {
  keyword = {
    cta: $("#cta").val(),
    kw: $("#stxt").val(),
  };

  // 검색기록 저장
  saveSearchHistory(keyword.kw);

  // 페이지 초기화
  pageNum = 1;
  pgPgNum = 1;

  renderMode();
}

// ★★★ 검색기록 저장/표시 ★★★ //
function saveSearchHistory(txt) {
  if (!txt || txt.trim() === "") return;

  let memory = localStorage.getItem("board-memory-data") || "";
  let memArr = memory ? memory.split("*") : [];

  // 중복 제거
  memArr = memArr.filter((v) => v !== txt);

  // 새 검색어 추가
  memArr.push(txt);

  // 최대 5개만 유지
  if (memArr.length > 5) {
    memArr.shift();
  }

  memory = memArr.join("*");
  localStorage.setItem("board-memory-data", memory);

  // 검색기록 표시
  displaySearchHistory();
}

function displaySearchHistory() {
  let memory = localStorage.getItem("board-memory-data") || "";
  let $historyList = $("#historyList");
  $historyList.empty();

  if (memory && memory !== "") {
    let memArr = memory.split("*");
    memArr.reverse().forEach(function (v) {
      $historyList.append(`<li><b onclick="reSearch('${v}')">${v}</b></li>`);
    });
  } else {
    $historyList.append("<li><b>No history</b></li>");
  }
}

function reSearch(txt) {
  $("#stxt").val(txt);
  searchFn();
  $("#historyList").hide();
}

// ★★★ 데이터 필터링 및 정렬 ★★★ //
function getFilteredData() {
  let baseData = JSON.parse(localStorage.getItem("board-data")) || [];
  let finalData;

  // 검색어가 있는 경우
  if (keyword.kw !== "") {
    finalData = baseData.sort(sortData).filter(function (v) {
      return (
        v[keyword.cta].toLowerCase().indexOf(keyword.kw.toLowerCase()) !== -1
      );
    });
  } else {
    finalData = baseData.sort(sortData);
  }

  return finalData;
}

// 정렬 함수
function sortData(a, b) {
  if (a[sortCta] > b[sortCta]) return -1 * order;
  if (a[sortCta] < b[sortCta]) return 1 * order;
  if (a[sortCta] !== b[sortCta]) return 0;
  // idx로 정렬
  if (a.idx > b.idx) return -1 * order;
  if (a.idx < b.idx) return 1 * order;
  return 0;
}

// ★★★ 모드별 렌더링 ★★★ //
function renderMode() {
  // 모든 모드 숨기기
  $(".mode-container").hide();

  // 상단 스크롤
  window.scrollTo(0, 0);

  switch (mode) {
    case "L":
      renderListMode();
      break;
    case "R":
      renderReadMode();
      break;
    case "W":
      renderWriteMode();
      break;
    case "M":
      renderModifyMode();
      break;
  }
}

// ★★★ 리스트 모드 렌더링 ★★★ //
function renderListMode() {
  $("#list-mode").show();

  // 검색기록 표시
  displaySearchHistory();

  // 데이터 가져오기
  let finalData = getFilteredData();
  let totalCount = finalData.length;

  // 페이징 계산
  let initNum = unitSize * (pageNum - 1);
  let limitNum = unitSize * pageNum;
  let selData = finalData.slice(initNum, limitNum);

  // 테이블 바디 렌더링
  let $tbody = $("#board-body");
  $tbody.empty();

  if (totalCount > 0) {
    selData.forEach(function (v, i) {
      let num = i + 1 + unitSize * (pageNum - 1);
      $tbody.append(`
        <tr>
          <td>${num}</td>
          <td><a href="#" onclick="readPost(${v.idx}); return false;">${v.tit}</a></td>
          <td>${v.username}</td>
          <td>${v.date}</td>
          <td>${v.cnt}</td>
        </tr>
      `);
    });
  } else {
    $tbody.append(`
      <tr>
        <td colspan="5">No search results</td>
      </tr>
    `);
  }

  // 페이징 렌더링
  renderPaging(totalCount);

  // 쓰기 버튼 표시 (로그인 시)
  if (loginSts) {
    $("#writeBtn").show();
  } else {
    $("#writeBtn").hide();
  }
}

// ★★★ 페이징 렌더링 ★★★ //
function renderPaging(totalCount) {
  if (totalCount === 0) {
    $("#paging").empty();
    return;
  }

  let pagingCount = Math.floor(totalCount / unitSize);
  if (totalCount % unitSize > 0) pagingCount++;

  let pgPgLimit = Math.floor(pagingCount / pgPgSize);
  if (pagingCount % pgPgSize > 0) pgPgLimit++;

  let initNum = pgPgSize * (pgPgNum - 1);
  let limitNum = pgPgSize * pgPgNum;

  let html = "";

  // 이전 페이징 버튼
  if (pgPgNum !== 1) {
    html += `<a href="#" onclick="goFirstPaging(); return false;" title="First Paging Section">« </a>`;
    html += `<a href="#" onclick="goPrevPaging(${initNum}); return false;" title="Previous Paging Section">◀ </a>`;
  }

  // 페이지 번호
  for (let i = initNum; i < limitNum; i++) {
    if (i + 1 > pagingCount) break;

    if (i + 1 === pageNum) {
      html += `<b>${i + 1}</b>`;
    } else {
      html += `<a href="#" onclick="goPage(${i + 1}); return false;">${
        i + 1
      }</a>`;
    }

    if (i < limitNum - 1 && i + 1 !== pagingCount) {
      html += " | ";
    }
  }

  // 다음 페이징 버튼
  if (pgPgNum !== pgPgLimit) {
    html += `<a href="#" onclick="goNextPaging(${limitNum}); return false;" title="Next Paging Section"> ▶</a>`;
    html += `<a href="#" onclick="goLastPaging(${pgPgLimit}); return false;" title="Last Paging Section"> »</a>`;
  }

  $("#paging").html(html);
}

// 페이징 함수들을 window 객체에 등록 (onclick에서 접근 가능하도록)
window.goPage = function (num) {
  pageNum = num;
  renderMode();
};

window.goFirstPaging = function () {
  pgPgNum = 1;
  pageNum = 1;
  renderMode();
};

window.goPrevPaging = function (initNum) {
  pgPgNum--;
  pageNum = initNum - (pgPgSize - 1);
  renderMode();
};

window.goNextPaging = function (limitNum) {
  pgPgNum++;
  pageNum = limitNum + 1;
  renderMode();
};

window.goLastPaging = function (pgPgLimit) {
  pgPgNum = pgPgLimit;
  pageNum = (pgPgLimit - 1) * pgPgSize + 1;
  renderMode();
};

// ★★★ 글 읽기 ★★★ //
window.readPost = function (idx) {
  let baseData = JSON.parse(localStorage.getItem("board-data"));
  selRecord = baseData.find((v) => v.idx === idx);

  // 조회수 증가
  increaseViewCount(idx);

  mode = "R";
  renderMode();
};

// 조회수 증가 함수
function increaseViewCount(idx) {
  // 세션스토리지 확인
  if (!sessionStorage.getItem("bd-rec")) {
    sessionStorage.setItem("bd-rec", "[]");
  }

  let rec = JSON.parse(sessionStorage.getItem("bd-rec"));
  let isRec = rec.includes(idx);

  // 로그인 사용자의 글이면 증가 안함
  if (loginSts && selRecord.userid === loginSts.userid) {
    isRec = true;
  }

  if (!isRec) {
    rec.push(idx);
    sessionStorage.setItem("bd-rec", JSON.stringify(rec));

    // 조회수 증가
    let bdData = JSON.parse(localStorage.getItem("board-data"));
    bdData.some((v) => {
      if (v.idx === idx) {
        v.cnt = Number(v.cnt) + 1;
        return true;
      }
    });
    localStorage.setItem("board-data", JSON.stringify(bdData));
  }
}

// ★★★ 읽기 모드 렌더링 ★★★ //
function renderReadMode() {
  $("#read-mode").show();

  $("#read-name").val(selRecord.username);
  $("#read-title").val(selRecord.tit);
  $("#read-content").val(selRecord.cont);

  // 수정 버튼 표시 (로그인 + 작성자)
  if (loginSts && loginSts.userid === selRecord.userid) {
    $("#readModifyBtn").show();
  } else {
    $("#readModifyBtn").hide();
  }

  // 코멘트 입력란 표시 (로그인 시)
  if (loginSts) {
    $("#comment-input-box").show();
  } else {
    $("#comment-input-box").hide();
  }

  // 코멘트 표시
  displayComments();
}

// ★★★ 코멘트 관련 함수 ★★★ //
function saveComment() {
  let commentText = $("#comment-box").val().trim();

  if (commentText === "") {
    alert("Write comment!");
    return;
  }

  let comDt = localStorage.getItem("comment-data")
    ? JSON.parse(localStorage.getItem("comment-data"))
    : [];

  let newIdx = comDt.length > 0 ? Math.max(...comDt.map((v) => v.idx)) + 1 : 1;

  comDt.push({
    idx: newIdx,
    cont: commentText,
    userid: loginSts.userid,
    username: loginSts.name,
    bid: selRecord.idx,
    date: new Date().toJSON().substring(0, 10),
  });

  localStorage.setItem("comment-data", JSON.stringify(comDt));
  $("#comment-box").val("");

  displayComments();
}

let editingCommentIdx = null;

function displayComments() {
  let comDt = localStorage.getItem("comment-data")
    ? JSON.parse(localStorage.getItem("comment-data"))
    : [];

  comDt = comDt
    .filter((v) => v.bid === selRecord.idx)
    .sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      if (a.date !== b.date) return 0;
      if (a.idx > b.idx) return -1;
      if (a.idx < b.idx) return 1;
      return 0;
    });

  let $commentList = $("#comment-list");
  $commentList.empty();

  if (comDt.length > 0) {
    let html = '<table class="comment-table"><tbody>';

    comDt.forEach((v, i) => {
      // 수정 모드 체크
      let isEditing = editingCommentIdx === v.idx;

      html += `<tr>
        <td style="font-size: 16px; font-weight: normal;">
          ${v.username}<br/>`;

      if (loginSts && loginSts.userid === v.userid) {
        html += `<button onclick="deleteComment(${v.idx})">Delete</button>`;

        // 수정모드일 때 Send 버튼, 아니면 Modify 버튼
        if (isEditing) {
          html += `<button onclick="saveModifiedComment(${v.idx})">Send</button>`;
        } else {
          html += `<button onclick="modifyComment(${v.idx})">Modify</button>`;
        }
      }

      html += `</td>
        <td>
          <textarea class="comment-view-box" id="comment-${v.idx}" 
            ${isEditing ? "" : "readonly"}
            ${
              isEditing
                ? 'class="comment-view-box editing"'
                : 'class="comment-view-box"'
            }
          >${v.cont}</textarea>
        </td>
        <td style="font-size: 16px; font-weight: normal; width: 20%;">
          ${v.date}
        </td>
      </tr>`;
    });

    html += "</tbody></table>";
    $commentList.html(html);

    // 높이 자동 조절
    adjustCommentHeight();
  }
}

function adjustCommentHeight() {
  $(".comment-view-box").each(function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
}

window.deleteComment = function (idx) {
  if (!confirm("Are you sure you want to delete?")) return;

  let comDt = JSON.parse(localStorage.getItem("comment-data"));
  comDt = comDt.filter((v) => v.idx !== idx);
  localStorage.setItem("comment-data", JSON.stringify(comDt));

  displayComments();
};

window.modifyComment = function (idx) {
  editingCommentIdx = idx;
  // 화면 다시 렌더링하여 버튼을 Send로 변경하고 textarea를 편집 가능하게 함
  displayComments();
  // 포커스 설정
  setTimeout(() => {
    $(`#comment-${idx}`).focus();
  }, 100);
};

window.saveModifiedComment = function (idx) {
  let newContent = $(`#comment-${idx}`).val();
  let comDt = JSON.parse(localStorage.getItem("comment-data"));

  comDt = comDt.map((v) => (v.idx === idx ? { ...v, cont: newContent } : v));

  localStorage.setItem("comment-data", JSON.stringify(comDt));
  editingCommentIdx = null;

  displayComments();
};

// ★★★ 쓰기 모드 렌더링 ★★★ //
function renderWriteMode() {
  // 로그인 정보 다시 확인
  const loginfo = sessionStorage.getItem("loginfo");
  if (loginfo) {
    loginSts = JSON.parse(loginfo);
  }
  
  // 로그인 체크
  if (!loginSts) {
    alert("Please login first!");
    mode = "L";
    renderMode();
    return;
  }
  
  console.log("Write Mode - Login Info:", loginSts);
  
  $("#write-mode").show();
  $("#write-name").val(loginSts.name);
  $("#write-title").val("");
  $("#write-content").val("");
}

function submitWrite() {
  // 로그인 체크
  if (!loginSts) {
    alert("Please login first!");
    return;
  }

  let title = $("#write-title").val().trim();
  let content = $("#write-content").val().trim();

  if (title === "" || content === "") {
    alert("Insert title and content!");
    return;
  }

  let localData = JSON.parse(localStorage.getItem("board-data"));
  let maxIdx = Math.max(...localData.map((v) => v.idx));
  let today = new Date().toJSON().substr(0, 10);

  let data = {
    idx: Number(maxIdx) + 1,
    tit: title,
    cont: content,
    att: "",
    date: today,
    userid: loginSts.userid,
    username: loginSts.name,
    cnt: 0,
  };

  localData.push(data);
  localStorage.setItem("board-data", JSON.stringify(localData));

  initVariables();
  mode = "L";
  renderMode();
}

// ★★★ 수정 모드 렌더링 ★★★ //
function renderModifyMode() {
  $("#modify-mode").show();
  $("#modify-name").val(selRecord.username);
  $("#modify-title").val(selRecord.tit);
  $("#modify-content").val(selRecord.cont);
}

function submitModify() {
  let title = $("#modify-title").val().trim();
  let content = $("#modify-content").val().trim();

  if (title === "" || content === "") {
    alert("Insert title and content!");
    return;
  }

  let localData = JSON.parse(localStorage.getItem("board-data"));
  let currIdx = selRecord.idx;

  localData.find((v) => {
    if (v.idx === currIdx) {
      v.tit = title;
      v.cont = content;
      v.mdate = new Date().toJSON().substr(0, 10);
      return true;
    }
  });

  localStorage.setItem("board-data", JSON.stringify(localData));

  mode = "L";
  renderMode();
}

function deletePost() {
  if (!confirm("Are you sure you want to delete?")) return;

  let localData = JSON.parse(localStorage.getItem("board-data"));
  let currIdx = selRecord.idx;

  localData.some((v, i) => {
    if (v.idx === currIdx) {
      localData.splice(i, 1);
      return true;
    }
  });

  localStorage.setItem("board-data", JSON.stringify(localData));

  pageNum = 1;
  pgPgNum = 1;
  mode = "L";
  renderMode();
}
