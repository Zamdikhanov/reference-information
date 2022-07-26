import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../assets/images/no_image.svg';
import css from './ImageHoverBlock.module.scss';

type TProps = {
    link?: string;
    imgUrl?: string[];
};

function ImageHoverBlock({ link = '/', imgUrl = [noImage] }: TProps) {
    const [currentImageUrl, setCurrentImageUrl] = useState(imgUrl[0]);
    const [hasError, setHasError] = useState(false);

    const changeImage = (img: string) => {
        setCurrentImageUrl(img);
    };

    return (
        <Link to={link} className={css.container}>
            <div className={css.image_block}>
                <div className={css.image_block__inner}>
                    {imgUrl.map((img, index) => (
                        <>
                            <img
                                className={
                                    currentImageUrl === img
                                        ? `${css.image_block__image} ${css.image_block__image_active}`
                                        : css.image_block__image
                                }
                                key={index}
                                onError={() => setHasError(true)}
                                src={hasError ? noImage : img}
                                alt="lamp"
                                loading="lazy"
                            />
                            <div
                                className={css.image_block__hover_area}
                                key={img}
                                onMouseOver={() => changeImage(img)}
                            ></div>
                        </>
                    ))}
                </div>
            </div>
            <div className={css.image_dots}>
                {imgUrl.map((img, index) => (
                    <div
                        className={
                            currentImageUrl === img
                                ? `${css.image_dots__dot} ${css.image_dots__dot_active}`
                                : css.image_dots__dot
                        }
                        key={index}
                    ></div>
                ))}
            </div>
        </Link>
    );
}

export default ImageHoverBlock;
