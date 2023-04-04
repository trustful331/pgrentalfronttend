import Link from "next/link";
import useUsers from "../../utils/Hooks/useUsers";
import Loading from "../Shared/Loading";

const UserList = () => {
  const { users, isLoading } = useUsers();
  return (
    <>
      <div className="main-content d-flex flex-column">
        {!isLoading ?? <Loading />}
        <div className="breadcrumb-area">
          <h1>All Users</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/admin">
                <a>Home</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/admin">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className="item">All User</li>
          </ol>
        </div>

        <div className="add-listings-btn">
          <button type="submit"> Add Users </button>
        </div>

        <section className="listing-area">
          <div className="tab-content" id="myTabContent">
            <div className="" id="active-listing">
              <div className="row">
                {users.map(({ id, name, phoneNo, role }) => (
                  <div key={id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card mb-3">
                      <div className="card-img-top">
                        <img src="/images/listings/listings3.jpg" alt="image" />
                      </div>

                      <div className="card-body">
                        <h4 className="card-title">
                          {name} <p> {role}</p>
                        </h4>
                        <div className="card-text">
                          <p>Phone No:{phoneNo}</p>
                        </div>
                        <div className="list ings-footer">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserList;
