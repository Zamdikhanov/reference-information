import React from "react";
import css from "./MainPage.module.scss";
import { categories } from "./constants";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Slider from "../../components/Slider/Slider";

function MainPage() {
  return (
    <main>
      <Slider />
      <div className={css.wrap}>
        <div className={css.category_container}>
          <h2 className={css.title}>Категории</h2>
          <ul className={css.cards}>
            {categories.map((item) => {
              return (
                <li className={css.cards__card} key={item.title}>
                  <CategoryCard title={item.title} imgUrl={item.imgUrl} linkUrl={item.linkUrl} />
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
