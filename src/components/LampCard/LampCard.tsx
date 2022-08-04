import React from "react";
import { Link } from "react-router-dom";
import { TLamp } from "../../pages/LampsPage/constants";
import css from "./LampCard.module.scss";

function LampCard({ title }:TLamp): JSX.Element {
  return (
    <div className={css.card}>
      <div className={css.image_block}>фото</div>
      <div className={css.content_block}>
        <div className={css.header}>
          <Link to='/' className={css.title}>{title}</Link>
        </div>
        <div className={css.description}>
          <ul className={css.description__list}>
            <li className={css.description__list_item}>Назначение</li>
            <li className={css.description__list_item}>Тип</li>
            <li className={css.description__list_item}>Степень защиты</li>
            <li className={css.description__list_item}>Климатическое исполнение</li>
            <li className={css.description__list_item}>Гарантия</li>
            <li className={css.description__list_item}>Цвет</li>
            <li className={css.description__list_item}>Диапозон мощностей</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LampCard;
