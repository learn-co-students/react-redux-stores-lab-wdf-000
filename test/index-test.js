const createStore  = require('../src/createStore');
const candyReducer = require('../src/reducers/candyReducer');
const countReducer = require('../src/reducers/countReducer');
const sinon        = require('sinon');

describe('createStore', function() {
  let store, countStore;

  beforeEach(function(){
    store = createStore(candyReducer);
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
      store.dispatch({type: 'ADD_CANDY', candy: {name: "Jelly Beans"}});
      let todos = store.getState();
      expect(todos).toEqual([{name: "Jelly Beans"}]);
    })
  })

  describe('subscribe', function(){
    it('calls any listeners that the store is subscribed to', function(){
      const fakeListener = { listener: () => console.log("Candy added!") }

      sinon.spy(fakeListener, 'listener');
      store.subscribe(fakeListener.listener )

      store.dispatch({type: 'ADD_CANDY', candy: {name: "Twix"}});
      expect(fakeListener.listener.called).toEqual(true);
    })
  })
})
