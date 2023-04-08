

"use client";

import React, { useEffect, useState } from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";

import { toast } from "react-hot-toast";
import { useAuthToken } from "../../contexts/authContext";
import { useMutation, useQueryClient } from "react-query";
import cityApi from "../../utils/Api/city.api";

function ScheduleModal({ displaySM, toggleSM }) {
  const [cityName, setCityName] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChnageHandler = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div
      className={
        displaySM ? "modal loginRegisterModal show" : "modal loginRegisterModal"
      }
      id="loginRegisterModal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Tabs>
            <button
              type="button"
              className="close"
              onClick={() => {
                toggleSM(!displaySM);
              }}
            >
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Schedule
                  </a>
                </Tab>
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">

                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="PhoneNumber"
                      className="form-control"
                    />
                  </div>
                  <div className="miran-login">
                    <span className="sub-title">
                      <span>I am a</span>
                    </span>

                    <form onSubmit={(e) => {handleSubmit(e);}}>
                      <div className="form-group">

                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                            <input type="radio" className="btn-check" name="btnradio" id="btnradiostn" autocomplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradiostn">Student</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradiowp" autocomplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradiowp">Working Professional</label>
                        </div>
                      </div>
                    </form>
                  </div>
                  
                  <div className="miran-login">

                    <span className="sub-title">
                      <span>Schedule A Visite On</span>
                    </span>

                    <form  onSubmit={(e) => {handleSubmit(e);}}>
                      <div className="form-group">
                        <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
                            <input placeholder="Select date" type="date" id="example" className="form-control"/>
                        </div>
                      </div>
                    </form>

                  </div>

                  <div className="miran-login">
                    <span className="sub-title">
                      <span>What is your preferred time slot?</span>
                    </span>

                    <form onSubmit={(e) => {handleSubmit(e);}}>
                      <div className="form-group">

                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">9-12pm</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio2">12-3pm</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio3">3-6pm</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio4">6-9pm</label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        onClick={() => {toggleSM(!displaySM);}}>
                         Schedule A Call
                      </button>
                    </form>
                  </div>

                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ScheduleModal;
