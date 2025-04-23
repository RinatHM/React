import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="app">
      <h1>Управление каталогом продуктов</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default App;


// import React from 'react';
// import AddTodo from './components/AddTodo';
// import TodoList from './components/TodoList';

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Список дел</h1>
//       <AddTodo />
//       <TodoList />
//     </div>
//   );
// };

// export default App;