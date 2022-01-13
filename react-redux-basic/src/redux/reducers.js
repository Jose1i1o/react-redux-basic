import { combineReducers } from 'redux';
import counterReducers from './counter/reducer';

const reducers = combineReducers({
    counter: counterReducers,
});

export default reducers;