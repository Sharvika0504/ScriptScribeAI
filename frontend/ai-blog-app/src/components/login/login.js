import React, { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Hardcoded credentials
  const correctEmail = "user@example.com";
  const correctPassword = "password123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === correctEmail && password === correctPassword) {
      alert("Login successful!");
 
      setLoginError('');
    } else {
      setLoginError('Invalid email or password.');
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <img src="https://biteable.com/wp-content/uploads/2023/05/How-to-remove-the-background-of-your-video.png" width={150} className="mx-auto" />
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
          </div>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          {loginError && <p className="text-red-500">{loginError}</p>}
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign in
          </button>
        </form>
        <p className="text-center">Don't have an account? <a href="#0" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
      </div>
    </main>
  );
};

export default Login;
