//App.js es el componente mas importante, es el que va a tener el estado de mi app, a partir de os cambios de estado manejo mi app
import { useState } from 'react';  // Crea el estado de mi app
import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/Scoreboard';

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const App = () => {
//Lo que hacemos con el useState es devolvernos una variable que va a ser el estado y una funcon que va a modificar el estado(turn y setTurn)
  const [turn, setTurn] = useState('X'); //Aca le pasamos entre parentesis como queremos que se inicialice la var
  const [squares, setSquares] = useState(Array(9).fill(null)); //Aca lo que hacemos es crear los 9 espacios donde van a ir las fichas y los declaro null porque eempiezan vacios
  const [ winningSquares,setWinningSquares ] =useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  }); //Aca hacemos lo mismo para el score y guardamos en un obj como va el resultado inicialzando en 0 X y O
  
  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  };

  const checkForWinner = newSquares => {
    for(let i = 0; i < winningPositions.length; i++) {
      const [a,b,c] = winningPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
        endGame(newSquares[a], winningPositions[i])
        return
      }
    }
    if(!newSquares.includes(null)) {
      endGame(null, Array.from(Array(10).keys()));
      return
    }
    setTurn(turn === 'X' ? 'O' : 'X')
  };


  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares)
  };

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
    }
    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);
  };
  
  return (

    

    <div className="container">
      
      <div className="titulo">
        <h1>Ta-te-ti</h1>
        <h3>Autor: Santiago Rambeaud</h3>
      </div>

      <div>

      <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick} /> {/*Recive el valor de los squares(de los cuadrados que tiene cada uno */}
      <ScoreBoard scoreO={score.O} scoreX={score.X} />

      </div>
    </div>
  );
}

export default App;
