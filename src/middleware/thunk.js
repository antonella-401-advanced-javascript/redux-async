export const thunkMiddleware = store => next => action => {
  // eslint-disable-next-line no-console
  console.log('inside thunk', action);
  if(typeof action === 'function') {
    action(store.dispatch);
  }
  else {
    next(action);
  }
};