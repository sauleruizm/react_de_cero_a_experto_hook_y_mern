import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import './index.css'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(<MultipleCustomHooks />)
