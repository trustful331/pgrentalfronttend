


"use client";

import React, { useEffect, useRef, useState } from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";

import { toast } from "react-hot-toast";


function AminityModal({ displayAM,toggleAM }) {

const  handleSubmit = (e)=>{
    e.preventDefault()
}


  useEffect(() => {

  }, []);

  return (
    <div
      className={displayAM ? "modal loginRegisterModal show" : "modal loginRegisterModal"} id="loginRegisterModal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Tabs>
            <button type="button" className="close" onClick={()=>{toggleAM(!displayAM)}}>
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Add Aminities
                  </a>
                </Tab>

                
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">
                  <div className="miran-login">
                    
                    <span className="sub-title">
                      <span>Add Aminities</span>
                    </span>

                    <form onSubmit={(e)=>{handleSubmit(e)}}>

{/*..............................................................................................................................*/}

                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="add Aminities"
                          className="form-control"
                        />

                        {/* <select className="dashbaord-category-select">
                            <option>Select City</option>
                            <option>Hydrabad</option>
                            <option>Bangalore</option>
                            <option>Mumbai</option>
                        </select> */}
                      </div>

                      <button type="submit" onClick={()=>{toggleAM(!displayAM)}}>
                        Add Aminities
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

export default AminityModal;
