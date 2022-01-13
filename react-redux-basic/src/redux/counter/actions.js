import { INCREASE_COUNTER, DECREASE_COUNTER } from './types';

export const increaseCounter = () => ({
    type: INCREASE_COUNTER,
    // payload: {increaseCounter: 1}
});

export const decreaseCounter = () => ({
    type: DECREASE_COUNTER,
    // payload: {decreaseCounter: 1}
});
