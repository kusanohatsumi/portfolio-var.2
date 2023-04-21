import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
export const Slider = () => {
    const workItem = {
        0:{
            id:1,
            name:"Tomoni",
            photo:"tomoni.svg",
        },
        1:{
            id:2,
            name:"YORIDOKORO",
            photo:"yoridokoro.svg",
        },
        2:{
            id:3,
            name:"まちたん",
            photo:"machitan.svg",
        },

    }

  return (
    <div className='card slider__wrapper'>
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
                // パラメータを設定
                prevEl: "#button_prev",
                nextEl: "#button_next"
            }}
            pagination={{ 
                clickable: true,
                el: "#pagination"
             }}
        >
            <SwiperSlide><img src={`${process.env.PUBLIC_URL}/img/${workItem[2].photo}`} alt="サムネイル" /></SwiperSlide>
            <SwiperSlide><img src={`${process.env.PUBLIC_URL}/img/${workItem[1].photo}`} alt="サムネイル" /></SwiperSlide>
            <SwiperSlide><img src={`${process.env.PUBLIC_URL}/img/${workItem[0].photo}`} alt="サムネイル" /></SwiperSlide>
        </Swiper>
        <div id="button_prev" className="swiper-button-prev btn"></div>
        <div id="button_next" className="swiper-button-next btn"></div>
        <div id="pagination" className="swiper-pagination"></div>
    </div>

  )
}
