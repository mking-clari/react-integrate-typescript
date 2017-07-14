export default function printStackFromCatch() {
    try {
        throw new Error("printStackFromCatch");
    } catch (e) {
        // tslint:disable-next-line:no-console
        console.warn(e);
    }
}
