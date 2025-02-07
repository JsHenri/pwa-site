import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/index'
import globalStyles from './styles/globalStyles'
import GlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
