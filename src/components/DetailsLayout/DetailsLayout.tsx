import React, { FC, useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Loader from '../Loader/Loader';
import css from './DetailsLayout.module.scss';

type TDetailsLayoutProps = {
    title: string;
    children: any;
    isLoading?: boolean;
    designation?: string[] | string;
};

const DetailsLayout: FC<TDetailsLayoutProps> = ({ title, designation, children, isLoading }) => {
    useEffect(() => {
        window.scrollBy(0, 0);
    }, []);
    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <div className={`${css.container} ${css.container_color}`}>
                    <div className={css.header_container}>
                        <Breadcrumbs />
                        <h2 className={css.title}>{title}</h2>
                        <span className={css.header_container__text}>
                            {designation && (
                                <>
                                    Обозначение:{' '}
                                    {Array.isArray(designation)
                                        ? designation.join(', ')
                                        : designation}
                                </>
                            )}
                        </span>
                    </div>
                </div>
                <div className={css.container}>
                    <div className={css.main_container}>
                        <div className={css.items_block}>
                            {isLoading ? <Loader /> : <div>{children}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DetailsLayout;
