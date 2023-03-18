//home 3
import Navbar from "../components/_App/Navbar";

import DesignTab1 from "../components/Home/DesignTab1";
import DesignTab2 from "../components/Home/DesignTab2";
import DesignTab3 from "../components/Home/DesignTab3";
import Banner from "../components/Home/Banner";
import HowItWorks from "../components/Common/HowItWorks";
import ListingArea from "../components/Home/ListingArea";
import Feedback from "../components/Home/Feedback";
import MostVisitedListing from "../components/Home/MostVisitedListing";

// import BusinessArea from '../components/Home/BusinessArea';
// import Blog from '../components/Home/Blog';
// import ManageBusiness from '../components/Home/ManageBusiness';
// import Subscribe from '../components/Common/Subscribe';

import Category from "../components/Common/Category";
import PlacesArea from "../components/Common/PlacesArea";
import Footer from "../components/_App/Footer";

const Index = () => {
  return (
    <>
      <Banner />
    
      <DesignTab1 />

      <DesignTab2 />
      <Category />

      {/* <DesignTab2 /> */}

      <DesignTab3 />

      <HowItWorks bgColor="bg-f9f9f9O" />

      <Feedback />

      <MostVisitedListing />

      {/* <BusinessArea /> */}
      {/* <Blog /> */}
      {/* <ManageBusiness /> */}
      {/* <Subscribe /> */}

      <Footer />
    </>
  );
};

export default Index;
