import React from 'react'
import { createRoot } from 'react-dom/client'
import { Hello } from './app/App'

createRoot(document.getElementById('root')!).render(
  <Hello name={'world'} />
)
