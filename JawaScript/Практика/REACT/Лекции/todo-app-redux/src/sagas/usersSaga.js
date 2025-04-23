import { call, put, takeEvery } from 'redux-saga/effects';

// API функция
function* fetchUsersApi() {
  const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
  return yield response.json();
}

// Рабочая сага
function* fetchUsers() {
  try {
    const users = yield call(fetchUsersApi);
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
  } catch (e) {
    yield put({ type: 'FETCH_USERS_FAILURE', error: e.message });
  }
}

// Главная сага
export default function* usersSaga() {
  yield takeEvery('FETCH_USERS_REQUEST', fetchUsers);
}