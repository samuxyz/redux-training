import { call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../api';

export const FETCH_TODOS = 'FETCH_TODOS';

export const fetchTodoAction = () => ({
  type: FETCH_TODOS,
});

export const fetchTodosSuccess = (payload) => ({
  type: 'FETCH_TODOS_SUCCESS',
  payload,
});

export const fetchTodosFailure = () => ({
  type: 'FETCH_TODOS_FAILURE',
});

export function* fetchTodoSaga () {
  try {
    const result = yield call(api.fetchTodos);
    yield put(fetchTodosSuccess(result));
  } catch (e) {
    yield put(fetchTodosFailure());
  }
}

export function* watchingFetchTodo () {
  yield takeLatest(FETCH_TODOS, fetchTodoSaga);
};