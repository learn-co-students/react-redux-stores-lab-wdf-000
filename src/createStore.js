export default function createStore(reducer){
// your code here!
  let listeners = [];
  let state;

  const getState = () => {
    const stuff = reducer(state, {action: {type: "DEFAULT"}});
    return stuff;
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    // console.log(state);
    listeners.forEach( listener => listener() )
  };

  return {
    getState: getState,
    subscribe: subscribe,
    dispatch: dispatch
  }
}
