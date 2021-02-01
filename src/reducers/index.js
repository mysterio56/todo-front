import { combineReducers } from 'redux';

import { commonData } from './common.reducer';
import { tasksData } from './tasks.reducer';

const rootReducer = combineReducers({
  commonData,
  tasksData,
});

export default rootReducer;