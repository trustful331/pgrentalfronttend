import React, { useRef, useState } from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";
import { useMutation } from "react-query";
import authApi from "../../utils/Api/auth.api";

function AuthModal({ displayAuth, toggleAuth }) {
  const [phoneNo, setPhoneNo] = useState("");
  const formRef = useRef(null);
  const { mutate } = useMutation({
    mutationFn: (data) => authApi.loginHandlerApi(data),
  });


  const onSubmitForSendOtp = (e) => {
    //formRef.preventDefault();
    console.log("click 1")

    e.preventDefault()
    mutate({ number: phoneNo });
  };


  const onChangeHandlerForPhoneNo = (e) => {
    e.preventDefault()
    console.log("click 2")
    setPhoneNo(e.target.value);
  };

  const handleSubmit = (e)=>{
    console.log("click 3")
    e.preventDefault()
  }


  return (
    <div
      className={
        displayAuth
          ? "modal loginRegisterModal show"
          : "modal loginRegisterModal"
      }
      id="loginRegisterModal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Tabs>
            <button type="button" className="close" onClick={toggleAuth}>
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Login
                  </a>
                </Tab>
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">
                  <div className="miran-login">
                    
                    <span className="sub-title">
                      <span>Phone Number</span>
                    </span>

                    <form ref={formRef}>
                        <div className="form-group">
                          <input
                            type="text"
                            value={phoneNo}
                            onChange={(e)=>{onChangeHandlerForPhoneNo(e)}}
                            placeholder="Phone Number"
                            className="form-control"
                          />
                        </div>

                        <button onClick={(e)=>{onSubmitForSendOtp(e)}} type='submit'>Send OTP</button>

                        {/* <div className="form-group">
                          <input
                            type="Text"
                            placeholder="OTP"
                            className="form-control"
                          />
                        </div>

                        <button>Login</button> */}
                    </form>

                    <span className="dont-account">
                      Don't get OTP? <a href="#">Resend OTP</a>
                    </span>
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

export default AuthModal;
