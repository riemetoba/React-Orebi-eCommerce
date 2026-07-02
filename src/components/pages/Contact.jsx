import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import Button from "../Button";
import mapImg from "/src/assets/map.jpg"; 

const Contact = () => {
  return (
    <div className="px-4 md:px-0">
      <Container>
        <h3 className="pt-24 md:pt-40 font-DM text-3xl md:text-5xl font-bold text-deepBlack">
          Contacts
        </h3>
        <div className="flex items-center gap-x-2 pt-4 md:pt-8 text-[12px] font-DM text-[#767676]">
          <div className="flex items-center gap-2">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div>Contacts</div>
        </div>

        <div className="w-full lg:w-[50%] mt-16 md:mt-32">
          <h4 className="font-DM font-bold text-2xl md:text-[39px] text-deepBlack mb-10">
            Fill up a Form
          </h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-6">
              <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name here"
                className="w-full font-DM text-sm text-[#767676] placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email here"
                className="w-full font-DM text-sm text-[#767676] placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
              />
            </div>
            <div className="mb-[30px]">
              <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Your message here"
                className="w-full font-DM text-sm text-[#767676] placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none resize-none"
              ></textarea>
            </div>
            <Button btnText="Post" className="w-[200px] py-4" />
          </form>
        </div>

        <div className="relative mt-20 md:mt-32 mb-16 md:mb-36 w-full h-[400px] md:h-[572px]">
          <img
            src={mapImg}
            alt="Map Location"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-5 left-5 md:top-20 md:left-20 bg-white w-[280px] md:w-[451px] p-5 md:p-7 shadow-lg">
            <div className="flex items-center justify-between border-b border-b-[#F0F0F0] pb-4 cursor-pointer">
              <h5 className="font-DM font-bold text-sm md:text-base text-deepBlack">
                Germany Office
              </h5>
              <FiPlus className="text-[#767676]" />
            </div>
            <div className="flex items-center justify-between border-b border-b-[#F0F0F0] py-4 cursor-pointer">
              <h5 className="font-DM font-bold text-sm md:text-base text-deepBlack">
                Slovakia Office
              </h5>
              <FiPlus className="text-[#767676]" />
            </div>
            <div className="pt-5">
              <h5 className="font-DM font-bold text-sm md:text-base text-deepBlack mb-4">
                Lithuania Office
              </h5>
              <p className="font-DM text-xs md:text-sm text-[#767676] leading-6 mb-2">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
              <p className="font-DM text-xs md:text-sm text-deepBlack font-bold mb-2">
                +432 533 12 523
              </p>
              <p className="font-DM text-xs md:text-sm text-[#767676] mb-2">
                info@domain.com
              </p>
              <p className="font-DM text-xs md:text-sm text-[#767676]">
                Mon - Fri: 9am - 6pm
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;