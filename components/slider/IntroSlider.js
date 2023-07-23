import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider = () => {

    const data = [
        {
            img: "3.jpg",
            title: "Meme 3",
        },
        {
            img: "4.jpg",
            title: "Meme 4",
        },
        {
            img: "5.jpg",
            title: "Meme 5",
        },
        {
            img: "6.jpg",
            title: "Meme 6",
        },
    ];

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".intro_prev",
                    nextEl: ".intro_next",
                }}
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="slider-item">
                            <img
                                src={`/images/items/${item.img}`}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </SwiperSlide>
                ))}

                <div className="arrows">
                    <span className="intro_prev">
                        <FaArrowLeft color='#dee2e6'/>
                    </span>
                    <span className="intro_next">
                        <FaArrowRight color='#dee2e6'/>
                    </span>
                </div>
            </Swiper>
        </>
    );
};

export default IntroSlider;

