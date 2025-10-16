import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutUs from './routes/AboutUsPage.jsx'
import Login from './routes/LoginPage.jsx'
import ProductosPage from './routes/ProductosPage.jsx'
import DashboardAPage from './routes/DashboardAdminPage.jsx'
import CategoryList from './pages/admin/CategoryList'
import CategoryForm from './pages/admin/CategoryForm'
import CategoryDetail from './pages/admin/CategoryDetail'
import OrderDetail from './pages/user/OrderDetail'
import Profile from './pages/user/Profile'
import ChangePassword from './pages/user/ChangePassword'
import { RequireAdmin, RequireLogin } from './components/Guard'
import { SessionProvider } from './components/Login/Session.jsx'
import './App.css'

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="h1">Tienda Fantasía (Demo Alumno 4)</h1>
        <p className="muted">Usa la barra superior para navegar por las pantallas.</p>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Home /></App>
  },
  {
    path: "inicio",
    element: <App><Home /></App>
  },
  {
    path: "acerca",
    element: <App><AboutUs /></App>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/mantenimiento/productos",
    element: <App><ProductosPage /></App>
  },
  {
    path: "/admin",
    element: <App><DashboardAPage /></App>
  },
  // Rutas internas usando el layout App
  {
    path: "/admin/categories",
    element: <App><RequireAdmin><CategoryList /></RequireAdmin></App>
  },
  {
    path: "/admin/categories/new",
    element: <App><RequireAdmin><CategoryForm /></RequireAdmin></App>
  },
  {
    path: "/admin/categories/:id",
    element: <App><RequireAdmin><CategoryDetail /></RequireAdmin></App>
  },
  {
    path: "/user/orders/:orderId",
    element: <App><RequireLogin><OrderDetail /></RequireLogin></App>
  },
  {
    path: "/user/profile",
    element: <App><RequireLogin><Profile /></RequireLogin></App>
  },
  {
    path: "/user/change-password",
    element: <App><RequireLogin><ChangePassword /></RequireLogin></App>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionProvider>
    <RouterProvider router={router}/>
    </SessionProvider>
  </StrictMode>,
)