// 뷰JS 데이터처리 뷰엑스 스토어 JS - vuedata_store.js

// 제이슨 데이터 처리위해 제이슨 불러오기!
/* 
    import jsnData from "./goods.json";
    일반 JS호출과 같은 방식으로 제이슨 파일을 호출하면
    아래와 같은 MIME 전송형식 type에러가 발생함!
    ____________________________________________________
    "Failed to load module script: Expected a JavaScript
     module script but the server responded with a MIME type
      of "application/json". Strict MIME type checking is 
      enforced for module scripts per HTML spec."
      ____________________________________________

      ((해결방법!))
      import 변수 from 제이슨파일경로 with {type:"json"}

      assert{type:"json"} -> 이 문법은 2023년 폐기됨!(에러남)
*/
// import jsnData from "./goods.json" assert{type:"json"};->에러!
// import jsnData from "./goods.json" with {type:"json"};

const store = new Vuex.Store({
    // (1) 데이터 셋팅구역 :
    state: {
      items: {}, // 제이슨 데이터 담을 변수
    }, /////// state 구역 ///////////
  
    // (2) 데이터 변경 메서드 구역 :
    // 호출시 commit()사용!
    mutations: {
      // 제이슨 데이터 속성변수 업데이트 하기
      setData(st, pm) {
        // st - state변수, pm - 전달변수
        // state구역의 items변수에 제이슨 데이터 담기!
        st.items = pm;
        console.log("뮤테:", pm);
      }, ///////// setData /////////////////
    },
    // (3) 백엔관련 코딩 비동기처리 메서드 구역 :
    // 호출시 dispatch()사용
    actions: {
      // 제이슨 데이터 로드하기 메서드
      getData() {
        axios.get('./js/goods.json')
        .then(result=>{
          console.log("엑시오스결과:",result,result.data);
          // 엑시오스 결과는 항상 data라는 속성에 담긴다!
          // 데이터 셋팅 뮤테이션스 setData()를 호출함!
          this.commit('setData', result.data);
        }).catch(err=>console.log(err));
        // -> 파일경로는 항상 JS파일이 html파일에
        // 직접 삽입되어 실행하므로 항상 html위치에서
        // 경로를 설정해야 한다!


        // 여기서 엑시오스 라이브러리를 사용하여
        // 데이터파일인 제이슨 파일을 불러온다!
        // -> 당연히 엑시오스 라이브러리를 불러오면 사용가능!
        // -> 엑시오스 이름은 axios 로 정해져 있음!!!
        // ((구문))
        // axios.get(파일경로).then(result=>{코드})
        // -> 앞의 get메서드로 파일을 로딩하고
        // -> 로딩이 완료되면 then()메서드가 실행됨!
        // 변수 result는 제이슨 파일 객체임!

        // [엑시오스 에러처리]
        // then().catch(err=>console.log(err));
        // then()메서드 뒤에 catch()메서드를 이어씀
        // JS의 try/catch구문처리와 유사함!


        // 제이슨 파일이 그 크기가 커서 시간이 걸려도
        // 엑시오스 구문을 사용하면 데이터 로딩후
        // 다음 메서드를 지연하고 있다가 로딩후 호출함!
        // 이런 호출방식을 비동기 호출방식이라고 한다!
        // JS에서 프라미스방식으로 불리기도함!
        // 데이터가 오고나면 필요한 메서드 호출!
        // 여기서는 제이슨 다 부르고 나면 변수에
        // 값을 할당하는 뮤테이션스 메서드를 호출한다!
        
      }, ///////// initData /////////
    },
  }); /////////// 뷰엑스 인스턴스 ////////
  
  // 내보내기
  export default store;
  