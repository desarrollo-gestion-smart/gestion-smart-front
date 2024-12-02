import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    // Leer el token desde localStorage al montar el componente
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            console.log("Token cargado desde localStorage:", storedToken);
        }
    }, []);

    // Función para guardar el token
    const saveToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem("token", newToken);
        console.log("Token guardado globalmente:", newToken);
    };

    // Función para eliminar el token
    const clearToken = () => {
        setToken(null);
        localStorage.removeItem("token");
        console.log("Token eliminado");
    };

    return (
        <AuthContext.Provider value={{ token, saveToken, clearToken }}>
            {children}
        </AuthContext.Provider>
    );
};
