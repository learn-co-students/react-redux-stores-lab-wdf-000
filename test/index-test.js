const createStore  = require('../src/createStore');
const todosReducer =  require('../src/reducers/todosReducer');
const sinon = require('sinon');

describe('createStore', function() {

  const store = createStore(todosReducer);

  it('returns an object', function() {
    expect(store).toBeA(Object)
  })

  it('returns the default state based on the reducer', function(){
    expect(store.getState()).toEqual([]);
  })

  it('can dispatch actions', function(){
    store.dispatch({type: 'ADD_TODO', todo: {content: "Buy Milk"}});
    let todos = store.getState();
    expect(todos).toEqual([{content: "Buy Milk"}]);
  })

  it('calls any listeners that the store is subscribed to', function(){
    const fakeListener = { listener: () => console.log("Todos have been updated!") }

    sinon.spy(fakeListener, 'listener');
    store.subscribe(fakeListener.listener )

    store.dispatch({type: 'ADD_TODO', todo: {content: "Buy Milk"}});
    expect(fakeListener.listener.called).toEqual(true);
  })
})
