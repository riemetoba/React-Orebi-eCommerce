import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../Button";

const Signup = () => {
  return (
    <div className="px-4 md:px-0">
      <Container>
        <h3 className="pt-24 md:pt-40 font-DM text-3xl md:text-5xl font-bold text-deepBlack">
          Sign up
        </h3>
        <div className="flex items-center gap-x-2 pt-4 md:pt-8 text-[12px] font-DM text-[#767676] pb-12 md:pb-32">
          <div className="flex items-center gap-2">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div>Sign up</div>
        </div>

        <div className="border-b border-b-[#F0F0F0] pb-14 md:pb-16 max-w-[640px]">
          <p className="font-DM text-sm md:text-base text-[#767676] leading-6 md:leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="pb-24 md:pb-36">
          <div className="pt-14 md:pt-16 border-b border-b-[#F0F0F0] pb-16">
            <h4 className="font-DM font-bold text-2xl md:text-[39px] text-deepBlack mb-10">
              Your Personal Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-10 max-w-[1020px]">
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="company@domain.com"
                  className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Telephone
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-14 md:pt-16 border-b border-b-[#F0F0F0] pb-16">
            <h4 className="font-DM font-bold text-2xl md:text-[39px] text-deepBlack mb-10">
              New Customer
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-10 max-w-[1020px]">
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Address 1
                </label>
                <input
                  type="text"
                  placeholder="4279 Daisy Dr Port Suite 433"
                  className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Address 2
                </label>
                <input
                  type="text"
                  placeholder="---"
                  className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Your City"
                  className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Post Code
                </label>
                <input
                  type="text"
                  placeholder="05228"
                  className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Country
                </label>
                <select className="w-full font-DM text-sm text-[#767676] pb-4 border-b border-b-[#E0E0E0] focus:outline-none bg-transparent appearance-none cursor-pointer">
                  <option value="">Please select</option>
                  <option value="BD">Bangladesh</option>
                  <option value="US">United States</option>
                </select>
              </div>
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Region/State
                </label>
                <select className="w-full font-DM text-sm text-[#767676] pb-4 border-b border-b-[#E0E0E0] focus:outline-none bg-transparent appearance-none cursor-pointer">
                  <option value="">Please select</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="NewYork">New York</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-14 md:pt-16 border-b border-b-[#F0F0F0] pb-16">
            <h4 className="font-DM font-bold text-2xl md:text-[39px] text-deepBlack mb-10">
              Your Password
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 gap-x-10 max-w-[1020px]">
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Repeat Password
                </label>
                <input
                  type="password"
                  placeholder="Repeat password"
                  className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-12 font-DM">
            <div className="flex items-center gap-x-3 mb-6">
              <input
                type="checkbox"
                id="privacy"
                className="w-3 h-3 accent-deepBlack cursor-pointer"
              />
              <label htmlFor="privacy" className="text-sm text-[#767676] cursor-pointer">
                I have read and agree to the Privacy Policy
              </label>
            </div>

            <div className="flex items-center gap-x-6 mb-8 text-sm">
              <span className="text-[#767676]">Subscribe Newsletter</span>
              <div className="flex items-center gap-x-2">
                <input
                  type="radio"
                  id="subYes"
                  name="subscribe"
                  className="w-3 h-3 accent-deepBlack cursor-pointer"
                />
                <label htmlFor="subYes" className="text-[#767676] cursor-pointer">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="radio"
                  id="subNo"
                  name="subscribe"
                  defaultChecked
                  className="w-3 h-3 accent-deepBlack cursor-pointer"
                />
                <label htmlFor="subNo" className="text-[#767676] cursor-pointer">
                  No
                </label>
              </div>
            </div>

            <Button btnText="Log in" className="w-[200px] py-4" />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;