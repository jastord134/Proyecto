import { Link } from 'react-router-dom'
import { useSession } from '../auth'

export default function NavBar(){
  const { user, isAdmin } = useSession()
  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div className="brand">GamePlay <span className="dot"></span></div>
        <div className="search">
          <input placeholder="Buscar un producto..." />
          <span>🔍</span>
        </div>
        <button className="pill">🛒 Carrito  S/ 100.00</button>
        <button className="iconbtn">👤 Usuario <span className="muted">cuenta</span></button>
      </div>

      {/* Sub nav */}
      <div className="subnav">
        <span>☰</span>
        <Link to="/">Categorías</Link>
        <Link to="/mantenimiento/productos">Productos</Link>
        <Link to="/acerca">Nosotros</Link>
        <Link to="/admin">Dashboard</Link>
        <Link to="/mantenimiento/productos">Productos</Link>
        <div className="right">OFERTAS 👋</div>

        {/* accesos útiles */}
        {isAdmin && (
          <>
            <Link to="/admin/categories" style={{marginLeft:'24px'}}>Listado categorías</Link>
            <Link to="/admin/categories/new">Agregar categoría</Link>
          </>
        )}
        <Link to="/user/profile" style={{marginLeft:'auto'}}>Mi perfil</Link>
        <Link to="/user/change-password" style={{marginLeft:'12px'}}>Cambiar contraseña</Link>
        <Link to="/user/orders/1001" style={{marginLeft:'12px'}}>Orden #1001</Link>
      </div>
    </>
  )
}