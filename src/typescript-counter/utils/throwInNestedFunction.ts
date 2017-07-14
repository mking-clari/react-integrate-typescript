import * as Promise from "bluebird";

export default function throwInNestedFunction() {
    (function outerFunction() {
        (function innerFunction() {
            throw new Error("throwInNestedFunction");
        })();
    })();
}
