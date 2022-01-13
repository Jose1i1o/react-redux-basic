import { 
    INCREASE_COUNTER,
    DECREASE_COUNTER,
    RESET_COUNTER,
    SET_COUNTER
} from './types';

import initialState from './state';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE_COUNTER: {
            return state += 1;
        }
        case DECREASE_COUNTER: {
            return state === 0 ? 0 : state -1 ;
        }
        case RESET_COUNTER: {
            return initialState;
        }
        case SET_COUNTER: {
            const counterParsed = Number(action.payload);
            return Number.isNaN(counterParsed) ? state : counterParsed;
        }
        default:
        return state;
    }
}

export default reducer;