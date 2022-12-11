import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import entityApi from '../../api/api';
import ButtonFavorite from '../../components/ButtonFavorite/ButtonFavorite';
import DetailsLayout from '../../components/DetailsLayout/DetailsLayout';
import ImageHoverBlock from '../../components/ImageHoverBlock/ImageHoverBlock';
import { TAccessory } from '../AccessoriesPage/constants';
import css from './AccessoriesDetailPage.module.scss';

function AccessoriesDetailPage() {
    const { id } = useParams();
    let [data, setData] = useState<TAccessory>();
    let [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    let options = `id=${id}`;

    useEffect(() => {
        setIsLoading(true);
        (async function () {
            let responce = await entityApi.getEntity({ entity: 'accessories', options: options });
            setData(responce?.data[0]);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        let accessoriesIdArray = JSON.parse(localStorage.getItem('favoritesAccessories') || '[]');
        setIsFavorite(accessoriesIdArray.includes(id));
    }, []);

    const onFavoriteButtonClick = () => {
        let accessoriesIdArray = JSON.parse(localStorage.getItem('favoritesAccessories') || '[]');
        setIsFavorite((prev) => {
            if (prev) {
                localStorage.setItem(
                    'favoritesAccessories',
                    JSON.stringify([
                        ...accessoriesIdArray.filter((lampId: string) => lampId !== id),
                    ]),
                );
            } else {
                localStorage.setItem(
                    'favoritesAccessories',
                    JSON.stringify([...accessoriesIdArray, id]),
                );
            }
            return !prev;
        });
    };

    return (
        <DetailsLayout
            title={`Аксессуар ${data?.title || 'не найден'}`}
            designation={data?.designation}
            isLoading={isLoading}
        >
            {!data ? (
                <>Извините, по вашему запросу ничего не найдено</>
            ) : (
                <div className={css.accessory_detail}>
                    <div className={css.accessory_detail__image_block}>
                        <ImageHoverBlock imgUrl={data.imgUrl} link={'#'} />
                    </div>
                    <div>
                        <h4 className={css.accessory_detail__title_block}>{data.title}</h4>
                        <div className={css.accessory_detail__designation_block}>
                            {data.designation}
                        </div>
                        <div className={css.accessory_detail__description_block}>
                            {data.description && data.description[0]}
                        </div>
                        <div className={css.accessory_detail__description_block}>
                            {data.description && data.description[1]}
                        </div>
                        <ButtonFavorite
                            onHandleClick={onFavoriteButtonClick}
                            isFavorite={isFavorite}
                            size="big"
                        />
                    </div>
                </div>
            )}
        </DetailsLayout>
    );
}

export default AccessoriesDetailPage;
