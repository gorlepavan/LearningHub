import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Home() {
  const [username, setUsername] = useState('');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    const un = localStorage.getItem('un');
    if (!un) {
      navigate('/login');
    } else {
      setUsername(un);
    }
    
    // Get enrolled courses
    const enrolled = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    setEnrolledCourses(enrolled);
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('un');
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation bar with username display */}
      <nav className="bg-gradient-to-r from-cyan-600 to-indigo-600 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-xl font-bold">Learning Hub</span>
        </div>
        
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-white hover:text-cyan-200">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-cyan-200">Courses</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-cyan-200">Resources</a>
          </li>
        </ul>
        
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">Welcome, {username}</span>
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition duration-300"
          >
            Logout
          </button>
        </div>
      </nav>
      
      {/* Main content */}
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Welcome to Learning Hub</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Web Development Course card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            {enrolledCourses.includes('web-development') && (
              <div className="float-right -mt-2 -mr-2">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Enrolled
                </span>
              </div>
            )}
            <h2 className="text-xl font-semibold mb-3 text-indigo-600">Web Development</h2>
            <p className="text-gray-600 mb-4">Learn HTML, CSS, JavaScript and more to build amazing websites.</p>
            <Link to="/course/web-development">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                {enrolledCourses.includes('web-development') ? 'Continue Learning' : 'Explore Course'}
              </button>
            </Link>
          </div>
          
          {/* Data Science Course card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            {enrolledCourses.includes('data-science') && (
              <div className="float-right -mt-2 -mr-2">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Enrolled
                </span>
              </div>
            )}
            <h2 className="text-xl font-semibold mb-3 text-indigo-600">Data Science</h2>
            <p className="text-gray-600 mb-4">Master data analysis, visualization and machine learning concepts.</p>
            <Link to="/course/data-science">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                {enrolledCourses.includes('data-science') ? 'Continue Learning' : 'Explore Course'}
              </button>
            </Link>
          </div>
          
          {/* Mobile App Development Course card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            {enrolledCourses.includes('mobile-app-development') && (
              <div className="float-right -mt-2 -mr-2">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Enrolled
                </span>
              </div>
            )}
            <h2 className="text-xl font-semibold mb-3 text-indigo-600">Mobile App Development</h2>
            <p className="text-gray-600 mb-4">Create cross-platform mobile applications using React Native.</p>
            <Link to="/course/mobile-app-development">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                {enrolledCourses.includes('mobile-app-development') ? 'Continue Learning' : 'Explore Course'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}