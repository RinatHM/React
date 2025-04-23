import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

// 1. Получаем корневой элемент
const container = document.getElementById('root');
// 2. Создаем корень
const root = createRoot(container);
// 3. Рендерим приложение
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import App from './App';

// // Получаем корневой элемент
// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);

// // Рендерим приложение
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );