// 서브 페이지 JS - content.js

// 메뉴를 넣기위한 공통함수 불러오기
import comFn from "./common.js";
comFn();//실행!


// 도깨비 GNB 데이터 불러오기
import gnbData from "../data/gnb_data.js";
// 0. GNB 데이터 바인딩하기
$(".gnb").html(`
    <ul class="fx-box">
      ${Object.keys(gnbData)
        .map(
          (v) => `
        <li>
          <a href="#">
            ${
              v +
              (gnbData[v] == "없음"
                ? ""
                : '<i class="fa-solid fa-chevron-down"></i>')
            }
            
          </a>
          ${
            gnbData[v] == "없음"
              ? ""
              : `
                <!-- 서브메뉴 -->
                <aside class="smenu">
                  <div class="inbox">
                    <h2>${v}</h2>
                    <ol>
                    ${gnbData[v]
                      .map(
                        (v2) => `
                        <li>
                          <a href="#">${v2}</a>
                        </li>
                      `
                      )
                      .join("")}
                    </ol>
                  </div>
                </aside>
                
                `
          }
        </li>
        `
        )
        .join("")}
    </ul>
  `);