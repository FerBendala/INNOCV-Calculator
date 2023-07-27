import React, { useState } from 'react'
import Display from './display'
import Keypad from './keypad'

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState( '0' )
    const [firstOperand, setFirstOperand] = useState( null )
    const [operator, setOperator] = useState( null )
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState( false )

    const handleNumberClick = ( number ) => {
        if ( waitingForSecondOperand ) {
            setDisplayValue( String( number ) )
            setWaitingForSecondOperand( false )
        } else {
            setDisplayValue( displayValue === '0' ? String( number ) : displayValue + number )
        }
    }

    const handleOperatorClick = ( nextOperator ) => {
        const inputValue = parseFloat( displayValue )

        if ( firstOperand === null ) {
            setFirstOperand( inputValue )
        } else if ( operator ) {
            const result = performOperation( firstOperand, inputValue, operator )
            setDisplayValue( String( result ) )
            setFirstOperand( result )
        }

        setWaitingForSecondOperand( true )
        setOperator( nextOperator )
    }

    const handleEqualClick = () => {
        const inputValue = parseFloat( displayValue )

        if ( operator && firstOperand !== null ) {
            const result = performOperation( firstOperand, inputValue, operator )
            setDisplayValue( String( result ) )
            setFirstOperand( result )
            setOperator( null )
            setWaitingForSecondOperand( false )
        }
    }

    const handleClearClick = () => {
        setDisplayValue( '0' )
        setFirstOperand( null )
        setOperator( null )
        setWaitingForSecondOperand( false )
    }

    const performOperation = ( operand1, operand2, operator ) => {
        switch ( operator ) {
            case '+':
                return operand1 + operand2
            case '-':
                return operand1 - operand2
            case '*':
                return operand1 * operand2
            case '/':
                return operand1 / operand2
            default:
                return operand2
        }
    }

    return (
        <div className="calculator">
            <Display value={displayValue} />
            <Keypad
                onNumberClick={handleNumberClick}
                onOperatorClick={handleOperatorClick}
                onEqualClick={handleEqualClick}
                onClearClick={handleClearClick}
            />
        </div>
    )
}

export default Calculator
