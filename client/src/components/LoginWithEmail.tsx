import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LogoSmall from './LogoSmall';
import LoginWithGoogle from './LoginWithGoogle';

const LoginWithEmail: React.FC = (): JSX.Element => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    console.log('password: ', password);

    console.log('email: ', email)

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
                          "border-solid border-2 border-red rounded-lg p-2.5 w-full mb-5"
                          :
                          "mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} 
                        placeholder="name@company.com"
                        value={email}
                        onInput={handleEmailChange} />
                        {emailError && <p className="text-red font-medium">Please enter a valid email.</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        className={
                          passwordError?
                          "border-solid border-2 border-red rounded-lg p-2.5 w-full mb-5"
                          :
                          "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                        value={password}
                        onInput={handlePasswordChange} />
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
                        <a href="#" 
                        className="ml-1 font-medium text-blue hover:underline">
                          Sign up
                          </a>
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