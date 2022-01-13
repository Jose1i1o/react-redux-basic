import { useSelector } from 'react-redux';

const Footer = () => {
    const counter = useSelector((state) => state.counter);
    return (
        <footer>
            Counter: {counter}
        </footer>
    );
};

export default Footer;