import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../assets/images/rd_logo.svg';
import Burger from './Burger/Burger';
import css from './Header.module.scss';
import ModalMenu from './ModalMenu/ModalMenu';

function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    function handleClick() {
        setIsOpenMenu((prevState: Boolean) => !prevState);
    }

    return (
        <header className={css.header}>
            <div className={css.wrap}>
                <div className={css.header_container}>
                    <Burger onClick={handleClick} isOpen={false} />
                    <Link to="/" className={css.logo_container}>
                        <LogoSVG className={css.logo_container__logo} />
                        <div className={css.logo_container__text_block}>
                            <h2 className={css.title}>Отдел разработок</h2>
                            <h3 className={css.subtitle}>Справочная информация</h3>
                        </div>
                    </Link>
                    <ul className={css.links_list}>
                        <li className={css.links_list__item}>
                            <Link className={css.link} to="/favorites">
                                Избранное
                            </Link>
                        </li>
                        <li className={css.links_list__item}>
                            <a
                                className={css.link}
                                href="https://zamdikhanov.github.io/Faros/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Старая версия сайта
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <ModalMenu isOpen={isOpenMenu} onClose={handleClick} />
        </header>
    );
}

export default Header;
