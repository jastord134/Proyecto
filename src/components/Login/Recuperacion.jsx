import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Recuperacion() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMensaje("Por favor, ingresa tu correo electrónico.");
      return;
    }

    // Simula el envío
    setMensaje("Enviando enlace de recuperación...");
    setTimeout(() => {
      setMensaje("Se ha enviado un enlace a tu correo.");
    }, 1500);
  };

  return (
    <div className="login-container">
      <h2>Recuperar contraseña</h2>
      <form onSubmit={handleSubmit} className="login-form">
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

        {mensaje && <p className="mensaje">{mensaje}</p>}

        <button type="submit" className="btn-login">
          Enviar enlace
        </button>

        <div className="login-links">
          <Link to="/">Volver al inicio de sesión</Link>
        </div>
      </form>
    </div>
  );
}
