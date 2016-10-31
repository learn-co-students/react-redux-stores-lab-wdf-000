const createStore  = require('../src/createStore');
const todosReducer = require('../src/reducers/todosReducer');
const countReducer = require('../src/reducers/countReducer');
const sinon        = require('sinon');

describe('createStore', function() {
  let store, countStore;

  beforeEach(function(){
    store = createStore(todosReducer);
    countStore = createStore(countReducer);
  })

  it('returns an object', function() {
    expect(store).toBeA(Object)
  })

  describe('getState', function(){
    it('returns the default state based on the reducer', function(){
      expect(store.getState()).toEqual([]);
      expect(countStore.getState()).toEqual(0);
    })
  })

  describe('dispatch', function(){

    it('can dispatch actions to update the state', function(){
      countStore.dispatch({type: 'INCREMENT_COUNT'});
      expect(countStore.getState()).toEqual(1);
    })

    it('can dispatch actions with data associated', function(){
      store.dispatch({type: 'ADD_TODO', todo: {content: "Buy Milk"}});
      let todos = store.getState();
      expect(todos).toEqual([{content: "Buy Milk"}]);
    })
  })

  describe('subscribe', function(){
    it('calls any listeners that the store is subscribed to', function(){
      const fakeListener = { listener: () => console.log("Todos have been updated!") }

      sinon.spy(fakeListener, 'listener');
      store.subscribe(fakeListener.listener )

      store.dispatch({type: 'ADD_TODO', todo: {content: "Buy Milk"}});
      expect(fakeListener.listener.called).toEqual(true);
    })
  })
})
