import React, { FC, ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import css from './ProductLayout.module.scss';

type TProductLayoutProps = {
    title: string;
    count: number;
    mainContent: any[];
    filters?: ReactNode;
    isLoading?: boolean;
    containerType?: 'grid' | undefined;
};

Modal.setAppElement('#modal');

const ProductLayout: FC<TProductLayoutProps> = ({
    title,
    count,
    mainContent,
    filters,
    isLoading,
    containerType,
}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function closeModal() {
        setModalIsOpen(() => false);
    }

    useEffect(() => {
        window.scrollBy(0, 0);
    }, []);

    return (
        <main>
            <div className={css.wrap}>
                <div className={`${css.container} ${css.container_color}`}>
                    <div className={css.header_container}>
                        <Breadcrumbs />
                        <h2 className={css.title}>{title}</h2>
                        <span className={css.item_count}>{`моделей: ${count}`}</span>
                        <div className={css.filter_button}>
                            <Button buttonType="button" onHandleClick={() => setModalIsOpen(true)}>
                                Фильтры
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={css.container}>
                    <div className={css.main_container}>
                        <div className={css.items_block}>
                            {isLoading ? (
                                <Loader />
                            ) : mainContent.length ? (
                                containerType ? (
                                    <div className={css.items_grid}>{mainContent}</div>
                                ) : (
                                    mainContent
                                )
                            ) : (
                                'Ничего не найдено'
                            )}
                        </div>
                        {filters && <div className={css.filters_block}>{filters}</div>}
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            closeTimeoutMS={300}
                            className={css.modal}
                            overlayClassName={css.overlay}
                            contentLabel="Filter"
                        >
                            {filters}
                            <div className={css.modal__footer}>
                                <Button
                                    buttonType="button"
                                    onHandleClick={() => setModalIsOpen(false)}
                                >
                                    Закрыть
                                </Button>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductLayout;
