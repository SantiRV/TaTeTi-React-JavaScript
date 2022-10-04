import './Square.css';
import classNames from 'classnames';

//Nuestro square deberia recibir si hay algun valor dentro de este(X, O o si esta vacio)
const Square = ({value, onClick, turn, winner}) => {
    
    const handleClick = () => {
        (turn !== null && value === null) && onClick();
    };

    let squareClass = classNames({
        square: true,
        [`square--${value}`]: value !== null,
        winner: winner,
    });
    
    return (
        <div className={squareClass} onClick={() => handleClick()} >

        </div>
    )
};

export default Square;