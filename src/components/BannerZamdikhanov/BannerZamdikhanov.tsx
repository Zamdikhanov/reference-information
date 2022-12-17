import React, { useEffect } from 'react';
import zamdikhanovCanvas from './zamdikhanov-canvas';
import css from './BannerZamdikhanov.module.scss';

function BannerZamdikhanov(): JSX.Element {
    useEffect(() => {
        zamdikhanovCanvas();
    }, []);
    return (
        <div id="zamdikhanov_container" className={css.zamdikhanov_container}>
            <canvas id="zamdikhanov" className={css.zamdikhanov_canvas}>
                place for the banner "zamdikhanov"
            </canvas>
        </div>
    );
}

export default BannerZamdikhanov;
