import React, { useEffect, useState } from 'react';
import DetailsLayout from '../../components/DetailsLayout/DetailsLayout';
import imgLamp from '../../assets/images/desk_lamp.png';
import css from './FavoritesPage.module.scss';
import Button from '../../components/Button/Button';
import entityApi from '../../api/api';
import { TLamp } from '../LampsPage/constants';

function FavoritesPage() {
    let [favoritesLamp, setFavoritesLamp] = useState<string[]>([]);
    let [isLoading, setIsLoading] = useState(true);
    let [lamps, setLamps] = useState<TLamp[]>([]);

    useEffect(() => {
        let lampsArray = JSON.parse(localStorage.getItem('favoritesLamp') || '[]');
        setFavoritesLamp(lampsArray);
        if (lampsArray.length > 0) {
            setIsLoading(true);
            (async function () {
                let responce = await entityApi.getEntity({ entity: 'lamps' });
                setLamps(responce?.data.filter((lamp: TLamp) => lampsArray.includes(lamp.id)));
                setIsLoading(false);
            })();
        }
    }, []);

    const clearClick = () => {
        localStorage.removeItem('favoritesLamp');
        setFavoritesLamp([]);
    };

    return (
        <DetailsLayout title={`Избранное`} isLoading={isLoading}>
            {favoritesLamp.length > 0 ? (
                <div className={css.favorites}>
                    <div className={css.favorites__button_block}>
                        <Button buttonType="button" onHandleClick={clearClick}>
                            Очистить список
                        </Button>
                    </div>
                    <table className={css.favorites__table}>
                        <tbody className={css.favorites__table_body}>
                            <tr className={css.favorites__table_row}>
                                <th className={css.favorites__table_header}>Наименование</th>
                                <th className={css.favorites__table_header}>Обозначение</th>
                            </tr>
                            {lamps.map((lamp) => {
                                return (
                                    <tr className={css.favorites__table_row} key={lamp.id}>
                                        <td className={css.favorites__table_column}>
                                            {lamp.title}
                                        </td>
                                        <td className={css.favorites__table_column}>
                                            {lamp.designation?.join(', ')}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className={css.favorites_empty}>
                    <img className={css.img} src={imgLamp} alt="lamp" />
                    <h3 className={css.title}>Список пуст</h3>
                    <p>В списке нет избранных изделий. Сначала добавьте изделия.</p>
                </div>
            )}
        </DetailsLayout>
    );
}

export default FavoritesPage;
