import { connect } from 'react-redux';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button
                id="dec"
                onClick={dec}
                className="btn btn-primary btn-lg"
            >
                DEC
            </button>

            <button
                id="inc"
                onClick={inc}
                className="btn btn-primary btn-lg"
            >
                INC
            </button>

            <button
                id="rnd"
                className="btn btn-primary btn-lg"
                onClick={rnd}
            >
                RND
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch({ type: 'INC' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
