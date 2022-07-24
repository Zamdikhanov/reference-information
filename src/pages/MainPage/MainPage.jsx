import React from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import css from "./MainPage.module.scss";
import { categories } from "./constants";

function MainPage() {
  return (
    <main>
      <div className={css.wrap}>
        <div className={css.slider_container}>
          <div className={css.slider_container__content}>slider</div>
        </div>
      </div>
      <div className={css.wrap}>
        <div className={css.category_container}>
          <h2 className={css.title}>Категории</h2>
          <ul className={css.cards}>
            {categories.map((item) => {
              return (
                <li className={css.cards__card} key={item.title}>
                  <CategoryCard title={item.title} imgUrl={item.imgUrl} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
