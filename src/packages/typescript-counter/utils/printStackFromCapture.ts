import * as Promise from "bluebird";

export default function printStackFromCapture() {
    const obj = {};
    Error.captureStackTrace(obj);
    
    // tslint:disable-next-line:no-console
    console.warn((obj as any).stack);
}
