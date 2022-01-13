import { createStore, compose } from "redux";
import combinedReducers from './reducers';
 
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware = devTools ? compose(devTools) : compose();
const store = createStore(combinedReducers, appliedMiddleware);

export default store;