import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './GlobalStyles.jsx'
import StoreProvider from './context/storeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
      <StoreProvider>
        <App />
      </StoreProvider>
  </React.StrictMode>,
)
