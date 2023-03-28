import { useState } from "react";
import { useQuery } from "react-query";
import listingAPi from "../Api/listing.api";

const useListing = () => {
  const [listing, setListings] = useState([]);
  const { refetch } = useQuery({
    queryFn: listingAPi.getAllListing,
    queryKey: "getAllLising",
    onSuccess: (data) => {
      setListings(data.data);
    },
  });
  return { listing, refetch };
};
export default useListing;
