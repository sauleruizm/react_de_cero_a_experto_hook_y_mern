import './index.css'
import { createRoot } from 'react-dom/client'
import { TodoApp } from './08-useReducer/TodoApp'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<TodoApp />)