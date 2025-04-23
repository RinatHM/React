import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="app">
      {/* 1. Добавляем основной заголовок с ARIA-ролью для доступности */}
      <header className="app-header">
        <h1 aria-label="Управление каталогом продуктов">Управление каталогом продуктов</h1>
      </header>

      {/* 2. Основное содержимое с семантическим тегом main */}
      <main className="app-content">
        {/* 3. Добавляем раздел для добавления продуктов */}
        <section aria-labelledby="add-product-heading" className="add-product-section">
          {/* <h2 id="add-product-heading">Добавление нового продукта</h2> */}
          <AddProduct />
        </section>

        {/* 4. Раздел для списка продуктов с четким заголовком */}
        <section aria-labelledby="product-list-heading" className="product-list-section">
          {/* <h2 id="product-list-heading">Список продуктов</h2> */}
          <ProductList />
        </section>
      </main>

      {/* 5. Можно добавить футер для дополнительной информации */}
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Каталог продуктов</p>
      </footer>
    </div>
  );
};

export default App;