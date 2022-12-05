import React from 'react';
import { ReactComponent as LogoGithubSVG } from '../../assets/images/github_logo_icon.svg';
import { ReactComponent as LogoVkSVG } from '../../assets/images/vk_logo_icon.svg';
import { ReactComponent as LogoTelegramSVG } from '../../assets/images/telegramm_logo_icon.svg';
import css from './Footer.module.scss';

type TSvgLink = {
    id: number;
    href: string;
    renderSvg: () => React.ReactNode;
};

export const socialArray: TSvgLink[] = [
    {
        id: 1,
        href: 'https://github.com/Zamdikhanov',
        renderSvg: () => <LogoGithubSVG className={css.logo} />,
    },
    {
        id: 2,
        href: 'https://vk.com/zamdikhanov',
        renderSvg: () => <LogoVkSVG className={css.logo} />,
    },
    {
        id: 3,
        href: 'https://t.me/zamdikhanov',
        renderSvg: () => <LogoTelegramSVG className={css.logo} />,
    },
];
