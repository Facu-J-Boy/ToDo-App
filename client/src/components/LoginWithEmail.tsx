import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LogoSmall from './LogoSmall';
import LoginWithGoogle from './LoginWithGoogle';
import { NavLink } from 'react-router-dom';

const LoginWithEmail: React.FC = (): JSX.Element => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
        setEmailError(!validateEmail(event.target.value));
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
      setPassword(event.target.value);
        setPasswordError(!validatePassword(event.target.value));
    };


  const handleLogin = async () => {
    try {
        const auth = getAuth();
        console.log('Usuario: ', auth);
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


  const validateEmail = (email: string) => {
    // Expresión regular para validar el formato del email
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^.{6,}$/;
    return passwordRegex.test(password);
  }
  
  const isDisabled = !validatePassword(password) || !validateEmail(email);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <LogoSmall />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" noValidate>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email"
                        className={
                          emailError?
                          "focus:outline-none border-solid border-2 border-red rounded-lg p-2.5 w-full mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          :
                          "mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} 
                        placeholder="name@company.com"
                        value={email}
                        onInput={handleEmailChange} />
                        {emailError && <p className="text-red font-medium">Please enter a valid email.</p>}
                    </div>
                    <div className='relative'>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input 
                        type={showPassword ? 'text' : 'password'} 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        className={
                          passwordError?
                          "relative focus:outline-none border-solid border-2 border-red rounded-lg p-2.5 w-full mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          :
                          "relative focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                        value={password}
                        onInput={handlePasswordChange} />
                        <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className={
                          passwordError?
                          "absolute top-1/2 right-2 transform -translate-y-5 text-gray-500 hover:text-gray-700"
                        :
                          "absolute top-1/2 right-2 transform -translate-y-0 text-gray-500 hover:text-gray-700"}
                        >{showPassword ? 
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                          </svg>
                      }
                      </button>
                        {passwordError && <p className="text-red font-medium">Min 6 characters.</p>}
                    </div>
                    <button type="submit" 
                    className="w-full text-white bg-lightGreen focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={handleLogin}
                    disabled={isDisabled}
                    >
                      Sign in
                      </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?
                        <NavLink to='/signup' className="ml-1 font-medium text-blue hover:underline">
                          Sign up
                        </NavLink>
                    </p>
                </form>
                  <div className="flex items-center">
                     <hr className="flex-grow border border-grey mr-4" />
                         <span className="text-black">or</span>
                     <hr className="flex-grow border border-grey ml-4" />
                  </div>
                <div className='flex flex-col items-center'>
                  <LoginWithGoogle />
                </div>
            </div>
        </div>
    </div>
  </section>
  );
}

export default LoginWithEmail