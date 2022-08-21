import { TFilter } from './Filters';

export const filters: TFilter[] = [
    {
        id: '01',
        type: 'radio',
        title: 'Серия светильников',
        searchparams: 'series',
        data: ['Все', 'FG', 'FL', 'FT'],
    },
    {
        id: '02',
        type: 'radio',
        title: 'Степень защиты',
        searchparams: 'ip',
        data: ['Все', 'IP20', 'IP40', 'IP54', 'IP65'],
    },
];
