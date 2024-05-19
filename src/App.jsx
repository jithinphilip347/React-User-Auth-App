import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import AdminHome from './Pages/AdminHome';
import AdminLogin from './Pages/AdminLogin';
import AdminHeader from './Components/AdminHeader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin/*"
          element={
            <>
              <AdminHeader />
              <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/home" element={<AdminHome />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
