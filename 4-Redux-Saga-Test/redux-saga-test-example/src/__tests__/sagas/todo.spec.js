import {
  testSaga,
  expectSaga,
} from 'redux-saga-test-plan';
import { api } from '../../api';
import reducers from '../../reducers';
import todoResponse from '../../api/todos';
import {
  FETCH_TODOS,
  fetchTodoAction,
  fetchTodosSuccess,
  fetchTodosFailure,
  fetchTodoSaga,
  watchingFetchTodo,
} from '../../sagas/todo';

describe('Unit test', () => {
  const expectedResponse = {
    foo: 'bar'
  };

  it('should work', () => {
    testSaga(fetchTodoSaga, { payload: undefined })
      .next().call(api.fetchTodos)
      .next(expectedResponse).put(fetchTodosSuccess(expectedResponse))
      .next().isDone();
  });

  it('should fail with wrong argument to put effect', () => {

    const revisedResponse = { ... expectedResponse };
    revisedResponse.foo = 'barbar';

    testSaga(fetchTodoSaga, { payload: undefined })
      .next().call(api.fetchTodos)
      .next(expectedResponse).put(fetchTodosSuccess(revisedResponse))
      .next().isDone();
  });
});

describe('Integration test', () => {
  it('handles reducers and store state', () => {
    return expectSaga(fetchTodoSaga)
      .withReducer(reducers)
      .hasFinalState({ todos: todoResponse})
      .run();
  });

  it('handles reducers and store state - fail with wrong state', () => {
    return expectSaga(fetchTodoSaga)
      .withReducer(reducers)
      .hasFinalState({ todos: { foo: 'bar' }})
      .run();
  });
});

describe('Actions', () => {
  it('fetchTodoAction', () => {
    expect(fetchTodoAction()).toEqual({
      type:    FETCH_TODOS,
      payload: undefined,
    });
  });
});


describe('Watcher', () => {
  it('should work', () => {
    testSaga(watchingFetchTodo)
      .next().takeLatest(FETCH_TODOS, fetchTodoSaga)
      .finish().isDone();
  });
});
