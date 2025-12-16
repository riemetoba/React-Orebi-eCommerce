import Container from "../Container";
import Product from "../Product";
import newArrivalsOne from "/src/assets/newArrivalsOne.png";
import newArrivalsTwo from "/src/assets/newArrivalsTwo.png";
import newArrivalsThree from "/src/assets/newArrivalsThree.png";
import newArrivalsFour from "/src/assets/newArrivalsFour.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
//import "slick-carousel/slick/slick-theme.css";

const NewArrival = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Container>
        <h2 className="text-[39px] font-DM font-bold pb-[55px]">
          New Arrivals
        </h2>
       <div className="-mx-4">
         <Slider {...settings}>
          <div>
            <Product
              productImg={newArrivalsOne}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={newArrivalsTwo}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={newArrivalsThree}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={newArrivalsFour}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={newArrivalsOne}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={newArrivalsTwo}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
        </Slider>
       </div>
      </Container>
    </>
  );
};

export default NewArrival;
