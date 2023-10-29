import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Welcome.css";

const Welcome = ({ isAdmin }) => {
  const navigate = useNavigate();

  // Redirect to home page after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Hello {isAdmin ? 'admin' : 'user'}</h1>
      <p>Redirecting to home page...</p>
    </div>
  );
};

export default Welcome;
