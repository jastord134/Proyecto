import { useSession } from '../auth'
import { Link , useNavigate } from 'react-router-dom'

export default function NavBar(){
  const { user, isAdmin, isLogged, logout } = useSession()
  const navigate = useNavigate()
   const handleCuentaClick = () => {
    if (!isLogged) navigate('/login') 
    else navigate('/user/profile') 
  }
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
        {isLogged ? (
          <button className="iconbtn" onClick={logout}>
            👤 {user.username} <span className="muted">(Cerrar sesión)</span>
          </button>
        ) : (
          <button className="iconbtn" onClick={handleCuentaClick}>
            👤 Usuario <span className="muted">cuenta</span>
          </button>
        )}
      </div>

      {/* Sub nav */}
      <div className="subnav">
        <span>☰</span>
        <Link to="/">Categorías</Link>
        <Link to="/mantenimiento/productos">Productos</Link>
        <Link to="/acerca">Nosotros</Link>
        <Link to="/admin">Dashboard</Link>
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