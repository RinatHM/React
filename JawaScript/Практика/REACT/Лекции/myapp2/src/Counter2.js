// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Счетчик: {count}</h1>
            <button onClick={() => dispatch(increment())}>Увеличить</button>
            <button onClick={() => dispatch(decrement())}>Уменьшить</button>
            <button onClick={() => dispatch(decrement())}>Уменьшить</button>

        </div>
    );
};

export default Counter;