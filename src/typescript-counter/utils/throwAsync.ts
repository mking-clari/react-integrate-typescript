import * as Promise from "bluebird";

export default function throwAsync() {
    return Promise.delay(1)
        .then(() => {
            throw new Error("throwAsync");
        });
}
