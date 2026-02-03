
import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

// ✅ Crear el contexto
const AuthContext = createContext();

// ✅ Provider que envuelve la app
export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const verificarSesion = async () => {
      try {
        const res = await api.get("/usuarios/perfil");
        setUsuario(res.data);
      } catch {
        setUsuario(null);
      } finally {
        setCargando(false);
      }
    };

    verificarSesion();
  }, []);

  const logout = async () => {
    try {
      await api.post("/usuarios/logout");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setUsuario(null);
    }
  };

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, cargando, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Hook para acceder al contexto
export const useAuth = () => useContext(AuthContext);
