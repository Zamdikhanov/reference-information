import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { sliders } from "./constants";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import css from "./Slider.module.scss";


function Slider() {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <div className={css.wrap}>
            <div className={css.slider_container}>
                <div className={css.slider_container__content}>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={500}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        grabCursor={true}
                        autoplay={{ delay: 5000 }}
                        className="swiper"
                    >
                        {
                            sliders.map(slide => (
                                <SwiperSlide key={slide.id}>
                                    <div className={css.slide} style={{ backgroundImage: `url(${slide.bgImgUrl})` }}>
                                        <div className={css.slide__text_block}>
                                            <h3 className={css.title}>{slide.title}</h3>
                                            <div className={css.text}>{slide.text}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <div ref={navigationPrevRef} className={css.prev_button}>{String.fromCharCode(10094)}</div>
                        <div ref={navigationNextRef} className={css.next_button}>{String.fromCharCode(10095)}</div>
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
