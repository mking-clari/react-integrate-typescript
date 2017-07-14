import ActionTypes from '../constants/ActionTypes';
import Immutable from 'immutable';

export default function reducer(
  state = Immutable.Map({
    counter: 0,
  }),
  action,
) {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER: {
      // Test reducer error
      // throw new Error('reducer error');
      
      // Test hot reloading the store
      return state.update('counter', counter => counter + 1);
    }

    default: {
      return state;
    }
  }
}