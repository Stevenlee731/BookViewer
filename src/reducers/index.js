import { combineReducers } from 'redux';
import booksReducer from './booksReducer'
import activeBook from './activeBookReducer'

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: activeBook
});

export default rootReducer;
