import shelf from './shelfReducer/shelfReducer';
import { imageFetchError, imagesLoading, images } from './imageReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  shelf,
  images,
  imageFetchError,
  imagesLoading, 
});

export default rootReducer;