//home 3
//import Navbar from "../components/_App/Navbar";

import DesignTab1 from "../components/Home/DesignTab1";
import DesignTab2 from "../components/Home/DesignTab2";
import DesignTab3 from "../components/Home/DesignTab3";
import Banner from "../components/Home/Banner";
import HowItWorks from "../components/Common/HowItWorks";
import Feedback from "../components/Home/Feedback";
import Footer from "../components/_App/Footer";
import DesignTabHeading from "../components/Home/DesignTabHeading";

import AppDownload from '../components/Common/AppDownload';

const Index = () => {
  return (
    <>
      <Banner />

      {/* <DesignTabHeading 
        title={'Create Memories with'}
        span={"Zestos"}

        subtitle="Memories are encoded through repetition, emotion, and association, shaping our past and influencing our future."
        />

      <DesignTab1 /> */}

      {/* <DesignTab3 /> */}

      <AppDownload />
      <HowItWorks bgColor="bg-f9f9f9O" />
    
      <DesignTab2 />

      <Feedback />

      <Footer />
    </>
  );
};

export default Index;
