import React from 'react';
import css from './NotFound.module.scss';
import { ReactComponent as BrokenLampSVG } from '../../assets/images/broken_lamp_icon.svg';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main className={css.wrap}>
            <div className={css.container}>
                <BrokenLampSVG className={css.icon} />
                <div className={css.text_block}>
                    <h2 className={css.title} >
                        К сожалению, указанная страница не найдена.
                    </h2>
                    <span className={css.description} >
                        Ошибка 404. Перейдите на
                        <Link className={css.link} to='/'>главную</Link >
                        страницу.
                    </span>
                </div>
            </div>
        </main>
    )
}

export default NotFound