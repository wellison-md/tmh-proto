import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './GlobalStyles.jsx'
import { ThemeProvider } from 'styled-components'
import App from './App.jsx'
import StoreProvider from './context/storeProvider.jsx'
import theme from './Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
      <ThemeProvider theme={theme} >
        <StoreProvider>
          <App />
        </StoreProvider>

      </ThemeProvider>
  </React.StrictMode>,
)
