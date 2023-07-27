import React, { useState } from 'react'
import Display from './display'
import Keypad from './keypad'

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState( '0' )
    const [fullExpression, setFullExpression] = useState( '' )
    const [firstOperand, setFirstOperand] = useState( null )
    const [operator, setOperator] = useState( null )
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState( false )
    const [hasError, setHasError] = useState( false )

    const handleNumberClick = ( number ) => {
        if ( waitingForSecondOperand ) {
            setDisplayValue( String( number ) )
            setWaitingForSecondOperand( false )
        } else {
            setDisplayValue( displayValue === '0' ? String( number ) : displayValue + number )
        }
        setFullExpression( fullExpression + number )
    }

    const handleOperatorClick = ( nextOperator ) => {
        const inputValue = parseFloat( displayValue )

        if ( !inputValue && fullExpression === '' ) {
            // Do nothing if the expression is empty or starts with an operator
            return
        }

        if ( firstOperand === null ) {
            setFirstOperand( inputValue )
        } else if ( operator ) {
            // Additional checks to prevent consecutive operators
            if ( !waitingForSecondOperand ) {
                const newExpression = fullExpression.slice( 0, -1 ) + nextOperator
                setFullExpression( newExpression )
            }
            const result = performOperation( firstOperand, inputValue, operator )
            setDisplayValue( String( result ) )
            setFirstOperand( result )
        }

        setWaitingForSecondOperand( true )
        setOperator( nextOperator )
        setFullExpression( fullExpression + nextOperator )
    }

    const handleEqualClick = () => {
        const inputValue = parseFloat( displayValue )

        if ( operator && firstOperand !== null ) {
            if ( operator === '/' && inputValue === 0 ) {
                setDisplayValue( 'Error: Division by zero' )
                setHasError( true )
            } else {
                const result = performOperation( firstOperand, inputValue, operator )
                setDisplayValue( String( result ) )
                setFirstOperand( result )
                setFullExpression( result )
            }
            setOperator( null )
            setWaitingForSecondOperand( false )
        }
    }

    const handleClearClick = () => {
        setDisplayValue( '0' )
        setFullExpression( '' )
        setFirstOperand( null )
        setOperator( null )
        setWaitingForSecondOperand( false )
        setHasError( false )
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
            <Display
                value={displayValue}
                fullExpression={fullExpression}
                hasError={hasError}
            />
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
