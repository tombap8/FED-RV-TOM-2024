// 사용자 정보 입력 및 리스트 출력 컴포넌트
// Firebase와 연결된 사용자 정보 입력 및 리스트 출력 컴포넌트
/*********************************************************** 
  [ 파이어베이스를 이용한 DB연동 구현]
   - 핵심기능 : CRUD (Create, Read, Update, Delete)
    1. 사용자 정보 입력 (이름, 나이, 주소) : addUser()
    2. 사용자 정보 리스트 출력 (이름, 나이, 주소) : getUserList()
    3. 사용자 정보 수정 (이름, 나이, 주소) : addUser()
    4. 사용자 정보 삭제 (이름, 나이, 주소) : deleteUser()
    ________________________________________________________

    - 파이어베이스 핵심 메서드
    1. addDoc() : Firestore에 문서를 추가하는 메서드
    -> addDoc(데이터베이스, 컬렉션, 데이터)
    예시) addDoc(db, collection(db, "users"), { name: userName })

    2. getDocs() : Firestore에서 문서를 가져오는 메서드
    -> getDocs(컬렉션(데이터베이스, 컬렉션명))
    예시) getDocs(collection(db, "users"))

    3. doc() : Firestore에서 문서를 참조하는 메서드
    -> doc(데이터베이스, 컬렉션명, 문서ID)
    예시) doc(db, "users", "문서ID")
    -> 문서ID는 Firestore에서 자동으로 생성됨!
    -> doc() 메서드는 컬렉션에서 특정 문서를 참조하는 메서드입니다.
    -> 하나의 레코드와 동일한 개념으로 이해하면 됩니다.

    4. deleteDoc() : Firestore에서 문서를 삭제하는 메서드
    -> deleteDoc(문서 참조)
    예시) deleteDoc(doc(db, "users", "문서ID"))

    5. updateDoc() : Firestore에서 문서를 수정하는 메서드
    -> updateDoc(문서 참조, 수정할 데이터)
    예시) updateDoc(doc(db, "users", "문서ID"), { name: userName })

    6. collection() : Firestore에서 컬렉션을 참조하는 메서드
    -> collection(데이터베이스, 컬렉션명)
    예시) collection(db, "users")

    7. setDoc() : Firestore에서 문서를 설정하는 메서드
    -> setDoc(문서 참조, 데이터)
    예시) setDoc(doc(db, "users", "문서ID"), { name: userName })
    -> setDoc() 메서드는 updateDoc()와 비슷하지만,
    -> 문서가 없으면 새로 생성하고, 있으면 덮어씌우는 메서드입니다.
    -> updateDoc() 메서드는 문서가 없으면 에러가 발생합니다.
    -> setDoc() 메서드는 문서를 생성하거나 수정하는 메서드입니다.

***********************************************************/

import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
} from "firebase/firestore";
import { db } from "../js/firebaseConfig";

// 디자인 적용을 위한 CSS 파일 import
import "../css/user_form.scss"; // CSS 파일 import

const UserFormList = () => {
  // [1] 상태변수 정의 //////////////
  // (1) 사용자 이름
  const [userName, setUserName] = useState("");
  // (2) 사용자 나이 (숫자형)
  const [userAge, setUserAge] = useState(0);
  // (3) 사용자 주소
  const [userAddr, setUserAddr] = useState("");
  // (4) 파이어베이스에서 가져온 사용자 목록
  const [userList, setUserList] = useState([]);
  // (5) 수정모드여부 (true/false)
  const [isEditMode, setIsEditMode] = useState(false);
  // (6) 수정할 사용자 ID
  const [editUserId, setEditUserId] = useState(null);
  // (7) 정렬 필드 및 순서 상태 추가
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  // (8) 페이지네이션을 위한 상태변수 추가
  // 페이지당 문서수
  const PAGE_SIZE = 3; 
  // 페이지네이션 페이지수
  const [pageCount, setPageCount] = useState(0); 
  // 현재 페이지번호
  const [currentPage, setCurrentPage] = useState(1);
  // 각 페이지 시작점을 적용하기 위한 문서저장 배열변수
  const [pageStartDoc, setPageStartDoc] = useState([]); 
  // -> pageStartDoc변수에 배열값 셋팅을 위해 초기화함수가 필요함!
  // -> initPagenation() 함수를 이용해 배열값 셋팅


  // [2] 사용자 데이터 가져오기 함수 //////
  // 파이어베이스에서 사용자 목록을 가져오는 함수
  const getUserList = async (page, startDoc) => {
    // page는 현재페이지, startDoc는 이전페이지 데이터 배열
    // -> 이전페이지 데이터 배열이 왜 필요하지?
    // 이유는 startAfter라고 하는 함수에서 시작 문서가
    // 이전 페이지의 마지막 문서를 넣어야 하므로 배열 데이터를 
    // 이전 페이지것을 가져와야 한다!

    // async/await를 사용하여 비동기적으로 데이터를 가져옵니다.
    // 비동기 함수는 async 키워드로 정의합니다.

    // 1. 컬렉션 선택하기
    const setCollection = collection(db, "users");

    // 쿼리변수 선언
    let q;

    // 2. 정렬 필드와 순서 설정하기
    // 페이징 적용을 위한 분기
    // 2-1. 1페이지인 경우
    if(page === 1) {      
      q = query(
        setCollection, 
        orderBy(sortField, sortOrder),
        limit(PAGE_SIZE)
      );
      // orderBy(정렬필드,정렬순서) 메서드를 사용하여
      // 정렬 필드와 순서를 설정하고
      // query() 메서드를 사용하여 쿼리를 생성함
    } // if /////

    // 2-2. 1페이지가 아닌 경우
    else{
      q = query(
        setCollection, 
        orderBy(sortField, sortOrder),
        startAfter(startDoc[page - 1]), // 이전 페이지의 마지막 문서이후부터 시작!
        limit(PAGE_SIZE)
      );
      console.log('이전페이지 마지막문서:',startDoc[page - 1]);
    } // else /////

    // 3. 정렬된 데이터로 'users' 컬렉션의 모든 문서 가져오기
    const allCollection = await getDocs(q);
    // await는 비동기 함수에서 사용하여
    // Promise가 해결될 때까지 기다립니다.
    // getDocs는 Firestore에서 문서를 가져오는 함수입니다.
    // collection은 Firestore에서 컬렉션을 참조하는 함수입니다.
    // 'users' 컬렉션의 모든 문서를 가져오기 위해
    // collection(db, 'users')를 사용합니다.

    // 4. 가져온 문서들을 배열로 변환하기
    const userListArray = allCollection.docs.map((doc) => {
      console.log(doc.id, " => ", doc.data());
      return { id: doc.id, ...doc.data() };
    });
    // 비동기코드로 가져온 후 데이터를 할당하는 아래 코드가
    // 실행된다!
    // allCollection 에 담긴 파이어베이스 컬렉션에서
    // 하위 문서들을 배열로 받기위해서는 .docs를 사용하면 됨.

    // 하위에 id는 고유id로 파이어베이스에서 생성된 것
    // ...doc.data()라고 스프레드 연산자를 쓴 이유는
    // {name: 'test', age: 20, addr: 'seoul'} 이라고
    // 나오므로 내부의 데이터만 가져오기 위해 사용한 것이다!
    // 결과 :
    // {id: 'sdfasd56f75f78g', name: 'test', age: 20, addr: 'seoul'}

    // 5. 사용자 리스트 상태 변수를 업데이트함!
    setUserList(userListArray);
    // setUserList는 상태변수를 업데이트하는 함수입니다.

    // 6. 현재 페이지 업데이트
    setCurrentPage(page);
  }; // 사용자 목록을 가져오는 함수 //////////////

  // [3] 사용자 추가 함수 //////////////
  const addUser = async () => {
    // async/await를 사용하여 비동기적으로 데이터를 추가합니다.
    // 비동기 함수는 async 키워드로 정의합니다.

    // 사용자 정보를 파이어베이스에 추가하는 함수
    // 이름과 나이가 입력되었는지 확인하기
    if (userName && userAge && userAddr) {
      // 이름, 나이, 주소가 모두 입력되었는지 확인합니다.

      // 수정모드 분기하기 ///
      if (isEditMode && editUserId) {
        // editMode가 true이고 editUserId가 존재할 때
        // 수정모드일 때는 updateDoc()을 사용하여 문서를 수정합니다.
        await updateDoc(doc(db, "users", editUserId), {
          name: userName,
          age: Number(userAge),
          addr: userAddr,
        });
      } /// if ///

      // 사용자 추가하기 //////////////////////
      else {
        // 사용할 컬렉션 가져오기 //
        const usersRef = collection(db, "users");

        // [최대값 idx 값을 찾기위한 쿼리]
        const maxIdxQuery = await getDocs(
          query(usersRef, orderBy("idx", "desc"), limit(1))
        );
        // -> idx는 사용자 목록에서 가장 큰 값을 찾기 위한 쿼리입니다.
        // -> orderBy("idx", "desc")는 idx를 기준으로 내림차순정렬
        // -> limit(1)은 정렬된 결과에서 첫 번째 문서만 가져옴
        // -> getDocs()는 쿼리 결과를 가져오는 함수

        // 최대값 변수에 숫자를 할당함
        let maxIdx = 0;
        // 쿼리 결과가 비어있지 않으면 최대값을 찾음
        if (!maxIdxQuery.empty) {
          const lastDoc = maxIdxQuery.docs[0].data();
          maxIdx = lastDoc.idx || 0;
        }
        // idx는 숫자형으로 변환하여 저장합니다.
        // lastDoc은 쿼리 결과에서 첫 번째 문서를 가져옵니다.
        // lastDoc.data()는 문서의 데이터를 가져옵니다.
        // lastDoc.idx는 문서의 idx 값을 가져옵니다.
        // 만약 idx 값이 없으면 0을 저장합니다.

        const newIdx = maxIdx + 1;

        // lastDoc.idx + 1은 다음 idx 값을 계산합니다.
        // -> 결과적으로 최대값+1을 계산하여 maxIdx에 저장합니다.

        // 파이어베이스의 'users' 컬렉션에 새로운 문서 추가하기
        await addDoc(usersRef, {
          idx: newIdx,
          name: userName,
          age: Number(userAge),
          // 나이는 숫자형으로 변환하여 저장합니다.
          addr: userAddr,
          // 날짜넣기 : 날짜객체를 넣으면 날짜형식으로 저장됨
          date: new Date(),
        });
        // addDoc은 Firestore에 문서를 추가하는 함수입니다.
        // collection은 Firestore에서 컬렉션을 참조하는 함수입니다.
        // 'users' 컬렉션의 모든 문서를 가져오기 위해
        // collection(db, 'users')를 사용합니다.
      } /// else ///

      // 입력된 기존 값 초기화하기 ///
      setUserName("");
      setUserAge(0);
      setUserAddr("");
      // 수정모드도 모두 초기화하기 ///
      setIsEditMode(false);
      setEditUserId(null);

      // 사용자 목록 업데이트 함수 호출 ///
      getUserList();
      // 이것을 호출해야 갱신된 사용자 목록이 화면에 나옴!
    } /// if ////
    else {
      // 이름, 나이, 주소가 모두 입력되지 않았을 때
      alert("이름, 나이, 주소를 모두 입력하세요!");
    } /// else ///
  }; // 사용자 추가 함수 //////////////

  // [4] 사용자 삭제 함수 //////////////
  const deleteUser = async (id) => {
    // 사용자를 삭제하는 함수
    // 파이어베이스의 'users' 컬렉션에서 사용자를 삭제하는 함수
    await deleteDoc(doc(db, "users", id));
    // deleteDoc은 Firestore에서 문서를 삭제하는 함수입니다.
    // doc은 Firestore에서 문서를 참조하는 함수입니다.
    // 'users' 컬렉션의 모든 문서를 가져오기 위해
    // doc(db, 'users', id)를 사용합니다.

    // 사용자 목록 업데이트 함수 호출 ///
    getUserList();
    // 이것을 호출해야 갱신된 사용자 목록이 화면에 나옴!
  }; // 사용자 삭제 함수 //////////////

  // [5] 사용자 수정 함수 //////////////
  const editUser = async (user) => {
    // 수정할 사용자정보를 user변수로 받아옴!

    // 수정모드업데이트
    setIsEditMode(true);

    // 수정할 사용자 id 업데이트
    setEditUserId(user.id);

    // 기존값을 입력필드에 넣어줌
    setUserName(user.name);
    setUserAge(user.age);
    setUserAddr(user.addr);
  }; // 사용자 수정하는 함수 //////////////

  // [6] 페이지네이션 초기화 함수 ////////
  const initPagination = async() => {
    // 1. 전체 문서가져오기
    const allDocs = await getDocs(
      query(collection(db, "users"), orderBy(sortField, sortOrder))
    );

    // 2. 전체 문서 데이터 구하기
    const allDocsData = allDocs.docs;

    // 3. 전체 문서 개수 구하기
    const totalDocs = allDocsData.length;
    // console.log('전체문서데이터:',allDocsData,'/개수',totalDocs);

    // 4. 페이지네이션 총 개수 구하기
    const pageNum = Math.ceil(totalDocs / PAGE_SIZE);
    console.log('페이징개수:',pageNum);

    // 5. 페이지네이션 상태변수에 저장하기
    setPageCount(pageNum);

    // (((★★★중요!!!★★★)))
    // 6. 각 페이지의 '이전 페이지 마지막 문서'를 저장함
    const startDoc = [];
    for(let i = PAGE_SIZE - 1; i < totalDocs; i += PAGE_SIZE) {
      startDoc.push(allDocsData[i]);
    } /// for ///

    console.log(startDoc);

    
  } ///////// initPagination /////////

  // 랜더링 후 실행 구역 /////////////
  useEffect(() => {
    // 페이지네이션 초기화함수 호출
    initPagination();
    // 사용자 정보를 DB에서 가져오는 함수 호출
    // getUserList();
  }, [sortField, sortOrder]);
  // ★★★ 정렬변경시 반영되게 하려면 의존성에 넣어준다!

  // 리턴 코드구역 //////////////
  return (
    <div className="user-form">
      <h2>Firebase Users</h2>
      {/* 이름 입력 필드 */}
      <label htmlFor="unm">이름:</label>
      <input
        id="unm"
        type="text"
        placeholder="이름을 입력하세요"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        // onChange 이벤트를 사용하여 입력값을 상태변수에 저장합니다.
      />
      {/* 나이 입력 필드 */}
      <label htmlFor="age">나이:</label>
      <input
        id="age"
        type="number"
        placeholder="나이을 입력해주세요"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
        // onChange 이벤트를 사용하여 입력값을 상태변수에 저장합니다.
      />

      {/* 주소 입력 필드 */}
      <label htmlFor="addr">주소:</label>
      <input
        id="addr"
        type="text"
        placeholder="주소을 입력해주세요"
        value={userAddr}
        onChange={(e) => setUserAddr(e.target.value)}
        // onChange 이벤트를 사용하여 입력값을 상태변수에 저장합니다.
      />

      {/* 사용자 추가 버튼 */}
      <button onClick={addUser}>
        {isEditMode ? "사용자 수정" : "사용자 추가"}
      </button>

      <br />
      <br />
      <hr />

      {/* 사용자 리스트 출력 */}
      <div className="user-list">
        <h2>사용자 리스트</h2>
        {/* 정렬옵션박스 */}
        {/* 정렬 옵션 선택 */}
        <div
          style={{
            backgroundColor: "#ccc",
            marginBottom: "1rem",
            padding: "0.5rem",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <label>정렬 기준:</label>
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="name">이름</option>
            <option value="age">나이</option>
            <option value="date">등록일</option>
          </select>
          &nbsp;&nbsp;
          <label>정렬 순서:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </select>
        </div>

        {/* 사용자 목록 */}
        <ul>
          {
            // 리스트 데이터가 0개 이상일 때만 출력함
            userList.length > 0 ? (
              userList.map((user) => (
                <li key={user.id}>
                  {/* 사용자이름 (나이) - 주소 */}
                  {user.name} ({user.age}세) 🏡{" "}
                  {"주소:" + user.addr ?? "주소없음"}
                  &nbsp;
                  <small style={{ display: "block" }}>
                    [
                    {
                      // 날짜형식 데이터 변경해서 넣기
                      // toJSON() -> YYYY-MM-DDThh:mm:ss
                      user.date
                        .toDate()
                        .toJSON()
                        .slice(2, 2 + 8) // YY-MM-DD
                      // 요즘은 substr() 안쓰고 새로나온 slice()를씀
                      // slice(시작순번,끝순번)
                      // 뒤의 끝순번을 개수로 사용하고 싶으면
                      // slice(시작순번, 시작순번+개수)
                    }{" "}
                    &nbsp; (
                    {
                      // 시간형식으로 출력하기
                      user.date
                        .toDate()
                        // toLocaleTimeString(국가코드,{출력형식})
                        .toLocaleTimeString("ko-KR", {
                          hour: "2-digit", // 2자릿수
                          minute: "2-digit", // 2자릿수
                          second: "2-digit", // 2자릿수
                          hour12: true, // 12시간제(오전/오후표시)
                        })
                    }
                    )] &nbsp;
                    <button
                      onClick={() => {
                        // 수정모드 실행 함수 호출!
                        editUser(user);
                        // 수정할 사용자 정보를 editUser() 함수에 전달함
                      }}
                    >
                      수정
                    </button>
                    &nbsp;
                    <button
                      onClick={() =>
                        window.confirm("삭제하시겠습니까?") &&
                        deleteUser(user.id)
                      }
                    >
                      삭제
                    </button>
                  </small>
                </li>
              ))
            ) : (
              <li>사용자 정보가 없습니다.</li>
            )
          }
        </ul>
        {/* 페이징 표시 박스 */}
        <div
          style={{
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          {
            // 특정개수만큼 배열 만들어 돌리기
            // Array.from({length: 개수},전달값변경함수)
            Array.from({ length: 5 }, (_, i) => i + 1)
            // 전달값 변경함수가 생성한 값을 page변수가 받음
            .map((page) => (
              <button
                key={page}
                style={{
                  margin: "0 5px",
                  fontWeight: currentPage === page ? "bold" : "normal",
                  backgroundColor: currentPage === page ? "#444" : "#ddd",
                  color: currentPage === page ? "#fff" : "#000",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {page}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default UserFormList;
