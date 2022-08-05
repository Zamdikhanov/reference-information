import React from "react";
import css from "./LampsPage.module.scss";
import { lamps } from "./constants";
import Filters from "../../components/Filters/Filters";
import LampCard from "../../components/LampCard/LampCard";

function LampsPage() {
  return (
    <main>
      <div className={css.wrap}>
        <div className={css.container}>
          <div className={css.header_container}>
            <h2 className={css.title}>Светильники</h2>
            <span className={css.item_count}>{`моделей: ${lamps.length}`}</span>
          </div>
          <div className={css.main_container}>
            <div className={css.items_block}>
              {
                lamps.map((lamp) => { 
                  return <LampCard key={lamp.id} {...lamp} />;
                })
              }
              </div>
            <div className={css.filters_block}>
              <Filters />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LampsPage;
