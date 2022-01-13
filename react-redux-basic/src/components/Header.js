const Header = ({ onIncrease, onDecrease }) => {
    return (
        <header>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </header>
    );
};

export default Header;