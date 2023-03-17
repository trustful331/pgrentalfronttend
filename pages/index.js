
//home 3
import Navbar from '../components/_App/Navbar';

//default
import DesignTab1 from '../components/Home/DesignTab1';
import DesignTab2 from '../components/Home/DesignTab2';
import DesignTab3 from '../components/Home/DesignTab3';
import Banner from '../components/Home/Banner';
import HowItWorks from '../components/Common/HowItWorks';
import Footer from '../components/_App/Footer';

const Index = () => {
  return (
    <>
      <Navbar/>

      <Banner/>

      <DesignTab1/>

      <DesignTab2/>

      <DesignTab3/>

      <HowItWorks bgColor="bg-f9f9f9" />

      <Footer />
    </>
  );
};

export default Index;
