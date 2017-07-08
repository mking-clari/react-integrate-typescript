import React from 'react';

export default function CounterMessage(props) {
  return (
    <span className={props.className}>
      Clicked {props.counter} times!
    </span>
  );
}
