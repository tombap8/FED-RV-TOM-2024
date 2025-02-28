// DC.com 스와이퍼 비디오 컴포넌트 - SwiperVid.jsx

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
// import { faHand } from "@fortawesome/free-solid-svg-icons";
// import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

// 스와이퍼 비디오 모듈 CSS 불러오기
import "./css/swiper_vid.scss";

// 스와이퍼 비디오 모듈 데이터 불러오기
import { swVidData } from "../../js/data/swiper_vid";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다!
// (여기서는 네비게이션)
import { Navigation } from "swiper/modules";

export default function SwiperVid({ catName }) {
  // catName - 데이터 선택용 분류명

  // 선택 데이터 변수할당
  const selData = swVidData[catName];
  console.log(selData);

  // 리턴 코드구역 /////////
  return (
    <>
      <Swiper
        // 한번에 보여줄 슬라이드수
        slidesPerView={4}
        // 슬라이드 사이 간격(단위없는 px수)
        spaceBetween={20}
        // 양쪽이동 네이게이션 사용여부(모듈import필수!)
        navigation={true}
        // 스와이퍼 사이즈별 슬라이드 수 변경하기
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        // ★스와이퍼 추가사용 모듈 등록 속성(사용시 등록필수!)
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          // 배열 데이터만큼 반복하여 슬라이드 생성!
          selData.map((v, i) => (
            <SwiperSlide key={i}>
              <section className="sw-inbox">
                {/* 동영상 이미지박스 */}
                <div className="vid-img">
                  <img src={v.isrc} alt={v.tit} />
                  {/* 폰트어썸 아이콘 */}
                  <FontAwesomeIcon
                    icon={faCirclePlay}
                    style={{
                      position: "absolute",
                      bottom: "55%",
                      left: "10%",
                      color: "#fff",
                      fontSize: "50px",
                    }}
                  />
                </div>
                {/* 동영상 타이틀 박스 */}
                <div className="vid-tit">
                  <h4>{v.cat}</h4>
                  <h3>{v.tit}</h3>
                </div>
              </section>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
