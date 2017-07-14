export const countersSelector = (state: any) => state.typescriptCounter;

export const counterSelector = (state: any) => countersSelector(state).get("counter");
