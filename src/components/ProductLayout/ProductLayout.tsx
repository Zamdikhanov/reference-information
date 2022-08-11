import React, {FC} from "react";
import css from "./ProductLayout.module.scss";

type TProductLayoutProps = {
  title: string;
   count: number;
   mainContent: any;
   filters: any;
}

const ProductLayout: FC <TProductLayoutProps> = ({title, count, mainContent, filters}) => {
  return (
    <main>
      <div className={css.wrap}>
        <div className={css.container}>
          <div className={css.header_container}>
            <h2 className={css.title}>{title}</h2>
            <span className={css.item_count}>{`моделей: ${count}`}</span>
          </div>
        </div>
        <div className={css.container}>
          <div className={css.main_container}>
            <div className={css.items_block}>
              {mainContent}
              </div>
            <div className={css.filters_block}>
              {filters}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductLayout;
