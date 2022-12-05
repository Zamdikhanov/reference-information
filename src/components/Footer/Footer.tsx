import React from 'react';
import { socialArray } from './constants';
import css from './Footer.module.scss';

function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <ul className={css.links_list}>
                    {socialArray.map((item) => {
                        return (
                            <li className={css.links_list__item} key={item.id}>
                                <a
                                    className={css.links_list__link}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.renderSvg()}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className={css.text_block}>
                    <div className={css.copy}>© Zamdikhanov, 2022</div>
                    <div className={css.text}>Обновлённая версия моего первого проекта</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
