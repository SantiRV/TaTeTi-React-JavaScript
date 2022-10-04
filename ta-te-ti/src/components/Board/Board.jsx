//Creamos primero el tablero
import './Board.css';
import Square from "../Square/Square";

const Board = ({squares, onClick, turn, winningSquares}) => { //Recibe como parametro el estado de los squares

    const createSquares = values => ( //Tenemmos una func que recive un conjunto de valores
        values.map( value => ( //Se mapea a cada valor a un elemento html
            <Square 
                value={squares[value]}
                key={`square_${value}`} //cuando trabajamos con mapeo necesitamos darle una key unica a cada uno de los elementos (en este caso los squares)
                winner={winningSquares.includes(value)}
                turn={turn}
                onClick={() => onClick(value)}
                /> //Se muestra el elemento mapeado
        )
        )
    );

    //Aca esta todo lo que va a renderizar nurstro componente
    return (
        <div className="board">
            
            {/* Dentro de cada una de las row vamos a tener que renderzar nuestros squares(3 por row) */}
            <div className="row">
                {createSquares([0,1,2])} {/* Llamamos a la func y le pasamos por parametro la cantidad de squares que queremos crear */}
            </div>
            <div className="row">
                {createSquares([3,4,5])}
            </div>
            <div className="row">
                {createSquares([6,7,8])}
            </div>

        </div>
    )
}

export default Board;