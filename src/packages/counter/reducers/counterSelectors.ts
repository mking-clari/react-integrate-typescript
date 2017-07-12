export const countersSelector = (state: any) => state.counter;

export const counterSelector = (state: any) => countersSelector(state).get("counter");
