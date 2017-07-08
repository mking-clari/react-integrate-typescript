import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

function createRootReducer() {
    return combineReducers({
        counters: require("../reducers/countersReducer").default,
    });
}

export default function configureStore() {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        createRootReducer(),
        undefined,
        composeEnhancers(applyMiddleware(thunk)),
    );

    if (module.hot) {
        module.hot.accept("../reducers/countersReducer", () => {
            store.replaceReducer(createRootReducer());
        });
    }

    return store;
}