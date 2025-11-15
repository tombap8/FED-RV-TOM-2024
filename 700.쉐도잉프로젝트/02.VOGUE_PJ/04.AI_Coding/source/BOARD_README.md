# VOGUE KOREA 게시판 통합 가이드

## 개요
React 게시판을 순수 HTML, CSS, JavaScript로 변환하여 VOGUE KOREA 프로젝트에 통합했습니다.

## 주요 특징

### 1. VOGUE 로그인 시스템 통합
- **세션스토리지 활용**: `loginfo` 키로 로그인 정보 저장
- **회원정보 구조**: `userid`, `username`, `gender` 등 VOGUE 회원 데이터 사용
- **자동 권한 관리**:
  - 로그인한 사용자만 글쓰기 가능
  - 자신의 글만 수정/삭제 가능
  - 다른 사람의 글만 조회수 증가

### 2. 데이터 저장소
#### LocalStorage
- `board-data`: 게시판 글 데이터
- `comment-data`: 코멘트 데이터
- `board-memory-data`: 검색 기록 (최대 5개)
- `mem-data`: 회원 정보 (VOGUE 시스템)

#### SessionStorage
- `loginfo`: 로그인 사용자 정보
- `bd-rec`: 읽은 게시글 번호 (조회수 중복 방지)

### 3. 게시판 데이터 구조
```javascript
{
  idx: 고유번호,
  tit: 제목,
  cont: 내용,
  att: 첨부파일,
  date: 작성일,
  userid: 작성자ID (VOGUE 회원 userid),
  username: 작성자명 (VOGUE 회원 username),
  cnt: 조회수
}
```

### 4. 코멘트 데이터 구조
```javascript
{
  idx: 고유번호,
  cont: 코멘트 내용,
  userid: 작성자ID,
  username: 작성자명,
  bid: 게시글ID,
  date: 작성일
}
```

## 파일 구조

```
source/
├── board.html              # 게시판 메인 페이지
├── css/
│   └── board.css          # 게시판 전용 스타일
├── js/
│   └── board.js           # 게시판 메인 로직
└── data/
    └── gnb_data.js        # OPINION 메뉴 추가
```

## 디자인 특징

### VOGUE 스타일 적용
- **타이포그래피**: Ubuntu Condensed 폰트 사용
- **컬러 스킴**: 검정/흰색 미니멀 디자인
- **버튼 스타일**: VOGUE 공통 버튼 디자인 적용
- **테이블 디자인**: 깔끔한 라인과 여백
- **반응형**: 모바일 최적화 (768px 이하)

### 레이아웃
- 헤더 영역 포함 (209px 고정)
- 상단 여백: 250px (헤더 + 여유)
- 최대 너비: 1200px
- 중앙 정렬

## 주요 기능

### 1. 게시판 리스트
- 페이징 (7개씩 표시)
- 검색 (제목/내용/작성자)
- 정렬 (날짜/제목, 오름차순/내림차순)
- 검색 기록 저장 및 재검색

### 2. 글 읽기
- 조회수 자동 증가 (본인 글 제외)
- 세션스토리지로 중복 조회 방지
- 로그인 사용자만 코멘트 작성 가능
- 코멘트 수정/삭제 (본인만)

### 3. 글 쓰기
- 로그인 필수
- 작성자 정보 자동 입력
- 제목/내용 유효성 검사

### 4. 글 수정/삭제
- 본인 글만 수정 가능
- 삭제 시 확인 메시지
- 수정일자 자동 기록

## 사용 방법

### 1. 메뉴에서 접근
- 상단 GNB 메뉴에서 **OPINION** 클릭
- `board.html`로 자동 이동

### 2. 로그인 후 사용
```javascript
// 로그인 정보 예시
{
  userid: "user123",
  username: "홍길동",
  gender: "m",
  email: "user@example.com"
}
```

### 3. 권한 체크
- **글쓰기**: 로그인 필수
- **수정/삭제**: 작성자 본인만
- **코멘트 작성**: 로그인 필수
- **코멘트 수정/삭제**: 작성자 본인만

## 조회수 증가 로직

```javascript
// 조회수 증가 조건
1. 로그인한 사용자가 아니어도 증가 (비로그인 사용자 포함)
2. 자신의 글은 증가하지 않음
3. 세션 동안 같은 글을 여러 번 봐도 1회만 증가
4. 브라우저를 닫으면 세션스토리지 초기화 → 다시 조회 가능
```

## 개발자 가이드

### 로그인 정보 가져오기
```javascript
const loginfo = sessionStorage.getItem("loginfo");
if (loginfo) {
  const user = JSON.parse(loginfo);
  // user.userid, user.username 사용
}
```

### 게시글 작성 시
```javascript
{
  userid: loginSts.userid,    // VOGUE 회원 userid
  username: loginSts.username, // VOGUE 회원 username
  // 기타 필드...
}
```

### 권한 체크
```javascript
// 본인 글 확인
if (loginSts && loginSts.userid === selRecord.userid) {
  // 수정/삭제 버튼 표시
}
```

## 커스터마이징

### 페이지당 게시글 수 변경
```javascript
// board.js
const unitSize = 7; // 원하는 개수로 변경
```

### 검색 기록 개수 변경
```javascript
// board.js - saveSearchHistory 함수
if (memArr.length > 5) { // 5를 원하는 개수로 변경
  memArr.shift();
}
```

### 초기 데이터 수정
```javascript
// board.js - initBoardData 함수
const orgBoardData = [
  // 원하는 초기 데이터 추가
];
```

## 주의사항

1. **로그인 필수**: 글쓰기, 코멘트 작성은 로그인 후 가능
2. **데이터 보존**: 로컬스토리지 사용으로 브라우저 데이터 삭제 시 게시글 삭제됨
3. **권한 검증**: 클라이언트 단 검증이므로 실제 서비스에서는 서버 검증 필수
4. **XSS 방지**: 사용자 입력값 이스케이프 처리 필요

## 향후 개선 사항

- [ ] 파일 첨부 기능
- [ ] 이미지 업로드
- [ ] 대댓글 기능
- [ ] 좋아요/싫어요
- [ ] 신고 기능
- [ ] 관리자 기능

## 라이센스
VOGUE KOREA 프로젝트 교육용
