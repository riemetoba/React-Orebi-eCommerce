import Container from "../Container";
import Button from "../Button";
import { FiSearch } from "react-icons/fi";

const Error = () => {
  return (
    <div className="px-4 md:px-0">
      <Container>
        <div className="pt-20 md:pt-32 pb-24 md:pb-36 max-w-[640px]">
          <h1 className="font-DM font-bold text-7xl md:text-[200px] text-deepBlack leading-none mb-6 md:mb-12">
            404
          </h1>

          <p className="font-DM text-sm md:text-base text-[#767676] leading-6 md:leading-[30px] mb-8 md:mb-14">
            The page you were looking for couldn't be found. The page could be
            removed or you misspelled the word while searching for it. Maybe try
            a search?
          </p>

          <div className="relative w-full md:w-[640px] h-[50px] md:h-[71px] mb-8 md:mb-14">
            <input
              type="text"
              placeholder="Type to search"
              className="w-full h-full border border-[#F0F0F0] pl-5 pr-12 md:pl-7 md:pr-16 font-DM text-sm md:text-base text-deepBlack placeholder-[#B6B6B6] focus:outline-none"
            />
            <FiSearch className="absolute right-5 md:right-7 top-1/2 -translate-y-1/2 text-lg md:text-xl text-deepBlack cursor-pointer" />
          </div>

          <Button btnText="Back to Home" className="w-[200px] py-4" />
        </div>
      </Container>
    </div>
  );
};

export default Error;
