import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AlertProvider from './components/context/alert-context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider>
        <HelmetProvider>
          <BrowserRouter basename='/'>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </AlertProvider>
    </Provider>
  </React.StrictMode>
)
