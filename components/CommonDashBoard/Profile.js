import Link from "next/link";
import React, { useState } from "react";
import ChnageProfilePicModal from "../Modal/ChangeProfilePicModal";
import useProfile from "../../utils/Hooks/useProfile";
import Loading from "../Shared/Loading";
import { useAuthContext } from "../../contexts/authContext";

function ProfileComponent({ admin }) {
  const [modal, showModal] = useState(false)
  const toggleModal = () => {
    showModal(modal ? false : true)
  }
  const context = useAuthContext()
  return (
    <>
      <div className="main-content d-flex flex-column">

        <ChnageProfilePicModal displayAM={modal} toggleAM={toggleModal} />
        <div className="breadcrumb-area">
          <h1>My Profile</h1>

          {admin === "admin" ? (
            <ol className="breadcrumb">
              <li className="item">
                <Link href={`/${admin}`}>
                  <a>Home</a>
                </Link>
              </li>
              <li className="item">
                <Link href={`/${admin}`}>
                  <a>Dashboard</a>
                </Link>
              </li>
              <li className="item">My Profile</li>
            </ol>
          ) : (
            <div></div>
          )}
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="my-profile-box">
              <h3>Profile Details</h3>

              <form>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group profile-box">
                      <img src={context?.user?.profile_pic?.path ?? "/images/user1.jpg"} alt="image" />
                      <div className="file-upload" onClick={toggleModal}>
                        <button
                          className="inputfile"
                        />
                        <label htmlFor="file" >
                          <i className="bx bx-upload"></i> Upload Photo
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Andy Smith"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="hello@andysmith.com"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="+88 (123) 123456"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Wonder Street, USA, New York"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Website</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="EnvyTheme.com"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Bio</label>
                      <textarea
                        cols="30"
                        rows="6"
                        placeholder="Short description about you..."
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Facebook URL</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://www.facebook.com/"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Twitter URL</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://twitter.com/"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Linkedin URL</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://www.linkedin.com/"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Instagram URL</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://instagram.com/"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <button type="submit">Save Change</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="my-profile-box">
              <h3>Change Password</h3>

              <form>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Current Password</label>
                      <input
                        type="password"
                        className="form-control"
                        defaultValue="123456"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>New Password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Confirm New Password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <button type="submit">Change Password</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default ProfileComponent;
