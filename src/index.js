

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
    }

    return 0;
};

let state = reducer(initialState, { type: 'INC' });
state = reducer(state, { type: 'INC' });

console.log(state);