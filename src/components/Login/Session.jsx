import { createContext, useContext, useState, useEffect } from "react";

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [user, setUser] = useState(null);
  const SESSION_DURATION_MIN = 60 * 24; // 24 horas

  // Cargar sesión almacenada si sigue vigente
  useEffect(() => {
    const stored = localStorage.getItem("session");
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      if (parsed?.user && parsed?.expiration > Date.now()) {
        setUser(parsed.user);
      } else {
        localStorage.removeItem("session");
        setUser(null);
      }
    } catch (err) {
      console.error("Error cargando sesión:", err);
      localStorage.removeItem("session");
      setUser(null);
    }
  }, []);

  // Guardar sesión automáticamente si cambia el usuario
  useEffect(() => {
    if (!user) return;
    try {
      const expiration = Date.now() + SESSION_DURATION_MIN * 60 * 1000;
      const session = { user, expiration };
      localStorage.setItem("session", JSON.stringify(session));
    } catch (err) {
      console.error("Error guardando sesión:", err);
    }
  }, [user]);

  // Iniciar sesión
  const login = (userData) => {
    try {
      const expiration = Date.now() + SESSION_DURATION_MIN * 60 * 1000;
      const session = { user: userData, expiration };
      localStorage.setItem("session", JSON.stringify(session));
      setUser(userData);
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
    }
  };

  // Cerrar sesión
  const logout = () => {
    try {
      localStorage.removeItem("session");
      setUser(null);
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
    } finally {
      window.location.href = "/";
    }
  };

  const isLogged = !!user;
  const isAdmin = user?.role === "admin";

  return (
    <SessionContext.Provider value={{ user, isLogged, isAdmin, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
