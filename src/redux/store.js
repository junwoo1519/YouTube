import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, (composeWithDevTools(applyMiddleware(sagaMiddleware))));

sagaMiddleware.run(saga);

export default store;