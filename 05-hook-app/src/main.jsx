import './index.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { MemoHook } from './06-memos/MemoHook'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<MemoHook />)