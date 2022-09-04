import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import entityApi from '../../api/api';
import DescriptionBlock from '../../components/DetailsLayout/DescriptionBlock/DescriptionBlock';
import DetailsLayout from '../../components/DetailsLayout/DetailsLayout';
import { TLamp } from '../LampsPage/constants';

function LampDetailPage() {
    const { id } = useParams();
    let [data, setData] = useState<TLamp>({ id: '00', title: 'загрузка', series: 'null' });
    let [isLoading, setIsLoading] = useState(true);

    let options = `id=${id}`;

    useEffect(() => {
        setIsLoading(true);
        (async function () {
            let responce = await entityApi.getEntity({ entity: 'lamps', options: options });
            setData(responce?.data[0]);
            setIsLoading(false);
        })();
    }, []);

    return (
        <DetailsLayout
            title={`Светильник ${data?.title || 'не найден'}`}
            designation={data?.designation}
            isLoading={isLoading}
        >
            {!data ? (
                <>Извините, по вашему запросу ничего не найдено</>
            ) : (
                <>
                    <DescriptionBlock {...data} />
                    <br />
                    <br />
                    <>Страница в разработке</>
                </>
            )}
        </DetailsLayout>
    );
}

export default LampDetailPage;
