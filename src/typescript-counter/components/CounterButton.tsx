import * as classNames from "classnames";
import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { incrementCounter } from "../actions/counterActions";
import { counterSelector } from "../reducers/counterSelectors";

const { Button } = require("material-ui");
const CounterMessage = require("./CounterMessage").default;
const styles = require("./CounterButton.scss");

interface IProps {
    className?: string;
    counter: number;
    incrementCounter(): void;
}

function CounterButton(props: IProps) {
    return (
        <Button
            className={classNames(styles.button, props.className)}
            onClick={() => props.incrementCounter()}
            raised={true}
        >
            <CounterMessage counter={props.counter} />
        </Button>
    );
}

const selector = createStructuredSelector({
    counter: counterSelector,
});

export default connect(selector, {
    incrementCounter,
})(CounterButton);