import React from 'react';
import { createRoot } from 'react-dom/client'; // Для React 18+
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './store/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import App from './App';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

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