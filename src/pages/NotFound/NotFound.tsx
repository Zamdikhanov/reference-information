import React, { useState } from 'react';
import css from './NotFound.module.scss';
import { ReactComponent as BrokenLampSVG } from '../../assets/images/broken_lamp_icon.svg';
import { Link } from 'react-router-dom';

function NotFound() {
    const [isLinkHover, setIsLinkHover] = useState(false);
    return (
        <main className={css.wrap}>
            <div className={css.container}>
                <BrokenLampSVG className={isLinkHover ? `${css.icon} ${css.icon_hover}` : css.icon} />
                <div className={css.text_block}>
                    <h2 className={css.title} >
                        К сожалению, указанная страница не найдена.
                    </h2>
                    <span className={css.description} >
                        Ошибка 404. Перейдите на
                        <Link
                            className={css.link}
                            to='/'
                            onMouseOver={() => { setIsLinkHover(true) }}
                            onMouseLeave={() => { setIsLinkHover(false) }}>
                            главную
                        </Link >
                        страницу.
                    </span>
                </div>
            </div>
        </main>
    )
}

export default NotFound