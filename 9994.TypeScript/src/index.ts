// index.html에서 가장 먼저 불러오는 JS - index.ts
// -> ts파일은 js파일로 컴파일 후 dist폴더에 bundle.js로 배포됨!

// 외부 ts파일 불러오기 ////
import {
  // 개발팀 배열
  devTeam,
  // 활동 중인 개발자 필터 함수
  getActiveDevelopers,
  // 특정 기술을 가진 개발자 필터 함수
  findBySkill,
  // 특정 역할을 가진 개발자 필터 함수
  findByRole,
} from "./devTeam";

function greet(name: string): string {
  return `안녕, ${name}~!`;
}

console.log(greet("찐친 개발자"));
console.log(greet("타입스크립트"));
console.log(greet("JS 개발자"));
console.log(greet("코딩의 신"));

// 1. 기본타입 선언
const userName: string = "김상중하";
const age: number = 20;
const isActive: boolean = true;

console.log("😎 기본타입");
console.log(userName, age, isActive);

// 2. 배열 타입 선언
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["찐친", "타입스크립트", "JS", "코딩의 신"];

console.log("😎 배열타입");
console.log(numbers);
console.log(names);

// 3. 튜플 (Tuple) 타입 선언
const userInfo: [string, number] = ["김상중하", 20];

console.log("😎 튜플타입");
console.log(userInfo);

// 4. 유니온 타입 선언
const unionType: "loading" | "success" | "error" = "loading";

console.log("😎 유니온타입");
console.log(unionType);

// 5. 객체 타입 선언
type User = {
  name: string;
  age: number;
  isActive?: boolean; // 선택형 속성처리(?)
};

// 위의 데이터 형을 적용한 새로운 변수선언 할당
const user1: User = {
  name: "Alice",
  age: 25,
};

const user2: User = {
  name: "Bob",
  age: 30,
  isActive: true,
};

const user3: User = {
  name: "Charlie",
  age: 35,
  isActive: false,
};

console.log("😎 객체타입");
console.log(user1);
console.log(user2);
console.log(user3);

// 6. 함수에 타입 선언
function sayGoodBye(
  name: string,
  isOpt: boolean,
  message?: string // 선택적 매개변수는 맨끝에 위치함
): string {
  return `${name}! ${message ? message : ""} ${isOpt ? "잘가!" : "안녕!"} `;
}

console.log("😎 함수타입");
console.log(sayGoodBye("찐친 개발자", true));
console.log(sayGoodBye("타입스크립트", true, "완전멋쪄!"));
console.log(sayGoodBye("JS 개발자", false));
console.log(sayGoodBye("코딩의 신", false, "하이!"));

// 7. void 함수 : 리턴값이 없는 함수
function logMessage(msg: string): void {
  console.log("🍊", msg);
}

console.log("😎 void 함수");
logMessage("코딩의 신");
logMessage("타입스크립트");

// 8. 인터섹션 타입 선언 : 
// &를 쓰기도하고 {}로 한꺼번에 셋팅하기도함
type Employee = {
  name: string;
  company: string;
};

// 인터섹션 타입을 적용한 새로운 변수선언 할당
const employee1: Employee = {
  name: "조삼모사",
  company: "한국교통공사",
};

const employee2: Employee = {
  name: "김하루방",
  company: "삼성전자",
};

console.log("😎 인터섹션타입");
console.log(employee1);
console.log(employee2);

// 인터섹션을 다른 방식으로 만들기 : 학생의 이름/집/나이
type StudentName = { name: string };
type StudentHome = { home: string };
type StudentAge = { age: number };

// 개별 type을 하나의 타입으로 합치기
type StudentInformation = StudentName & StudentHome & StudentAge;

// 결국 인터섹션은 타입을 여러개 동시에 적용하는 것!

const student1: StudentInformation = {
  name: "강상모",
  home: "서울",
  age: 20,
};

const student2: StudentInformation = {
  name: "갈매기",
  home: "부산",
  age: 21,
};

console.log("😎 인터섹션타입");
console.log(student1);
console.log(student2);

// 9. enum 타입 선언
enum AISystem {
  Cgpt = "Chat GPT",
  DallE = "DALL-E",
  MidJourney = "MidJourney",
  StableDiffusion = "Stable Diffusion",
  Cop = "Copilot",
}

console.log("😎 enum타입");
console.log(AISystem.Cgpt);
console.log(AISystem.DallE);
console.log(AISystem.MidJourney);
console.log(AISystem.StableDiffusion);
console.log(AISystem.Cop)



// ★★★★★★★★★★★★★★★★★★★★★ //
// 개발자 회사 샘플 찍어보기 //////////////////

console.log("😎 개발자 회사 샘플 찍어보기");
console.log("👷‍♀️🦸‍♀️전체 개발자 리스트:", devTeam);

console.log("👷‍♀️🦸‍♀️Frontend 개발자 리스트:");
console.log(findByRole(devTeam, "Frontend"));

console.log("👷‍♀️🦸‍♀️BackEnd 개발자 리스트:");
console.log(findByRole(devTeam, "Backend"));

console.log("👷‍♀️🦸‍♀️Fullstack 개발자 리스트:");
console.log(findByRole(devTeam, "Fullstack"));

console.log("👷‍♀️🦸‍♀️현재 활동중인 개발자 리스트:");
console.log(getActiveDevelopers(devTeam));

console.log("👷‍♀️🦸‍♀️TypeScript 스킬을 가진 개발자 리스트:");
console.log(findBySkill(devTeam, "TypeScript"));

console.log("👷‍♀️🦸‍♀️React 스킬을 가진 개발자 리스트:");
console.log(findBySkill(devTeam, "React"));

console.log("👷‍♀️🦸‍♀️VueJS 스킬을 가진 개발자 리스트:");
console.log(findBySkill(devTeam, "VueJS"));
