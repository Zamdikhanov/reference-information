import React from 'react';
import { Link } from "react-router-dom";
import css from './CategoryCard.module.scss';

function CategoryCard() {
    return (
        <Link to="#" className={css.card}>
            <div className={css.img_block}>
            </div>
            <div className={css.text_block}>
                название
            </div>
        </Link>
    )
}

export default CategoryCard;