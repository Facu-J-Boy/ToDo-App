import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LogoSmall from '../LogoSmall/LogoSmall';

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
    // <div>
    //   <h2>Login con Email y Contraseña</h2>
    //   <input
    //     type="email"
    //     placeholder="Correo electrónico"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Contraseña"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleLogin}>Iniciar sesión</button>
    // </div>
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <LogoSmall />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" 
                    className="w-full text-white bg-grey hover:bg-greenHard focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Sign in
                      </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? 
                        <a href="#" 
                        className="font-medium text-primar-600 hover:underline dark:text-primary-500">
                          Sign up
                          </a>
                    </p>
                </form>
                <p> ------- or -------</p>
                <button className="border-solid-black bg-white text-black font-bold py-2 px-4 rounded flex items-center">
                <img className='w-7 h-7' src='https://res.cloudinary.com/dvqh0exq6/image/upload/v1684869793/ToDo/Google_Icons-09-512_igqobv.png' />
                Iniciar sesión con Google
                </button>
            </div>
        </div>
    </div>
  </section>
  );
}

export default LoginWithEmail