import React from 'react';
import { Link } from 'react-router-dom';
import { TCategory } from '../../pages/MainPage/constants';
import css from './CategoryCard.module.scss';

function CategoryCard({ title, imgUrl, linkUrl }: TCategory) {
    return (
        <Link to={linkUrl} className={css.card}>
            <div style={{ backgroundImage: `url(${imgUrl})` }} className={css.img_block}></div>
            <div className={css.text_block}>{title}</div>
        </Link>
    );
}

export default CategoryCard;
