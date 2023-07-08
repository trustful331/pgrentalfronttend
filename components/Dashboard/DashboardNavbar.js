import { useState, useContext } from "react";
import Link from "../../utils/ActiveLink";
import { IndiceContext } from "../../contexts";

const DashboardNavbar = () => {
  const { displaySideMenu, toggleSideMenu } = useContext(IndiceContext);
  const [display, setDisplay] = useState(false);

  const listingToggle = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div
        className={
          displaySideMenu
            ? "sidemenu-area active-sidemenu-area"
            : "sidemenu-area"
        }>
        <div className="sidemenu-header">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center active h-10">
              <img src="/images/logo.png" alt="image" />
            </a>
          </Link>
        </div>

        <div className="sidemenu-body">
          <ul
            className="sidemenu-nav metisMenu h-100"
            id="sidemenu-nav"
            data-simplebar>
            <li className="nav-item-title">Main</li>

            <li className="nav-item">
              <Link href="/dashboard" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-home-circle"></i>
                  </span>
                  <span className="menu-title">Dashboard</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/dashboard/messages" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-envelope-open"></i>
                  </span>
                  <span className="menu-title">Messages</span>
                  <span className="badge">3</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/dashboard/bookings" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-copy"></i>
                  </span>
                  <span className="menu-title">Bookings</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/dashboard/wallet" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-wallet"></i>
                  </span>
                  <span className="menu-title">Wallet</span>
                </a>
              </Link>
            </li>

            <li className="nav-item-title">Listings</li>

            <li className="nav-item">
              <a
                href="#"
                className="collapsed-nav-link nav-link"
                onClick={listingToggle}>
                <span className="icon">
                  <i className="bx bx-layer"></i>
                </span>
                <span className="menu-title">My Listings</span>
              </a>

              <ul
                className={
                  display
                    ? "sidemenu-nav-second-level show"
                    : "sidemenu-nav-second-level sidemenu-nav-display"
                }>
                <li className="nav-item active-section">
                  <Link
                    href="/admin/my-listing/active"
                    activeClassName="active">
                    <a>
                      <span className="menu-title">Active</span>
                      <span className="badge">5</span>
                    </a>
                  </Link>
                </li>

                <li className="nav-item active-section">
                  <Link
                    href="/admin/my-listing/pending"
                    activeClassName="active">
                    <a>
                      <span className="menu-title">Pending</span>
                      <span className="badge yellow">1</span>
                    </a>
                  </Link>
                </li>

                <li className="nav-item active-section">
                  <Link
                    href="/admin/my-listing/expired"
                    activeClassName="active">
                    <a>
                      <span className="menu-title">Expired</span>
                      <span className="badge red">2</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/admin/reviews" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-star"></i>
                  </span>
                  <span className="menu-title">Reviews</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/admin/bookmarks" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-heart"></i>
                  </span>
                  <span className="menu-title">Bookmarks</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/admin/add-listing" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-plus-circle"></i>
                  </span>
                  <span className="menu-title">Add Listings</span>
                </a>
              </Link>
            </li>

            {/* ..........................................................add 2 morer pages......................................................................... */}

            <li className="nav-item">
              <Link href="/admin/add-city" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-plus-circle"></i>
                  </span>
                  <span className="menu-title">Add City</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/admin/add-room-type" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-plus-circle"></i>
                  </span>
                  <span className="menu-title">Add Room type</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/admin/add-aminities" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-plus-circle"></i>
                  </span>
                  <span className="menu-title">Add Aminities</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/admin/users" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-plus-circle"></i>
                  </span>
                  <span className="menu-title">Add Users</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/admin/addMeals" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-plus-circle"></i>
                  </span>
                  <span className="menu-title">Add Meals</span>
                </a>
              </Link>
            </li>

            {/* ............................................................................................................................................ */}

            <li className="nav-item">
              <Link href="/admin/invoice" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bx-certification"></i>
                  </span>
                  <span className="menu-title">Invoice</span>
                </a>
              </Link>
            </li>

            <li className="nav-item-title">Account</li>

            <li className="nav-item">
              <Link href="/admin/profile" activeClassName="active">
                <a>
                  <span className="icon">
                    <i className="bx bxs-user-circle"></i>
                  </span>
                  <span className="menu-title">Profile</span>
                </a>
              </Link>
            </li>

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

export default DashboardNavbar;
