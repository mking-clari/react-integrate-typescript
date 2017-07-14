import * as Promise from "bluebird";

export default function debugAsync() {
    return Promise.delay(1)
        .then(() => {
            // tslint:disable-next-line:no-debugger
            debugger;
        });
}
