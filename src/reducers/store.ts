import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import { rootReducer } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const composeEnchancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;

export default createStore(
    rootReducer,
    composeEnchancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);