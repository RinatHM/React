import React from 'react';
import { useParams } from 'react-router-dom';

const articles = [
    { id: 1, title: 'Первый элемент', content: 'Это детальная информация о первом элементе.' },
    { id: 2, title: 'Второй элемент', content: 'Это детальная информация о втором элементе.' },
    { id: 3, title: 'Третий элемент', content: 'Это детальная информация о третьем элементе.' },
];

const DetailPage = () => {
    const { id } = useParams();
    const article = articles.find(item => item.id === parseInt(id));

    if (!article) {
        return <h2>Элемент не найден!</h2>;
    }

    return (
        <div>
        <h4>Details {id}</h4>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
};

export default DetailPage;