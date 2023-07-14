import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import profilephoto from "../../assets/user.jpg";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSystemForm, setShowSystemForm] = useState(false);

  const handleManageClick = () => {
    setShowForm(true);
  };

  const handleSystemClick = () => {
    setShowSystemForm(true);
  };

  return (
    <Container className="body-content">
      <Row>
        <Col>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#" onClick={handleManageClick}>
                    Manage
                  </a>
                </li>
              </ul>

              <div className="dropdown">
                <button
                  className="btn btn-default dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Chennai - Plant 1
                </button>
              </div>

              <div className="navbar-left">
                <span className="profile-photo">
                  <img src={profilephoto} alt="Profile Photo" />
                </span>
                <label className="user-name">Praveen Rajkumar</label>
              </div>
            </div>
          </nav>
        </Col>
      </Row>

      {showForm && (
        <Row>
          <Col sm={3}>
            <form className="form">
              <ul>
                <li className="list-blue">
                  Users
                  <ul>
                    <li className="list-black">
                      <a href="/manage" onClick={handleSystemClick}>
                        System
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="list-blue">
                  Role
                  <ul>
                    <li className="list-black">Gateway</li>
                  </ul>
                </li>
                <li className="list-blue">
                  Users
                  <ul>
                    <li className="list-blue">Access</li>
                  </ul>
                </li>
              </ul>
            </form>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Dashboard;
