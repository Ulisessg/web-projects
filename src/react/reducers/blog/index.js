//@ts-check
import { combineReducers } from 'redux';
import headerReducer from '../common/headerReducer';
import getBlogReducer from './getBlog';

export default combineReducers({
  headerReducer,
  getBlogReducer,
});
