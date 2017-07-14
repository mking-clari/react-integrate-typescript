import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

function createRootReducer() {
    return require("./rootReducer").default;
}

export default function configureStore() {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false,
        }) :
        compose;

    const store = createStore(
        createRootReducer(),
        undefined,
        composeEnhancers(applyMiddleware(thunk)),
    );

    if (module.hot) {
        module.hot.accept("./rootReducer", () => {
            store.replaceReducer(createRootReducer());
        });
    }

    return store;
}