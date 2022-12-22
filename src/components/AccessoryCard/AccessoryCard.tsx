import React from 'react';
import { Link } from 'react-router-dom';
import { TAccessory } from '../../pages/AccessoriesPage/constants';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import ImageHoverBlock from '../ImageHoverBlock/ImageHoverBlock';
import css from './AccessoryCard.module.scss';

type TAccessoryAdditional = {
    isFavorite?: boolean;
    favoriteCallback?: () => void;
};

function AccessoryCard(props: TAccessoryAdditional & TAccessory): JSX.Element {
    const {
        id,
        title,
        designation,
        imgUrl,
        description,
        isFavorite = false,
        favoriteCallback = () => {},
    } = props;
    return (
        <div className={css.accessory_card}>
            <div className={css.button_container}>
                <ButtonFavorite isFavorite={isFavorite} onClick={favoriteCallback} name={title} />
            </div>

            <div className={css.accessory_card__image_block}>
                <ImageHoverBlock imgUrl={imgUrl} link={'/accessories/' + id} />
            </div>
            <div className={css.accessory_card__description_block}>
                {description && description[0]}
            </div>
            <div className={css.accessory_card__designation_block}>{designation}</div>
            <Link to={'/accessories/' + id} className={css.accessory_card__link}>
                <h4 className={css.accessory_card__title_block}>{title}</h4>
            </Link>
        </div>
    );
}

export default AccessoryCard;
