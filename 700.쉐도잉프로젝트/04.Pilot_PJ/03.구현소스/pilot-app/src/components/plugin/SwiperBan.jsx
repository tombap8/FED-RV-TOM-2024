import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./css/swiper_ban.scss";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다!
// (여기서는 페이지네이션, 네비게이션,자동넘김)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SwiperBan({ catName }) {
  // catName - 카테고리 분류명

  // 리스트만들기 함수 ////
  const makeList = (num) => {
    // num - 슬라이드 개수
    let temp = [];
    for (let x = 0; x < num; x++) {
      temp[x] = (
        <SwiperSlide key={x}>
          {
            // 남성일 경우 세번째 슬라이드 동영상임
            catName == "men" && x == 2 ? (
              <video
                src={"/images/sub/" + catName + "/banner/cgv.mp4"}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                muted
                loop
                autoPlay
              />
            ) : (
              <img
                src={
                  "/images/sub/" + catName + "/banner/ban" + (x + 1) + ".png"
                }
              />
            )
          }
        </SwiperSlide>
      );
    } /////////// for /////////////

    // 배열을 리턴
    return temp;
  }; ///////////// makeList 함수 //////////

  // 리턴 코드구역 /////////
  return (
    <>
      <Swiper
        // 한번에 보여줄 슬라이드수
        slidesPerView={1}
        // 슬라이드 사이 간격(단위없는 px수)
        spaceBetween={0}
        // 양쪽이동 네이게이션 사용여부(모듈import필수!)
        navigation={true}
        // 블릿표시 페이지네이션 사용여부(모듈import필수!)
        pagination={{
          clickable: true, //블릿클릭이동옵션
        }}
        // 자동넘김 기능 모듈 셋팅
        autoplay={{
          delay: 3000, // 대기시간 3초
          disableOnInteraction: false, // 인터렉션 없앰속성 false
          // -> 인터렉션을 살려놔야 터치후 다시 자동넘김 작동함!
        }}
        // ★스와이퍼 추가사용 모듈 등록 속성(사용시 등록필수!)
        modules={[Navigation, Pagination, Autoplay]}
        // 무한이동슬라이드 설정
        loop={true}
        className="mySwiper"
      >
        {
          // 리스트 개수를 카테고리별로 조정
          makeList(catName === "style" ? 5 : 3)
        }
      </Swiper>
    </>
  );
}
