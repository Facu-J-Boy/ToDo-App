import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../components/Reducers";
import thunk from "redux-thunk";

const composeEnhancers =
    (typeof window !== "undefined" &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;