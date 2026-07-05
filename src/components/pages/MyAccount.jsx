import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Flex from "../Flex";

const MyAccount = () => {
  return (
    <div className="px-4 md:px-0">
      <Container>
        <h3 className="pt-24 md:pt-40 font-DM text-3xl md:text-5xl font-bold text-deepBlack">
          My Account
        </h3>
        <div className="flex items-center gap-x-2 pt-4 md:pt-8 text-[12px] font-DM text-[#767676] pb-12 md:pb-32">
          <div className="flex items-center gap-2">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div>My account</div>
        </div>

        <Flex className="flex-col md:flex-row gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-10 lg:gap-x-20 items-start pb-20 md:pb-36">
          <div className="w-full md:w-[25%] lg:w-[20%] flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible whitespace-nowrap md:whitespace-normal border-b md:border-b-0 border-[#F0F0F0] md:block gap-x-6 md:gap-x-0 scrollbar-none">
            <div className="font-DM text-base font-bold text-deepBlack py-3 md:py-5 border-b-2 md:border-b border-b-deepBlack md:border-b-[#F0F0F0] cursor-pointer shrink-0">
              Dashboard
            </div>
            <div className="font-DM text-base text-[#767676] py-3 md:py-5 border-b-2 md:border-b border-b-transparent md:border-b-[#F0F0F0] hover:text-deepBlack transition-all cursor-pointer shrink-0">
              Others
            </div>
            <div className="font-DM text-base text-[#767676] py-3 md:py-5 border-b-2 md:border-b border-b-transparent md:border-b-[#F0F0F0] hover:text-deepBlack transition-all cursor-pointer shrink-0">
              Downloads
            </div>
            <div className="font-DM text-base text-[#767676] py-3 md:py-5 border-b-2 md:border-b border-b-transparent md:border-b-[#F0F0F0] hover:text-deepBlack transition-all cursor-pointer shrink-0">
              Addresses
            </div>
            <div className="font-DM text-base text-[#767676] py-3 md:py-5 border-b-2 md:border-b border-b-transparent md:border-b-[#F0F0F0] hover:text-deepBlack transition-all cursor-pointer shrink-0">
              Account details
            </div>
            <div className="font-DM text-base text-[#767676] py-3 md:py-5 border-b-2 md:border-b border-b-transparent md:border-b-transparent hover:text-deepBlack transition-all cursor-pointer shrink-0">
              Logout
            </div>
          </div>

          <div className="w-full md:w-[75%] lg:w-[80%] font-DM text-sm md:text-base leading-6 md:leading-[30px] text-[#767676]">
            <p className="mb-6 md:mb-10 text-deepBlack">
              Hello <span className="text-deepBlack font-medium">admin</span>{" "}
              (not <span className="text-deepBlack font-medium">admin</span>?{" "}
              <span className="text-deepBlack font-bold cursor-pointer hover:underline">
                Log out
              </span>
              )
            </p>
            <p className="max-w-[850px]">
              From your account dashboard you can view your{" "}
              <span className="text-deepBlack font-medium cursor-pointer hover:underline">
                recent orders
              </span>
              , manage your{" "}
              <span className="text-deepBlack font-medium cursor-pointer hover:underline">
                shipping and billing addresses
              </span>
              , and{" "}
              <span className="text-deepBlack font-medium cursor-pointer hover:underline">
                edit your password and account details
              </span>
              .
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default MyAccount;
