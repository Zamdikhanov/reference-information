import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../../assets/images/rd_logo.svg';
import { categories } from '../../../pages/MainPage/constants';
import { socialArray } from '../../Footer/constants';
import css from './ModalMenu.module.scss';

const root = document.getElementById('root');

Modal.setAppElement('#modal');

function ModalMenu({ isOpen = false, onClose = () => {} }) {
    const [modalIsOpen, setIsOpen] = useState(isOpen);

    useEffect(() => {
        setIsOpen((prev) => isOpen);
        modalIsOpen && root?.classList.add('lock');
    }, [isOpen]);

    function openModal() {
        setIsOpen(true);
        root?.classList.add('lock');
    }

    function closeModal() {
        root?.classList.remove('lock');
        setIsOpen(false);
        onClose();
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={300}
            className={css.modal}
            overlayClassName={css.overlay}
            contentLabel="Modal"
        >
            <div className={css.modal__header}>
                <Link to="/" className={css.logo_container} onClick={closeModal}>
                    <LogoSVG className={css.logo_container__logo} />
                    <div className={css.logo_container__text_block}>
                        <h2 className={css.title}>Отдел разработок</h2>
                        <h3 className={css.subtitle}>Справочная информация</h3>
                    </div>
                </Link>
            </div>
            <nav className={css.modal__content}>
                <h3 className={css.modal__content_title}>Основные разделы</h3>
                <ul className={css.list}>
                    {categories.map((item) => {
                        return (
                            <li className={css.list_item} key={item.title}>
                                <Link
                                    className={css.list_item__link}
                                    to={item.linkUrl}
                                    onClick={closeModal}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <h3 className={css.modal__content_title}>Дополнительные</h3>
                <ul className={css.list}>
                    <li className={css.list_item}>
                        <Link className={css.list_item__link} to="/favorites" onClick={closeModal}>
                            Избранное
                        </Link>
                    </li>
                    <li className={css.list_item}>
                        <a
                            className={css.list_item__link}
                            href="https://zamdikhanov.github.io/Faros/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeModal}
                        >
                            Старая версия сайта
                        </a>
                    </li>
                </ul>
                <h3 className={css.modal__content_title}>Контакты</h3>
                <ul className={css.social_list}>
                    {socialArray.map((item) => {
                        return (
                            <li className={css.social_list__item} key={item.id}>
                                <a
                                    className={css.social_list__link}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.renderSvg()}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </Modal>
    );
}

export default ModalMenu;
