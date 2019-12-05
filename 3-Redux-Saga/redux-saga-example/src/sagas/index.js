import { fork, all } from 'redux-saga/effects';
import { watchingFetchTodo } from './todo';

export default function* rootSaga () {
  yield all([
    fork(watchingFetchTodo),
  ]);
};