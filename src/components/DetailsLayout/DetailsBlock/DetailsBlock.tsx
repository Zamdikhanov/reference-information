import React from 'react';
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

function DetailsBlock(props: TLampDetail): JSX.Element {
    if (!props) return <>Нет данных</>;
    const { description, composition, accessories } = props;
    return (
        <div className={css.container}>
            <div className={css.article_bg}>
                <div className={css.article_block}>
                    <div className={css.article_block__title_block}>
                        <h4 className={css.title}>Описание</h4>
                    </div>
                    <div className={css.article_block__content_block}>{description}</div>
                </div>
            </div>
            <div className={css.article_bg}>
                <div className={css.article_block}>
                    <div className={css.article_block__title_block}>
                        <h4 className={css.title}>Комплектация</h4>
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
            </div>
            <div className={css.article_bg}>
                <div className={css.article_block}>
                    <div className={css.article_block__title_block}>
                        <h4 className={css.title}>Дополнительные аксессуары</h4>
                    </div>
                    <ul className={css.article_block__content_block}>
                        {accessories?.map((item) => {
                            return (
                                <li key={item.id} className={css.list_item}>
                                    {item.id} - <span className={css.bold}>{item.title}</span> -{' '}
                                    {item.description}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DetailsBlock;
