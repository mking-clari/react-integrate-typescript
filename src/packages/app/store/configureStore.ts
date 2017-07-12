import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

function createRootReducer() {
    return combineReducers({
        counter: require("counter").reducer,
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
        module.hot.accept("counter", () => {
            store.replaceReducer(createRootReducer());
        });
    }

    return store;
}