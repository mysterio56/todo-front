import { commonDataConstants } from '../constants';

export const commonActions = {
    openDrawer,
    openModal
};

function openDrawer( open ) {
    return { type: commonDataConstants.OPEN_DRAWER, open }
}

function openModal( open ) {
    return { type: commonDataConstants.OPEN_MODAL, open }
}