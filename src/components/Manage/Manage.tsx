import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Manage.css";
import profilephoto from "../../assets/user.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Manage = () => {
  const handleCheckboxChange = (event: any) => {
    setChecked(event.target.checked);
  };
  const [checked, setChecked] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Set initial state to true
  const [isSecondDrawerOpen, setIsSecondDrawerOpen] = useState(false); // State for the second drawer // Set initial state to true

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    //setIsOpen(true); // Toggle the first drawer
    setIsSecondDrawerOpen(false); // Close the second drawer
    //  setIsFormOpen(true);
  };

  const toggleSecondDrawer = () => {
    setIsOpen(false); // Close the first drawer
    setIsSecondDrawerOpen(true); // Open the second drawer
  };

  const closeForm = () => {
    setIsFormOpen(false); // Close the form
  };

  const DataSubmit = () => {
    setIsOpen(false); // Close the first drawer
    setIsSecondDrawerOpen(false); // Open the second drawer
    setIsFormOpen(false); // Close the form
  };

  useEffect(() => {
    // setIsOpen(false);
  });

  return (
    <Container  className="body-content">
      <nav className="navbar navbar-default">
        <div className="container-fluid body-content">
          <ul className="nav navbar-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/manage">Manage</a>
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
            <span className="profile-photo body-content">
              <img src={profilephoto} alt="Profile Photo" />
            </span >
            <label className="user-name body-content">Praveen Rajkumar</label>
          </div>
        </div>
      </nav>

      <div className="form-system">
        <div className="form">
          <label>System</label>
        </div>
      </div>

      <div  className="body-content">
        <form className="form">
          <label className="manage-label">Gateway</label>

          <Row  className="body-content">
            <Col  >
              <div className="body-content">
              <div className="btn-gateway">
                <span>
                  <input type="text" placeholder="Search Table" />
                </span>

                <button className="gate" onClick={toggleDrawer}>
                  ADD GATEWAY
                </button>
                </div>
                {/* First Drawer */}
                <Drawer
                  style={{ width: "400px" }}
                  open={isOpen}
                  onClose={toggleDrawer}
                  direction="right"
                  className="drawer"
                >
                  <div className="gateway-data">
                    <label>Add Gateway</label>
                    <button className="close" onClick={closeForm}>
                      X
                    </button>
                  </div>
                  <form className="drawer-form">
                    <span>
                      <div className="drawer-align">
                        <label htmlFor="gatewayNo"> Gateway No</label>
                        <span style={{ padding: "17px" }}>
                          <input
                            type="text"
                            id="gatewayNo"
                            name="gatewayNo"
                            placeholder="gatewayNo"
                            required
                          />
                        </span>
                      </div>
                    </span>

                    <div className="drawer-align">
                      <label htmlFor="Name"> Name </label>
                      <span style={{ marginLeft: "40px" }}>
                        <input
                          type="text"
                          id="Name"
                          name="Name"
                          placeholder="Name"
                          required
                        />
                      </span>
                    </div>

                    <div className="drawer-align">
                      <label htmlFor="make">Make </label>
                      <span style={{ marginLeft: "40px" }}>
                        <input
                          type="text"
                          id="make"
                          name="make"
                          placeholder="Make"
                          required
                        />
                      </span>
                    </div>

                    <div className="drawer-align">
                      <label htmlFor="model">Model</label>
                      <span style={{ marginLeft: "37px" }}>
                        <input
                          type="text"
                          id="model"
                          name="model"
                          placeholder="Model"
                          required
                        />
                      </span>
                    </div>

                    <div className="drawer-align">
                      <label htmlFor="serialNo">Serial No</label>
                      <span style={{ marginLeft: "13px" }}>
                        <input
                          type="text"
                          id="serialNo"
                          name="serialNo"
                          placeholder="Serial No"
                          required
                        />
                      </span>
                    </div>

                    <div className="drawer-align">
                      <label htmlFor="macId">Mac ID</label>
                      <span style={{ marginLeft: "30px" }}>
                        <input
                          type="text"
                          id="macId"
                          name="macId"
                          placeholder="Mac ID"
                          required
                        />
                      </span>
                    </div>

                    <div className="drawer-align">
                      <label htmlFor="ipAddress">IP Address</label>
                      <span style={{ marginLeft: "5px" }}>
                        <input
                          type="text"
                          id="ipAddress"
                          name="ipAddress"
                          placeholder="IP Address"
                          required
                        />
                      </span>
                    </div>

                    <div className="drawer-align">
                      <label htmlFor="siteId">Site ID</label>
                      <span style={{ marginLeft: "34px" }}>
                        <input
                          type="text"
                          id="siteId"
                          name="siteId"
                          placeholder="Chennai-Plant 1"
                          readOnly
                          disabled
                          required
                        />
                      </span>
                    </div>

                    <div className="drawer-align">
                      <label htmlFor="manual">Manual</label>
                      <span style={{ marginLeft: "30px" }}>
                        <input
                          type="text"
                          id="manual"
                          name="manual"
                          placeholder="Manual"
                          required
                        />
                      </span>
                    </div>

                    <div className="drawer-align">
                      <label htmlFor="sampleData" style={{ marginLeft: "10x" }}>
                        Sample Data
                      </label>
                      <span style={{ padding: "13px" }}>
                        <input
                          type="text"
                          id="sampleData"
                          name="sampleData"
                          placeholder="Sample Data"
                          required
                        />
                      </span>
                    </div>

                    <div className="drawer-align">
                      <label htmlFor="comments">Comments</label>
                      <span style={{ padding: "16px" }}>
                        <textarea
                          className="comments"
                          id="comments"
                          name="comments"
                          placeholder="Comments"
                          required
                        ></textarea>
                      </span>
                    </div>

                    <div className="btn-submit">
                      <button
                        className="btn-save"
                        type="submit"
                        onClick={toggleSecondDrawer}
                      >
                        SAVE & CONTINUE
                      </button>
                    </div>
                  </form>
                </Drawer>
                {/* Second Drawer */}
                <Drawer
                  style={{ width: "400px" }}
                  open={isSecondDrawerOpen}
                  onClose={toggleDrawer}
                  direction="right"
                  className="drawer"
                >
                  <div className="gateway-data">
                    <label>Add Gateway</label>
                    <button className="close" onClick={closeForm}>
                      X
                    </button>
                  </div>
                  <form className="drawer-form">
                    <div className="drawer-align">
                      <span>
                        <label
                          htmlFor="protocol"
                          style={{ marginLeft: "-101px" }}
                        >
                          <span style={{ marginLeft: "-23px" }}>Protocol</span>
                        </label>
                      </span>

                      <button
                        className="btn btn-default dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        style={{ marginLeft: "23px" }}
                      >
                        MQTT
                      </button>
                    </div>

                    <div className="drawer-align">
                      <span>
                        <label htmlFor="endpoint">
                          <span style={{ marginLeft: "-23px" }}>EndPoint</span>
                        </label>
                      </span>

                      <button
                        className="btn btn-default dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        style={{ marginLeft: "23px" }}
                      >
                        Ep1-Flr2-PrdSrv-MQTT
                      </button>
                    </div>

                    <div className="drawer-align">
                      <label htmlFor="make">Topic </label>
                      <span style={{ marginLeft: "40px" }}>
                        <input type="text" id="make" name="make" />
                      </span>
                    </div>

                    <div className="btn-submit">
                      <button
                        className="btn-save"
                        type="submit"
                        onClick={DataSubmit}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </Drawer>
              </div>
            </Col>
          </Row>

          <Row  className="body-content">
            <Col>
              <table className="body-content">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Gateway Number</th>
                    <th>Gateway Name</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                    </td>
                    <td>GT_CH_01</td>
                    <td>Room A2 BLE GT</td>
                    <td>QC Lab Instrument</td>
                    <td>Sample Description ...</td>
                    <td>
                      <span className="Active">
                        <button className="btn-Action">Active</button>
                      </span>
                    </td>
                    <td>
                      <span className="edit-icon"></span>

                      <span id="delete-icon" className="bi bi-trash"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                    </td>
                    <td>GT-CH-02</td>
                    <td>Room A2 MQTT GT</td>
                    <td>QC Lab Instrument</td>
                    <td>Sample Description ...</td>
                    <td>
                      <span className="Active">
                        <button className="btn-Action">Active</button>
                      </span>
                    </td>
                    <td>
                      <span className="edit-icon"></span>

                      <span id="delete-icon" className="bi bi-trash"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                    </td>
                    <td>GT-CH-03</td>
                    <td>Room A2 Wifi GT</td>
                    <td>QC Lab Instrument</td>
                    <td>Sample Description ...</td>
                    <td>
                      <span className="Active">
                        <button className="btn-Action">Active</button>
                      </span>
                    </td>
                    <td>
                      <span className="edit-icon"></span>

                      <span id="delete-icon" className="bi bi-trash"></span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>GT-CH-04</td>
                    <td>Room A2 BLE GT</td>
                    <td>QC Lab Instrument</td>
                    <td>Sample Description ...</td>
                    <td>
                      <span className="Active">
                        <button className="btn-Action">Active</button>
                      </span>
                    </td>
                    <td>
                      <span className="edit-icon"></span>

                      <span id="delete-icon" className="bi bi-trash"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default Manage;