import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpWithEmail = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Usuario creado exitosamente');
            // Aquí puedes redirigir al usuario a la página deseada después de la creación exitosa del usuario
        } catch (error) {
            console.log('Error al crear el usuario:', error);
            // Maneja el error de creación de usuario según tus necesidades
        };
    }

  return (
    <div>
      <h2>signUp con Email y Contraseña</h2>
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
      <button onClick={handleSignUp}>Iniciar sesión</button>
    </div>
  )
}

export default SignUpWithEmail