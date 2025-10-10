import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from '../Proyecto/sale-app/src/App.jsx'
import AboutUs from './routes/AboutUsPage.jsx'
import Login from './routes/LoginPage.jsx'
import ProductosPage from '../Proyecto/sale-app/src/routes/ProductosPage.jsx'
import DashboardAPage from './routes/DashboardAdminPage.jsx'

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
  },
  {
    path:"/admin",
    element: <DashboardAPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
