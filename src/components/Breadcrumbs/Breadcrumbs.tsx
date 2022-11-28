import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Breadcrumbs.module.scss';

const Breadcrumbs: FC = () => {
    type TtabNames = {
        [key: string]: {
            name: string;
        };
    };

    const tabNames: TtabNames = {
        favorites: {
            name: 'Избранное',
        },
        lamps: {
            name: 'Светильники',
        },
        accessories: {
            name: 'Аксессуары',
        },
        'led-drivers': {
            name: 'Источники питания',
        },
        'led-board': {
            name: 'Светодиодный модули',
        },
    };
    let location = useLocation();
    const pathNames = location.pathname.split('/').filter((x) => x !== '' && x !== '#');

    const crumbs = pathNames.map((pathElement, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathNames.length - 1;
        if (isLast) {
            return (
                <li className={css.list_item} key={pathElement}>
                    <div className={css.last}>{tabNames[pathElement]?.name || pathElement}</div>
                </li>
            );
        } else {
            return (
                <li className={css.list_item} key={pathElement}>
                    <Link className={css.navlink} to={routeTo}>
                        {tabNames[pathElement]?.name || pathElement}
                    </Link>
                </li>
            );
        }
    });

    return (
        <nav className={css.nav}>
            <div className={css.wrap}>
                <ul className={css.list}>
                    <li className={css.list_item}>
                        {pathNames.length > 0 ? (
                            <Link className={css.navlink} to="/">
                                Главная
                            </Link>
                        ) : (
                            <div className={css.last}>Главная</div>
                        )}
                    </li>
                    {crumbs}
                </ul>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
