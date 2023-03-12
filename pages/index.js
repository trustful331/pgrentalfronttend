
//home 3
import Navbar from '../components/_App/Navbar';
import Banner from '../components/Home/Banner';
import ListingArea from '../components/Home/ListingArea';
import Feedback from '../components/Home/Feedback';
import MostVisitedListing from '../components/Home/MostVisitedListing';
import BusinessArea from '../components/Home/BusinessArea';
import Blog from '../components/Home/Blog';
import ManageBusiness from '../components/Home/ManageBusiness';

import Category from '../components/Common/Category';
import PlacesArea from '../components/Common/PlacesArea';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';

const Index3 = () => {
  return (
    <>
      <Navbar/>

      <Banner />

      <Category />

      <ListingArea />

      <PlacesArea />

      <Feedback />

      <MostVisitedListing />

      <BusinessArea />

      <Blog />

      <ManageBusiness />

      <Subscribe />
      
      <Footer />
    </>
  );
};

export default Index3;
