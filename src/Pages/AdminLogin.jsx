import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminUsername = 'admin';
    const adminPassword = 'admin';

  
    if (e.target.username.value === adminUsername && e.target.password.value === adminPassword) {
    
      navigate('/admin/home');
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md p-6 border rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
        <div className="mb-4">
          <input
            type="text"
            name="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
