import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <>
      {/* // Logo and Navigation part start */}
      <div className="py-8">
        <Container>
          <Flex>
            <div className="w-[40%]">
              <Link to={"/"}>
                <Image src={logo} />
              </Link>
            </div>
            <div className="w-[60%]">
              <ul className="flex gap-x-9">
                <li className="font-DM text-[#767676] text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="font-DM text-[#767676] text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li className="font-DM text-[#767676] text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="font-DM text-[#767676] text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/contact"}>Contacts</Link>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      {/* // Logo and Navigation part End */}
      {/* // Search and Cart Part Start */}
      <div className="py-6 bg-[#F5F5F3]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex">
              <HiBars2 className="font-extrabold text-[24px] mr-2.5" />
              Shop by Category
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Product"
                className="bg-white w-[500px] h-[45px] pl-5 outline-1 outline-halkagray"
              />
              <div className="absolute top-1/3 right-4">
                <IoMdSearch />
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <IoPersonSharp />
              </div>
              <div className="text-[10px] ml-1.5">
                <BiSolidDownArrow />
              </div>
              <div className="ml-6">
                <FaShoppingCart />
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* // Search and Cart Part End */}
      {/* Banner part strat */}

      {/* Banner part End */}
    </>
  );
};

export default Header;
