import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSession } from "./Session";
import { getUserByCredentials } from "../../mockApi";

import "./Login.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useSession();
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  const user = getUserByCredentials(usuario, password);

  if (user) {
    login(user);
    if (user.role === "admin") navigate("/admin/categories");
    else navigate("/user/profile");
  } else {
    setError("Usuario o contraseña incorrectos");
  }
};


  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Tu nombre de usuario"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn-login">
          Entrar
        </button>

        <div className="login-links">
          <Link to="/recuperacion">¿Olvidaste tu contraseña?</Link>
          <Link to="/registro">Crear una cuenta nueva</Link>
        </div>
      </form>
    </div>
  );
}
