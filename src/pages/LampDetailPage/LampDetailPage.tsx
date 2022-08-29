import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import entityApi from '../../api/api';
import DetailsLayout from '../../components/DetailsLayout/DetailsLayout';
import { TLamp } from '../LampsPage/constants';

function LampDetailPage() {
    const { id } = useParams();
    let [data, setData] = useState<TLamp>({ id: '00', title: 'Загрузка', series: 'null' });
    let [isLoading, setIsLoading] = useState(true);

    let options = `id=${id}`;

    useEffect(() => {
        setIsLoading(true);
        (async function () {
            let responce = await entityApi.getEntity({ entity: 'lamps', options: options });
            setData(responce?.data[0]);
            setIsLoading(false);
            console.log('data: get');
        })();
    }, []);
    console.log('data: start', data);

    return (
        <DetailsLayout
            title={`Светильник ${data?.title}`}
            designation={data?.designation}
            isLoading={isLoading}
        >
            <>Страница в разработке</>
        </DetailsLayout>
    );
}

export default LampDetailPage;
