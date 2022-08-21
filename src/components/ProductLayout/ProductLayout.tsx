import React, { FC } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Loader from '../Loader/Loader';
import css from './ProductLayout.module.scss';

type TProductLayoutProps = {
    title: string;
    count: number;
    mainContent: any[];
    filters: any;
    isLoading?: boolean;
};

const ProductLayout: FC<TProductLayoutProps> = ({
    title,
    count,
    mainContent,
    filters,
    isLoading,
}) => {
    return (
        <main>
            <div className={css.wrap}>
                <div className={`${css.container} ${css.container_color}`}>
                    <div className={css.header_container}>
                        <Breadcrumbs />
                        <h2 className={css.title}>{title}</h2>
                        <span className={css.item_count}>{`моделей: ${count}`}</span>
                    </div>
                </div>
                <div className={css.container}>
                    <div className={css.main_container}>
                        <div className={css.items_block}>
                            {isLoading ? (
                                <Loader />
                            ) : mainContent.length ? (
                                mainContent
                            ) : (
                                'Ничего не найдено'
                            )}
                        </div>
                        <div className={css.filters_block}>{filters}</div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductLayout;
