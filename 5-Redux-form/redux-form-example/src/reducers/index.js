import { combineReducers } from 'redux';
import { reducer as todos } from './todos';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  // todos,
  form: formReducer,
});