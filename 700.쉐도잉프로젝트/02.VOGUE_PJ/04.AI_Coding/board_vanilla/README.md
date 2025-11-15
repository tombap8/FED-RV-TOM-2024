# 게시판 - Vanilla JavaScript 버전

React로 구현된 게시판을 순수 HTML, CSS, JavaScript(jQuery)로 변환한 버전입니다.

## 파일 구조

```
board_vanilla/
├── index.html          # 메인 HTML 파일
├── board.css          # 스타일시트
├── board.js           # 메인 JavaScript 로직
├── board_data.js      # 초기 데이터 및 초기화 함수
└── README.md          # 이 파일
```

## 주요 기능

### 1. 게시판 리스트 (List Mode)
- 게시글 목록 표시
- 페이징 기능 (7개씩 표시)
- 검색 기능 (제목/내용/작성자)
- 정렬 기능 (날짜/제목, 오름차순/내림차순)
- 검색 기록 저장 및 재검색

### 2. 글 읽기 (Read Mode)
- 게시글 상세 내용 표시
- 조회수 자동 증가
- 코멘트 작성/수정/삭제
- 작성자 본인만 수정 가능

### 3. 글 쓰기 (Write Mode)
- 새 게시글 작성
- 로그인 사용자만 사용 가능

### 4. 글 수정/삭제 (Modify Mode)
- 게시글 수정
- 게시글 삭제
- 작성자 본인만 사용 가능

## 데이터 저장

### LocalStorage
- `board-data`: 게시판 데이터
- `comment-data`: 코멘트 데이터
- `memory-data`: 검색 기록 (최대 5개)

### SessionStorage
- `bd-rec`: 읽은 게시글 번호 (조회수 중복 방지)

## 사용 방법

1. `index.html` 파일을 브라우저에서 열기
2. 테스트용 로그인 정보는 자동으로 설정됨:
   - ID: `testuser`
   - Name: `Test User`

## React 버전과의 차이점

### 동일한 기능
- 게시판 CRUD (Create, Read, Update, Delete)
- 페이징 및 검색
- 코멘트 시스템
- 로컬스토리지 활용

### 구현 방식 차이

#### React 버전
- 컴포넌트 기반 (Board.jsx, List.jsx, Read.jsx, Write.jsx, Modify.jsx)
- useState, useRef, useEffect, useReducer 훅 사용
- 상태 관리 자동화
- JSX 문법

#### Vanilla JS 버전
- 모드별 렌더링 함수 (renderListMode, renderReadMode 등)
- 전역 변수로 상태 관리
- jQuery를 이용한 DOM 조작
- HTML 템플릿 문자열

## 주요 함수 설명

### 초기화
- `initBoardData()`: 로컬스토리지 초기 데이터 설정
- `initVariables()`: 전역 변수 초기화

### 렌더링
- `renderMode()`: 현재 모드에 따라 화면 렌더링
- `renderListMode()`: 리스트 화면 렌더링
- `renderReadMode()`: 읽기 화면 렌더링
- `renderWriteMode()`: 쓰기 화면 렌더링
- `renderModifyMode()`: 수정 화면 렌더링

### 데이터 처리
- `getFilteredData()`: 검색/정렬된 데이터 반환
- `sortData()`: 데이터 정렬
- `increaseViewCount()`: 조회수 증가

### 페이징
- `renderPaging()`: 페이징 HTML 생성
- `goPage()`: 특정 페이지로 이동
- `goFirstPaging()`, `goPrevPaging()`, `goNextPaging()`, `goLastPaging()`: 페이징 네비게이션

### 코멘트
- `saveComment()`: 코멘트 저장
- `displayComments()`: 코멘트 표시
- `deleteComment()`: 코멘트 삭제
- `modifyComment()`: 코멘트 수정 모드 전환

## 브라우저 호환성

- 모던 브라우저 (Chrome, Firefox, Safari, Edge)
- jQuery 3.7.1 사용
- LocalStorage/SessionStorage 지원 필요

## 개발 참고사항

### 로그인 기능
현재는 테스트용으로 자동 로그인되어 있습니다.
실제 프로젝트에서는 별도의 로그인 시스템을 연동해야 합니다.

### 보안
- XSS 방지를 위해 사용자 입력값 검증 필요
- 실제 서버 연동 시 백엔드 검증 필수

### 확장 가능성
- 파일 첨부 기능 추가 가능
- 대댓글 기능 추가 가능
- 좋아요/싫어요 기능 추가 가능
- 카테고리 분류 기능 추가 가능

## 라이센스

교육용 프로젝트
