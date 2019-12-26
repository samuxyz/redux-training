import { combineReducers } from 'redux';
import { reducer as todos } from './todos';

export default combineReducers({
  todos,
});