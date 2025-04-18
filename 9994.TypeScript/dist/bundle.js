/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/devTeam.ts":
/*!************************!*\
  !*** ./src/devTeam.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevLevel: () => (/* binding */ DevLevel),
/* harmony export */   Role: () => (/* binding */ Role),
/* harmony export */   Skill: () => (/* binding */ Skill),
/* harmony export */   devTeam: () => (/* binding */ devTeam),
/* harmony export */   findByRole: () => (/* binding */ findByRole),
/* harmony export */   findBySkill: () => (/* binding */ findBySkill),
/* harmony export */   getActiveDevelopers: () => (/* binding */ getActiveDevelopers),
/* harmony export */   getDevBonus: () => (/* binding */ getDevBonus),
/* harmony export */   getDevLevel: () => (/* binding */ getDevLevel),
/* harmony export */   getSeniorDevelopers: () => (/* binding */ getSeniorDevelopers),
/* harmony export */   levelBonusList: () => (/* binding */ levelBonusList),
/* harmony export */   teamManager: () => (/* binding */ teamManager)
/* harmony export */ });
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
var Role;
(function (Role) {
    Role["Frontend"] = "Frontend";
    Role["Backend"] = "Backend";
    Role["Fullstack"] = "Fullstack";
})(Role || (Role = {}));
// 🤹‍♀️ 3. 개발자 기술정보 셋팅 : 열거형 타입
var Skill;
(function (Skill) {
    Skill["React"] = "React";
    Skill["NodeJs"] = "Node.js";
    Skill["TypeScript"] = "TypeScript";
    Skill["Express"] = "Express";
    Skill["MongoDB"] = "MongoDB";
    Skill["Sass"] = "Sass";
    Skill["VueJs"] = "VueJS";
})(Skill || (Skill = {}));
const devTeam = [
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
function getActiveDevelopers(team // 팀원데이터
) {
    return team.filter((dev) => dev.isActive);
} ////////// getActiveDevelopers 함수 //////////////
// 🤹‍♀️ 5. 특정기술을 가진 개발자 필터링 함수 정의 ///////
// -> team 파라미터변수에 devTeam 배열을 받아서
// 배열값의 객체속성중 skills 속성값중
// 해당 기술이 있는 개발자들만 반환
function findBySkill(team, // 팀원데이터
skill) {
    return team.filter((dev) => dev.skills.includes(skill));
} ////////// findBySkill 함수 //////////////
// 🤹‍♀️ 6. 특정 역할을 가진 개발자 필터링 함수 정의 ///////
// -> team 파라미터변수에 devTeam 배열을 받아서
// 배열값의 객체속성중 role 속성값이
// 파라미터로 받은 role과 같은 개발자들만 반환
function findByRole(team, // 팀원데이터
role // 역할
) {
    return team.filter((dev) => dev.role === role);
} ////////// findByRole 함수 //////////////
// 위의 메니저 값 셋팅하기 /////
const teamManager = {
    name: "박상현",
    teamSize: devTeam.length,
    managerRoles: [Role.Frontend, Role.Backend],
};
// 8. 제네릭을 활용한 중급,고급 개발자 필터함수 만들기 ////
// -> 기준 : 중고급 개발자는 경력 5년이상이다! 
// 기존에 경력년수가 없으므로 year 속성을 추가함!
function getSeniorDevelopers(items, // 개발자 배열객체 데이터
filterFn // 검증함수
) {
    // 검증함수결과가 true인 배열값만 반환
    return items.filter(filterFn);
} ////////// getSeniorDevelopers 함수 //////////////
// 9. 개발자 등급 열거형(enum)으로 정의하기 /////
var DevLevel;
(function (DevLevel) {
    DevLevel["Junior"] = "Junior";
    DevLevel["Middle"] = "Middle";
    DevLevel["Senior"] = "Senior";
    DevLevel["Leader"] = "Leader";
})(DevLevel || (DevLevel = {}));
// 10. 튜플을 활용한 등급별 보너스 정보배열 /////
const levelBonusList = [
    [DevLevel.Junior, 500],
    [DevLevel.Middle, 1000],
    [DevLevel.Senior, 2000],
    [DevLevel.Leader, 3000],
];
// 11. 특정 개발자 경력에 따라 등급을 계산하는 함수 /////
function getDevLevel(year) {
    if (year >= 15)
        return DevLevel.Leader;
    if (year >= 8)
        return DevLevel.Senior;
    if (year >= 4)
        return DevLevel.Middle;
    return DevLevel.Junior;
} ////////// getDevLevel 함수 //////////////
// 12. 개발자 보너스 금액 조회 함수 /////////
function getDevBonus(year) {
    // (1) 경력년수로 레벨 알아오기
    const level = getDevLevel(year);
    // (2) 레벨별 보너스 계산하기
    const bonus = levelBonusList.find((v) => v[0] === level);
    return bonus ? bonus[1] : 0;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devTeam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devTeam */ "./src/devTeam.ts");
// index.html에서 가장 먼저 불러오는 JS - index.ts
// -> ts파일은 js파일로 컴파일 후 dist폴더에 bundle.js로 배포됨!
// 외부 ts파일 불러오기 ////

function greet(name) {
    return `안녕, ${name}~!`;
}
console.log(greet("찐친 개발자"));
console.log(greet("타입스크립트"));
console.log(greet("JS 개발자"));
console.log(greet("코딩의 신"));
// 1. 기본타입 선언
const userName = "김상중하";
const age = 20;
const isActive = true;
console.log("😎 기본타입");
console.log(userName, age, isActive);
// 2. 배열 타입 선언
const numbers = [1, 2, 3, 4, 5];
const names = ["찐친", "타입스크립트", "JS", "코딩의 신"];
console.log("😎 배열타입");
console.log(numbers);
console.log(names);
// 3. 튜플 (Tuple) 타입 선언
const userInfo = ["김상중하", 20];
console.log("😎 튜플타입");
console.log(userInfo);
// 4. 유니온 타입 선언
const unionType = "loading";
console.log("😎 유니온타입");
console.log(unionType);
// 위의 데이터 형을 적용한 새로운 변수선언 할당
const user1 = {
    name: "Alice",
    age: 25,
};
const user2 = {
    name: "Bob",
    age: 30,
    isActive: true,
};
const user3 = {
    name: "Charlie",
    age: 35,
    isActive: false,
};
console.log("😎 객체타입");
console.log(user1);
console.log(user2);
console.log(user3);
// 6. 함수에 타입 선언
function sayGoodBye(name, isOpt, message // 선택적 매개변수는 맨끝에 위치함
) {
    return `${name}! ${message ? message : ""} ${isOpt ? "잘가!" : "안녕!"} `;
}
console.log("😎 함수타입");
console.log(sayGoodBye("찐친 개발자", true));
console.log(sayGoodBye("타입스크립트", true, "완전멋쪄!"));
console.log(sayGoodBye("JS 개발자", false));
console.log(sayGoodBye("코딩의 신", false, "하이!"));
// 7. void 함수 : 리턴값이 없는 함수
function logMessage(msg) {
    console.log("🍊", msg);
}
console.log("😎 void 함수");
logMessage("코딩의 신");
logMessage("타입스크립트");
// 인터섹션 타입을 적용한 새로운 변수선언 할당
const employee1 = {
    name: "조삼모사",
    company: "한국교통공사",
};
const employee2 = {
    name: "김하루방",
    company: "삼성전자",
};
console.log("😎 인터섹션타입");
console.log(employee1);
console.log(employee2);
// 결국 인터섹션은 타입을 여러개 동시에 적용하는 것!
const student1 = {
    name: "강상모",
    home: "서울",
    age: 20,
};
const student2 = {
    name: "갈매기",
    home: "부산",
    age: 21,
};
console.log("😎 인터섹션타입");
console.log(student1);
console.log(student2);
// 9. enum 타입 선언
// -> 상수 데이터를 안정적으로 쓰기 위한 타입
// -> 이놈(enum)! 에러잡아!
var AISystem;
(function (AISystem) {
    AISystem["Cgpt"] = "Chat GPT";
    AISystem["DallE"] = "DALL-E";
    AISystem["MidJourney"] = "MidJourney";
    AISystem["StableDiffusion"] = "Stable Diffusion";
    AISystem["Cop"] = "Copilot";
})(AISystem || (AISystem = {}));
console.log("😎 enum타입");
console.log(AISystem.Cgpt);
console.log(AISystem.DallE);
console.log(AISystem.MidJourney);
console.log(AISystem.StableDiffusion);
console.log(AISystem.Cop);
// 10. 제네릭(Generics) 타입 함수에 적용하기
// -> 타입을 외부에서 유연하게 전달받을 수 있는 방식
// 배열요소 콘솔 출력 제네릭함수
function printArray(arr) {
    console.log("😎 제네릭타입");
    arr.forEach((val, idx) => {
        console.log(idx, '번째 : ', val);
    });
} //////// printArray 제네릭 함수 //////
// 숫자 배열 제네릭함수 호출예
const numberArray = [1000, 2000, 3000, 4000, 5000];
// 제네릭 함수 호출시 형을 지정하여 호출하기
// printArray<number>(numberArray);
// 데이터 형을 지정하지 않아도 자동으로 형을 감지한다!(타입추론)
printArray(numberArray);
// 문자 배열 제네릭함수 호출예
const stringArray = ["코딩의 신", "타입스크립트", "리액트"];
printArray(stringArray);
// 사용자정보 전달 : 객체를 변수에 할당함! ////
const userResponse = {
    data: { name: "강상모", age: 20 },
    success: true,
};
console.log("😎 제네릭타입");
console.log(userResponse);
// 해당타입을 사용하는 변수
const farewellMessage = sayGoodBye("난 개발천재야!", true, "정말로 굿바이~~!");
console.log("😎 제네릭 ReturnType");
console.log(farewellMessage);
// ★★★★★★★★★★★★★★★★★★★★★ //
// 개발자 회사 샘플 찍어보기 //////////////////
// ★★★★★★★★★★★★★★★★★★★★★ //
console.log("😎 개발자 회사 샘플 찍어보기");
console.log("👷‍♀️🦸‍♀️전체 개발자 리스트:", _devTeam__WEBPACK_IMPORTED_MODULE_0__.devTeam);
console.log("👷‍♀️🦸‍♀️Frontend 개발자 리스트:");
console.log((0,_devTeam__WEBPACK_IMPORTED_MODULE_0__.findByRole)(_devTeam__WEBPACK_IMPORTED_MODULE_0__.devTeam, _devTeam__WEBPACK_IMPORTED_MODULE_0__.Role.Frontend));
console.log("👷‍♀️🦸‍♀️Backend 개발자 리스트:");
console.log((0,_devTeam__WEBPACK_IMPORTED_MODULE_0__.findByRole)(_devTeam__WEBPACK_IMPORTED_MODULE_0__.devTeam, _devTeam__WEBPACK_IMPORTED_MODULE_0__.Role.Backend));
console.log("👷‍♀️🦸‍♀️Fullstack 개발자 리스트:");
console.log((0,_devTeam__WEBPACK_IMPORTED_MODULE_0__.findByRole)(_devTeam__WEBPACK_IMPORTED_MODULE_0__.devTeam, _devTeam__WEBPACK_IMPORTED_MODULE_0__.Role.Fullstack));
console.log("👷‍♀️🦸‍♀️현재 활동중인 개발자 리스트:");
console.log((0,_devTeam__WEBPACK_IMPORTED_MODULE_0__.getActiveDevelopers)(_devTeam__WEBPACK_IMPORTED_MODULE_0__.devTeam));
console.log("👷‍♀️🦸‍♀️TypeScript 스킬을 가진 개발자 리스트:");
console.log((0,_devTeam__WEBPACK_IMPORTED_MODULE_0__.findBySkill)(_devTeam__WEBPACK_IMPORTED_MODULE_0__.devTeam, _devTeam__WEBPACK_IMPORTED_MODULE_0__.Skill.TypeScript));
console.log("👷‍♀️🦸‍♀️React 스킬을 가진 개발자 리스트:");
console.log((0,_devTeam__WEBPACK_IMPORTED_MODULE_0__.findBySkill)(_devTeam__WEBPACK_IMPORTED_MODULE_0__.devTeam, _devTeam__WEBPACK_IMPORTED_MODULE_0__.Skill.React));
console.log("👷‍♀️🦸‍♀️VueJS 스킬을 가진 개발자 리스트:");
console.log((0,_devTeam__WEBPACK_IMPORTED_MODULE_0__.findBySkill)(_devTeam__WEBPACK_IMPORTED_MODULE_0__.devTeam, _devTeam__WEBPACK_IMPORTED_MODULE_0__.Skill.VueJs));
console.log("👷‍♀️🦸‍♀️팀 매니저 정보:");
console.log(_devTeam__WEBPACK_IMPORTED_MODULE_0__.teamManager);
// 중고급 개발자 필터링 함수 호출하여 결과 받기 /////
const seniorDevelopers = (0,_devTeam__WEBPACK_IMPORTED_MODULE_0__.getSeniorDevelopers)(_devTeam__WEBPACK_IMPORTED_MODULE_0__.devTeam, (dev) => dev.year >= 5);
console.log("👷‍♀️🦸‍♀️중고급 개발자 리스트:");
console.log(seniorDevelopers);
// 모든 개발자를 화면에 출력해 보자! ////////
const devListContainer = document.getElementById('dev-list');
// 개발자 목록 출력하기 /////
_devTeam__WEBPACK_IMPORTED_MODULE_0__.devTeam.map((dev) => {
    const devInfo = document.createElement('div');
    devInfo.classList.add('dev-info');
    devInfo.innerHTML = `
    <h3>👨‍🌾 Developer: ${dev.name}</h3>
    <p>🎍 Age: ${dev.age}세</p>
    <p>🎎 Year: ${dev.year}년차</p>
    <p>🎡 Role: ${dev.role}개발자</p>
    <p>🥽 Skills: ${dev.skills.join(', ')}</p>
    <hr />
  `;
    devListContainer.appendChild(devInfo);
}); ///// map //////

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map