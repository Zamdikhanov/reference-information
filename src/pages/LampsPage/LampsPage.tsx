import React from "react";
import { lamps } from "./constants";
import Filters from "../../components/Filters/Filters";
import LampCard from "../../components/LampCard/LampCard";
import ProductLayout from "../../components/ProductLayout/ProductLayout";

function LampsPage() {
  return (
      <ProductLayout
        title="Светильники"
        count={lamps?.length || 0}
        mainContent={
          lamps.map((lamp) => { 
            return <LampCard key={lamp.id} {...lamp} />;
          })
        }
        filters={<Filters />}
      />
  );
}

export default LampsPage;
