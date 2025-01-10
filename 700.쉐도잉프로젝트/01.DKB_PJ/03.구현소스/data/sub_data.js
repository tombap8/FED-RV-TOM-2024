// 서브 페이지 요소 데이터 JS - sub_data.js

export default {
  // 로그인 소스
  login: `    
    <!-- 2-2.타이틀 -->
    <h2 class="stit">Log In</h2>
    <!-- 2-3.컨텐츠박스 -->
    <section class="scont">
        <!-- 
            [ form 요소 ]
            입력데이터를 서버로 전송하기 위한 요소
            (속성)
            action - 전송할 서버처리 페이지
            method - 1) post : post전달방식
                    -> 페이지에 숨겨서 전송함
                    (민감한 데이터 처리시 사용)
                    2) get : get전달방식
                    -> URL 뒤에 키,값 쌍으로 전달
                    (페이지 데이터 셋팅 등 사용)

            -->
        <form action="process.php" method="post">
            <!-- 아이디박스 -->
            <div class="minput">
                <label for="mid">아이디</label>
                <input type="text" name="mid" id="mid" maxlength="10" placeholder="아이디를 입력해주세요" />
                <!-- name속성은 서버쪽 사용용도로 작성함(id명과 같은 이름 많이씀) -->
            </div>
            <div class="minput">
                <!-- 비번박스 -->
                <label for="mpw">비밀번호</label>
                <input type="password" name="mpw" id="mpw" maxlength="10" placeholder="비밀번호를 입력해주세요" />
            </div>
            <!-- 버튼박스 -->
            <div class="btnbx">
                <input type="submit" id="sbtn" value="LOGIN" />
                <!-- type이 submit이면
                form요소 안의 모든 입력요소를
                target 페이지(action값)로 전송하는
                기능버튼이다! -->
            </div>
            <!-- 기타링크 -->
            <div class="addbx">
                <span>
                    <input type="checkbox" id="chkbx" name="chkbx">
                    <label class="fa-regular fa-circle-check" for="chkbx"></label>
                    <label for="chkbx">아이디저장</label>
                </span>
                <span>
                    <a href="#">아이디찾기</a>
                </span>
                <span>
                    <a href="#">비밀번호찾기</a>
                </span>
                <span>
                    <a href="#">회원가입</a>
                </span>
            </div>
        </form>
    </section>            
    `,
  // 회원가입 소스
  join: `  
    <!-- 2-2.타이틀 -->
    <h2 class="stit">Member</h2>
    <!-- 2-3.컨텐츠박스 -->
    <section class="scont">
        <form action="process.php" method="post">
            <ul>
                <!-- 1.아이디 -->
                <li>
                    <label class="itit" for="mid">아이디</label>
                    <input type="text" name="mid" id="mid" maxlength="20" placeholder="아이디를 입력해주세요!">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 2.비밀번호 -->
                <li>
                    <label class="itit" for="mpw">비밀번호</label>
                    <input type="password" name="mpw" id="mpw" maxlength="20" placeholder="비밀번호를 입력해주세요!">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 3.비밀번호확인 -->
                <li>
                    <label class="itit" for="mpw2">비밀번호확인</label>
                    <input type="password" name="mpw2" id="mpw2" maxlength="20" placeholder="비밀번호확인을 입력해주세요!">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 4.이름 -->
                <li>
                    <label class="itit" for="mnm">이름</label>
                    <input type="text" name="mnm" id="mnm" maxlength="20" placeholder="이름을 입력해주세요!">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 5.성별 -->
                <li>
                    <span class="itit">성별</span>                       
                    <label for="gen1">남성</label>
                    <input type="radio" name="gen" id="gen1">
                    <label for="gen2">여성</label>
                    <input type="radio" name="gen" id="gen2" checked>
                    <!-- 
                        라디오버튼의 name속성을
                        같은 이름으로 쓰면 그룹핑되어서
                        하나만 선택된다!
                        checked 속성은 처음 기본선택옵션임
                        -->
                </li>
                <!-- 6.이메일 -->
                <li>
                    <label class="itit" for="email1">이메일</label>
                    <input type="text" name="email1" id="email1" placeholder="이메일앞주소">
                    <span class="gol">@</span>
                    <select name="seleml" id="seleml">
                        <option value="init">
                            선택해주세요
                        </option>
                        <option value="naver.com">
                            naver.com
                        </option>
                        <option value="daum.net">
                            daum.net
                        </option>
                        <option value="hotmail.com">
                            hotmail.com
                        </option>
                        <option value="hanmail.net">
                            hanmail.net
                        </option>
                        <option value="gmail.com">
                            gmail.com
                        </option>
                        <option value="free">
                            직접입력
                        </option>
                    </select>
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 7.이메일 뒷주소 직접입력창 -->
                <li>
                    <label for="email2" class="ee">이메일 뒷주소 직접입력</label>
                    <input type="text" name="email2" id="email2" placeholder="이메일뒷주소">
                </li>
                <!-- 8.서브밋 버튼 -->
                <li>
                    <input id="btnj" type="submit" value="가입하기">
                    <!-- submit버튼은 클릭시 form요소의
                    모든 입력내용을 action지정 페이지로
                    전송한다! -->

                    <!-- 
                        [ 참고: submit기능 ]
                        1. 일반button 요소가 form요소안에
                        위치하면 클릭시 서브밋된다!
                        2. 어떤 요소라도 JS코드로 form요소
                        의 submit() 내장함수를 호출하면
                        서브밋된다!

                        (실제예코드)

                        <button>버튼전송</button>

                        <a href="#" onclick="document.querySelector('form').submit()">a요소전송</a>
                        -->
                </li>
            </ul>
        </form>
    </section>
            
  `,
  // 인물관계도 소스
  cat: `  
    <!-- 인물관계도 이미지 -->
    <div class="catimg-box">
        <img id="catimg" src="./images/cat.png" alt="인물관계도">
    </div>
`,
}; //// 데이터객체 /////
