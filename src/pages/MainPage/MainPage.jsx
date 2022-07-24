import React from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
// import css from './MainPage.module.scss';

function MainPage() {
    return (
        <main>
            <div style={{ maxWidth: "1500px", height: "350px", backgroundColor: "silver", margin: "0 auto" }}>slider</div>
            Main content in progress
            <div>
                <h2>Категории</h2>
                <ul>
                    <li>
                        <CategoryCard />
                    </li>
                    <li>
                        <CategoryCard />
                    </li>
                    <li>
                        <CategoryCard />
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default MainPage;