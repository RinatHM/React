import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/reducers';

const AddTodo: React.FC = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTodo({ description })); // Теперь передаем только description
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Введите описание задачи"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddTodo;