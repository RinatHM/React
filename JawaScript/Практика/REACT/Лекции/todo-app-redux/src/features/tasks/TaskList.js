import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, toggleTask, deleteTask } from './tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const { items: tasks, status, error } = useSelector(state => state.tasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      dispatch(addTask(newTaskTitle));
      setNewTaskTitle('');
    }
  };

  if (status === 'loading') return <div>Загрузка...</div>;
  if (status === 'failed') return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h2>Список задач</h2>
      <div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Новая задача"
        />
        <button onClick={handleAddTask}>Добавить</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ margin: '10px 0' }}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => dispatch(toggleTask(task.id))}
            >
              {task.title}
            </span>
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;