import React, { useContext } from "react";
import { MyThemeContext } from "./context";


//export const MyThemeContext = React.createContext({theme: 'dark'}); //Сперва контекст необходимо создать. Функция createContext принимает аргументом значение переменной контекста по умолчанию.

// export function App() {
//     return (
//     <MyContext.Provider value={{ theme: 'dark' }}>
//     <Router />
//     </MyContext.Provider>
//     )
//     }
    
export default function Example() {
    const contextValue = useContext(MyThemeContext);
    console.log(contextValue); // { theme: 'dark' }
    return <span>Example</span>;
    }
        