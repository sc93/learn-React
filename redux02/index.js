const { createStore } = require('redux');
const CHANGE_COMP_A = 'CHANGE_COMP_A';
const reducer = (prevState, action) => {
    switch (action.type) {
        case CHANGE_COMP_A:
            return {
                ... prevState,
                compA : action.data,
            }
        default:
            return prevState;
    }
};

const initialState = {
    compA: 'a',
    compB: 'b',
    compC: 'c',
};
const store = createStore(reducer, initialState);
store.subscribe(()=>{
    console.log('changed');
})
console.log('1nd : ',store.getState());

// console.log(store.getState());
//action
const changeCompA = (data) => {
    return {
        type: CHANGE_COMP_A,
        data,
    };
};

store.dispatch(changeCompA('B'));
console.log('2nd : ',store.getState());

store.dispatch(changeCompA('C'));
console.log('3nd : ',store.getState());
