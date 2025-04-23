import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage1 = () => {
    return (
        <div>
            <h1>О нас</h1>
            <p>Здесь вы можете узнать больше о нас.</p>
            <nav>
                <Link to="/">Перейти на главную страницу</Link>
            </nav>
        </div>
    );
};

export default AboutPage1;