import React from 'react';
import DetailsLayout from '../../components/DetailsLayout/DetailsLayout';
import imgLamp from '../../assets/images/desk_lamp.png';
import css from './FavoritesPage.module.scss';

function FavoritesPage() {
    return (
        <DetailsLayout
            title={`Избранное`}
            // isLoading={isLoading}
        >
            <div className={css.favorites_empty}>
                <img className={css.img} src={imgLamp} alt="lamp" />
                <h3 className={css.title}>Список пуст</h3>
                <p>
                    В списке нет избранных изделий. Сначала добавьте изделия. (страница в
                    разработке)
                </p>
            </div>
        </DetailsLayout>
    );
}

export default FavoritesPage;
