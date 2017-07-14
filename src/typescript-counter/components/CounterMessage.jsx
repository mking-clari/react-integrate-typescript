import React from 'react';

// Test hot reloading JavaScript component
export default function CounterMessage(props) {
  return (
    <span className={props.className}>
      Clicked {props.counter} times from TypeScript!
    </span>
  );
}
