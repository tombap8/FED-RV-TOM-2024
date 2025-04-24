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
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../js/firebaseConfig";

// 디자인 적용을 위한 CSS 파일 import
import "../css/user_form.scss"; // CSS 파일 import

const UserFormList = () => {
  // [1] 상태변수 정의 //////////////
  // 사용자 이름 상태변수
  const [userName, setUserName] = useState("");
  // 사용자 나이 상태변수 (숫자형)
  const [userAge, setUserAge] = useState(0);
  // 사용자 주소 상태변수
  const [userAddr, setUserAddr] = useState("");
  // 파이어베이스에서 가져온 사용자 목록 상태변수
  const [userList, setUserList] = useState([]);

  // [2] 사용자 데이터 가져오기 함수 //////
  // 파이어베이스에서 사용자 목록을 가져오는 함수
  const getUserList = async () => {
    // async/await를 사용하여 비동기적으로 데이터를 가져옵니다.
    // 비동기 함수는 async 키워드로 정의합니다.
    // 파이어베이스의 'users' 컬렉션의 모든 문서 가져오기
    const allCollection = await getDocs(collection(db, "users"));
    // await는 비동기 함수에서 사용하여
    // Promise가 해결될 때까지 기다립니다.
    // getDocs는 Firestore에서 문서를 가져오는 함수입니다.
    // collection은 Firestore에서 컬렉션을 참조하는 함수입니다.
    // 'users' 컬렉션의 모든 문서를 가져오기 위해
    // collection(db, 'users')를 사용합니다.

    // 가져온 문서들을 배열로 변환하기
    // 비동기코드로 가져온 후 데이터를 할당하는 아래 코드가
    // 실행된다!
    const userListArray = allCollection.docs.map((doc) => {
      console.log(doc.id, " => ", doc.data());
      return { id: doc.id, ...doc.data() };
    });

    // 사용자 리스트 상태 변수를 업데이트함!
    setUserList(userListArray);
    // setUserList는 상태변수를 업데이트하는 함수입니다.
  }; // 사용자 목록을 가져오는 함수 //////////////

  // [3] 사용자 추가 함수 //////////////
  const addUser = async () => {
    // async/await를 사용하여 비동기적으로 데이터를 추가합니다.
    // 비동기 함수는 async 키워드로 정의합니다.

    // 사용자 정보를 파이어베이스에 추가하는 함수
    // 이름과 나이가 입력되었는지 확인하기
    if (userName && userAge) {
      // 파이어베이스의 'users' 컬렉션에 새로운 문서 추가하기
      await addDoc(collection(db, "users"), {
        name: userName,
        age: Number(userAge),
        // 나이는 숫자형으로 변환하여 저장합니다.
        addr: userAddr,
      });
      // addDoc은 Firestore에 문서를 추가하는 함수입니다.
      // collection은 Firestore에서 컬렉션을 참조하는 함수입니다.
      // 'users' 컬렉션의 모든 문서를 가져오기 위해
      // collection(db, 'users')를 사용합니다.

      // 입력된 기존 값 초기화하기 ///
      setUserName("");
      setUserAge(0);
      setUserAddr("");

      // 사용자 목록 업데이트 함수 호출 ///
      getUserList();
      // 이것을 호출해야 갱신된 사용자 목록이 화면에 나옴!
    } /// if ////
  }; // 사용자 추가 함수 //////////////

  // [4] 랜더링 후 실행 구역 /////////////
  useEffect(() => {
    // 사용자 정보를 DB에서 가져오는 함수 호출
    getUserList();
  }, []); // 처음 한번만 실행되도록 빈 배열을 넣어줍니다.
//   }, [userList]); -> 이렇게하면 성능상 문제 발생함!

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
      <button onClick={addUser}>사용자 추가</button>

      <br />
      <br />
      <hr />

      {/* 사용자 리스트 출력 */}
      <div className="user-list">
        <h2>사용자 리스트</h2>
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age}세) - {user.addr}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserFormList;
