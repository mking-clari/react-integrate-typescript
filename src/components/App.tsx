import * as React from "react";
import { Provider } from "react-redux";
import CounterButton from "./CounterButton";

const { MuiThemeProvider } = require("material-ui");

interface IProps {
    className?: string;
    store: any;
}

export default function App({
    className,
    store,
}: IProps) {
    return (
        <Provider store={store}>
            <MuiThemeProvider>
                <CounterButton />
            </MuiThemeProvider>
        </Provider>
    );
}
