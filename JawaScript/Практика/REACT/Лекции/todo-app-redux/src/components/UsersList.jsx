// src/components/UsersList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../features/users/usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

useEffect(() => {
  console.log('Dispatching fetchUsersRequest');
  dispatch(fetchUsersRequest());
}, [dispatch]);

console.log('UsersList render:', {data, loading, error});

export default UsersList;