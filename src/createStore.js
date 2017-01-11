export default function createStore(reducer){

  let state = 0
  let listeners = []

  const getState = () => {
    return state
  }

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach( listener => listener() )
  }

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }

}
