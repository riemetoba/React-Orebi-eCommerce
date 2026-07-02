import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import aboutGhori from "/src/assets/aboutGhori.png";
import aboutJhuri from "/src/assets/aboutJhuri.png";
import Flex from "../Flex";
import Image from "../Image";
import Button from "../Button";

const About = () => {
  return (
    <div className="px-4 md:px-0">
      <Container>
        <h3 className="pt-24 md:pt-40 font-DM text-3xl md:text-5xl font-bold text-deepBlack">
          About
        </h3>
        <div className="flex items-center gap-x-2 pt-4 md:pt-8 text-[12px] font-DM text-[#767676]">
          <div className="flex items-center gap-2">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div>About</div>
        </div>
        <Flex className="mt-10 md:mt-20 flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6 justify-between">
          <div className="relative w-full md:w-[49%]">
            <Image src={aboutGhori} className="w-full h-auto object-cover" />
            <Button className="absolute bottom-6 md:bottom-18 left-[50%] -translate-x-[50%] whitespace-nowrap text-xs md:text-base" btnText={"Our Brands"} />
          </div>
          <div className="relative w-full md:w-[49%]">
            <Image src={aboutJhuri} className="w-full h-auto object-cover" />
            <Button className="absolute bottom-6 md:bottom-18 left-[50%] -translate-x-[50%] whitespace-nowrap text-xs md:text-base" btnText={"Our Stores"} />
          </div>
        </Flex>
        <h4 className="text-xl md:text-[34px] leading-8 md:leading-[52px] font-DM py-12 md:py-[100px] text-deepBlack">
          Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
        </h4>
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 md:mt-20 gap-y-10 md:gap-y-0 md:gap-x-6">
          <div className="w-full md:w-[31%]">
            <h6 className="text-2xl md:text-[34px] font-DM font-bold text-deepBlack">Our Vision</h6>
            <p className="text-sm md:text-base font-DM w-full text-[#767676] leading-6 md:leading-[29px] pt-3 md:py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-full md:w-[31%]">
            <h6 className="text-2xl md:text-[34px] font-DM font-bold text-deepBlack">Our Story</h6>
            <p className="text-sm md:text-base font-DM w-full text-[#767676] leading-6 md:leading-[29px] pt-3 md:py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
            </p>
          </div>
          <div className="w-full md:w-[31%]">
            <h6 className="text-2xl md:text-[34px] font-DM font-bold text-deepBlack">Our Brands</h6>
            <p className="text-sm md:text-base font-DM w-full text-[#767676] leading-6 md:leading-[29px] pt-3 md:py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;