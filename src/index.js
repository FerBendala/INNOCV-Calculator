import React from 'react'
import { createRoot } from 'react-dom/client'

import Calculator from './components/calculator'
import './styles.css'

const root = createRoot( document.getElementById( 'root' ) )
root.render( <Calculator /> )
