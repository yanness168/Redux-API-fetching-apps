import reducerData from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    reducerData,
    applyMiddleware(thunk),
    
);
console.log(store.getState());
export default store;



