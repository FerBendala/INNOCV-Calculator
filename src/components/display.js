import React from 'react'

const Display = ( { value, fullExpression, hasError } ) => {
    const displayClassName = hasError ? 'display error' : 'display'

    return (
        <div className={displayClassName}>
            <div className="current-value">{value}</div>
            <div className="full-expression">{fullExpression || 0}</div>
        </div>
    )
}

export default Display
