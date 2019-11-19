import { combineReducers } from 'redux';
import characters from './charactersReducer';
import simpsons from './simpsonsReducer';

export default combineReducers({
  characters,
  simpsons
});