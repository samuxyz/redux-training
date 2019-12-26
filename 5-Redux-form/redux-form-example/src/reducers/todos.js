
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: { id },
});

export const addTodos = (todos) => ({
  type: 'ADD_TODOS',
  payload: todos,
});

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO': return state.map((todo) => {
      return todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
    });
    case 'ADD_TODOS': return [...state, ...action.payload];
    default: return state;
  }
};