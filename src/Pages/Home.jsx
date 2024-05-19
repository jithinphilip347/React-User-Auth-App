import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('registeredUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUserName(userData.fullName);
    } else {
      setIsLoggedIn(false);
      setUserName('');
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('registeredUser');
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md p-6 border rounded-lg shadow-lg text-center">
        {isLoggedIn ? (
          <>
            <h1 className="text-2xl font-semibold mb-4">Welcome, {userName}</h1>
            <p className="text-lg mb-4">Welcome back to the user authentication app.</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLogout}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-4">Welcome to User Auth App</h1>
            <p className="text-lg mb-4">Please login or register to continue.</p>
            <div className="flex justify-center space-x-4">
              <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Login
              </Link>
              <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
