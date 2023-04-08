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

function VisitModal({ displayVM, toggleVM }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChnageHandler = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div
      className={
        displayVM ? "modal loginRegisterModal show" : "modal loginRegisterModal"
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
                toggleVM(!displayVM);
              }}
            >
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Visit
                  </a>
                </Tab>
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">

                    <div className="miran-login">
                        <span className="sub-title">
                            <span>Name</span>
                        </span>

                        <form onSubmit={(e) => {handleSubmit(e);}}>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Name"
                                className="form-control"
                                />
                            </div>

                            <span className="sub-title">
                                <span>phone number</span>
                            </span>

                            <div className="form-group">
                                <input
                                type="Number"
                                placeholder="Phone number"
                                className="form-control"
                                />
                            </div>

                             <span className="sub-title">
                                <span>Email</span>
                            </span>

                            <div className="form-group">
                                <input
                                type="email"
                                placeholder="Email Id"
                                className="form-control"
                                />
                            </div>

                            <span className="sub-title">
                                <span>Visite On</span>
                            </span>

                            <div className="form-group">
                                <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
                                    <input placeholder="Select date" type="date" id="example" className="form-control"/>
                                </div>
                            </div>

                            <button
                            type="submit"
                            onClick={() => {toggleVM(!displayVM);}}>
                                Visit
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

export default VisitModal;
