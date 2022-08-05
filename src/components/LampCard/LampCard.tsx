import React from "react";
import { Link } from "react-router-dom";
import { TLamp } from "../../pages/LampsPage/constants";
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
      <div className={css.image_block}>фото</div>
      <div className={css.content_block}>
        <div className={css.header}>
          <Link to='/' className={css.title}>Светильник {title}</Link>
          <span className={css.designation}>Обозначение: {designation?.map(el => `${el} `)}</span>
        </div>
        <div className={css.description}>
          <ul className={css.description__list}>
            <li className={css.description__list_item}>Назначение: <span>{purpose}</span></li>
            <li className={css.description__list_item}>Тип: <span>{type}</span></li>
            <li className={css.description__list_item}>Степень защиты: <span>{ip}</span></li>
            <li className={css.description__list_item}>Климатическое исполнение: <span>{climate?.map(el => `${el} `)}</span></li>
            <li className={css.description__list_item}>Гарантия: <span>{warranty}</span></li>
            <li className={css.description__list_item}>Цвет: <span>{color}</span></li>
            <li className={css.description__list_item}>Диапазон мощностей: <span>{powerRange?.[0]} - {powerRange?.[1]} Вт</span></li>
            <li className={css.description__list_item}>Материал: <span>{material}</span></li>
            <li className={css.description__list_item}>Рассеиватели/линзы: <span>{lens?.map(el => `${el}, `)}</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LampCard;
