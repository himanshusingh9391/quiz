import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
      navigate('/');
    } else if (email === 'user@gmail.com' && password === 'user123') {
      localStorage.setItem('user', JSON.stringify({ email, role: 'user' }));
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/bg1.jpg')] bg-cover bg-center p-4">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="bg-black p-4 shadow-md rounded">
        <div className="mb-4">
          <label className="block mb-2 text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Login
          </button>
        </div>
        {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 flex justify-center rounded-md">Login</button> */}
      </form>
    </div>
  );
};

export default Login;
