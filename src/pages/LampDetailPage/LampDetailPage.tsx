import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import entityApi from '../../api/api';
import DescriptionBlock from '../../components/DetailsLayout/DescriptionBlock/DescriptionBlock';
import DetailsBlock, {
    TLampDetail,
} from '../../components/DetailsLayout/DetailsBlock/DetailsBlock';
import DetailsLayout from '../../components/DetailsLayout/DetailsLayout';
import { TAccessory } from '../../components/ProductSlider/ProductSlider';
import { TLamp } from '../LampsPage/constants';

function LampDetailPage() {
    const { id } = useParams();
    let [data, setData] = useState<TLamp>({ id: '00', title: 'загрузка', series: 'null' });
    let [dataDetail, setDataDetail] = useState<TLampDetail>(null);
    let [dataAccessories, setDataAccessories] = useState<TAccessory[]>([]);
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
            let arr: TAccessory[] = [];
            await responceDetail?.data[0].accessories.forEach(async (element: string) => {
                let responceAccessories = await entityApi.getEntity({
                    entity: 'accessories',
                    options: 'id=' + element,
                });
                arr.push(responceAccessories?.data[0]);
                setDataAccessories((prevState) => [...prevState, responceAccessories?.data[0]]);
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
                    {dataDetail && dataAccessories ? (
                        <DetailsBlock lampDetail={dataDetail} accessories={dataAccessories} />
                    ) : (
                        <></>
                    )}
                </>
            )}
        </DetailsLayout>
    );
}

export default LampDetailPage;
