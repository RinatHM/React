// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/actions';

function App() {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <div style={{
            backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
            color: theme === 'light' ? '#000000' : '#ffffff',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <h1>{theme === 'light' ? 'Светлая тема' : 'Темная тема'}</h1>
            <button onClick={handleToggleTheme}>
                Переключить тему
            </button>
        </div>
    );
}

export default App;



// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import Counter from './Counter2';

// const App = () => {
//     return (
//         <Provider store={store}>
//             <Counter />
//         </Provider>
//     );
// };

// export default App;
// import React, { useState } from 'react';
// import withLoadingIndicator from './sem_5';
// import ExampleComponent from './sem_examle';

// const EnhancedExampleComponent = withLoadingIndicator(ExampleComponent);

// function App() {
//     const [isLoading, setIsLoading] = useState(true);

//     // Симулируем загрузку данных
//     setTimeout(() => {
//         setIsLoading(false);
//     }, 3000); // Загрузка длится 3 секунды

//     return (
//         <div>
//             <EnhancedExampleComponent isLoading={isLoading} message="Данные загружены!" />
//         </div>
//     );
// }

//export default App;



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage1 from './components/HomePage1';
// import AboutPage1 from './components/AboutPage1';
//import Example from './theme';
//import { MyThemeContext } from './context'; // импорт контекста

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage1 />} />
//                 <Route path="/about" element={<AboutPage1 />} />
//             </Routes>
//         </Router>
//     );
// };

//export default App;























// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ListPage from './components/ListPage';
// import DetailPage from './components/DetailPage';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<ListPage />} />
//                 <Route path="/detail/:id" element={<DetailPage />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;























// Функция для генерации случайного цвета в формате hex
// const getRandomColor = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   return `#${randomColor}`;
// };

// // Компонент List, который принимает функцию render
// const List = ({ render }) => {
//   const items = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5', 'Пункт 6', 'Пункт 7', 'Пункт 8', 'Пункт 9', 'Пункт 10']; // Список элементов

//   return (
//       <ul>
//           {items.map((item, index) => (
//               <li key={index}>{render(item)}</li>
//           ))}
//       </ul>
//   );
// };

// // Главный компонент приложения
// const App = () => {
//   return (
//       <div>
//           <h1>Случайный цвет для каждого пункта списка</h1>
//           <List 
//               render={(item) => (
//                   <span style={{ color: getRandomColor() }}>
//                       {item}
//                   </span>
//               )}
//           />
//       </div>
//   );
// };

// export default App;


// function App() {
//   return (
//     <>
//     <div className="app">
//     <h1>Пример Render props c функциональным компонентом</h1>
 

//     </div>
//     </>
    
//   );
// };
 

// export default App;



// {/* <div>
// <h1>Пример Render props c функционалным компонентом</h1>
// <MouseTracker render={({ x, y }) => <MouseInfo x={x} y={y} />} />
// </div> */}
// const MouseTracker = ({render}) => {
//   const [position, setPosition] = useState({ x: 0, y: 0});

//   const handleMouseMove = (event) => {
//     setPosition({ x: event.clientX, y: event.clientY});
//   };
// return (
//   <div style={{ height: '100vh'}} onMouseMove={handleMouseMove}>
//   {/*function*/}
//   {render(position)}
//   </div>
// )
// }

// const MouseInfo = ({ x, y }) => {
//   return (
//      <div>
//     <h2>Положение курсора мыши</h2>
//     <p>X: {x}, Y: {y}</p>
//     </div>
//   )
//   }






/* <div>
<h2>Пример 3 использования "props.children"</h2>
<Card title="карточка 1">
  <p>Это содержимое первой карточки</p>
  <button>Действие</button>
</Card>
<Card title="карточка 2">
  <p>Это содержимое второй карточки</p>
  <a href="#">Ссылка</a>
</Card>
</div> }*/



// {/* <div>
// <h2>Пример 2 использования "children"</h2>
// <BorderComp>
//   <p>Этот абзац внутри рамки</p>
//   <button>Кнопка внутри рамки</button>
//   </BorderComp> 
//   <BorderComp> Новый заголовок</BorderComp>
//   <p>Этот абзац снаружи рамки</p>
// </div> */}

// const BorderComp = ({ children }) => {
//   return (
//     <div style={{ border: '2px solid #000', padding: '16px'}}>{children}</div>
//   );
// };

// const Card = ({ title, children }) => {
//   return (
//     <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px '}}>
//     <h2>{title}</h2>
//     <h3>Рекламный блок</h3>
//     {children}</div>
//  );
  
// }
// export default function TextInput() {
//   const [inputText, setinputText] = useState("");
// const [arr, setArr] = useState(["Prod_1", "Prod_2"]);

//   function clickHandler() {
//     if (!inputText.trim()) {
//       return;
//     }
//     setArr([ ... arr, inputText]);
//     setinputText("");
//   }

//   return (
//     <label htmlFor="input">Введите текст: </label>
//     <input onChange={(event) => setinputText(event.target.value)} 
//     type="text" id="input"
//     value={inputText}
//     maxLength={10}></input>
//     <button onClick={clickHandler}>Click to add</button>
//     <ul>
//       {arr.map((item) => (
//         <li key={arr.indexOf(item)}>{item}</li>
//       ))}
//     </ul>
//     <
//   )
// }

// export default TextInput;

// import { useEffect, useState } from "react";

// function TextInput() {
//   const [txt, setTxt] = useState();
//   const geTxt = ({target}) => {
//     setTxt(target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={txt} onChange={geTxt} maxLength="10"/>
//       <p>Вы ввели : {txt}</p>
//     </div>
//   )
// }

// export default TextInput;


// function Example(props) {
//   return <span>{props.message}</span>;
// }

// const withLoggerHOC = function (Component) {
//   return (props) => {
//       console.log(props);  // Логируем свойства в консоли
//       return <Component {...props} />;  // Возвращаем оригинальный компонент с переданными свойствами
//   }
// };

// export default withLoggerHOC(Example);

// function App() {
//   return (
//     <div>
//     <Example message="Hello, world!" />
// </div>
//   );
// }

// export default App;



// import EventCard from './EventCard';
// import Counter from "./components/counters";
// import Show from "./components/visible";
// import Comment from "./components/CommentsList";
//import Greetings from './components/Greeting2';
// import Counters from "./components/counters.js";
// import MessagesList from './components/MessageList.js';
// import TnemeSwitcher from './components/TimeSwitcher.js';
// import TextDisplayform from './components/TextDisplayform.js';
// import TemperatureConverter from './components/TemperatureConverter.js';
// import TodoList from './components/TodoList.js';




// function DivWithChild() {
//   return ( 
//     <div>
//       { children }
//     </div>
//    );
// }
 

  


//export default DivWithChild;

