// 사용자 정보 입력 및 리스트 출력 컴포넌트
// Firebase와 연결된 사용자 정보 입력 및 리스트 출력 컴포넌트
import '../css/user_form.scss'; // CSS 파일 import
const UserFormList = () => {
  return (
    <div className="user-form">
      <h2>Firebase Users</h2>
      {/* 이름 입력 필드 */}
        <input 
        type="text" 
        placeholder="이름을 입력하세요"
        />
        {/* 나이 입력 필드 */}
        <input
        type="number"
        placeholder="나이을 입력해주세요"
        />
        {/* 사용자 추가 버튼 */}
        <button>사용자 추가</button>
    </div>
  );
};

export default UserFormList;
