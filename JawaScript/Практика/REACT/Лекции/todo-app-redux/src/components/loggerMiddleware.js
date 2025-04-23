const loggerMiddleware = (store) => (next) => (action) => {
    // Логируем действие и текущее состояние (до выполнения)
    console.log('Действие:', action);
    console.log('Состояние до:', store.getState());
  
    // Передаем действие следующему middleware или редюсеру
    const result = next(action);
  
    // Логируем состояние после выполнения
    console.log('Состояние после:', store.getState());
  
    return result;
  };
  
  export default loggerMiddleware;