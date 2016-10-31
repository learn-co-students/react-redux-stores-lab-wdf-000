import createStore from './createStore';
import todosReducer from './reducers/todosReducer';

const store = createStore(todosReducer);
