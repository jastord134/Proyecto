import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css' // <-- IMPORTANTE
import NavBar from './components/NavBar'
import { RequireAdmin, RequireLogin } from './components/Guard'

import CategoryList from './pages/admin/CategoryList'
import CategoryForm from './pages/admin/CategoryForm'
import CategoryDetail from './pages/admin/CategoryDetail'
import OrderDetail from './pages/user/OrderDetail'
import Profile from './pages/user/Profile'
import ChangePassword from './pages/user/ChangePassword'

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

export default function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin/categories' element={<RequireAdmin><CategoryList/></RequireAdmin>} />
        <Route path='/admin/categories/new' element={<RequireAdmin><CategoryForm/></RequireAdmin>} />
        <Route path='/admin/categories/:id' element={<RequireAdmin><CategoryDetail/></RequireAdmin>} />
        <Route path='/user/orders/:orderId' element={<RequireLogin><OrderDetail/></RequireLogin>} />
        <Route path='/user/profile' element={<RequireLogin><Profile/></RequireLogin>} />
        <Route path='/user/change-password' element={<RequireLogin><ChangePassword/></RequireLogin>} />
      </Routes>
    </BrowserRouter>
  )
}
