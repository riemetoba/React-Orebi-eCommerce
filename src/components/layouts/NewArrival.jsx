import Container from "../Container";
import Product from "../Product";
import newArrivalOne from "/src/assets/newArrivalsOne.png";
import newArrivalTwo from "/src/assets/newArrivalsTwo.png";
import newArrivalThree from "/src/assets/newArrivalsThree.png";
import newArrivalFour from "/src/assets/newArrivalsFour.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import "swiper/css";
import "swiper/css/navigation";

const NewArrival = () => {
  return (
    <>
      <Container>
        <h2 className="text-[24px] font-DM font-bold pb-10 lg:pb-[55px] lg:text-[39px] pt-25 px-4 md:px-0">
          New Arrivals
        </h2>
        <div className="relative px-4 md:px-0 group">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1025: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Product
                productImg={newArrivalOne}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={newArrivalTwo}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={newArrivalThree}
                badgeText={"10%"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={newArrivalFour}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={newArrivalTwo}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
          </Swiper>

          <div className="swiper-button-prev-custom hidden md:block absolute left-0 top-[40%] -translate-y-1/2 z-10 cursor-pointer">
            <PrevArrow />
          </div>
          <div className="swiper-button-next-custom hidden md:block absolute right-0 top-[40%] -translate-y-1/2 z-10 cursor-pointer">
            <NextArrow />
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewArrival;