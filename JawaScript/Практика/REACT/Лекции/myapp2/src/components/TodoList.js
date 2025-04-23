import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Card } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  // Хук состояния для хранения списка задач
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Функция для добавления новой задачи
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput(''); // Сброс поля ввода
    }
  };

  // Функция для удаления задачи по индексу
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Новая задача"
        variant="outlined"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" onClick={addTask}>
        Добавить
      </Button>
      
      <List style={{ marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <ListItem key={index} component={Card} style={{ margin: '10px 0' }}>
            <ListItemText primary={task} />
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;