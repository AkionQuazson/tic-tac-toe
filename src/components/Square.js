
const Square = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (props.squareValue === '') return;
        if (props.player) {
            props.gameSquares.splice(props.key, 1, 'X');
        }
        else {
            props.gameSquares.splice(props.key, 1, 'O');
        }
        props.setGameSquares(props.gameSquares);
        props.setPlayer(!props.player);
    };

    return <div className='square'>{props.squareValue}</div>
};

export default Square;