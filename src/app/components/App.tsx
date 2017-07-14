import * as React from "react";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { CounterButton as TypeScriptCounterButton } from "typescript-counter";

const { CounterButton: JavaScriptCounterButton } = require("javascript-counter");
const EventListener = require("react-event-listener").default;
const { List, ListItem, MuiThemeProvider } = require("material-ui");
const printLongStackTrace = require("print-long-stack-trace").default;
const { Tree } = require("tree");

interface IProps {
    className?: string;
    store: any;
}

export default class App extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.handleUnhandledRejection = this.handleUnhandledRejection.bind(this);
    }

    private handleUnhandledRejection(e: any) {
        e.preventDefault();
        printLongStackTrace(console.warn, e.detail.reason);
    }

    public render() {
        return (
            <AppContainer>
                <Provider store={this.props.store}>
                    <MuiThemeProvider>
                        <div className={this.props.className}>
                            <List>
                                <ListItem>
                                    <TypeScriptCounterButton />
                                </ListItem>
                                <ListItem>
                                    <JavaScriptCounterButton />
                                </ListItem>
                                <ListItem>
                                    <Tree />
                                </ListItem>
                            </List>
                            <EventListener
                                onUnhandledRejection={this.handleUnhandledRejection}
                                target="window"
                            />
                        </div>
                    </MuiThemeProvider>
                </Provider>
            </AppContainer>
        );
    }
}
