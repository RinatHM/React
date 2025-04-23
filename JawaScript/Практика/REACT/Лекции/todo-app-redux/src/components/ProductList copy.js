import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability, updateProduct } from '../store/productsSlice';

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    description: '',
    price: '',
    available: false
  });

  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditForm({
      name: product.name,
      description: product.description,
      price: product.price,
      available: product.available
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProduct({
      id: editingId,
      ...editForm,
      price: parseFloat(editForm.price)
    }));
    setEditingId(null);
  };

  return (
    <div className="product-list">
      <h2>Список продуктов</h2>
      {products.length === 0 ? (
        <p>Нет продуктов в каталоге</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id} className={`product-item ${!product.available ? 'unavailable' : ''}`}>
              {editingId === product.id ? (
                <form onSubmit={handleUpdate}>
                  <div>
                    <label>Название:</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label>Описание:</label>
                    <textarea
                      value={editForm.description}
                      onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                    />
                  </div>
                  <div>
                    <label>Цена:</label>
                    <input
                      type="number"
                      value={editForm.price}
                      onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                      step="0.01"
                      required
                    />
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        checked={editForm.available}
                        onChange={(e) => setEditForm({...editForm, available: e.target.checked})}
                      />
                      Доступен
                    </label>
                  </div>
                  <button type="submit">Сохранить</button>
                  <button type="button" onClick={() => setEditingId(null)}>Отмена</button>
                </form>
              ) : (
                <>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Цена: ${product.price.toFixed(2)}</p>
                  <p>Статус: {product.available ? 'Доступен' : 'Недоступен'}</p>
                  <button onClick={() => dispatch(toggleAvailability(product.id))}>
                    {product.available ? 'Снять с продажи' : 'Вернуть в продажу'}
                  </button>
                  <button onClick={() => handleEdit(product)}>Редактировать</button>
                  <button onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;