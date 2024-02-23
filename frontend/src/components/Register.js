import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eventQR from "../image/eventQR.jpeg";
import workshopQR from "../image/workshopQR.jpeg";
import workshopEventsQr from "../image/workshopEventsQr.jpeg";
import logo from "../image/ThreadsLogo.png";

const Register = () => {
  const details = {};
  const navigate = useNavigate();
  const [UPI, setUPI] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  // const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [showHiddenDiv, setShowHiddenDiv] = useState(false);
  const [showHiddenDiv2, setShowHiddenDiv2] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedEvents, setSelectedEvents] = useState(false);
  const [selectedWorkshops, setSelectedWorkshops] = useState("");
  const [selectedYear, setSelectedYear] = useState("1");
  const [selectedPayment, setSelectedPayment] = useState("upi");

  function revert(e) {
    setChecked(!checked);
    setSelectedEvents(!selectedEvents);
  }

  function revert2(e) {
    setChecked2(!checked2);
    setShowHiddenDiv2(checked2);
  }

  useEffect(() => {
    if (selectedCollege === "Sona College Of Technology") {
      setShowHiddenDiv(false);
    } else {
      setShowHiddenDiv(true);
    }
    setShowHiddenDiv2(checked2);
    if (!checked2) {
      setSelectedWorkshops(false);
    }
  }, [selectedCollege, checked2, selectedWorkshops]);

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleWorkshopChange = (event) => {
    setSelectedWorkshops(event.target.value);
  };

  const handleOptionChange4 = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedPayment, selectedWorkshops);

    const details = {
      name,
      selectedCollege,
      department,
      email,
      number,
      selectedEvents,
      selectedWorkshops,
      selectedYear,
      selectedPayment,
    };
    console.log(details);

    const response = await fetch("https://threads-onspot.onrender.com/admin/register", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(details);
    if (response) {
      alert(response.msgg);
    }
  };

  return (
    <div>
      <div style={{}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-center">
          <a className="navbar-brand text-warning" href="/">
            <img src={logo} style={{ width: "35px" }} alt="" />
            THREADS'24
          </a>

          <p className="h4 text-warning ">Onspot Registration Form</p>
        </nav>
      </div>

      <div
        className="container my-5 p-5 well border border-primary"
        style={{
          fontSize: "16px",
          backgroundColor: "rgb(0,0,0,0.8)",
          color: "white",
          fontWeight: "bolder",
        }}
      >
        <div>
          <form action="#" id="workshopRegis" onSubmit={handleSubmit}>
            <div class="form-row my-3">
              <div class="form-group col-md-6">
                <label for="canditateName">Name</label>
                <input
                  type="text"
                  id="canditateName"
                  class="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  placeholder="Enter Name"
                />
              </div>
              <div class="form-group col-md-6">
                <label htmlFor="contactNo">Contact</label>
                <input
                  type="tel"
                  required
                  id="contactNo"
                  class="form-control"
                  maxLength="10"
                  minLength="10"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  placeholder="Enter Mobile Number"
                />
              </div>
            </div>

            <div class="form-row my-3">
              <div class="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  placeholder="Enter Email"
                />
              </div>
              <div class="form-group col-md-6">
                <label htmlFor="clgName">Collage Name</label>
                <input
                  type="text"
                  required
                  id="clgName"
                  class="form-control"
                  onChange={(e) => setSelectedCollege(e.target.value)}
                  value={selectedCollege}
                  placeholder="Enter College name"
                />
              </div>
            </div>

            <div class="form-row my-3">
              <div class="form-group col-md-6">
                <label htmlFor="dept">Department</label>
                <input
                  type="text"
                  id="dept"
                  class="form-control"
                  onChange={(e) => setDepartment(e.target.value)}
                  value={department}
                  required
                  placeholder="Enter Department"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="year">year</label>
                <select
                  class="form-control"
                  id="year"
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="" selected disabled>
                    Select Year
                  </option>
                  <option value="1">1 st</option>
                  <option value="2">2 nd</option>
                  <option value="3">3 rd</option>
                  <option value="4">4 th</option>
                </select>
              </div>
            </div>

            <div class="form-row my-5 ">
              <div class="form-group col-md-6 ">
                <label htmlFor="Participation">Participation</label>
                <div class="form-check form-switch">
                  <div className="radioBtn">
                    <input
                      type="checkbox"
                      id="event"
                      name="event"
                      value="yes"
                      checked={checked}
                      onClick={revert}
                    />
                    <label htmlFor="event" className="workShopTxt">
                      Events (24.02.2024)
                    </label>
                    <br />
                  </div>
                </div>
                <div class="form-check form-switch">
                  <input
                    type="checkbox"
                    id="workshop"
                    name="workshop"
                    value="workshop"
                    className="workselect"
                    checked={checked2}
                    onClick={revert2}
                  />
                  <label htmlFor="workshop" className="workShopTxt">
                    Workshop (23.02.2024)
                  </label>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="payment">Payment Type</label>
                <select
                  class="form-control"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                >
                  <option value="" selected disabled>
                    Select Year
                  </option>
                  <option value="online">Online</option>
                  <option value="cash">Cash</option>
                </select>
              </div>
            </div>

            <div className="form-row my-3">
              <div className="form-group col-md-6 ">
                <div
                  className="hiddenDiv1"
                  id="hiddenDiv1"
                  style={{ display: showHiddenDiv2 ? "block" : "none" }}
                >
                  <label>Workshop</label>
                  <div className="row">
                    {/* First Row */}
                    <div className="col-md-6">
                      <div className="radioBtn">
                        <input
                          type="radio"
                          id="rpa"
                          name="workshop1"
                          value="uiux"
                          checked={selectedWorkshops === "uiux"}
                          onChange={handleWorkshopChange}
                        />
                        <label htmlFor="rpa" className="workShopTxt">
                          UI UX Design
                        </label>
                        <br />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="radioBtn">
                        <input
                          type="radio"
                          id="cyber"
                          name="workshop1"
                          value="cyber_security"
                          checked={selectedWorkshops === "cyber_security"}
                          onChange={handleWorkshopChange}
                        />
                        <label htmlFor="cyber" className="workShopTxt">
                          Cyber Security
                        </label>
                        <br />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {/* Second Row */}
                    <div className="col-md-6">
                      <div className="radioBtn">
                        <input
                          type="radio"
                          id="web_development"
                          name="workshop1"
                          value="web_development"
                          checked={selectedWorkshops === "web_development"}
                          onChange={handleWorkshopChange}
                        />
                        <label
                          htmlFor="web_development"
                          className="workShopTxt"
                        >
                          Web Development
                        </label>
                        <br />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="radioBtn">
                        <input
                          type="radio"
                          id="web"
                          name="workshop1"
                          value="flutter"
                          checked={selectedWorkshops === "flutter"}
                          onChange={handleWorkshopChange}
                        />
                        <label htmlFor="web" className="workShopTxt">
                          Flutter
                        </label>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-6">
                {(checked || checked2) && !(checked && checked2) && (
                  <>
                    {checked && (
                      <img
                        style={{ height: "250px", width: "250px" }}
                        src={eventQR}
                        alt="Event QR Code"
                      />
                    )}
                    {checked2 && (
                      <img
                        style={{ height: "250px", width: "250px" }}
                        src={workshopQR}
                        alt="Workshop QR Code"
                      />
                    )}
                  </>
                )}
                {checked && checked2 && (
                  <img
                    style={{ height: "250px", width: "250px" }}
                    src={workshopEventsQr}
                    alt="Workshop and Event QR Code"
                  />
                )}
              </div>
            </div>

            <button
              className="submitBtn btn btn-primary btn-block"
              id="nextBtn"
            >
              NEXT
            </button>
            <br />
            <br />
          </form>

          {/* <div>
            Pay to this number: <h2>8270202119</h2> or <br />
            <h4>Event QR</h4>
            <img
              style={{ height: "250px", width: "250px" }}
              src={eventQR}
              alt=""
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h4>Workshop QR</h4>
            <img
              style={{ height: "250px", width: "250px" }}
              src={workshopQR}
              alt=""
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h4>Workshops and events QR</h4>
            <img
              style={{ height: "250px", width: "250px" }}
              src={workshopEventsQr}
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
