// @ts-check

import { combineReducers } from 'redux';
import sectionsReducer from './sectionsReducer';
import imagesReducer from './imagesReducer';

export default combineReducers({
  sectionsReducer,
  imagesReducer,
});
