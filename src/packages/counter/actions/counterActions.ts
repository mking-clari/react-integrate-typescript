import * as Promise from "bluebird";
import ActionTypes from "../constants/ActionTypes";
import { counterSelector } from "../reducers/counterSelectors";

export function incrementCounter() {
    return (dispatch: any, getState: any) => {
        const counter = counterSelector(getState());
        if (counter === 2) {
            // Error outside promise has a readable stack trace
            // throw new Error("counter is too high");
        }

        return Promise.delay(1)
            .then(() => {
                if (counter === 2) {
                    // Error inside promise does not have a readable stack trace
                    // throw new Error("counter is too high");
                }

                dispatch({
                    type: ActionTypes.IncrementCounter,
                });
            });
    };
}
