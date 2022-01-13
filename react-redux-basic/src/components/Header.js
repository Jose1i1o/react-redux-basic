import { connect } from 'react-redux';

import { increaseCounter, decreaseCounter } from '../redux/counter/actions';

const Header = ({ onIncrease, onDecrease }) => {
    return (
        <header>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </header>
    );
};

const mapDispatchToProps = (dispatch) =>({
        onIncrease: () => dispatch(increaseCounter()),
        onDecrease: () => dispatch(decreaseCounter())
});

const reduxHoc = connect(null, mapDispatchToProps);

export default reduxHoc(Header);