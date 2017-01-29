export default function createStore(reducer){
// your code here!
  let state;
  let listeners = [];

  const getState = () => { return reducer(state, reducer); };
// let state = 0 getState = () => { return state };


  const subscribe = (listener) => listeners.push(listener);

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach( listener => listener())
  };

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }
}
