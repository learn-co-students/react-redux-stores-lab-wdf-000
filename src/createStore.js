export default function createStore(reducer){
// your code here!
  let state;
  let listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach( listener => listener() ) 
  }
  
  dispatch({});

  const getState = () => {
    return state
  }
 
  return {
    getState: getState,   
    dispatch: dispatch,
    subscribe: subscribe     
  }
}
