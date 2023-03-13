
//add category

import Link from "next/link";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";

import React, { useEffect, useState } from "react";
import Navbar from "../../../components/_App/Navbar";

//modal
import CategoryModal from "../../../components/Modal/CategoryModal";



const AddCategory = () => {

var [displayCTM,toggleCTM] = useState(false)

useEffect(()=>{},[])

  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <Navbar/>

        <div className="breadcrumb-area">
          <h1>Add Category</h1>
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
            <li className="item">Add category</li>
          </ol>
        </div>
        
        <div className="add-listings-btn">
          <button type="submit" onClick={()=>{toggleCTM(!displayCTM)}}>Add Category</button>
        </div>

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
        <CategoryModal displayCTM={displayCTM} toggleCTM={toggleCTM}/>
    </>
  );
};

export default AddCategory;
