import { useState, useEffect } from 'react';

const AdminHome = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      setUsers(parsedUsers);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Admin Home</h1>
      <div className="bg-gray-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Registered Users</h2>
        {users.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Name</th>
                <th className="py-2 px-4 border-b border-gray-200">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-200">{user.fullName}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users registered yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
