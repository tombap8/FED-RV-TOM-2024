// 사용자 정보 입력 및 리스트 출력 컴포넌트
// Firebase와 연결된 사용자 정보 입력 및 리스트 출력 컴포넌트

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../js/firebaseConfig";

// 디자인 적용을 위한 CSS 파일 import
import "../css/user_form.scss"; // CSS 파일 import

const UserFormList = () => {

    // [1] 상태변수 정의
    // 사용자 이름 상태변수
    const [userName, setUserName] = useState("");
    // 사용자 나이 상태변수 (숫자형)
    const [userAge, setUserAge] = useState(0);
    // 파이어베이스에서 가져온 사용자 목록 상태변수
    const [userList, setUserList] = useState([]);

    // [2] 사용자 데이터 가져오기 함수 //////
    // 파이어베이스에서 사용자 목록을 가져오는 함수
    const getUserList = async () => {
        // async/await를 사용하여 비동기적으로 데이터를 가져옵니다.
        // 비동기 함수는 async 키워드로 정의합니다.
        // 파이어베이스의 'users' 컬렉션의 모든 문서 가져오기
        const allCollection = 
            await getDocs(collection(db, 'users'));
            // await는 비동기 함수에서 사용하여
            // Promise가 해결될 때까지 기다립니다.
            // getDocs는 Firestore에서 문서를 가져오는 함수입니다.
            // collection은 Firestore에서 컬렉션을 참조하는 함수입니다.
            // 'users' 컬렉션의 모든 문서를 가져오기 위해
            // collection(db, 'users')를 사용합니다.

            // 가져온 문서들을 배열로 변환하기
            // 비동기코드로 가져온 후 데이터를 할당하는 아래 코드가
            // 실행된다!
            const userListArray = allCollection.docs.map(
                (doc) => {
                    console.log(doc.id, " => ", doc.data());
                    return ({id: doc.id, ...doc.data()});
                }
            );

            // 사용자 리스트 상태 변수를 업데이트함!
            setUserList(userListArray);
            // setUserList는 상태변수를 업데이트하는 함수입니다.

    } // 사용자 목록을 가져오는 함수 //////////////

    // [3] 사용자 추가 함수 //////////////
    const addUser = () => {
        // 사용자 정보를 파이어베이스에 추가하는 함수
    }

    // [4] 랜더링 후 실행 구역 /////////////
    useEffect(()=>{
        // 사용자 정보를 DB에서 가져오는 함수 호출
        getUserList();
    },[userList]);

    // 리턴 코드구역 //////////////
  return (
    <div className="user-form">
      <h2>Firebase Users</h2>
      {/* 이름 입력 필드 */}
      <label htmlFor="unm">이름:</label>
      <input id="unm" type="text" placeholder="이름을 입력하세요" />
      {/* 나이 입력 필드 */}
      <label htmlFor="age">나이:</label>
      <input id="age" type="number" placeholder="나이을 입력해주세요" />
      {/* 사용자 추가 버튼 */}
      <button>사용자 추가</button>

      <br />
      <br />
      <hr />

      {/* 사용자 리스트 출력 */}
      <div className="user-list">
        <h2>사용자 리스트</h2>
        <ul>
            {userList.map((user) => (
                <li key={user.id}>
                {user.name} ({user.age}세)
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default UserFormList;
