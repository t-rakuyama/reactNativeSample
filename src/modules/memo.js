import { combineReducers, createStore } from 'redux';

// Actions
export const addMemo = text => ({
  type: 'ADD_MEMO',
  text: text,
});
export const deleteMemo = () => ({
  type: 'DELETE_MEMO',
  text: '',
});

// State
INITIAL_STATE = {
  text: []
};

// Reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MEMO':
      return { text: [...state.text, action.text] };
    case 'DELETE_MEMO':
      return {...state, text: ''};
    default:
      return state;
  }
}
export const reducers = combineReducers({
  list: reducer
});

// Store
export const store = createStore(reducers);
