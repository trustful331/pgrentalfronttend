import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import useAllRentPayment from "../../utils/Hooks/useAllRentPayment";
import Loading from "../../components/Shared/Loading";
import rentPaymentApi from "../../utils/Api/rentPayment.api";
import toast from "react-hot-toast";
import { useAuthToken } from "../../contexts/authContext";
import { useQueryClient } from "react-query";
import config from "../../utils/config";
import { useAuthContext } from "../../contexts/authContext";
import CircleLoading from "../../components/Shared/CircleLoading";

const UserBookings = () => {
  const { allRentPayment } = useAllRentPayment();
  const [isLoading, setIsLoading] = useState(true);
  const queryClient = useQueryClient();

  const token = useAuthToken();

  const handleSubmitHandler = async ({ subscription_id, id }) => {
    try {
      const options = {
        key: config.razorpayKey,
        subscription_id: subscription_id,
        description: "Monthly Test Plan",
        name: "Aritra Ghorai",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        handler: async (res) => {
          try {
            await rentPaymentApi.updateRentPayment(res, id, token);
            toast.success("You have successfully activate the subcription");
            queryClient.invalidateQueries["rentPayments"];
          } catch (error) {
            toast.error(
              error?.response?.data?.message ||
                "Something Went Wrong Try to  Payment Again"
            );
          }
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something Went Wrong Try to  Payment Again"
      );
    }
  };

  const context = useAuthContext();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // if (isLoading) {
  //   <Loading />;
  // }

  return (
    <div className="main-content d-flex flex-column">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="breadcrumb-area">
        <h1>Bookings</h1>
      </div>

      <div className="bookings-listings-box">
        <h3>Booking Bookings</h3>

        <div className="table-responsive">
          <table className="table relative">
            <thead>
              <tr>
                <th>Customer Details</th>
                <th>Subscribtion Status</th>
                <th>Subscribtion Amount</th>
              </tr>
            </thead>

            <tbody>

              {allRentPayment.map(
                ({ uid, user, availability, status, subcriptionId }) => (
                  <tr key={uid}>
                    <td className="name">
                      {/* <img src="/images/user1.jpg" alt="image" /> */}

                      <img
                        src={
                          context?.user?.profile_pic?.path ??
                          "/images/user1.jpg"
                        }
                        alt="image"
                      />
                      <div className="info">
                        <span>{user.name}</span>
                        <ul>
                          <li>
                            <a href={`tel:${user.phoneNo}`}>{user.phoneNo}</a>
                          </li>
                        </ul>
                      </div>
                    </td>

                    <td className="details">
                      <h4>
                        <span
                          className={`bookings-status ${
                            status === "CANCELED" ? "canceled" : "pending"
                          }`}
                        >
                          {status}{" "}
                        </span>
                      </h4>
                    </td>

                    <td className="action">
                      {status === "CREATED" ? (
                        <button
                          className="default-btn"
                          onClick={() => {
                            handleSubmitHandler({
                              subscription_id: subcriptionId,
                              id: uid,
                            });
                          }}
                        >
                          <i className="bx bx-check-circle"></i> Pay
                        </button>
                      ) : (
                        <div className="default-btn">
                          <ul>
                            <li>
                              <i className="bx bx-purchase-tag"></i>
                              <span>Price:</span>
                              Rs. {availability.price}
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          {isLoading && (
            <div className="flex justify-center w-full absolute top-2/5 right-0 py-20 bg-white">
              <CircleLoading />
            </div>
          )}
        </div>
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
              <a href="https://envytheme.com/" target="_blank" rel="noreferrer">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookings;
