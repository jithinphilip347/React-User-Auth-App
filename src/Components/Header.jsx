import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
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
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <span className="text-white">Welcome to {userName}!</span>
              <button onClick={handleLogout} className="text-white hover:underline relative left-[1050px]">
                Logout
              </button>
            </>
          ) : (
            <>
            <div className="text-white text-xl font-bold">User Auth App</div>
              <Link to="/login" className="text-white relative left-[1000px]">Login</Link>
              <Link to="/register" className="text-white relative left-[1000px]">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
