

import Ads from "../layouts/Ads";
import Banner from "../layouts/Banner";
import Bestsellers from "../layouts/Bestsellers";
import Information from "../layouts/Information";
import NewArrival from "../layouts/NewArrival";
import Product from "../Product";

const Home = () => {
  return (
    <>
    <Banner/>
    <Information/>
    <Ads/>
    <NewArrival/>
    <Bestsellers/>
    </>
  );
};

export default Home;
