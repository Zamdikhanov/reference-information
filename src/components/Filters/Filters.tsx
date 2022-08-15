import React, { useState } from 'react';
import { filters } from './constants';
import css from "./Filters.module.scss";

export type TFilter ={
  id: string;
  type: string;
  title: string;
  searchparams: string;
  data:  string[];
}

function Filters() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Фильтры</h3>
      {filters.map((filter:TFilter) => (
        <RadioBlock {...filter}/>
        ))} 
    </div>
  )
}

function RadioBlock(filter: TFilter) {

  const [checkedRadio, setCheckedRadio] = useState(0);

  const handleChange = (index:number) => {
    setCheckedRadio(index);
  }

  return (
    <div className={css.filter_block} key={filter.id}>
      <h4 className={css.filter_block__title}>
        {filter.title}
      </h4>
      <div className={css.radioContainer}>
        {filter.data.map((data, index) => (
          <label
            className={css.radio}
            htmlFor={data}
            key={data}
            >
            <input
                className={css.radio__input_radio}
                type="radio"
                name="data"
                id={data}
                checked = {index === checkedRadio}
                onChange = {()=>{handleChange(index)}}
            />
            <div className={css.radio__label_text}>
                {data}
            </div>
          </label>
        ))}
        </div>
      </div>
  )
}



export default Filters