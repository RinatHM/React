import { useState } from "react";

function Comment({ id, text }) {
    const [isVisible, setIsVisible] = useState(true); // Начальное состояние видимости комментария

    const blockComment = () => {
        setIsVisible(prevState => !prevState); // Меняем состояние видимости на противоположное
    };
 
    return (
        <div>
            <button onClick={blockComment}>
                {isVisible ? "Скрыть комментарий" : "Показать комментарий"}
            </button>
            <div style={{ display: isVisible ? 'block' : 'none' }}>
                <h2 style={{ color: 'red' }}>
                    <span className="comment">Номер Комментария:</span> "{id}"
                </h2>
                <h2>
                    <span className="comment_text">Содержание комментария:</span> {text}
                </h2>
            </div>
        </div>
    );
}

export default Comment;