// 게시판 관련 타입정의 파일 - borad_props.ts

// 1. 게시판 리스트 타입 정의하기
//    - 게시판 리스트에서 사용하는 props 타입정의
export interface IListProps {
  selData: any[]; // 선택된 배열데이터 전달
  setMode: (mode: string) => void; // 모든 변경 상태변수 setter
  selRecord: React.RefObject<any>; // 선택데이터 참조변수
  pageNum: number; // 리스트 페이지번호 getter
  setPageNum: (pageNum: number) => void; // 리스트 페이지번호 setter
  unitSize: number; // 페이지당 레코드수
  totalCount: React.RefObject<number>; // 전체 개수 참조변수
  pgPgSize: number; // 페이징의 페이징 개수
  pgPgNum: React.RefObject<number>; // 페이징의 페이징 번호

  searchFn: () => void; // 검색함수
  keyword: { cta: string; kw: string }; // 검색어 상태변수 getter
  setKeyword: (keyword: { cta: string; kw: string }) => void; // 검색어 상태변수 setter
  order: number; // 정렬 상태변수
  setOrder: (order: number) => void; // 정렬 상태변수 setter
  sortCta: string; // 정렬기준 상태변수 getter
  setSortCta: (sortCta: string) => void; // 정렬기준 상태변수 setter
  initVariables: () => void; // 변수초기화함수
}

// 2. 게시판 읽기모드 타입 정의하기
//    - 게시판 읽기모드에서 사용하는 props 타입정의
export interface IReadProps {
  setMode: (mode: string) => void;
  selRecord: React.RefObject<any>;
}

// 보통 인터페이스 이름 작명시 I로 시작하는 경우가 많다!
//    - I는 Interface의 약자이다!
//    - Read는 컴포넌트명
//    - Props는 속성의 약자이다!

// 3. 게시판 쓰기모드 타입 정의하기
//    - 게시판 쓰기모드에서 사용하는 props 타입정의
export interface IWriteProps {
  setMode: (mode: string) => void;
  totalCount: React.RefObject<number>;
  setPageNum: (pageNum: number) => void;
  pgPgNum: React.RefObject<number>;
  initVariables: () => void;
}

// 4. 게시판 수정모드 타입 정의하기
//    - 게시판 수정모드에서 사용하는 props 타입정의
export interface IModifyProps {
  setMode: (mode: string) => void;
  selRecord: React.RefObject<any>;
  totalCount: React.RefObject<number>;
  setPageNum: (pageNum: number) => void;
  pgPgNum: React.RefObject<number>;
}