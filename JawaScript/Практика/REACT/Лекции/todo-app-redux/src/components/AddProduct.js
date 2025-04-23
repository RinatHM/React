import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productsSlice';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({
      name,
      description,
      price: parseFloat(price),
      available
    }));
    setName('');
    setDescription('');
    setPrice('');
    setAvailable(true);
  };

  return (
    <div className="add-product">
      <h2>Добавить новый продукт</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Название:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Описание:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Цена:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
            />
            Доступен
          </label>
        </div>
        <button type="submit">Добавить продукт</button>
      </form>
    </div>
  );
};

export default AddProduct;