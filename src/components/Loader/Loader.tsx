import React from 'react';
import css from './Loader.module.scss';

function Loader(): JSX.Element {
    return (
        <div className={css.container}>
            <span className={css.loader}></span>
            <span className={css.title}>Загрузка ...</span>
        </div>
    );
}

export default Loader;
