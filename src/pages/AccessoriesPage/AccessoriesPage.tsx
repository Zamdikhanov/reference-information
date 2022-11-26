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
        data: ['Все', 'Решетка', 'Кронштейн', 'Скоба', 'Соединительный элемент'],
    },
];

function AccessoriesPage() {
    let [accessories, setAccessories] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
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

    let filteredArrayCard = accessories
        .filter((accessory: TAccessory) => {
            for (let [key, value] of searchParams.entries()) {
                if (key in accessory) {
                    if (typeof accessory[key] === 'string' && !accessory[key].includes(value))
                        return false;
                    if (Array.isArray(accessory[key]) && !accessory[key][0].includes(value))
                        return false;
                }
            }
            return true;
        })
        .map((accessory: TAccessory) => {
            return <AccessoryCard key={accessory.id} {...accessory} />;
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
