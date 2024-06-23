import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz Platform</h1>
      <div>
        {user ? (
          <>
            {user.role === 'admin' && (
              <Link to="/admin" className="bg-green-500 text-white px-4 py-2 rounded mr-2">Admin Panel</Link>
            )}
            <Link to="/quiz" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Take Quiz</Link>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Home;
