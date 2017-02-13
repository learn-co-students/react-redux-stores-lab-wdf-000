export default function createStore(reducer){
// your code here!
  let state;
  let listeners = [];

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach( listener => listener() );
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  dispatch({});

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }

}
