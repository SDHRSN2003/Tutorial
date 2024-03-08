import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const FrontPage = () => {
  const [backgroundMovement, setBackgroundMovement] = useState(0);

  
  const handleBackgroundMovement = () => {
    setBackgroundMovement(backgroundMovement + 1); 
  };

  return (
    <div className="relative h-screen overflow-hidden">
      
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url("wallpaper-gif-4.gif")`, 
          transform: `translate(${backgroundMovement}px, ${backgroundMovement}px)`,
        }}
        onClick={handleBackgroundMovement} 
      ></div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-times">Infinite Scrolling</h1>
          <div className="flex justify-center space-x-4">
            <Link to = "/login" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center">
              <FaSignInAlt className="mr-2" /> Login
            </Link>
            <Link to = "/signup" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center">
              <FaUserPlus className="mr-2" /> Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
