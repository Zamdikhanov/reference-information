import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import entityApi from "../../api/api";
import Filters from "../../components/Filters/Filters";
import LampCard from "../../components/LampCard/LampCard";
import ProductLayout from "../../components/ProductLayout/ProductLayout";
import { TLamp } from "./constants";

function LampsPage() {

  let [lamps, setLamps]=useState([]);
  const [searchParams] = useSearchParams();

  let options = `title=${searchParams.get('title')||''}`;

  useEffect(()=>{
    (async function() {
      let responce = await entityApi.getEntity({entity:'lamps', options: options});
      setLamps(responce?.data);
    })()
  },[options])

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
