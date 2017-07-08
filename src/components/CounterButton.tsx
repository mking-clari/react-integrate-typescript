import * as classNames from "classnames";
import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { incrementCounter } from "../actions/countersActions";
import { counterSelector } from "../reducers/countersSelectors";

const { Button } = require("material-ui");
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
            Clicked {props.counter} times.
        </Button>
    );
}

const selector = createStructuredSelector({
  counter: counterSelector,
});

export default connect(selector, {
    incrementCounter,
})(CounterButton);