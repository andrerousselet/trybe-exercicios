import { combineReducers } from 'redux';
import clickReducer from '../reducers/clickReducer'

const rootReducer = combineReducers({ clickReducer });

export default rootReducer;
