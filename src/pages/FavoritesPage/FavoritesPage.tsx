import React, { useEffect, useState } from 'react';
import DetailsLayout from '../../components/DetailsLayout/DetailsLayout';
import imgLamp from '../../assets/images/desk_lamp.png';
import css from './FavoritesPage.module.scss';
import Button from '../../components/Button/Button';
import entityApi from '../../api/api';
import { TLamp } from '../LampsPage/constants';
import TableFavorites from '../../components/TableFavorites/TableFavorites';
import { TAccessory } from '../AccessoriesPage/constants';

function FavoritesPage() {
    let [isLoading, setIsLoading] = useState(false);
    let [lamps, setLamps] = useState<TLamp[]>([]);
    let [accessories, setAccessories] = useState<TAccessory[]>([]);

    useEffect(() => {
        let lampsIdArray = JSON.parse(localStorage.getItem('favoritesLamp') || '[]');
        let accessoriesIdArray = JSON.parse(localStorage.getItem('favoritesAccessories') || '[]');
        if (lampsIdArray.length > 0) {
            setIsLoading(true);
            (async function () {
                let responce = await entityApi.getEntity({ entity: 'lamps' });
                setLamps(responce?.data.filter((lamp: TLamp) => lampsIdArray.includes(lamp.id)));
            })();
        }
        if (accessoriesIdArray.length > 0) {
            setIsLoading(true);
            (async function () {
                let responce = await entityApi.getEntity({ entity: 'accessories' });
                setAccessories(
                    responce?.data.filter((accessory: TAccessory) =>
                        accessoriesIdArray.includes(accessory.id),
                    ),
                );
            })();
        }
        setIsLoading(false);
    }, []);

    const clearClick = () => {
        localStorage.removeItem('favoritesLamp');
        localStorage.removeItem('favoritesAccessories');
        setLamps([]);
        setAccessories([]);
    };

    const deleteLamp = (id: string) => {
        let lampsIdArray = JSON.parse(localStorage.getItem('favoritesLamp') || '[]');
        localStorage.setItem(
            'favoritesLamp',
            JSON.stringify([...lampsIdArray.filter((lampId: string) => lampId !== id)]),
        );
        setLamps((prev) => prev.filter((lamp: TLamp) => lamp.id !== id));
    };

    const deleteAccessory = (id: string) => {
        let accessoriesIdArray = JSON.parse(localStorage.getItem('favoritesAccessories') || '[]');
        localStorage.setItem(
            'favoritesAccessories',
            JSON.stringify([
                ...accessoriesIdArray.filter((accessoryId: string) => accessoryId !== id),
            ]),
        );
        setAccessories((prev) => prev.filter((accessory: TAccessory) => accessory.id !== id));
    };

    return (
        <DetailsLayout title={`Избранное`} isLoading={isLoading}>
            {lamps.length > 0 || accessories.length > 0 ? (
                <div className={css.favorites}>
                    <div className={css.favorites__button_block}>
                        <Button buttonType="button" onHandleClick={clearClick}>
                            Очистить списки
                        </Button>
                    </div>
                    {lamps.length > 0 && (
                        <TableFavorites
                            title="Светильники"
                            linkTo="/lamps/"
                            data={lamps}
                            onDeleteItem={deleteLamp}
                        />
                    )}
                    {accessories.length > 0 && (
                        <TableFavorites
                            title="Аксессуары"
                            linkTo="/accessories/"
                            data={accessories}
                            onDeleteItem={deleteAccessory}
                        />
                    )}
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
