import Link from "next/link";
import { useState, useContext } from "react";
import { IndiceContext } from "../../contexts";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const UsersNavbar = ({ value }) => {
  const { displaySideMenu, toggleSideMenu } = useContext(IndiceContext);
  const [display, setDisplay] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const listingToggle = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div
        onClick={() => setShowSidebar(true)}
        className="fixed top-5 right-5 z-50 lg:hidden"
      >
        <HiOutlineMenu className="w-8 h-8" />
      </div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`bg-black fixed top-0 h-full w-full opacity-60 z-[9999] transition-all ease-in-out duration-500 ${
          showSidebar ? "ml-0" : "-ml-[100%]"
        }`}
      ></div>
      <div
        className={
          displaySideMenu
            ? "sidemenu-area active-sidemenu-area"
            : "sidemenu-area"
        }
      >
        <div className="h-[70px] py-1 pl-5 bg-white">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center active">
              <img src="/images/logo.png" alt="image" className="w-16" />
            </a>
          </Link>
          {showSidebar && (
            <div onClick={() => setShowSidebar(false)} className="fixed top-5 left-[13rem]">
            <RxCross1 className="w-8 h-8" />
          </div>
          )}
        </div>

        <div
          className={`sidemenu-body ${
            showSidebar ? "mr-0" : "lg:mr-0 mr-[100%]"
          }`}
        >
          
          <ul
            className="sidemenu-nav metisMenu h-100"
            id="sidemenu-nav"
            data-simplebar
          >
            
            <li className="nav-item-title">Main</li>
            {[
              {
                iconClass: "bx  bx-copy",
                path: "bookings",
                title: "Bookings",
              },
            ].map(({ iconClass, path, title }) => (
              <li className="nav-item" key={path}>
                <Link href={`/users/${path}`}>
                  <a className={`${path === value ? "active" : ""}`}>
                    <span className="icon">
                      <i className={iconClass}></i>
                    </span>
                    <span className="menu-title">{title}</span>
                  </a>
                </Link>
              </li>
            ))}

            <li className="nav-item-title">Listings</li>
            {[
              {
                iconClass: "bx bx-plus-circle",
                path: "complains",
                title: "Complain",
              },
              {
                iconClass: "bx bx-plus-circle",
                path: "orderfooduser",
                title: "Order Food",
              },
            ].map(({ iconClass, path, title }) => (
              <li className="nav-item" key={path}>
                <Link href={`/users/${path}`}>
                  <a className={`${path === value ? "active" : ""}`}>
                    <span className="icon">
                      <i className={iconClass}></i>
                    </span>
                    <span className="menu-title">{title}</span>
                  </a>
                </Link>
              </li>
            ))}

            <li className="nav-item-title">Account</li>

            {[
              {
                iconClass: "bx bxs-user-circle",
                path: "profile",
                title: "Profile",
              },
            ].map(({ iconClass, path, title }) => (
              <li className="nav-item" key={path}>
                <Link href={`/users/${path}`}>
                  <a className={`${path === value ? "active" : ""}`}>
                    <span className="icon">
                      <i className={iconClass}></i>
                    </span>
                    <span className="menu-title">{title}</span>
                  </a>
                </Link>
              </li>
            ))}

            <li className="nav-item">
              <a>
                <span className="icon">
                  <i className="bx bx-log-out"></i>
                </span>
                <span className="menu-title">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UsersNavbar;
