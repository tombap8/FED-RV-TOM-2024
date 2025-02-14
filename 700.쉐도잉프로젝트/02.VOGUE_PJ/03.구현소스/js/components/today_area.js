// 보그 JS 투데이유형 컴포넌트 - today_area.js

// 1. 아이템 데이터 불러오기
import itemData from '../../data/item_data.json' with{type:'json'};

// console.log(itemData);

export const TodayAreaComp = Vue.component("today-area-comp", {
  // 1. 템플릿
  template: `
     <div id="today-area">
        <section class="inbox today-area">
          <h2 class="sub-tit">
            {{ listTit }}
          </h2>
          <div class="post-list-today">
            <ul>
                <li v-for="v in this.getData(dataName)">
                    <figure>
                        <img 
                        :src="v.imgSrc" 
                        :alt="v.mainCat">
                        <figcaption>
                        <p class="category">{{v.catName}}</p>
                        <h3 class="s-tit">{{v.title}}</h3>
                        <p class="date">{{v.dateWriter}}</p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
          </div>
        </section>
      </div>
    `,
  // 2. 리턴함수 데이터
  data() {
    return {
      // 투데이 영역 정보 데이터
      // todayInfo: todayData,
    };
  },
  // 2.5. 프롭스 다운!
  // 컴포넌트 태그에 속성으로 두개의 값을 셋팅하면
  // 여기서 'list-tit' -> listTit
  // 'data-name' -> dataName
  // 캐밥케이스 속성명을 여기서는 캐믈케이스 변수로 사용가능!
  props: ['list-tit','data-name'],
  // 3. 메서드
  methods: {
    // 선택 데이터 가져오기 메서드
    getData(dName){
      // dName - 데이터이름
      // 2-1. 투데이 영역용 데이터수집하기
      // filter() 메서드는 조건이 맞을때 true리턴!
      // -> 결과: 필터링된 배열값
      return itemData
      .filter((v) => {
        if (v.mainCat == dName) return true;
      })
      // 2-2. 투데이 영역 데이터 정렬하기 : idx 오름차순
      // sort((a,b)=>a.idx==b.idx?0:a.idx<b.idx?-1:1)
      .sort((a, b) => (a.idx == b.idx ? 0 : a.idx < b.idx ? -1 : 1));
    },
  },
  // 4. 데이터셋업파트
  created() {},
  // 5. DOM 셋업파트
  mounted() {},
});
