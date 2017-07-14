import { Button } from 'material-ui';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { counterSelector } from '../reducers/counterSelectors';
import { createStructuredSelector } from 'reselect';
import { incrementCounter } from '../actions/counterActions';
import React from 'react';
import styles from './CounterButton.scss';

function CounterButton(props) {
  return (
    <Button
      className={classNames(styles.button, props.className)}
      onClick={() => props.incrementCounter()}
      raised
    >
      Clicked {props.counter} times from JavaScript!
    </Button>
  );
}

const selector = createStructuredSelector({
  counter: counterSelector,
});

export default connect(selector, {
  incrementCounter,
})(CounterButton);