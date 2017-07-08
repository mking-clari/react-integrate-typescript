import * as React from "react";
import { Provider } from "react-redux";
import CounterButton from "./CounterButton";

const EventListener = require("react-event-listener").default;
const { MuiThemeProvider } = require("material-ui");

interface IProps {
    className?: string;
    store: any;
}

export default class App extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.handleUnhandledRejection = this.handleUnhandledRejection.bind(this);
    }

    // tslint:disable-next-line
    private handleUnhandledRejection(e: any) {
    }

    public render() {
        return (
            <Provider store={this.props.store}>
                <MuiThemeProvider>
                    <div className={this.props.className}>
                        <CounterButton />
                        <EventListener
                            onUnhandledRejection={this.handleUnhandledRejection}
                            target="window"
                        />
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}
