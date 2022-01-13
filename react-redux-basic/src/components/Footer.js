import { connect } from 'react-redux';


const Footer = ({ counterNumber }) => {
    return (
        <footer>
            Counter: {counterNumber}
        </footer>
    );
};

const mapStateToProps = (state) => {
    return {
        counterNumber: state.counter
    }
}

const reduxHoc = connect(mapStateToProps);
export default reduxHoc(Footer);