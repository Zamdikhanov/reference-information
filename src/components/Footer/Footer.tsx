import React from 'react';
import { ReactComponent as LogoGithubSVG } from '../../assets/images/github_logo_icon.svg';
import { ReactComponent as LogoVkSVG } from '../../assets/images/vk_logo_icon.svg';
import { ReactComponent as LogoTelegramSVG } from '../../assets/images/telegramm_logo_icon.svg';
import css from './Footer.module.scss';

function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <ul className={css.links_list}>
                    <li className={css.links_list__item}>
                        <a
                            className={css.links_list__link}
                            href="https://github.com/Zamdikhanov"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LogoGithubSVG className={css.logo} />
                        </a>
                    </li>
                    <li className={css.links_list__item}>
                        <a
                            className={css.links_list__link}
                            href="https://vk.com/zamdikhanov"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LogoVkSVG className={css.logo} />
                        </a>
                    </li>
                    <li className={css.links_list__item}>
                        <a
                            className={css.links_list__link}
                            href="https://t.me/zamdikhanov"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LogoTelegramSVG className={css.logo} />
                        </a>
                    </li>
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
