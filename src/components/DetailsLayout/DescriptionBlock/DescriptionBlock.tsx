import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
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
    return (
        <div className={css.description_block}>
            <div className={css.slider}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    speed={500}
                    grabCursor={true}
                    className="swiper"
                >
                    {imgUrl &&
                        imgUrl.map((slide) => (
                            <SwiperSlide key={slide} style={{ height: '100%;' }}>
                                <div
                                    className={css.slide}
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
