import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginWithEmail: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
      // El inicio de sesión fue exitoso
      console.log('Inicio de sesión exitoso');
      // Realiza las acciones correspondientes al inicio de sesión exitoso
    } catch (error) {
      // Ocurrió un error durante el inicio de sesión
      console.error('Error de inicio de sesión:', error);
      // Realiza las acciones correspondientes al error de inicio de sesión
    }
  };

  return (
    <div>
      <h2>Login con Email y Contraseña</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default LoginWithEmail