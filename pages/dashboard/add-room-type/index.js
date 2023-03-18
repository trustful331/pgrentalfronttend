//add category

import Link from "next/link";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";

import React, { useEffect, useState } from "react";
import Navbar from "../../../components/_App/Navbar";

//modal
import RoomtypeModal from "../../../components/Modal/RoomTypeModal";

const AddRoomType = () => {
  const roomType = [
    {
      _id: "6410abad994949ce2b1d2f24",
      typeOfRoom: "independent room",
      slug: "independent_room",
      __v: 0,
    },
  ];

  var [displayCTM, toggleCTM] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <div className="breadcrumb-area">
          <h1>Add Room type</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/dashboard">
                <a>Home</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className="item">Add Room Type</li>
          </ol>
        </div>

        <div className="add-listings-btn">
          <button
            type="submit"
            onClick={() => {
              toggleCTM(!displayCTM);
            }}
          >
            Add Room Type
          </button>
        </div>

        <ul className="list-group cityList">
          {roomType.map((room, index) => {
            return (
              <li className="list-group-item d-flex" key={room.id}>
                <p className="p-0 m-0 flex-grow-1">{room.typeOfRoom}</p>

                <div className="add-listings-btn">
                  <button type="submit" className="btn-success">
                    Edit
                  </button>
                </div>

                <div className="add-listings-btn">
                  <button type="submit" className="btn-success">
                    DELETE
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex-grow-1"></div>

        <div className="copyrights-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <p>
                <i className="bx bx-copyright"></i> Indice All rights reserved
              </p>
            </div>

            <div className="col-lg-6 col-sm-6 col-md-6 text-right">
              <p>
                Designed by ❤️{" "}
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*..........................CITY MODAL................................................. */}
      <RoomtypeModal displayCTM={displayCTM} toggleCTM={toggleCTM} />
    </>
  );
};

export default AddRoomType;
