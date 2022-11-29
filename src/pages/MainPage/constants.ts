import imgUrlLamps from '../../assets/images/category_lamps.png';
import imgUrlAccessories from '../../assets/images/category_accessories.png';
import imgUrlLedDriver from '../../assets/images/category_led_driver.png';
import imgUrlLedBoard from '../../assets/images/category_led_board.png';

export type TCategory = {
    title: string;
    imgUrl: string;
    linkUrl: string;
};

export const categories: TCategory[] = [
    {
        title: 'Светильники',
        imgUrl: imgUrlLamps,
        linkUrl: '/lamps',
    },
    {
        title: 'Аксессуары',
        imgUrl: imgUrlAccessories,
        linkUrl: '/accessories',
    },
    {
        title: 'Источники питания',
        imgUrl: imgUrlLedDriver,
        linkUrl: '/led-drivers',
    },
    {
        title: 'Светодиодные модули',
        imgUrl: imgUrlLedBoard,
        linkUrl: '/led-board',
    },
];
