import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'
// import App from './App.tsx'
import Home from './Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
