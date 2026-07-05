import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../Button";

const Login = () => {
  return (
    <div className="px-4 md:px-0">
      <Container>
        <h3 className="pt-24 md:pt-40 font-DM text-3xl md:text-5xl font-bold text-deepBlack">
          Login
        </h3>
        <div className="flex items-center gap-x-2 pt-4 md:pt-8 text-[12px] font-DM text-[#767676] pb-12 md:pb-32">
          <div className="flex items-center gap-2">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div>Login</div>
        </div>

        <div className="border-b border-b-[#F0F0F0] pb-14 md:pb-16 max-w-[640px]">
          <p className="font-DM text-sm md:text-base text-[#767676] leading-6 md:leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className="pt-14 md:pt-16 border-b border-b-[#F0F0F0] pb-16 md:pb-18">
          <h4 className="font-DM font-bold text-2xl md:text-[39px] text-deepBlack mb-10">
            Returning Customer
          </h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 gap-x-10 max-w-[1020px] mb-8 md:mb-12">
              <div className="w-full md:w-1/2">
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="company@domain.com"
                  className="w-full font-DM text-sm text-[#767676] placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full font-DM text-sm text-[#767676] placeholder-[#B6B6B6] pb-4 border-b border-b-[#E0E0E0] focus:outline-none"
                />
              </div>
            </div>
            <button className="w-[200px] py-4 border border-deepBlack font-DM font-bold text-sm text-deepBlack hover:bg-deepBlack hover:text-white transition-all duration-300">
              Log in
            </button>
          </form>
        </div>

        <div className="pt-14 md:pt-16 mb-20 md:mb-36">
          <h4 className="font-DM font-bold text-2xl md:text-[39px] text-deepBlack mb-6">
            New Customer
          </h4>
          <p className="font-DM text-sm md:text-base text-[#767676] leading-6 md:leading-[30px] max-w-[640px] mb-8 md:mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <Button btnText="Continue" className="w-[200px] py-4" />
        </div>
      </Container>
    </div>
  );
};

export default Login;
