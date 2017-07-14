import * as Promise from "bluebird";
import ActionTypes from "../constants/ActionTypes";
import { counterSelector } from "../reducers/counterSelectors";

export function incrementCounter() {
    return (dispatch: any) => {
        return Promise.delay(1)
            .then(() => {
                dispatch({
                    type: ActionTypes.IncrementCounter,
                });
            });
    };
}
