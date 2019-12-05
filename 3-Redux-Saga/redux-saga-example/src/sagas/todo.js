import { call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../api';

export const fetchTodos = () => ({
  type: 'FETCH_TODOS',
});

const fetchTodosSuccess = (payload) => ({
  type: 'FETCH_TODOS_SUCCESS',
  payload,
});

const fetchTodosFailure = () => ({
  type: 'FETCH_TODOS_FAILURE',
});

function* fetchTodo (action) {
  try {
    const result = yield call(api.fetchTodos);
    yield put(fetchTodosSuccess(result));
  } catch (e) {
    yield put(fetchTodosFailure());
  }
}

export function* watchingFetchTodo () {
  yield takeLatest('FETCH_TODOS', fetchTodo);
};