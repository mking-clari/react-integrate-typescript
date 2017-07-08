import * as Promise from "bluebird";
import ActionTypes from "../constants/ActionTypes";
import { counterSelector } from "../reducers/countersSelectors";

export function incrementCounter() {
    return (dispatch: any, getState: any) => {
        return Promise.delay(1)
            .then(() => {
                const counter = counterSelector(getState());
                if (counter === 2) {
                    throw new Error("counter is too high");
                }

                dispatch({
                    type: ActionTypes.IncrementCounter,
                });
            });
    };
}
