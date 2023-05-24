import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import LogoSmall from '../LogoSmall/LogoSmall';

const SignUpWithEmail: React.FC = (): JSX.Element => {

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
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className='flex flex-wrap'>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mr-2">
                sign up to
                </h1>
                <LogoSmall />
              </div>
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
                    onClick={handleSignUp}
                    disabled={isDisabled}
                    >
                      Sign up
                      </button>
                </form>
            </div>
        </div>
      </div>
      </section>
  )
}

export default SignUpWithEmail