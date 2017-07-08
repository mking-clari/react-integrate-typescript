import ActionTypes from "../constants/ActionTypes";

export function incrementCounter() {
    return {
        type: ActionTypes.IncrementCounter,
    };
}
