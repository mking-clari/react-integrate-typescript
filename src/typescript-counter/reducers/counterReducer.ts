import * as Immutable from "immutable";
import ActionTypes from "../constants/ActionTypes";

export default function reducer(
    state = Immutable.Map({
        counter: 0,
    }),
    action: any,
) {
    switch (action.type) {
        case ActionTypes.IncrementCounter: {
            // Test reducer error
            // throw new Error("reducer error");

            // Test hot reloading the store
            return state.update("counter", (counter) => counter + 1);
        }

        default: {
            return state;
        }
    }
}