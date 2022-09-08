import React from 'react';
import ProductSlider, { TAccessory } from '../../ProductSlider/ProductSlider';
import css from './DetailsBlock.module.scss';

export type TLampDetail = {
    id: string;
    description: string;
    composition?: { name: string; count: string }[];
    version: {
        title: string;
        lumen: string;
        effectiveness: string;
        dimensions: string;
        ip: string;
        climaticversion: string;
    }[];
    accessories?: {
        id: string;
        title: string;
        description: string;
    }[];
    reviewlink: string;
} | null;

type TDetailsBlockProps = {
    lampDetail: TLampDetail;
    accessories?: TAccessory[];
};

function DetailsBlock({ lampDetail, accessories }: TDetailsBlockProps): JSX.Element {
    if (!lampDetail) return <>Нет данных</>;
    const { description, composition } = lampDetail;
    return (
        <div className={css.container}>
            <section className={css.article_bg}>
                <div className={css.article_block}>
                    <div className={css.article_block__title_block}>
                        <h3 className={css.title}>Описание</h3>
                    </div>
                    <div className={css.article_block__content_block}>{description}</div>
                </div>
            </section>
            <section className={css.article_bg}>
                <div className={css.article_block}>
                    <div className={css.article_block__title_block}>
                        <h3 className={css.title}>Комплектация</h3>
                    </div>
                    <ul className={css.article_block__content_block}>
                        {composition?.map((item) => {
                            return (
                                <li key={item.name} className={css.list_item}>
                                    {item.name} - <span className={css.bold}>{item.count} шт.</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <section className={css.article_bg}>
                <div className={css.article_block}>
                    <div className={css.article_block__title_block}>
                        <h3 className={css.title}>Дополнительные аксессуары</h3>
                    </div>
                    <div className={css.article_block__content_block}>
                        {accessories ? (
                            <ProductSlider products={accessories} chapterUrl="/accessories/" />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DetailsBlock;
