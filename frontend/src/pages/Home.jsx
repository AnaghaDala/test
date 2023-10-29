import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['authToken']);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.authToken) {
        navigate('/login');
      }
      const authToken = cookies.authToken;

      const { data } = await axios.post(
        'http://localhost:4000', 
        {},
        { 
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          withCredentials: true }
      );

      console.log(data);

      if (data.status) {
      } else {
        removeCookie('authToken');
        navigate('/login');
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie('authToken');
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-primary" style={{ backgroundColor: '#1293e4' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Grievance Portal
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
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AboutUs">
                  About Us
                </a>
              </li>
            </ul>
            <ul className="d-flex align-items-center" style={{ listStyle: 'none' }}>
              <li>
                <Link to="/Login" className="btn btn-danger btn-md" onClick={Logout} style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <div className="container">
     <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpJ_HYRoiBoV3JtVap9WHa6Wr3xERsbcpgl9LJuU5A__h6_dWFUb3lzfG4tjorGJyW18&usqp=CAU" className="d-block w-100" width="500" height="550" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Welcome</h5>
        <p>You can now submit all your grievances in a single platform!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1590891127174-e467d4716c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" className="d-block w-100" alt="..." width="500" height="550"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Easy Complaint Submission</h5>
        <p>Click an image from your phones and submit the details of the complaint.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://image.eztalks.com/2021/03-16/14/26fda684f4a423401cb4293614f9b592.jpg"  width="500" height="550"className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Status Updates</h5>
        <p>Check the status of all the complaints you registered!</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
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
    </>
  );
};

export default Home;