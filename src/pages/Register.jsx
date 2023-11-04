import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
 


const Register = () => {

  // state 
  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false);
   
  // context 
    
  // onclick function 
  const handleRegister = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    // const name = form.get('name')
    // const email = form.get('email')
    const password = form.get('password')
    const check = e.target.check.checked;
       

    // reset error and success
    setRegisterError('')
    setSuccess('')
    
    // password validation 
    if (password.length < 6) {
      setRegisterError('password should be atleast 6 characters or longer ')
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError('your password should have at least one uppercase character')
      return;
    }
    else if (!check) {
      setRegisterError('please accept our terms and conditions')
      return;
    }

    //   // create User
    //   createUser(email, password)
    //     .then(res => {
    //     console.log(res.user);
    //       setSuccess('user created successfully')
          
    //       // update profile 
    //       handleUpdateProfile(name)
    //         .then(() => {
    //         console.log('profile updated');
    //         })
    //         .catch(error => {
    //         console.log(error);
    //       })
    
   
  };
  return (
    <section className="bg-gray-50   dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full     bg-white rounded-lg shadow dark:border  max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="     space-y-3 md:space-y-4 p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to your account
            </h1>
            <form onSubmit={handleRegister} className="space-y-3  md:space-y-4" >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="flex items-center relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2">
                    {
                      showPassword ? <FaEyeSlash className="text-xl text-gray-500" /> : <FaEye className="text-xl text-gray-500" />
                    }
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      name="check"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      I agree to the terms and condition
                    </label>
                  </div>
                </div>
                
              </div>
              <button
                type="submit"
                className="w-full btn btn-secondary"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <Link to='/login'
                   
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
                >
                  Sign In
                </Link>
              </p>
              {/* <p className="divider">or</p> 
           <SocialLogin></SocialLogin>           */}
            </form>
            {
              registerError && <p className="text-red-700">{registerError}</p>
            }
            {
              success && <p className="text-green-700">{success}</p>
            }
          </div>
        </div>
      </div>
    </section>
  );

}
  export default Register;