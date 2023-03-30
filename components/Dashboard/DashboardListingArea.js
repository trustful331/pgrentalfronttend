import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useListing from "../../utils/Hooks/useListing";

const DashboardListingArea = () => {
  const { listing } = useListing();
  // console.log(listing);
  return (
    <>
      <section className="listing-area">
        <div className="tab-content" id="myTabContent">
          <div className="" id="active-listing">
            <div className="row">
              {listing.map(({ id, commonAreaPhotos, name }) => (
                <div key={id} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="single-listings-box">
                    <div className="listings-image">
                      <img
                        src={`${
                          commonAreaPhotos.length === 0
                            ? "/images/listings/listings1.jpg"
                            : commonAreaPhotos[0].path
                        }`}
                        alt="image"
                      />
                      <Link href="/single-listings">
                        <a className="link-btn"></a>
                      </Link>
                    </div>

                    <div className="listings-content">
                      <ul className="listings-meta">
                        <li>
                          <a href="#">
                            <i className="flaticon-furniture-and-household"></i>{" "}
                            Restaurant
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-pin"></i> New York, USA
                          </a>
                        </li>
                      </ul>
                      <h3>
                        <Link href="/single-listings">
                          <a>{name}</a>
                        </Link>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <span className="count">(45)</span>
                        </div>
                      </div>
                    </div>

                    <div className="listings-footer">
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="#" className="default-btn">
                          Edit
                        </a>
                        <a href="#" className="default-btn">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-listings-box">
                  <div className="listings-image">
                    <img src="/images/listings/listings3.jpg" alt="image" />
                    <Link href="/single-listings">
                      <a className="link-btn"></a>
                    </Link>
                  </div>

                  <div className="listings-content">
                    <ul className="listings-meta">
                      <li>
                        <a href="#">
                          <i className="flaticon-shopping-bags"></i> Shopping
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="flaticon-pin"></i> Bangkok, Thailand
                        </a>
                      </li>
                    </ul>
                    <h3>
                      <Link href="/single-listings">
                        <a>Central Shopping Center</a>
                      </Link>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rating">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star-half"></i>
                        <span className="count">(35)</span>
                      </div>
                    </div>
                  </div>

                  <div className="listings-footer">
                    <div className="d-flex justify-content-between align-items-center">
                      <a href="#" className="default-btn">
                        Edit
                      </a>
                      <a href="#" className="default-btn">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardListingArea;
