import { createStore } from 'redux';

// default state
const defaultState = { value: 100 };

// reducer
const reducer = (state = defaultState, action) => {
    if (action.type === 'ADD') return { value: state.value + 1 };
    if (action.type === 'SUB') return { value: state.value - 1 };
    if (action.type === 'RESET') return { value: 0 };
    return state;
}

const store = createStore(reducer);
export default store;
