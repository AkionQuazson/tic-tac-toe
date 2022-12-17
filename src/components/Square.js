
const Square = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (props.squareValue !== '') return;
        
        if (props.player) {
            props.gameSquares.splice(props.index, 1, 'X');
        }
        else {
            props.gameSquares.splice(props.index, 1, 'O');
        }
        props.setGameSquares(props.gameSquares);
        props.setPlayer(!props.player);
        
    };

    return <div 
        className='square'
        onClick={handleClick}
    >
        {props.squareValue === 'O' ? <img src='../img/devcircle_1.png' alt='O'/> : ''}
        {props.squareValue === 'X' ? <img src='../img/swordsx_1.png' alt='X'/> : ''}
    </div>
};

export default Square;