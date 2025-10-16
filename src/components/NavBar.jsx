import { Link, useNavigate } from 'react-router-dom';
import { useSession } from './Login/Session';

export default function NavBar() {
  const { user, isLogged, logout, isAdmin } = useSession();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirige al inicio
  };

  const handleCuentaClick = () => {
    if (!isLogged) navigate('/login');
    else navigate('/user/profile');
  };

  return (
    <>
      <div className="topbar">
        <div className="brand">GamePlay <span className="dot"></span></div>
        <div className="search">
          <input placeholder="Buscar un producto..." />
          <span>🔍</span>
        </div>
        <button className="pill">🛒 Carrito  S/ 100.00</button>

        {isLogged ? (
          <button className="iconbtn" onClick={handleLogout}>
            👤 {user.name} <span className="muted">(Cerrar sesión)</span>
          </button>
        ) : (
          <button className="iconbtn" onClick={handleCuentaClick}>
            👤 Usuario <span className="muted">cuenta</span>
          </button>
        )}
      </div>

      <div className="subnav">
        <span>☰</span>
        <Link to="/">Categorías</Link>
        <Link to="/mantenimiento/productos">Productos</Link>
        <Link to="/acerca">Nosotros</Link>
        {isAdmin && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/categories">Listado categorías</Link>
            <Link to="/admin/categories/new">Agregar categoría</Link>
          </>
        )}
        {isLogged && (
          <>
            <Link to="/user/profile" style={{ marginLeft: 'auto' }}>Mi perfil</Link>
            <Link to="/user/change-password" style={{ marginLeft: '12px' }}>Cambiar contraseña</Link>
          </>
        )}
      </div>
    </>
  );
}
