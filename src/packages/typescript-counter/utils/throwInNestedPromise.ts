import * as Promise from "bluebird";

export default function throwInNestedPromise() {
    return Promise.delay(1)
        .then(() => {
            return Promise.delay(1)
                .then(() => {
                    throw new Error("throwInNestedPromise");
                });
        });
}
