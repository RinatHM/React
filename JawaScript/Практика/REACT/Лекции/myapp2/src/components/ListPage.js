import { Link } from 'react-router-dom';

const items = [
  { id: 1, title: 'Статья 1', description: 'Описание статьи 1' },
  { id: 2, title: 'Статья 2', description: 'Описание статьи 2' },
  { id: 3, title: 'Статья 3', description: 'Описание статьи 3' },
];

const ListPage = () => {
  return (
    <div>
      <h1>Список статей</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/detail/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
