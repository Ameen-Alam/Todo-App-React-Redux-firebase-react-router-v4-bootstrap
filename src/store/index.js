import rootRoducer from './reducer'
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    rootRoducer,
    {},
    applyMiddleware(thunk)
)

export default store;