import React from "react";
import { Link } from "react-router-dom";
import { TLamp } from "../../pages/LampsPage/constants";
import Button from "../Button/Button";
import ImageHoverBlock from "../ImageHoverBlock/ImageHoverBlock";
import css from "./LampCard.module.scss";

function LampCard(props:TLamp): JSX.Element {
  const {id,
    title,
    designation,
    imgUrl,
    ip,
    climate,
    type,
    purpose,
    warranty,
    material,
    color,
    powerRange,
    lens,}=props;
  return (
    <div className={css.card}>
      <div className={css.image_block}>
        <ImageHoverBlock imgUrl={imgUrl} link={id} />
      </div>
      <div className={css.content_block}>
        <div className={css.header}>
          <Link to={id} className={css.title}>Светильник {title}</Link>
          <span className={css.designation}>Обозначение: {designation?.join(', ')}</span>
        </div>
        <div className={css.description_block}>
          <ul className={css.description__list}>
            <li className={css.description__list_item}>Назначение: <span>{purpose}</span></li>
            <li className={css.description__list_item}>Тип: <span>{type}</span></li>
            <li className={css.description__list_item}>Степень защиты: <span>{ip}</span></li>
            <li className={css.description__list_item}>Климатическое исполнение: <span>{climate?.join(', ')}</span></li>
            <li className={css.description__list_item}>Гарантия: <span>{warranty}</span></li>
            <li className={css.description__list_item}>Цвет: <span>{color}</span></li>
            <li className={css.description__list_item}>Диапазон мощностей: <span>{powerRange?.[0]} - {powerRange?.[1]} Вт</span></li>
            <li className={css.description__list_item}>Материал: <span>{material}</span></li>
            <li className={css.description__list_item}>Рассеиватели/линзы: <span>{lens?.join(', ')}</span></li>
          </ul>
        <Button buttonType={'link'}  url={id}>Подробнее</Button>
        </div>
      </div>
    </div>
  );
}

export default LampCard;
