import Container from "../Container";
import Product from "../Product";
import bestSellersOne from "/src/assets/bestSellersOne.png";
import bestSellersTwo from "/src/assets/bestSellersTwo.png";
import bestSellersThree from "/src/assets/bestSellersThree.png";
import bestSellersFour from "/src/assets/bestSellersFour.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import "swiper/css";
import "swiper/css/navigation";

const Bestsellers = () => {
  return (
    <>
      <Container>
        <h2 className="text-[24px] font-DM font-bold pb-10 lg:pb-[55px] lg:text-[39px] pt-15 md:pt-25 px-4 md:px-0">
          Our Bestsellers
        </h2>
        <div className="relative px-4 md:px-0 group">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-bestsellers",
              prevEl: ".swiper-button-prev-bestsellers",
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
                productImg={bestSellersOne}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={bestSellersTwo}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={bestSellersThree}
                badgeText={"70%"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={bestSellersFour}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={bestSellersTwo}
                badgeText={"20%"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Product
                productImg={bestSellersThree}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </SwiperSlide>
          </Swiper>

          <div className="swiper-button-prev-bestsellers hidden md:block absolute left-0 top-[40%] -translate-y-1/2 z-10 cursor-pointer">
            <PrevArrow />
          </div>
          <div className="swiper-button-next-bestsellers hidden md:block absolute right-0 top-[40%] -translate-y-1/2 z-10 cursor-pointer">
            <NextArrow />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Bestsellers;