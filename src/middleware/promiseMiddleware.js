export const promiseMiddleware = store => next => action => {
  if(action.payload && action.payload === Promise.resolve(action.payload)) {
    store.dispatch({
      type: action.loadingType || `${action.type}_LOADING`
    });
    action.payload.then(fulfilledValue => {
      store.dispatch({
        type: action.type,
        payload: fulfilledValue
      });

      store.dispatch({
        type: action.doneType || `${action.type}_DONE`
      });
    });
  }
  else {
    next(action);
  }
};