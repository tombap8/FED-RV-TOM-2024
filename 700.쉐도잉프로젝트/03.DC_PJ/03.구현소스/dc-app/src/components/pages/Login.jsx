// DC.com - 로그인 페이지 컴포넌트 - Login.jsx

import React from "react";

// 모듈 CSS 불러오기 : member.scss와 동일
import '../../css/pages/member.scss';

function Login() {
  return (
    <div className="outbx">
      <section className="membx" style={{ minHeight: "300px" }}>
        <h2>LOG IN</h2>
        <form method="post" action="process.php">
          <ul>
            <li>
              <label>ID : </label>
              <input
                id="user-id"
                type="text"
                maxLength="20"
                placeholder="Please enter your ID"
              />
            </li>
            <li>
              <label>Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="Please enter your Password"
              />
            </li>
            <li style={{ overflow: "hidden" }}>
              <button className="sbtn">Submit</button>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}

export default Login;
