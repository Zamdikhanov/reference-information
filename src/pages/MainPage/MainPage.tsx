import React, { useEffect } from 'react';
import { categories } from './constants';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Slider from '../../components/Slider/Slider';
import BannerZamdikhanov from '../../components/BannerZamdikhanov/BannerZamdikhanov';
import css from './MainPage.module.scss';

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
                    <h2 className={css.title}>О проекте</h2>
                    <p className={css.news__text}>
                        Я ведущий конструктор в компании производящей светодиодную продукцию. Это
                        мой проект создания сайта справочника. Проект является обновленной версией
                        моего первого проекта, написанного на читсом JS. Новая версия сделана с
                        новым оформлением и с новым функционалом, и проект переписан с
                        использованием React. Также теперь данные и картинки подгружаются по запросу
                        со стороннего сервера.
                    </p>
                    <p className={css.news__text}>
                        Цель: развитие и совершенствование навыков WEB разработки. В частности
                        работа с React, Typescript, экспериментирую с canvas (можно покликать на
                        баннер ниже, это пока не законченная его версия).
                    </p>
                </div>
                <div className={css.news_container}>
                    <BannerZamdikhanov />
                </div>
                <div className={css.news_container}>
                    <h2 className={css.title}>Обновления</h2>
                    <p className={css.news__text}>
                        В планах: создать страницы со списком карточек для всех сущностей. Добавить
                        возможности фильтрации по всем параметрам. Сделать баннер более
                        интерактивным.
                    </p>
                    <p className={css.news__text}>
                        Реализовано: создана главная страница и страница ошибки 404.
                    </p>
                    <p className={css.news__text}>
                        Реализовано: Карточки светильников. Частично созданы данные и перенесены на
                        mockapi.io. Данные загружаются с бэкэнда.
                    </p>
                    <p className={css.news__text}>
                        Реализовано: Добавлена страница подробной информации о светильнике.
                    </p>
                    <p className={css.news__text}>
                        Реализовано: Добавлена страница аксессуаров и подробной информации о
                        аксессуарах.
                    </p>
                    <p className={css.news__text}>
                        Реализовано: Добавлена страница "избранное" и возможность добавлять и
                        удалять сущности.
                    </p>
                    <p className={css.news__text}>
                        Реализовано: Добавлен интерактивный баннер, реализованный с помощью canvas.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default MainPage;
