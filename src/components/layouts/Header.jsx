import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";import { FaArrowRotateLeft } from "react-icons/fa6";

import Button from "../Button";
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
            <div>
              <input
                type="text"
                placeholder="Search Product"
                className="bg-white w-[500px] h-[45px] pl-5 outline-1"
              />
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
      <div className="bg-[url('/src/assets/bannerBg.jpg')] py-[200px] bg-no-repeat bg-cover bg-center">
        <Container>
          <div className="ml-[90px]">
            <h1 className="text-[49px] font-DM font-bold text-deepBlack">
              Final Offer
            </h1>
            <h5 className="text-halkaGray font-DM text-base my-[60px]">
              Up to <span className="text-[40px] font-bold text-deepBlack">50% </span>sale
              for all furniture items!
            </h5>
            <Button className={"inline-block"} btnText={"Shop Now"} />
          </div>
        </Container>
      </div>
      <div className="py-8 border-b border-[#F0F0F0]">
        <Container>
          <Flex className={"justify-between"}>
            <div>
              <h2 className="text-base font-DM text-halkaGray"><span className="text-[30px] font-bold text-deepBlack mr-3">2</span>Two years warranty</h2>
            </div>
            <div className="flex"><FaTruck className="mr-3 text-[30px]"/><h2 className="text-base font-DM text-halkaGray">Free shipping</h2></div>
            <div className="flex"><FaArrowRotateLeft className="mr-3 text-[30px]"/><h2 className="text-base font-DM text-halkaGray">Return policy in 30 days</h2></div>
          </Flex>
        </Container>
      </div>
      {/* Banner part End */}
    </>
  );
};

export default Header;
