import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import {BrowserRouter} from 'react-router-dom'
import { EquipmentProvider } from './context/EquipmentContext.jsx'
//import { CustomerProvider } from './context/CustomerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <EquipmentProvider>
    
      <BrowserRouter>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </BrowserRouter>
      
  </EquipmentProvider>,


  
)
