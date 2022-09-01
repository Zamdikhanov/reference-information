import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import { TLamp } from '../../../pages/LampsPage/constants';
import css from './DescriptionBlock.module.scss';

function DescriptionBlock(props: TLamp): JSX.Element {
    const {
        id,
        title,
        designation,
        imgUrl,
        ip,
        climate,
        type,
        purpose,
        warranty,
        material,
        color,
        powerRange,
        lens,
    } = props;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className={css.description_block}>
            <div className={css.slider}>
                <Swiper
                    loop={true}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    spaceBetween={0}
                    slidesPerView={1}
                    speed={500}
                    className={css.swiper}
                >
                    {imgUrl &&
                        imgUrl.map((slide) => (
                            <SwiperSlide key={slide}>
                                <div
                                    className={css.slide}
                                    style={{ backgroundImage: `url(${slide})` }}
                                ></div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <Swiper
                    // onSwiper={setThumbsSwiper}
                    direction="vertical"
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={css.swiper2}
                >
                    {imgUrl &&
                        imgUrl.map((slide) => (
                            <SwiperSlide key={slide}>
                                <div
                                    className={css.slide2}
                                    style={{ backgroundImage: `url(${slide})` }}
                                ></div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <ul className={css.description__list}>
                <li className={css.description__list_item}>
                    Назначение: <span>{purpose}</span>
                </li>
                <li className={css.description__list_item}>
                    Тип: <span>{type}</span>
                </li>
                <li className={css.description__list_item}>
                    Степень защиты: <span>{ip}</span>
                </li>
                <li className={css.description__list_item}>
                    Климатическое исполнение: <span>{climate?.join(', ')}</span>
                </li>
                <li className={css.description__list_item}>
                    Гарантия: <span>{warranty}</span>
                </li>
                <li className={css.description__list_item}>
                    Цвет: <span>{color}</span>
                </li>
                <li className={css.description__list_item}>
                    Диапазон мощностей:{' '}
                    <span>
                        {powerRange?.[0]} - {powerRange?.[1]} Вт
                    </span>
                </li>
                <li className={css.description__list_item}>
                    Материал: <span>{material}</span>
                </li>
                <li className={css.description__list_item}>
                    Рассеиватели/линзы: <span>{lens?.join(', ')}</span>
                </li>
            </ul>
        </div>
    );
}

export default DescriptionBlock;
