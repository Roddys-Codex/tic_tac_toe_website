import { PropTypes } from 'prop-types';

export default function Square({ value }) {

    function handleClick() {
        console.log("clicked!");
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

Square.propTypes = {
    value: PropTypes.string.isRequired,
}
