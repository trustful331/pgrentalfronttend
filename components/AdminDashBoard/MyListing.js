import Link from "next/link";
import useListingForAdmin from "../../utils/Hooks/useAllListingForAdmin";
import DashboardListingArea from "../Dashboard/DashboardListingArea";
import Loading from "../Shared/Loading";

const MyListing = () => {
  const { listing, isLoading } = useListingForAdmin();

  return (
    <>
      <div className="main-content d-flex flex-column">
        <div className="breadcrumb-area">
          <h1>My Listing</h1>
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
            <li className="item">
              <Link href="/admin/my-listing">
                <a>My Listing</a>
              </Link>
            </li>
          </ol>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <DashboardListingArea listing={listing} isLoading={isLoading} />
        )}
      </div>
    </>
  );
};

export default MyListing;
