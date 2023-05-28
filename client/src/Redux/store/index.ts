import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "../Reducers";
import thunk from "redux-thunk";

// const composeEnhancers =
//     (typeof window !== "undefined" &&
//         (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;

// const store = createStore(
//     reducers,
//     composeEnhancers(applyMiddleware(thunk))
// );

// export default store;

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  export default store;