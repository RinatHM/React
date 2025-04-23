import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteTodo, toggleTodo } from '../store/reducers';

const TodoList: React.FC = () => {
  // Получаем все задачи из хранилища
  const todos = useSelector((state: RootState) => state.todos.items);
  // Получаем текущий фильтр
  const filter = useSelector((state: RootState) => state.todos.filter);
  const dispatch = useDispatch();

  // Фильтрация задач в зависимости от выбранного фильтра
  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') return true;
    if (filter === 'COMPLETED') return todo.isCompleted;
    if (filter === 'ACTIVE') return !todo.isCompleted;
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? (
        <p>Нет задач</p>
      ) : (
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="todo-checkbox"
              />
              <span
                className={`todo-text ${todo.isCompleted ? 'completed' : ''}`}
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.description}
              </span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="delete-button"
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;