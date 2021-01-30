
import { commonDataConstants } from '../constants';

export const openDrawer = open => dispatch => {
    dispatch({ type: commonDataConstants.OPEN_DRAWER, open })
};