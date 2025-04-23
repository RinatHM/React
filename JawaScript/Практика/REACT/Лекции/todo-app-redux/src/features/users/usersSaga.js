import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure } from './usersSlice';


function* fetchUsers(action) {
  try {
    const page = action.payload || 1;
    const response = yield call(
      fetch, 
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
    );
    const users = yield response.json();
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* usersSaga() {
  yield takeEvery('users/fetchUsersRequest', fetchUsers);
}