import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Complaint from './Complaint';

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [showComplaintDialog, setShowComplaintDialog] = useState(false);

  const handleShowComplaintDialog = () => {
    setShowComplaintDialog(true);
  };

  const handleHideComplaintDialog = () => {
    setShowComplaintDialog(false);
  };

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate('/login');
      }

      try {
        const { data } = await axios.post(
          'http://localhost:4000', 
          {},
          { 
            withCredentials: true }
        );
  
        console.log(data);
  
        if (data.status) {
        } else {
          removeCookie('authToken');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error verifying user:', error);
        removeCookie('token');
        navigate('/login');
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie('token');
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-primary" style={{ backgroundColor: '#1293e4' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/dashboard">
            Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <ul className="d-flex align-items-center" style={{ listStyle: 'none' }}>
              <li style={{ marginRight: '10px' }}>
                <Button variant="danger" onClick={handleShowComplaintDialog} style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
                  Register Complaint
                </Button>
              </li>
              <li>
                <Link to="/login" className="btn btn-danger btn-md" onClick={Logout} style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <div className="container">
        {/* Your carousel and other content */}
      </div>
      <footer className="footer">
        <div className="row" style={{ backgroundColor: '#1293e4' }}>
          <h3>Contact Us</h3>
          <ul>
            <li>SCEM</li>
            <li>Adyar, Mangalore</li>
            <li>Phone: 9876543210</li>
            <li>Email: gms@gmail.com</li>
          </ul>
        </div>
      </footer>
      <ToastContainer />
      <Complaint show={showComplaintDialog} onHide={handleHideComplaintDialog} />
    </>
  );
};

export default Dashboard;
