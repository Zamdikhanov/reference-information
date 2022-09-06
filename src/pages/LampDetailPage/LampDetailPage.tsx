import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import entityApi from '../../api/api';
import DescriptionBlock from '../../components/DetailsLayout/DescriptionBlock/DescriptionBlock';
import DetailsBlock, {
    TLampDetail,
} from '../../components/DetailsLayout/DetailsBlock/DetailsBlock';
import DetailsLayout from '../../components/DetailsLayout/DetailsLayout';
import { TLamp } from '../LampsPage/constants';

function LampDetailPage() {
    const { id } = useParams();
    let [data, setData] = useState<TLamp>({ id: '00', title: 'загрузка', series: 'null' });
    let [dataDetail, setDataDetail] = useState<TLampDetail>(null);
    let [isLoading, setIsLoading] = useState(true);

    let options = `id=${id}`;

    useEffect(() => {
        setIsLoading(true);
        (async function () {
            let responce = await entityApi.getEntity({ entity: 'lamps', options: options });
            let responceDetail = await entityApi.getEntity({
                entity: 'lampsdetail',
                options: options,
            });
            setData(responce?.data[0]);
            setDataDetail(responceDetail?.data[0]);
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
                    {dataDetail ? <DetailsBlock {...dataDetail} /> : <></>}
                    <br />
                    <>Страница в разработке</>
                </>
            )}
        </DetailsLayout>
    );
}

export default LampDetailPage;
