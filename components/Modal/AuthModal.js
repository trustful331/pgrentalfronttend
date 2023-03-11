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
    formRef.preventDefault();
    mutate({ number: phoneNo });
  };
  const onChangeHandlerForPhoneNo = (e) => {
    setPhoneNo(e.target.value);
  };
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

                {/* <Tab className="nav-item">
                <a className="nav-link" id="register-tab">
                  Register
                </a>
              </Tab> */}
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">
                  <div className="miran-login">
                    {/* <div className="login-with-account">
                    <span>Login with</span>
                    <ul>
                      <li>
                        <a href="#" className="facebook">
                          <i className="bx bxl-facebook"></i> Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="bx bxl-twitter"></i> Twitter
                        </a>
                      </li>
                    </ul>
                  </div> */}

                    <span className="sub-title">
                      <span>Phone Number</span>
                    </span>

                    <form ref={formRef}>
                      <div className="form-group">
                        <input
                          type="text"
                          value={phoneNo}
                          onChange={onChangeHandlerForPhoneNo}
                          placeholder="Phone Number"
                          className="form-control"
                        />
                      </div>

                      <button onClick={onSubmitForSendOtp}>Send OTP</button>

                      <div className="form-group">
                        <input
                          type="Text"
                          placeholder="OTP"
                          className="form-control"
                        />
                      </div>

                      <button>Login</button>
                    </form>

                    <span className="dont-account">
                      Don't get OTP? <a href="#">Resend OTP</a>
                    </span>
                  </div>
                </div>
              </TabPanel>

              {/* <TabPanel>
              <div className="tab-pane" id="register">
                <div className="miran-register">
                  <div className="register-with-account">
                    <span>Register with</span>
                    <ul>
                      <li>
                        <a href="#" className="facebook">
                          <i className="bx bxl-facebook"></i> Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="bx bxl-twitter"></i> Twitter
                        </a>
                      </li>
                    </ul>
                  </div>

                  <span className="sub-title">
                    <span>Or Register with</span>
                  </span>

                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="form-control"
                      />
                    </div>

                    <button type="submit">Register Now</button>
                  </form>

                  <span className="already-account">
                    Already have an account? <a href="#">Login Now</a>
                  </span>
                </div>
              </div>
            </TabPanel> */}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
