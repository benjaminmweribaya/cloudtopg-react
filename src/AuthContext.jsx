import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// AuthProvider to wrap your app and provide auth state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize from localStorage if available
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(!!user); // Derived flag

  // Login method – set user state and persist to localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsAuthenticated(true);
  };

  // Logout method – clear user state and remove from localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  // Optional effect: keep isAuthenticated in sync with user
  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to access the auth context
export const useAuth = () => useContext(AuthContext);

