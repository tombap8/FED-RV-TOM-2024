/************************************** 
🧩 실습 주제: “우리 개발팀 인력 관리 시스템”

🧪 주요 학습 포인트

TypeScript 기본 타입 정리
인터페이스 / 타입 별칭 활용
유니온, 인터섹션, 튜플, enum 실전 적용
함수 선언 및 타입 지정
배열과 객체의 타입 구조 연습

💼 시나리오 설정

"웹개발 회사의 개발자 인력을 정리하고 
관리하는 시스템을 만든다."

예제 컨셉
Developer 라는 타입을 만들어서 다양한 개발자들을 표현

개발자들은 각자 역할(Frontend, Backend, Fullstack), 
스킬, 프로젝트 참여 여부 등 정보 가짐
이 정보를 배열로 관리하고, 필터링하거나 콘솔에 출력
타입 안정성 유지하면서 함수도 타입화함

📖 데이터 및 함수 정의

((타입정의))
Role: 개발자의 역할을 정의한 타입으로, 
"Frontend", "Backend", "Fullstack" 중 
하나만 가능합니다. 
이 타입은 개발자 객체에서 role에 사용됩니다.

((타입정의))
Developer: 개발자에 대한 정보를 
나타내는 타입으로, 
이름, 나이, 역할, 기술, 활동 여부 등의 
속성을 가집니다.

((데이터 셋팅 배열변수))
devTeam: 개발자 배열로, 여러 명의 개발자 
정보를 포함하고 있습니다. 
각 개발자는 Developer 타입을 따릅니다.

((함수 정의))
getActiveDevelopers: 
활동 중인 개발자만 추출하는 함수로, 
isActive 속성이 true인 개발자들만 반환합니다.

((함수 정의))
findBySkill: 
특정 기술(skill)을 가진 개발자들만 추출하는 함수로, 
각 개발자의 skills 배열에 주어진 기술이 
포함된 경우만 반환합니다.

**************************************/

// 참고 : 타입은 파스칼케이스로 정의하고
// export로 개별적 내보내기 가능함!

// 🤹‍♀️ 1. "역할"을 나타내는 타입 정의 + 내보내기 ///////
// enum형으로 타입정의
export enum Role {
    Frontend = "Frontend",
    Backend = "Backend",
    Fullstack = "Fullstack",
}

// export type Role = "Frontend" | "Backend" | "Fullstack";

// 🤹‍♀️ 2. "개발자 정보"를 나타내는 타입 정의 ///////
// 각 개발자는 이름(name), 나이(age), 역할(role), 기술(skills),
// 활동상태(isActive)를 가짐
export type Developer = {
  // 이름
  name: string;
  // 나이
  age: number;
  // 역할(Frontend, Backend, Fullstack)
  role: Role;
  // 기술(예: React, Node.js, TypeScript)
  skills: string[];
  // 활동상태(true, false)
  isActive: boolean;
};

// 🤹‍♀️ 3. 개발자 정보 셋팅 : 배열 객체
export const devTeam: Developer[] = [
  {
    name: "김상중하",
    age: 30,
    role: "Frontend",
    skills: ["React", "Node.js", "TypeScript"],
    isActive: false,
  },
  {
    name: "이주현",
    age: 25,
    role: "Backend",
    skills: ["Node.js", "VueJS", "Express", "MongoDB"],
    isActive: true,
  },
  {
    name: "김하루방",
    age: 32,
    role: "Fullstack",
    skills: ["React", "Node.js", "TypeScript", "Express", "MongoDB"],
    isActive: false,
  },
  {
    name: "조삼모사",
    age: 48,
    role: "Frontend",
    skills: ["TypeScript", "Sass"],
    isActive: false,
  },
  {
    name: "김한결",
    age: 27,
    role: "Backend",
    skills: ["Node.js", "Express", "MongoDB"],
    isActive: true,
  },
  {
    name: "이상민",
    age: 26,
    role: "Fullstack",
    skills: ["React", "Node.js", "TypeScript", "Express", "MongoDB"],
    isActive: true,
  },
  {
    name: "김하은",
    age: 24,
    role: "Frontend",
    skills: ["React", "Sass"],
    isActive: true,
  },
  {
    name: "이주호",
    age: 23,
    role: "Backend",
    skills: ["Node.js", "Express", "MongoDB"],
    isActive: true,
  },
  {
    name: "김상민",
    age: 29,
    role: "Fullstack",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    isActive: true,
  },
  {
    name: "박상현",
    age: 25,
    role: "Backend",
    skills: ["Node.js", "Express", "MongoDB"],
    isActive: true,
  },
];

// 🤹‍♀️ 4. 활동중인 개발자 필터링 함수 정의 ///////
// -> team 파라미터변수에 devTeam 배열을 받아서
// 배열값의 객체속성중 isActive 속성값이 true인 개발자들만 반환
export function getActiveDevelopers(
  team: Developer[] // 팀원데이터
): Developer[] {
  return team.filter((dev) => dev.isActive);
} ////////// getActiveDevelopers 함수 //////////////

// 🤹‍♀️ 5. 특정기술을 가진 개발자 필터링 함수 정의 ///////
// -> team 파라미터변수에 devTeam 배열을 받아서
// 배열값의 객체속성중 skills 속성값중
// 해당 기술이 있는 개발자들만 반환
export function findBySkill(
  team: Developer[], // 팀원데이터
  skill: string
): Developer[] {
  return team.filter((dev) => dev.skills.includes(skill));
} ////////// findBySkill 함수 //////////////

// 🤹‍♀️ 6. 특정 역할을 가진 개발자 필터링 함수 정의 ///////
// -> team 파라미터변수에 devTeam 배열을 받아서
// 배열값의 객체속성중 role 속성값이
// 파라미터로 받은 role과 같은 개발자들만 반환
export function findByRole(
    team: Developer[], // 팀원데이터
    role: Role // 역할
): Developer[] {
  return team.filter((dev) => dev.role === role);
} ////////// findByRole 함수 //////////////
