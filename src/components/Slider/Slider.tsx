import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { sliders } from './constants';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import css from './Slider.module.scss';

function Slider() {
    const [isProgressbarActive, setIsProgressbarActive] = useState(false);
    const navigationPrevRef = React.useRef<HTMLDivElement>(null);
    const navigationNextRef = React.useRef<HTMLDivElement>(null);
    function changeProgressbarStyle(): void {
        setIsProgressbarActive(false);
        setTimeout(() => {
            setIsProgressbarActive(true);
        }, 100);
    }
    return (
        <div className={css.wrap}>
            <div className={css.slider_container}>
                <div className={css.slider_container__content}>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={500}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={{
                            prevEl: navigationPrevRef.current ? navigationPrevRef.current : null,
                            nextEl: navigationNextRef.current ? navigationNextRef.current : null,
                        }}
                        onBeforeInit={(swiper) => {
                            /* @ts-ignore */
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            /* @ts-ignore */
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        onSlideChange={() => changeProgressbarStyle()}
                        grabCursor={true}
                        autoplay={{ delay: 5000 }}
                        className="swiper"
                    >
                        {sliders.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div
                                    className={css.slide}
                                    style={{ backgroundImage: `url(${slide.bgImgUrl})` }}
                                >
                                    <div className={css.slide__text_block}>
                                        <h3 className={css.title}>{slide.title}</h3>
                                        <div className={css.text}>{slide.text}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div ref={navigationPrevRef} className={css.prev_button}>
                            {String.fromCharCode(10094)}
                        </div>
                        <div ref={navigationNextRef} className={css.next_button}>
                            {String.fromCharCode(10095)}
                        </div>
                        <div
                            className={
                                isProgressbarActive
                                    ? `${css.progressbar} ${css.progressbar_active}`
                                    : css.progressbar
                            }
                        ></div>
                    </Swiper>
                </div>
                <div className={css.slider_container__information_block}>
                    <h3 className={css.information_block__title}>Миссия компании: </h3>
                    Производить светильники высокого качества по доступной цене, предвосхищая
                    потребности клиента, обеспечивая лучший сервис и широкий ассортимент.
                </div>
            </div>
        </div>
    );
}

export default Slider;
