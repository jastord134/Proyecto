import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutUs from './routes/AboutUsPage.jsx'
import Login from './routes/LoginPage.jsx'
import ProductosPage from './routes/ProductosPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />

  },
  {
    path: "inicio",
    element: <App />
  },
  {
    path: "acerca",
    element: <AboutUs />
  },
  {
    path:"/mantenimiento/productos",
    element: <ProductosPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
