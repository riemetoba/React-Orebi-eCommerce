

import Ads from "../layouts/Ads";
import AdsTwo from "../layouts/AdsTwo";
import Banner from "../layouts/Banner";
import Bestsellers from "../layouts/Bestsellers";
import Information from "../layouts/Information";
import NewArrival from "../layouts/NewArrival";
import SpecialOffer from "../layouts/SpecialOffer";


const Home = () => {
  return (
    <>
    <Banner/>
    <Information/>
    <Ads/>
    <NewArrival/>
    <Bestsellers/>
    <AdsTwo/>
    <SpecialOffer/>
    </>
  );
};

export default Home;
