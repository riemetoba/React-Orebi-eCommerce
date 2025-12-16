import Container from '../Container'
import Product from '../Product'
import specialOne from "/src/assets/specialOne.png"
import specialTwo from "/src/assets/specialTwo.png"
import specialThree from "/src/assets/specialThree.png"
import specialFour from "/src/assets/specialFour.png"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const SpecialOffer = () => {
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
        <h2 className='text-[39px] font-DM font-bold pb-[55px]'>Special Offers</h2>
       <Slider {...settings}>
          <div>
            <Product
              productImg={specialOne}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={specialTwo}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={specialThree}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={specialFour}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={specialOne}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={specialThree}
              badgeText={"New"}
              productTitle={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
        </Slider>
    </Container>
    </>
  )
}

export default SpecialOffer