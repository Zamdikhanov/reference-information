import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { sliders } from "./constants";
import 'swiper/scss';
import 'swiper/scss/navigation';
import "swiper/scss/pagination";
import css from "./Slider.module.scss";

function Slider() {
    return (
        <div className={css.wrap}>
            <div className={css.slider_container}>
                <div className={css.slider_container__content}>
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={1000}
                        pagination={{
                            type: "fraction",
                            clickable: true
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        autoplay={{ delay: 5000 }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="mySwiper"
                    >
                        {
                            sliders.map(slide => (
                                <SwiperSlide key={slide.id}>
                                    <div className={css.slide} style={{ backgroundImage: `url(${slide.bgImgUrl})` }}>
                                        <h3>{slide.title}</h3>
                                        <div>{slide.text}</div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={css.slider_container__information_block}>
                    <h3 className={css.information_block__title}>Миссия компании: </h3>
                    Производить светильники высокого качества
                    по доступной цене, предвосхищая потребности клиента, обеспечивая лучший сервис и широкий ассортимент.
                </div>
            </div>
        </div>
    );
}

export default Slider;
