import { combineReducers } from 'redux';

import { commonData } from './common.data.reducer';

const rootReducer = combineReducers({
  commonData,
});

export default rootReducer;