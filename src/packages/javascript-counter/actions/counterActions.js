import ActionTypes from '../constants/ActionTypes';
import Promise from 'bluebird';

export function incrementCounter() {
  return (dispatch) => {
    // Test sync error
    // throw new Error('sync error');

    return Promise.delay(1)
      .then(() => {
        // Test async error
        // throw new Error('async error');

        dispatch({
          type: ActionTypes.INCREMENT_COUNTER,
        });
      });
  };
}
