import { useState } from 'react';
import './App.css';
import Square from './components/Square.js'

const App = () => {
	const [gameSquares, setGameSquares] = useState(['','','','','','','','',''])
	const [player, setPlayer] = useState(true);
	return <div className="App">
		<div className='containter'>
			{gameSquares.map((v, i) => {
				return <Square 
				gameSquares={gameSquares}
				setGameSquares={setGameSquares}
				player={player}
				setPlayer={setPlayer}
				squareValue={v}
				key={i}
			/>
			})}
		</div>
	</div>;
}

export default App;
