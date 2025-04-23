import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability, updateProduct } from '../store/productsSlice';

const ProductList = () => {
  // 1. Получаем данные из Redux store
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  
  // 2. Состояние для редактирования
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    description: '',
    price: '',
    available: false
  });

  // 3. Эффект для сброса формы при отмене редактирования
  useEffect(() => {
    if (editingId === null) {
      setEditForm({
        name: '',
        description: '',
        price: '',
        available: false
      });
    }
  }, [editingId]);

  // 4. Обработчик начала редактирования
  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(), // Конвертируем число в строку для input
      available: product.available
    });
  };

  // 5. Обработчик сохранения изменений
  const handleUpdate = (e) => {
    e.preventDefault();
    
    // Валидация цены
    if (isNaN(parseFloat(editForm.price))) {
      alert('Пожалуйста, введите корректную цену');
      return;
    }

    dispatch(updateProduct({
      id: editingId,
      ...editForm,
      price: parseFloat(editForm.price) // Конвертируем обратно в число
    }));
    setEditingId(null);
  };

  // 6. Обработчик отмены редактирования
  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="product-list">
      <h2>Список продуктов</h2>
      {products.length === 0 ? (
        <p>Нет продуктов в каталоге</p>
      ) : (
        <ul className="products-container">
          {products.map(product => (
            <li 
              key={product.id} 
              className={`product-item ${!product.available ? 'unavailable' : ''}`}
              data-testid={`product-${product.id}`} // Добавляем testid для тестов
            >
              {editingId === product.id ? (
                // Форма редактирования
                <form onSubmit={handleUpdate} className="edit-form">
                  <div className="form-group">
                    <label>Название:</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      required
                      maxLength={100} // Ограничение длины
                    />
                  </div>
                  <div className="form-group">
                    <label>Описание:</label>
                    <textarea
                      value={editForm.description}
                      onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                      maxLength={500}
                    />
                  </div>
                  <div className="form-group">
                    <label>Цена:</label>
                    <input
                      type="number"
                      value={editForm.price}
                      onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                      step="0.01"
                      min="0"
                      required
                    />
                  </div>
                  <div className="form-group checkbox">
                    <label>
                      <input
                        type="checkbox"
                        checked={editForm.available}
                        onChange={(e) => setEditForm({...editForm, available: e.target.checked})}
                      />
                      Доступен
                    </label>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn save">Сохранить</button>
                    <button 
                      type="button" 
                      onClick={handleCancel}
                      className="btn cancel"
                    >
                      Отмена
                    </button>
                  </div>
                </form>
              ) : (
                // Карточка продукта
                <div className="product-card">
                  <h3>{product.name}</h3>
                  <p className="description">{product.description}</p>
                  <p className="price">Цена: ${product.price.toFixed(2)}</p>
                  <p className={`status ${product.available ? 'available' : 'unavailable'}`}>
                    Статус: {product.available ? 'Доступен' : 'Недоступен'}
                  </p>
                  <div className="product-actions">
                    <button 
                      onClick={() => dispatch(toggleAvailability(product.id))}
                      className={`btn ${product.available ? 'disable' : 'enable'}`}
                    >
                      {product.available ? 'Снять с продажи' : 'Вернуть в продажу'}
                    </button>
                    <button 
                      onClick={() => handleEdit(product)}
                      className="btn edit"
                    >
                      Редактировать
                    </button>
                    <button 
                      onClick={() => {
                        if (window.confirm('Вы уверены, что хотите удалить этот продукт?')) {
                          dispatch(deleteProduct(product.id));
                        }
                      }}
                      className="btn delete"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;