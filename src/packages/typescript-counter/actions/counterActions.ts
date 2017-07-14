import * as Promise from "bluebird";
import ActionTypes from "../constants/ActionTypes";
import { counterSelector } from "../reducers/counterSelectors";
import throwInNestedPromise from "../utils/throwInNestedPromise";

export function incrementCounter() {
    return (dispatch: any) => {
        throwInNestedPromise();

        return Promise.delay(1)
            .then(() => {
                dispatch({
                    type: ActionTypes.IncrementCounter,
                });
            });
    };
}
