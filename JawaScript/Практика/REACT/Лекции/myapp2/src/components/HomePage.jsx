import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <p>Это главная страница нашего приложения.</p>
            <nav>
                <Link to="/about">Перейти на страницу "О нас"</Link>
            </nav>
        </div>
    );
};

export default HomePage;