//@ts-check

import { combineReducers } from 'redux';
import headerReducer from '../common/headerReducer';
import sectionsReducer from './sectionsReducer';
import imagesReducer from './imagesReducer';

export default combineReducers({
  headerReducer,
  sectionsReducer,
  imagesReducer,
});
