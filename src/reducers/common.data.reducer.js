import { commonDataConstants } from '../constants';

const initState = { drawer_open: false };

export function commonData(state = initState, action) {
  switch (action.type) {
    case commonDataConstants.OPEN_DRAWER:
      return {
        ...state,
        drawer_open: action.open
      };
    default:
      return state;
  }
}