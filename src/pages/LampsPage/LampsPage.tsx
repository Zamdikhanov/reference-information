import React, { useEffect, useState } from "react";
import entityApi from "../../api/api";
import Filters from "../../components/Filters/Filters";
import LampCard from "../../components/LampCard/LampCard";
import ProductLayout from "../../components/ProductLayout/ProductLayout";
import { TLamp } from "./constants";

function LampsPage() {

let [lamps, setLamps]=useState([]);

useEffect(()=>{
  (async function() {
    let lampsdd = await entityApi.getEntity({entity:'lamps'});
    setLamps(lampsdd?.data);
  })()
},[])

  return (
      <ProductLayout
        title="Светильники"
        count={lamps?.length || 0}
        mainContent={
          lamps.map((lamp: TLamp) => { 
            return <LampCard key={lamp.id} {...lamp} />;
          })
        }
        filters={<Filters />}
      />
  );
}

export default LampsPage;
