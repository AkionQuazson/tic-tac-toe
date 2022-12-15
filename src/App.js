import { useState } from 'react';
import './App.css';
import Square from './components/Square.js'


const App = () => {
	const [gameSquares, setGameSquares] = useState(['','','','','','','','',''])
	const [player, setPlayer] = useState(true);

	const resetSquaresHandler = (e) => {
		e.preventDefault();
		setGameSquares(['','','','','','','','','']);
		setPlayer(true);
	};

	return <div className="App">
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
