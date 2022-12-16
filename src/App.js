import { useState } from 'react';
import './App.css';
import Square from './components/Square.js'

const calculateWinner = (gameState) => {
	const lines = [
		[0,1,2],[3,4,5],[6,7,8],
		[0,3,6],[1,4,7],[2,5,8],
		[0,4,8],[2,4,8]
	];
	let returnString = 'Who will win?';
	for (let i = 0; i < lines.length; i++){
		const line = lines[i];
		if (gameState[line[0]] !== '' && gameState[line[0]] === gameState[line[1]] && gameState[line[1]] === gameState[line[2]]){
			returnString = `${gameState[line[0]]} wins!`;
			break;
		}
	}
	return returnString;
}

const App = () => {
	const [gameSquares, setGameSquares] = useState(['','','','','','','','',''])
	const [player, setPlayer] = useState(true);

	const resetSquaresHandler = (e) => {
		e.preventDefault();
		setGameSquares(['','','','','','','','','']);
		setPlayer(true);
	};

	return <div className="App">
		<span>{calculateWinner(gameSquares)}</span>
		<div className='container'>
			{gameSquares.map((v, i) => {
				return <Square 
				gameSquares={gameSquares}
				setGameSquares={setGameSquares}
				player={player}
				setPlayer={setPlayer}
				squareValue={v}
				index={i}
				key={i}
			/>
			})}
			<button onClick={resetSquaresHandler} >Reset</button>
		</div>
	</div>;
}

export default App;
