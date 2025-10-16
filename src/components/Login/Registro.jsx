import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // puedes usar los mismos estilos del login

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !email || !usuario || !password) {
      setMensaje("Por favor completa todos los campos.");
      return;
    }

    // Simulación de guardado (puedes luego conectar a backend o localStorage)
    localStorage.setItem("auth", "true");
    localStorage.setItem("usuario", usuario);

    setMensaje("Registro exitoso. Redirigiendo al inicio...");
    setTimeout(() => navigate("/inicio"), 2000);
  };

  return (
    <div className="login-container">
      <h2>Crear cuenta nueva</h2>

      <form onSubmit={handleRegistro} className="login-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Tu apellido"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Nombre de usuario"
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

        {mensaje && <p className="mensaje">{mensaje}</p>}

        <button type="submit" className="btn-login">
          Registrarse
        </button>

        <div className="login-links">
          <Link to="/">¿Ya tienes cuenta? Inicia sesión</Link>
        </div>
      </form>
    </div>
  );
}
