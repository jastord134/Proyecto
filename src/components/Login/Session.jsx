import React, { createContext, useContext, useState, useEffect } from "react";

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [user, setUser] = useState(null);
  const SESSION_DURATION_MIN = 60 * 24; // 24h

  // Cargar sesión desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("session");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.user && parsed?.expiration > Date.now()) {
          setUser(parsed.user);
        } else {
          localStorage.removeItem("session");
        }
      } catch {
        localStorage.removeItem("session");
      }
    }
  }, []);

  const login = (userData) => {
    const expiration = Date.now() + SESSION_DURATION_MIN * 60 * 1000;
    localStorage.setItem("session", JSON.stringify({ user: userData, expiration }));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("session");
    setUser(null);
  };

  return (
    <SessionContext.Provider
      value={{
        user,
        isLogged: !!user,
        isAdmin: user?.role === "admin",
        login,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
