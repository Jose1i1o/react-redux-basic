import { useDispatch } from 'react-redux';

import { 
    increaseCounter, 
    decreaseCounter,
    resetCounter
} from '../redux/counter/actions';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <header>
            <button onClick={() => dispatch(increaseCounter())}>+</button>
            <button onClick={() => dispatch(decreaseCounter())}>-</button>
            <button onClick={() => dispatch(resetCounter())}>RESET</button>
        </header>
    );
};

export default Header;