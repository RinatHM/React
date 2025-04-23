import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/reducers';

const TodoFilter: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('ALL'))}>Все</button>
      <button onClick={() => dispatch(setFilter('COMPLETED'))}>Выполненные</button>
      <button onClick={() => dispatch(setFilter('ACTIVE'))}>Активные</button>
    </div>
  );
};

export default TodoFilter;