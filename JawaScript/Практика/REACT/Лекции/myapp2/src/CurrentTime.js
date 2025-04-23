// CurrentTime.js
// import React, { useState, useEffect } from 'react';
import './CurrentTime.css'; // Импортируем файл стилей

// const CurrentTime = () => {
//     const [time, setTime] = useState('');

//     useEffect(() => {
//         const updateTime = () => {
//             const now = new Date();
//             setTime(now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }));
//         };
        
//         updateTime(); // Начальная установка времени
//         const timerId = setInterval(updateTime, 1000); // Обновляем время каждую секунду
        
//         return () => clearInterval(timerId); // Чистим интервал при размонтировании компонента
//     }, []);

//     return (
//         <h2 className="current-time">Текущее время: {time}</h2>
//     );
// };

function CurrentTime() {
    const currentTime = new Date;
    return (
        <div className="Time">
            <h2>Текущее время: {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h2>
            <h2>Дата: {currentTime.toLocaleDateString("en-GB")}</h2>
        </div>
    )
}
export default CurrentTime;