import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { filters } from './constants';
import css from './Filters.module.scss';

export type TFilter = {
    id: string;
    type: string;
    title: string;
    searchparams: string;
    data: string[];
};

function Filters() {
    return (
        <div className={css.container}>
            <h3 className={css.title}>Фильтры</h3>
            {filters.map((filter: TFilter) => (
                <RadioBlock {...filter} key={filter.id} />
            ))}
        </div>
    );
}

function RadioBlock(filter: TFilter) {
    const [checkedRadio, setCheckedRadio] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    let query = searchParams.get(filter.searchparams);

    useEffect(() => {
        for (let i = 0; i < filter.data.length; i++) {
            if (filter.data[i] === query) {
                setCheckedRadio(i);
                break;
            }
        }
    }, []);

    const handleChange = (index: number) => {
        setCheckedRadio(index);
        let param = { [filter.searchparams]: '' };
        for (let [key, value] of searchParams.entries()) {
            param[key] = value;
        }
        if (filter.data[index] === 'Все') {
            param[filter.searchparams] = '';
        } else {
            param[filter.searchparams] = filter.data[index];
        }
        setSearchParams(param);
    };

    return (
        <div className={css.filter_block} key={filter.id}>
            <h4 className={css.filter_block__title}>{filter.title}</h4>
            <div className={css.radioContainer}>
                {filter.data.map((data, index) => (
                    <label className={css.radio} key={data}>
                        <input
                            className={css.radio__input_radio}
                            type="radio"
                            name={filter.searchparams}
                            value={data}
                            checked={index === checkedRadio}
                            onChange={() => {
                                handleChange(index);
                            }}
                        />
                        <div className={css.radio__label_text}>{data}</div>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Filters;
