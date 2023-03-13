
"use client";

import React, { useEffect, useRef, useState } from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";

import { toast } from "react-hot-toast";


function CityModal({ displayCM,toggleCM }) {

const  handleSubmit = (e)=>{
    e.preventDefault()
}


  useEffect(() => {

  }, []);

  return (
    <div
      className={displayCM ? "modal loginRegisterModal show" : "modal loginRegisterModal"} id="loginRegisterModal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Tabs>
            <button type="button" className="close" onClick={()=>{toggleCM(!displayCM)}}>
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Add City
                  </a>
                </Tab>

                
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">
                  <div className="miran-login">
                    
                    <span className="sub-title">
                      <span>Add City</span>
                    </span>

                    <form onSubmit={(e)=>{handleSubmit(e)}}>

{/*...............................................otp send............................................................................*/}

                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="add city"
                          className="form-control"
                        />

                        {/* <select className="dashbaord-category-select">
                            <option>Select City</option>
                            <option>Hydrabad</option>
                            <option>Bangalore</option>
                            <option>Mumbai</option>
                        </select> */}
                      </div>

                      <button type="submit" onClick={()=>{toggleCM(!displayCM)}}>
                        Add City
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

export default CityModal;
