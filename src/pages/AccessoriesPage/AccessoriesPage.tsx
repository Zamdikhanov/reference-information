import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import entityApi from '../../api/api';
import Filters, { TFilter } from '../../components/Filters/Filters';
import AccessoryCard from '../../components/AccessoryCard/AccessoryCard';
import ProductLayout from '../../components/ProductLayout/ProductLayout';
import { TAccessory } from './constants';

const accessoriesFilters: TFilter[] = [
    {
        id: '01',
        type: 'radio',
        title: 'Тип аксессуара',
        searchparams: 'description',
        data: ['Все', 'Решетка', 'Кронштейн', 'Скоба', 'Соединительный элемент', 'Шинопровод'],
    },
];

function AccessoriesPage() {
    let [accessories, setAccessories] = useState<TAccessory[]>([]);
    let [isLoading, setIsLoading] = useState(true);
    let [favoritesAccessories, setFavoritesAccessories] = useState<string[]>([]);
    const [searchParams] = useSearchParams();

    let options = `title=${searchParams.get('title') || ''}`;

    useEffect(() => {
        setIsLoading(true);
        (async function () {
            let responce = await entityApi.getEntity({ entity: 'accessories', options: options });
            setAccessories(responce?.data);
            setIsLoading(false);
        })();
    }, [options]);

    useEffect(() => {
        setFavoritesAccessories(JSON.parse(localStorage.getItem('favoritesAccessories') || '[]'));
    }, []);

    const handleFavoriteClick = (id: string) => {
        if (!favoritesAccessories.includes(id)) {
            setFavoritesAccessories((prev) => {
                localStorage.setItem('favoritesAccessories', JSON.stringify([...prev, id]));
                return [...prev, id];
            });
        } else {
            let index = favoritesAccessories.indexOf(id);
            setFavoritesAccessories((prev) => {
                localStorage.setItem(
                    'favoritesAccessories',
                    JSON.stringify([...prev.slice(0, index), ...prev.slice(index + 1)]),
                );
                return [...prev.slice(0, index), ...prev.slice(index + 1)];
            });
        }
    };

    let filteredArrayCard = accessories
        .filter((accessory: TAccessory) => {
            for (let [key, value] of searchParams.entries()) {
                if (key in accessory) {
                    if (
                        typeof (accessory as any)[key] === 'string' &&
                        !(accessory as any)[key].includes(value)
                    )
                        return false;
                    if (
                        Array.isArray((accessory as any)[key]) &&
                        !(accessory as any)[key][0].includes(value)
                    )
                        return false;
                }
            }
            return true;
        })
        .map((accessory: TAccessory) => {
            return (
                <AccessoryCard
                    key={accessory.id}
                    {...accessory}
                    isFavorite={favoritesAccessories.includes(accessory.id)}
                    favoriteCallback={() => {
                        handleFavoriteClick(accessory.id);
                    }}
                />
            );
        });

    return (
        <ProductLayout
            title="Аксессуары"
            count={filteredArrayCard?.length || 0}
            mainContent={filteredArrayCard}
            containerType={'grid'}
            filters={<Filters filters={accessoriesFilters} />}
            isLoading={isLoading}
        />
    );
}

export default AccessoriesPage;
