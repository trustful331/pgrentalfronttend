


"use client";

import React, { useEffect, useRef, useState } from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";

import { toast } from "react-hot-toast";


function RoomTypeModal({ displayCTM,toggleCTM }) {

const  handleSubmit = (e)=>{
    e.preventDefault()
}


  useEffect(() => {

  }, []);

  return (
    <div
      className={displayCTM ? "modal loginRegisterModal show" : "modal loginRegisterModal"} id="loginRegisterModal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Tabs>
            <button type="button" className="close" onClick={()=>{toggleCTM(!displayCTM)}}>
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Add Room Type
                  </a>
                </Tab>

                
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">
                  <div className="miran-login">
                    
                    <span className="sub-title">
                      <span>Add Room Type</span>
                    </span>

                    <form onSubmit={(e)=>{handleSubmit(e)}}>

{/*...............................................otp send............................................................................*/}

                      <div className="form-group">

                        <input
                            type="text"
                            placeholder="add Room type..."
                            className="form-control"
                            />

                      </div>

                      <button type="submit" onClick={()=>{toggleCTM(!displayCTM)}}>
                        Add Room type
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

export default RoomTypeModal;
