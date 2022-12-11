import React from 'react';
import { Link } from 'react-router-dom';
import { TAccessory } from '../../pages/AccessoriesPage/constants';
import { TLamp } from '../../pages/LampsPage/constants';
import Button from '../Button/Button';
import css from './TableFavorites.module.scss';

type TTableFavoritesProps = {
    title: string;
    data: TLamp[] | TAccessory[] | [{ id: string; title: string; designation?: string[] | string }];
    onDeleteItem: (id: string) => void;
    linkTo: string;
};

function TableFavorites(props: TTableFavoritesProps) {
    const { title, data, onDeleteItem, linkTo } = props;
    return (
        <div className={css.table_container}>
            <table className={css.favorites__table}>
                <caption className={css.table_caption}>{title}</caption>
                <tbody className={css.favorites__table_body}>
                    <tr className={css.favorites__table_row}>
                        <th className={css.favorites__table_header}>Наименование</th>
                        <th className={css.favorites__table_header}>Обозначение</th>
                        <th
                            className={`${css.favorites__table_header}  ${css.table_column_delete}`}
                        >
                            Удаление
                        </th>
                    </tr>
                    {data.map((item) => {
                        return (
                            <tr className={css.favorites__table_row} key={item.id}>
                                <td className={css.favorites__table_column}>
                                    <Link to={`${linkTo}${item.id}`}>{item.title}</Link>
                                </td>
                                <td className={css.favorites__table_column}>
                                    {Array.isArray(item.designation)
                                        ? item.designation?.join(', ')
                                        : item.designation}
                                </td>
                                <td
                                    className={`${css.favorites__table_column} ${css.table_column_delete}`}
                                >
                                    <Button
                                        buttonType="button"
                                        onHandleClick={() => onDeleteItem(item.id)}
                                    >
                                        Удалить
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TableFavorites;
