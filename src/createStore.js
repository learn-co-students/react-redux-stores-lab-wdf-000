export default function createStore(reducer){
// your code here!
  let state;
  let listeners = [];
  
  const subscribe = (listener) => {
    listeners.push(listener);
  }
  
  const dispatch = (action) => {
   state = reducer(state, action)
   listeners.forEach( listener => listener() ) 
  }
  
  dispatch({type:"Initial Action"})
  
  const getState = () => {
    return state
  }
  
  return{
    getState: getState,
    dispatch: dispatch,
    subscribe, subscribe
  }
}
