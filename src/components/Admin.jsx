import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in and is an admin
    const un = localStorage.getItem('un');
    const userRole = localStorage.getItem('role');
    
    if (!un || userRole !== '1') {
      // If not logged in or not an admin, redirect to login
      navigate('/login');
    } else {
      setUsername(un);
      setRole(parseInt(userRole));
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('un');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin navigation bar */}
      <nav className="bg-gradient-to-r from-purple-600 to-indigo-800 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-xl font-bold">Learning Hub Admin</span>
        </div>
        
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-white hover:text-purple-200">Dashboard</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-200">Users</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-200">Courses</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-purple-200">Reports</a>
          </li>
        </ul>
        
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">Admin: {username}</span>
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition duration-300"
          >
            Logout
          </button>
        </div>
      </nav>
      
      {/* Admin Dashboard */}
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Dashboard Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-gray-500 text-sm uppercase">Total Users</h3>
            <p className="text-3xl font-semibold text-gray-700">156</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-gray-500 text-sm uppercase">Active Courses</h3>
            <p className="text-3xl font-semibold text-gray-700">24</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h3 className="text-gray-500 text-sm uppercase">Enrollments</h3>
            <p className="text-3xl font-semibold text-gray-700">432</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="text-gray-500 text-sm uppercase">Revenue</h3>
            <p className="text-3xl font-semibold text-gray-700">$8,540</p>
          </div>
        </div>
        
        {/* Recent Users Table */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-indigo-700">Recent Users</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Joined</th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-200">johndoe</td>
                  <td className="py-3 px-4 border-b border-gray-200">User</td>
                  <td className="py-3 px-4 border-b border-gray-200">May 8, 2025</td>
                  <td className="py-3 px-4 border-b border-gray-200"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span></td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                    <button className="text-red-500 hover:text-red-700">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-200">janedoe</td>
                  <td className="py-3 px-4 border-b border-gray-200">User</td>
                  <td className="py-3 px-4 border-b border-gray-200">May 7, 2025</td>
                  <td className="py-3 px-4 border-b border-gray-200"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span></td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                    <button className="text-red-500 hover:text-red-700">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-200">sarahsmith</td>
                  <td className="py-3 px-4 border-b border-gray-200">Admin</td>
                  <td className="py-3 px-4 border-b border-gray-200">May 5, 2025</td>
                  <td className="py-3 px-4 border-b border-gray-200"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span></td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                    <button className="text-red-500 hover:text-red-700">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}