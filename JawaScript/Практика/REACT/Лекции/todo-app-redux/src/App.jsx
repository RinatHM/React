import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import TaskList from './features/tasks/TaskList';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App" style={{ padding: '20px' }}>
          <h1>Менеджер задач</h1>
          <TaskList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsersRequest } from './features/users/usersSlice';

// const UserCard = ({ user }) => (
//   <div style={styles.card}>
//     <h3>{user.name}</h3>
//     <p>Email: {user.email}</p>
//     <p>Phone: {user.phone}</p>
//     <p>Company: {user.company.name}</p>
//     <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
//       Website
//     </a>
//   </div>
// );

// export default function App() {
//   const dispatch = useDispatch();
//   const { data: users, loading, error } = useSelector(state => state.users);

//   useEffect(() => {
//     dispatch(fetchUsersRequest());
//   }, [dispatch]);

//   if (loading) return <div style={styles.loading}>Loading...</div>;
//   if (error) return <div style={styles.error}>Error: {error}</div>;

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>User Management</h1>
//       <div style={styles.grid}>
//         {users.map(user => (
//           <UserCard key={user.id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif'
//   },
//   title: {
//     color: '#333',
//     textAlign: 'center'
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//     gap: '20px',
//     padding: '20px 0'
//   },
//   card: {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '15px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     transition: 'transform 0.2s',
//     ':hover': {
//       transform: 'translateY(-5px)'
//     }
//   },
//   loading: {
//     textAlign: 'center',
//     fontSize: '1.5rem',
//     margin: '50px'
//   },
//   error: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: '1.2rem'
//   }
// };

// import React from 'react';
// import UsersList from './components/UsersList';  // Исправленный путь

// const App = () => {
//   return (
//     <div className="app">
//       <header>
//         <h1>User Management System</h1>
//       </header>
//       <main>
//         <UsersList />
//       </main>
//     </div>
//   );
// };

// export default App;



// import React from 'react';
// import AddProduct from './components/AddProduct';
// import ProductList from './components/ProductList';

// const App = () => {
//   return (
//     <div className="app">
//       {/* 1. Добавляем основной заголовок с ARIA-ролью для доступности */}
//       <header className="app-header">
//         <h1 aria-label="Управление каталогом продуктов">Управление каталогом продуктов</h1>
//       </header>

//       {/* 2. Основное содержимое с семантическим тегом main */}
//       <main className="app-content">
//         {/* 3. Добавляем раздел для добавления продуктов */}
//         <section aria-labelledby="add-product-heading" className="add-product-section">
//           {/* <h2 id="add-product-heading">Добавление нового продукта</h2> */}
//           <AddProduct />
//         </section>

//         {/* 4. Раздел для списка продуктов с четким заголовком */}
//         <section aria-labelledby="product-list-heading" className="product-list-section">
//           {/* <h2 id="product-list-heading">Список продуктов</h2> */}
//           <ProductList />
//         </section>
//       </main>

//       {/* 5. Можно добавить футер для дополнительной информации */}
//       <footer className="app-footer">
//         <p>© {new Date().getFullYear()} Каталог продуктов</p>
//       </footer>
//     </div>
//   );
// };

// export default App;