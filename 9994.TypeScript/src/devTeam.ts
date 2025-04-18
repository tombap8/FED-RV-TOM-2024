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
// enum형으로 타입정의 : 이유는 값이 잘못 입력될 수 있기때문
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
  // 경력
  year: number;
  // 역할(Frontend, Backend, Fullstack)
  role: Role;
  // 기술(예: React, Node.js, TypeScript)
  skills: string[];
  // 활동상태(true, false)
  isActive: boolean;
};

// 🤹‍♀️ 3. 개발자 기술정보 셋팅 : 열거형 타입
export enum Skill {
  React = "React",
  NodeJs = "Node.js",
  TypeScript = "TypeScript",
  Express = "Express",
  MongoDB = "MongoDB",
  Sass = "Sass",
  VueJs = "VueJS",
}

export const devTeam: Developer[] = [
  {
    name: "김상중하",
    age: 30,
    year: 20,
    role: Role.Frontend,
    skills: [Skill.React, Skill.NodeJs, Skill.TypeScript],
    isActive: false,
  },
  {
    name: "이주현",
    age: 25,
    year: 5,
    role: Role.Backend,
    skills: [Skill.NodeJs, Skill.VueJs, Skill.Express, Skill.MongoDB],
    isActive: true,
  },
  {
    name: "김하루방",
    age: 32,
    year: 10,
    role: Role.Fullstack,
    skills: [
      Skill.React,
      Skill.NodeJs,
      Skill.TypeScript,
      Skill.Express,
      Skill.MongoDB,
    ],
    isActive: false,
  },
  {
    name: "조삼모사",
    age: 48,
    year: 20,
    role: Role.Frontend,
    skills: [Skill.TypeScript, Skill.Sass],
    isActive: false,
  },
  {
    name: "김한결",
    age: 27,
    year: 5,
    role: Role.Backend,
    skills: [Skill.NodeJs, Skill.Express, Skill.MongoDB],
    isActive: true,
  },
  {
    name: "이상민",
    age: 26,
    year: 5,
    role: Role.Fullstack,
    skills: [
      Skill.React,
      Skill.NodeJs,
      Skill.TypeScript,
      Skill.Express,
      Skill.MongoDB,
    ],
    isActive: true,
  },
  {
    name: "김하은",
    age: 24,
    year: 3,
    role: Role.Frontend,
    skills: [Skill.React, Skill.Sass],
    isActive: true,
  },
  {
    name: "이주호",
    age: 23,
    year: 2,
    role: Role.Backend,
    skills: [Skill.NodeJs, Skill.Express, Skill.MongoDB],
    isActive: true,
  },
  {
    name: "김상민",
    age: 29,
    year: 8,
    role: Role.Fullstack,
    skills: [Skill.React, Skill.NodeJs, Skill.Express, Skill.MongoDB],
    isActive: true,
  },
  {
    name: "박상현",
    age: 25,
    year: 5,
    role: Role.Backend,
    skills: [Skill.NodeJs, Skill.Express, Skill.MongoDB],
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



// 7. 인터페이스를 활용한 팀 메니저 타입 정의 //////
export interface TeamMamager {
  // 팀 매니저의 이름
  name: string;
  // 팀의 크기
  teamSize: number;
  // 어떤 역할들을 관리하는지
  managerRoles: Role[]; 
}

// 위의 메니저 값 셋팅하기 /////
export const teamManager: TeamMamager = {
    name: "박상현",
    teamSize: devTeam.length,
    managerRoles: [Role.Frontend, Role.Backend],
};

// 8. 제네릭을 활용한 중급,고급 개발자 필터함수 만들기 ////
// -> 기준 : 중고급 개발자는 경력 5년이상이다! 
// 기존에 경력년수가 없으므로 year 속성을 추가함!
export function getSeniorDevelopers<T>(
    items: T[], // 개발자 배열객체 데이터
    filterFn: (item: T) => boolean // 검증함수
): T[] {
    // 검증함수결과가 true인 배열값만 반환
  return items.filter(filterFn);
} ////////// getSeniorDevelopers 함수 //////////////

// 9. 개발자 등급 열거형(enum)으로 정의하기 /////
export enum DevLevel {
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior",
  Leader = "Leader",
}

// 10. 튜플을 활용한 등급별 보너스 정보배열 /////
export const levelBonusList: [DevLevel, number][] = [
  [DevLevel.Junior, 500],
  [DevLevel.Middle, 1000],
  [DevLevel.Senior, 2000],
  [DevLevel.Leader, 3000],
];

// 11. 특정 개발자 경력에 따라 등급을 계산하는 함수 /////
export function getDevLevel(year: number): DevLevel {
  if (year >= 15) return DevLevel.Leader;
  if (year >= 8) return DevLevel.Senior;
  if (year >= 4) return DevLevel.Middle;
  return DevLevel.Junior;
} ////////// getDevLevel 함수 //////////////

// 12. 개발자 보너스 금액 조회 함수 /////////
export function getDevBonus(year: number) {
  // (1) 경력년수로 레벨 알아오기
  const level = getDevLevel(year);
  // (2) 레벨별 보너스 계산하기
  const bonus = 
  levelBonusList.find((v) => v[0] === level)?.[1]||0;
  // find로 찾은 값이 있으면.[1] 두번째 배열값 읽기
  // 이값이 없으면 0을 할당
  // -> 배열?.[순번] -> 배열일 경우 적용여부판단하는 구문
  // ->>> 이런 방식을 옵셔널 체이닝이라고함!(배열없으면 undefined)
  // -> 변수 = 값1 || 값2 ->>> 값1이 없을때 값2를 할당

  // (1),(2) 결과값을 객체로 반환하기
  return {level, bonus};
  // -> 이 함수의 리턴값 타입은 중간에 개발시 변경될 수 있다!
  // 따라서 타입지정은 하지않고
  // 추론을 통해 자동으로 타입이 결정되도록 한다!
  // -> ReturnType<typeof 함수명> 형식으로 사용가능하다!
} ////////// getDevBonus 함수 //////////////

// 13. 반환타입 추론 후 재사용 : 중요!!! 이것때문에 이예제함! ////
export type DevBonusInfo = ReturnType<typeof getDevBonus>;