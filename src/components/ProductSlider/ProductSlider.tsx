import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import ImageHoverBlock from '../ImageHoverBlock/ImageHoverBlock';
import { Link } from 'react-router-dom';
import { TAccessory } from '../../pages/AccessoriesPage/constants';
import css from './ProductSlider.module.scss';

type TProductSliderProps = {
    products: TAccessory[];
    chapterUrl?: string;
};

function ProductSlider({ products, chapterUrl }: TProductSliderProps): JSX.Element {
    return (
        <div className={css.description_block}>
            <Swiper
                grabCursor
                modules={[FreeMode, Navigation]}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                spaceBetween={10}
                slidesPerView={'auto'}
                effect="slide"
                watchSlidesProgress={true}
                speed={500}
                className={css.swiper}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <article className={css.slide}>
                            <Link to={chapterUrl + product.id} className={css.slide__container}>
                                <div className={css.slide__image_block}>
                                    <ImageHoverBlock
                                        imgUrl={product.imgUrl}
                                        link={chapterUrl + product.id}
                                    />
                                </div>
                                <div className={css.slide__description_block}>
                                    {product.description[0]}
                                </div>
                                <div className={css.slide__designation_block}>
                                    {product.designation}
                                </div>
                                <h4 className={css.slide__title_block}>{product.title}</h4>
                            </Link>
                        </article>
                    </SwiperSlide>
                ))}
                <div className="prev">&#8249;</div>
                <div className="next">&#8250;</div>
            </Swiper>
        </div>
    );
}

export default ProductSlider;
