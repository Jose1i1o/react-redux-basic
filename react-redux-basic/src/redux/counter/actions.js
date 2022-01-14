import getRandom from '../../services/random';
import { 
    INCREASE_COUNTER, 
    DECREASE_COUNTER, 
    RESET_COUNTER, 
    SET_COUNTER,
} from './types';

export const increaseCounter = () => ({
    type: INCREASE_COUNTER,
});

export const decreaseCounter = () => ({
    type: DECREASE_COUNTER,
});

export const resetCounter = () => ({
    type: RESET_COUNTER,
})

export const setCounter = (value) => ({
    type: SET_COUNTER,
    payload: value,
})

export const setRandomCounter = () => {
    return async (dispatch) => {
        const random = await getRandom();
        dispatch(setCounter(random));
    }
}
