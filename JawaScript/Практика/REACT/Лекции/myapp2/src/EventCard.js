// EventCard.js
import React from 'react';
import './EventCard.css'; // Импорт CSS стилей

function EventCard ({ title, date, location, propsBoolean }) {
    return (
        <div className="event-card">
            <h2 style={{ color: propsBoolean ? 'green' : 'red' }}><span className="eventCard_title">Группа</span>"{title}"</h2>
            <h2><span className="eventCard_date">Дата:</span>{date}</h2>
            <h2><span className="event_description">Адрес:</span>{location}</h2>
        </div>
    );
};

export default EventCard;