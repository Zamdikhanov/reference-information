import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { TLamp } from '../../../pages/LampsPage/constants';
import noImage from '../../../assets/images/no_image.svg';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import './DescriptionBlock.scss';
import css from './DescriptionBlock.module.scss';
import ButtonFavorite from '../../ButtonFavorite/ButtonFavorite';

function DescriptionBlock(props: TLamp): JSX.Element {
    const { id, imgUrl, ip, climate, type, purpose, warranty, material, color, powerRange, lens } =
        props;
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        let lampsIdArray = JSON.parse(localStorage.getItem('favoritesLamp') || '[]');
        setIsFavorite(lampsIdArray.includes(id));
    }, []);

    const onFavoriteButtonClick = () => {
        let lampsIdArray = JSON.parse(localStorage.getItem('favoritesLamp') || '[]');
        setIsFavorite((prev) => {
            if (prev) {
                localStorage.setItem(
                    'favoritesLamp',
                    JSON.stringify([...lampsIdArray.filter((lampId: string) => lampId !== id)]),
                );
            } else {
                localStorage.setItem('favoritesLamp', JSON.stringify([...lampsIdArray, id]));
            }
            return !prev;
        });
    };

    return (
        <div className={css.description_block}>
            <div className={css.slider}>
                <div className={css.slider__container}>
                    <div className={css.slider__container_small}>
                        <Swiper
                            // @ts-ignore
                            // onSwiper={(swiper) => {
                            //     setThumbsSwiper(swiper);
                            // }}
                            grabCursor
                            modules={[FreeMode, Navigation, Thumbs]}
                            direction="vertical"
                            spaceBetween={10}
                            slidesPerView={'auto'}
                            effect="slide"
                            freeMode={true}
                            watchSlidesProgress={true}
                            speed={500}
                            className={css.swiper2}
                        >
                            {imgUrl &&
                                imgUrl.map((slide) => (
                                    <SwiperSlide key={slide}>
                                        <img
                                            className={css.slide2}
                                            alt="lamp"
                                            onError={() => setHasError(true)}
                                            src={hasError ? noImage : slide}
                                        />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                    <div className={css.slider__container_big}>
                        <Swiper
                            modules={[FreeMode, Navigation, Thumbs]}
                            spaceBetween={50}
                            effect="fade"
                            navigation={{
                                nextEl: '.next',
                                prevEl: '.prev',
                            }}
                            // thumbs={{ swiper: thumbsSwiper }}
                            slidesPerView={1}
                            speed={500}
                            className={css.swiper}
                        >
                            {imgUrl &&
                                imgUrl.map((slide) => (
                                    <SwiperSlide key={slide}>
                                        <img
                                            className={css.slide}
                                            src={hasError ? noImage : slide}
                                            alt="lamp"
                                        />
                                    </SwiperSlide>
                                ))}
                            <div className="prev">&#8249;</div>
                            <div className="next">&#8250;</div>
                        </Swiper>
                    </div>
                </div>
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
                <li>
                    <ButtonFavorite
                        onHandleClick={onFavoriteButtonClick}
                        isFavorite={isFavorite}
                        size="big"
                    />
                </li>
            </ul>
        </div>
    );
}

export default DescriptionBlock;
