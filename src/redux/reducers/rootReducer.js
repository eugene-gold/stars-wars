import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createBrowserHistory} from "history";
import {createReduxHistoryContext} from "redux-first-history";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas";
import {appReducer} from "./index";
import {peopleReducer} from "./People";
const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    combineReducers({
        app: appReducer,
        people: peopleReducer,
        router: routerReducer
    }),
    composeWithDevTools(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(routerMiddleware)
    )
);

export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga)