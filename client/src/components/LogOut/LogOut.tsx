import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const LogOut: React.FC = (): JSX.Element => {
    const handleLogout = async () => {
        try {
          const auth = getAuth();
          await signOut(auth);
          // Cierre de sesión exitoso
          console.log('Cierre de sesión exitoso');
          // Realiza las acciones correspondientes al cierre de sesión exitoso
        } catch (error) {
          // Ocurrió un error durante el cierre de sesión
          console.error('Error de cierre de sesión:', error);
          // Realiza las acciones correspondientes al error de cierre de sesión
        }
      };
    
      return (
        <button onClick={handleLogout}>Cerrar sesión</button>
      );
}

export default LogOut