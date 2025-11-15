// 게시판 초기 데이터
const orgBoardData = [
  {
    idx: 1,
    tit: "Exploring the mountains",
    cont: "Had a great hike in the mountains today. The weather was perfect, and the views were breathtaking. We started early in the morning and reached the summit by noon. The trail was challenging but rewarding. Looking forward to our next adventure!",
    att: "",
    date: "2024-11-30",
    uid: "mountainhiker",
    unm: "Alice Johnson",
    cnt: 13
  },
  {
    idx: 2,
    tit: "Cooking new recipes",
    cont: "Tried out a new pasta recipe and it was delicious! I used fresh ingredients and followed the instructions carefully. The result was a creamy and flavorful dish that everyone loved. Can't wait to try more recipes and experiment with different flavors.",
    att: "",
    date: "2024-12-17",
    uid: "chefbob",
    unm: "Bob Smith",
    cnt: 7
  },
  {
    idx: 3,
    tit: "Reading a new book",
    cont: "Started reading 'The Great Gatsby' today. The writing style is captivating, and the story is intriguing. I'm looking forward to discovering more about the characters and the plot as I continue reading. It's a classic that I've been meaning to read for a long time.",
    att: "",
    date: "2024-06-21",
    uid: "bookwormlee",
    unm: "Catherine Lee",
    cnt: 24
  },
  {
    idx: 4,
    tit: "Gardening tips",
    cont: "Learned some new tips for growing tomatoes. It's important to provide adequate sunlight and water regularly. Using organic fertilizers can also help improve the yield. I'm excited to apply these tips and see the results in my garden.",
    att: "",
    date: "2024-03-14",
    uid: "gardenguru",
    unm: "David Brown",
    cnt: 3
  },
  {
    idx: 5,
    tit: "Travel plans",
    cont: "Planning a trip to Europe next summer. I'm looking forward to visiting historical landmarks, trying local cuisines, and experiencing different cultures. It's going to be an exciting and enriching experience. Can't wait to start this adventure!",
    att: "",
    date: "2024-08-19",
    uid: "traveleremily",
    unm: "Emily Davis",
    cnt: 15
  },
  {
    idx: 6,
    tit: "Learning to code",
    cont: "Started learning JavaScript this week. It's challenging but also very rewarding. I'm working on small projects to practice and improve my skills. Looking forward to building more complex applications in the future.",
    att: "",
    date: "2024-09-25",
    uid: "coderrank",
    unm: "Frank Miller",
    cnt: 28
  },
  {
    idx: 7,
    tit: "Morning workout routine",
    cont: "Developed a new morning workout routine that includes yoga and cardio. Feeling more energized and focused throughout the day. It's amazing how a good workout can set a positive tone for the entire day.",
    att: "",
    date: "2024-10-12",
    uid: "fitnessgrace",
    unm: "Grace Wilson",
    cnt: 19
  },
  {
    idx: 8,
    tit: "Photography hobby",
    cont: "Been exploring photography as a hobby. Captured some stunning sunset shots yesterday. Learning about composition and lighting has made me appreciate the art form even more. Can't wait to share my portfolio!",
    att: "",
    date: "2024-11-05",
    uid: "photohenry",
    unm: "Henry Moore",
    cnt: 11
  }
];

// 로컬스토리지 초기화 함수
function initBoardData() {
  if (localStorage.getItem("board-data") === null) {
    localStorage.setItem("board-data", JSON.stringify(orgBoardData));
  }
}

// 로컬스토리지 클리어 함수
function clearBoardData() {
  localStorage.removeItem("board-data");
  console.log("게시판 로컬스 클리어!");
}
