import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import entityApi from '../../api/api';
import Filters, { TFilter } from '../../components/Filters/Filters';
import LampCard from '../../components/LampCard/LampCard';
import ProductLayout from '../../components/ProductLayout/ProductLayout';
import { TLamp } from './constants';

const filters: TFilter[] = [
    {
        id: '01',
        type: 'radio',
        title: 'Серия светильников',
        searchparams: 'series',
        data: ['Все', 'FG', 'FL', 'FT'],
    },
    {
        id: '02',
        type: 'radio',
        title: 'Степень защиты',
        searchparams: 'ip',
        data: ['Все', 'IP20', 'IP40', 'IP54', 'IP65'],
    },
];

function LampsPage() {
    let [lamps, setLamps] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    const [searchParams] = useSearchParams();

    let options = `series=${searchParams.get('title') || ''}`;

    useEffect(() => {
        setIsLoading(true);
        (async function () {
            let responce = await entityApi.getEntity({ entity: 'lamps', options: options });
            setLamps(responce?.data);
            setIsLoading(false);
        })();
    }, [options]);

    let filteredArrayCard = lamps
        .filter((lamp: TLamp) => {
            for (let [key, value] of searchParams.entries()) {
                if (key in lamp) {
                    if (lamp[key] !== value && value !== '') return false;
                }
            }
            return true;
        })
        .map((lamp: TLamp) => {
            return <LampCard key={lamp.id} {...lamp} />;
        });

    return (
        <ProductLayout
            title="Светильники"
            count={filteredArrayCard?.length || 0}
            mainContent={filteredArrayCard}
            filters={<Filters filters={filters} />}
            isLoading={isLoading}
        />
    );
}

export default LampsPage;
