// DC.com - 회원가입 페이지 컴포넌트 - Member.jsx

import React from "react";

// 모듈 CSS 불러오기 ///
import '../../css/pages/member.scss';
import { Link } from "react-router-dom";

function Member() {
  return (
    <div className="outbx">
      <section className="membx">
        <h2>Join Us</h2>
        <form action="process.php" method="post">
          <ul>
            <li>
              {/* 1. 아이디 */}
              <label>ID : </label>
              <input
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
            <li>
              <label>Confirm Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="Please enter your Confirm Password"
              />
            </li>
            <li>
              <label>User Name : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="Please enter your Name"
              />
            </li>
            <li>
              <label>Address</label>
            </li>
            <li>
              <label>Email : </label>
              <input
                type="text"
                maxLength="50"
                placeholder="Please enter your Email"
              />
            </li>
            <li style={{ overflow: "hidden" }}>
              <button className="sbtn">Submit</button>
            </li>
            <li>
              Are you already a Member?
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}

export default Member;
