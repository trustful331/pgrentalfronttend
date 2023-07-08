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
          <h1>Upload Photo</h1>

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
              <li className="item">Upload Photo</li>
            </ol>
          ) : (
            <div></div>
          )}
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="my-profile-box">
              <h3>Upload Photo</h3>

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

                  

                  

                  

                  
                </div>
              </form>
            </div>
          </div>

          {/* <div className="col-lg-6 col-md-12">
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
          </div> */}
        </div>


      </div>
    </>
  );
}

export default ProfileComponent;
