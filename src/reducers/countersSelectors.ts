export const countersSelector = (state: any) => state.counters;

export const counterSelector = (state: any) => countersSelector(state).get("counter");
