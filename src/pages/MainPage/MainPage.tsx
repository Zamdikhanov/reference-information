import React, { useEffect } from 'react';
import css from './MainPage.module.scss';
import { categories } from './constants';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Slider from '../../components/Slider/Slider';

function MainPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Slider />
            <div className={css.wrap}>
                <div className={css.category_container}>
                    <h2 className={css.title}>Категории</h2>
                    <ul className={css.cards}>
                        {categories.map((item) => {
                            return (
                                <li className={css.cards__card} key={item.title}>
                                    <CategoryCard
                                        title={item.title}
                                        imgUrl={item.imgUrl}
                                        linkUrl={item.linkUrl}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={css.news_container}>
                    <h2 className={css.title}>Обновления</h2>
                    <p className={css.news__text}>
                        Реализовано: создана главная страница и страница ошибки 404.
                    </p>
                    <p className={css.news__text}>
                        Реализовано: Карточки светильников. Частично созданы данные и перенесены на
                        mockapi.io. Данные загружаются с бэкэнда.
                    </p>
                    <p className={css.news__text}>
                        В планах: создать страницы со списком карточек для всех сущностей. Добавить
                        возможности фильтрации по всем параметрам. Добавить страницы подробной
                        информации каждого элемента.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default MainPage;
