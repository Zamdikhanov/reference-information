import React, { FC } from 'react';
import { ReactComponent as FavoriteSVG } from '../../assets/images/heart.svg';
import css from './ButtonFavorite.module.scss';

type TButtonFavoriteProps = {
    isFavorite: boolean;
    size?: 'small' | 'big';
    onHandleClick: () => void;
};

const ButtonFavorite: FC<TButtonFavoriteProps> = ({
    isFavorite,
    onHandleClick = () => {},
    size = 'small',
}) => {
    return (
        <button
            className={`${css.favorite__button} ${size === 'big' ? css.favorite__button_big : ''}`}
            onClick={onHandleClick}
        >
            {size === 'big' && isFavorite && (
                <span className={css.favorite__button_text}>В избранном</span>
            )}
            {size === 'big' && !isFavorite && (
                <span className={css.favorite__button_text}>Добавить в избранное</span>
            )}
            <FavoriteSVG
                className={`${css.favorite__button_svg} ${
                    isFavorite ? css.favorite__button_svg_active : ''
                }`}
            />
        </button>
    );
};

export default ButtonFavorite;
