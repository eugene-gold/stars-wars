import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware} from "redux";
import {history, rootReducer} from "./reducers/rootReducer";
import rootSaga from "./sagas";
import {routerMiddleware} from "connected-react-router";

// const sagaMiddleWare = createSagaMiddleware()
//
// export const store = createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
//     applyMiddleware(
//         routerMiddleware(history),
//         sagaMiddleWare
//     )))
//
// sagaMiddleWare.run(rootSaga)