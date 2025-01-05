import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const UserLayout = () => {
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 3000);
  return () => clearTimeout(timer);
}, []);

return (
  <>
    {loading ? (
      <div className="flex items-center justify-center h-screen">
        <div className="loader"></div>
      </div>
    ) : (
      <>
        <Outlet />
        <Navbar />
      </>
    )}
  </>
);
}

export default UserLayout
