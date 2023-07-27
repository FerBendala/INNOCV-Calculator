import React from 'react'

const Keypad = ( { onNumberClick, onOperatorClick, onEqualClick, onClearClick } ) => {
    const handleNumberButtonClick = ( number ) => {
        onNumberClick( number )
    }

    const handleOperatorButtonClick = ( operator ) => {
        onOperatorClick( operator )
    }

    return (
        <div className="keypad">
            <div className="row">
                <button onClick={() => handleNumberButtonClick( 7 )}>7</button>
                <button onClick={() => handleNumberButtonClick( 8 )}>8</button>
                <button onClick={() => handleNumberButtonClick( 9 )}>9</button>
                <button onClick={() => handleOperatorButtonClick( '/' )}>/</button>
            </div>
            <div className="row">
                <button onClick={() => handleNumberButtonClick( 4 )}>4</button>
                <button onClick={() => handleNumberButtonClick( 5 )}>5</button>
                <button onClick={() => handleNumberButtonClick( 6 )}>6</button>
                <button onClick={() => handleOperatorButtonClick( '*' )}>x</button>
            </div>
            <div className="row">
                <button onClick={() => handleNumberButtonClick( 1 )}>1</button>
                <button onClick={() => handleNumberButtonClick( 2 )}>2</button>
                <button onClick={() => handleNumberButtonClick( 3 )}>3</button>
                <button onClick={() => handleOperatorButtonClick( '-' )}>-</button>
            </div>
            <div className="row">
                <button onClick={() => handleNumberButtonClick( 0 )}>0</button>
                <button onClick={onClearClick}>C</button>
                <button onClick={onEqualClick}>=</button>
                <button onClick={() => handleOperatorButtonClick( '+' )}>+</button>
            </div>
        </div>
    )
}

export default Keypad
