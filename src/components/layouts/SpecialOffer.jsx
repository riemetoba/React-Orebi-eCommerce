import Container from "../Container";
import Product from "../Product";
import specialOne from "/src/assets/specialOne.png";
import specialTwo from "/src/assets/specialTwo.png";
import specialThree from "/src/assets/specialThree.png";
import specialFour from "/src/assets/specialFour.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import "swiper/css";
import "swiper/css/navigation";

const SpecialOffer = () => {
  return (
    <>
      <Container>
        <h2 className="text-[24px] font-DM font-bold pb-10 lg:pb-[55px] lg:text-[39px] px-4 md:px-0">
          Special Offers
        </h2>
        <div className="relative px-4 md:px-0 group">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-special",
              prevEl: ".swiper-button-prev-special",
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
                productImg={specialOne}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={specialTwo}
                badgeText={"40%"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={specialThree}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={specialFour}
                badgeText={"10%"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={specialOne}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={specialThree}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
          </Swiper>

          <div className="swiper-button-prev-special hidden md:block absolute left-0 top-[50%] -translate-y-1/2 z-10 cursor-pointer">
            <PrevArrow />
          </div>
          <div className="swiper-button-next-special hidden md:block absolute right-0 top-[50%] -translate-y-1/2 z-10 cursor-pointer">
            <NextArrow />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SpecialOffer;