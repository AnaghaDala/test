import React from 'react';
import './AboutUsPage.css';
import sannidhiImage from './sannidhi.jpg';
import {Link} from "react-router-dom";
const AboutUsPage = () => {
  return (
<>
<nav class="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#1293e4"}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/Services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">Recipes</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="/AboutUs">About Us</a>
        </li>
      </ul>
      <Link to="/login">
        <button style={{ backgroundColor: "#FFA500" }}>Logout</button>
      </Link>
    </div>
  </div>
</nav>
    <div className="about-us">
      <div className="container">
      <h1>About Us</h1>
      <p>
        Welcome to Grievance Management Sytsem.
      </p>
      <p>
        Register Complaint or Update Complaint Status through Portal. Respective government depaartments will get back to you with the updates of action taken regarding your Complaints.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to help the public connect with the officials and lodge their grievances in a single web platform.
      </p>
      <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={sannidhiImage} alt="Sannidhi kaje" />
            <p></p>
            <h3>Sannidhi Kaje</h3>
          </div>
          <div className="team-member">
            <img src={" "} alt="Suraksha S Salian" />
            <p></p>
            <h3>Suraksha S Salian</h3>
          </div>
          <div className="team-member">
            <img src={" "} alt="Soujanya P Sharma" />
            <p></p>
            <h3>Soujanya P Sharma</h3>
          </div>
          <div className="team-member">
            <img src={" "} alt="Anagha D S" />
            <p></p>
            <h3>Anagha D S</h3>
          </div>
        </div>
        <br></br>
        <h2>Contact Us</h2>
        <p>
          Have questions, suggestions, or feedback? Feel free to reach out to us at <a href="mailto:gms@gmail.com">gms@gmail.com</a>.
        </p>
      </div>
    </div>
    <br></br>
      <footer className="footer">
          <div className="row" style={{backgroundColor:"#1293e4"}}>
              <h3>Contact Us</h3>
              <ul>
                <li>SCEM</li>
                <li>Adyar,Mangalore</li>
                <li>Phone: 9876543210</li>
                <li>Email: gms@example.com</li>
              </ul>
          </div>
      </footer>
    </>
  );
};

export default AboutUsPage;