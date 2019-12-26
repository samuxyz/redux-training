/**
 * Mocking client-server processing
 */
import _todos from './todos';

const TIMEOUT = 100;

export const api = {
  fetchTodos () {
    return new Promise((resolve) => {
      setTimeout(() => resolve(_todos), TIMEOUT);
    });
  },
};