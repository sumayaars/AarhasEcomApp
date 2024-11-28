import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
<AuthProvider>
<CartProvider>
<BrowserRouter>
    <App />
  </BrowserRouter>,
</CartProvider>
</AuthProvider>
)
