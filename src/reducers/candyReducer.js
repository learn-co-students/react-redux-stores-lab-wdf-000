function candyReducer(state=[], action){
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

module.exports = candyReducer;
