import ActionTypes from '../constants/ActionTypes';
import Promise from 'bluebird';

export function incrementCounter() {
  return (dispatch) => {
    return Promise.delay(1)
      .then(() => {
        dispatch({
          type: ActionTypes.INCREMENT_COUNTER,
        });
      });
  };
}
