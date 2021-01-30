import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import logger from 'redux-logger';

const middleware = process.env.NODE_ENV === 'production' || process.env.REACT_APP_DEBUG === 'false' ?
    applyMiddleware(thunkMiddleware):
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger));

export const store = (initialState = {}) => {
    return createStore(
        reducers,
        initialState,
        middleware
    );
};