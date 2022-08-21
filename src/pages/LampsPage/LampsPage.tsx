import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import entityApi from '../../api/api';
import Filters from '../../components/Filters/Filters';
import LampCard from '../../components/LampCard/LampCard';
import ProductLayout from '../../components/ProductLayout/ProductLayout';
import { TLamp } from './constants';

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
            filters={<Filters />}
            isLoading={isLoading}
        />
    );
}

export default LampsPage;
