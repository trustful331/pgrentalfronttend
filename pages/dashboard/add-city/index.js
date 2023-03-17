
//add city

import Link from "next/link";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";

import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Navbar from "../../../components/_App/Navbar";

//modal
import CityModal from "../../../components/Modal/CityModal";


const AddCities = () => {

const cities = [
{
  _id: "6410abbd994949ce2b1d2f27",
  name: "Hydrabad",
  slug: "hydrabad",
  __v: 0,
},
{
  _id: "6410abbd994949ce2b1d2f27",
  name: "Bangalore",
  slug: "Bangalore",
  __v: 0,
},
{
  _id: "6410abbd994949ce2b1d2f27",
  name: "kolkata",
  slug: "kolkata",
  __v: 0,
},
];

var [displayCM,toggleCM] = useState(false)
useEffect(()=>{},[])

  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <Navbar/>

        <div className="breadcrumb-area">
          <h1>Add Cities</h1>
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
            <li className="item">Add city</li>
          </ol>
        </div>
        

        <div className="add-listings-btn">
          <button type="submit" onClick={()=>{toggleCM(!displayCM)}}>Add Cities</button>
        </div>

        
{/*.................................... city List .........................................................*/}
        <ul className="list-group cityList"> 

            {
              cities.map((city,index)=>{
                return(
                  <li className="list-group-item d-flex" key={city.id}>

                    <p className="p-0 m-0 flex-grow-1">{city.name}</p>

                    <div className="add-listings-btn">
                      <button type="submit" className="btn-success" >Edit</button>
                    </div>

                    <div className="add-listings-btn">
                      <button type="submit" className="btn-success" >DELETE</button>
                    </div>
                    
                  </li>
                )
              })
            }

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
        <CityModal displayCM={displayCM} toggleCM={toggleCM}/>
    </>
  );
};

export default AddCities;
