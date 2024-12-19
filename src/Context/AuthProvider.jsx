import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

  useEffect(() => {
    const employees = getLocalStorage('employees');
    if (employees) {
      setUserData(employees);
    } else {
      console.error('Employees not found in localStorage');
    }
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

