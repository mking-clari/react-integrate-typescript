export const countersSelector = state => state.javascriptCounter;

export const counterSelector = state => countersSelector(state).get('counter');
