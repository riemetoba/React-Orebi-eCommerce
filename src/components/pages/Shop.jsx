import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import Product from "../Product";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import mixitup from "mixitup";

const Shop = () => {
  const containerRef = useRef(null);
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  }, []);

  useEffect(() => {
    if (containerRef.current && allData.length > 0) {
      mixitup(containerRef.current, {
        animation: {
          duration: 400,
        }
      });
    }
  }, [allData]);

  return (
    <div className="px-4 md:px-0">
      <Container>
        <h3 className="pt-24 md:pt-40 font-DM text-3xl md:text-5xl font-bold text-deepBlack">
          Shop
        </h3>
        <div className="flex items-center gap-x-2 pt-4 md:pt-8 text-[12px] font-DM text-[#767676]">
          <div className="flex items-center gap-2">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div>Shop</div>
        </div>
        <Flex className="pt-10 md:pt-15 flex-col md:flex-row items-start gap-y-10 md:gap-y-0 md:gap-x-6">
          
          <div className="w-full md:w-[25%]">
            <h5 className="font-DM font-bold text-[18px] md:text-[20px] text-deepBlack pb-4 md:py-10">
              Shop by Category
            </h5>
            <div>
              <ul>
                <div data-filter=".categoryOne" className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5 cursor-pointer">
                  <p>Category 1</p>
                  <FiPlus />
                </div>
                <div data-filter=".categoryTwo" className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5 cursor-pointer">
                  <p>Category 2</p>
                  <FiPlus />
                </div>
                <div data-filter=".categoryThree" className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5 cursor-pointer">
                  <p>Category 3</p>
                  <FiPlus />
                </div>
                <div data-filter=".categoryFour" className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5 cursor-pointer">
                  <p>Category 4</p>
                  <FiPlus />
                </div>
                <div data-filter=".categoryFive" className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5 cursor-pointer">
                  <p>Category 5</p>
                  <FiPlus />
                </div>
              </ul>
            </div>

            <h5 className="font-DM font-bold text-[18px] md:text-[20px] text-deepBlack pt-8 pb-4 md:py-10">
              Shop by Color
            </h5>
            <div>
              <ul>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <FaCircle className="text-[#000000] text-sm" />
                  <li>
                    <Link to={"/"}>Color 1</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <FaCircle className="text-[#FF8686] text-sm" />
                  <li>
                    <Link to={"/"}>Color 1</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <FaCircle className="text-[#7ED321] text-sm" />
                  <li>
                    <Link to={"/"}>Color 1</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <FaCircle className="text-[#B6B6B6] text-sm" />
                  <li>
                    <Link to={"/"}>Color 1</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <FaCircle className="text-[#15CBA5] text-sm" />
                  <li>
                    <Link to={"/"}>Color 1</Link>
                  </li>
                </div>
              </ul>
            </div>

            <h5 className="font-DM font-bold text-[18px] md:text-[20px] text-deepBlack pt-8 pb-4 md:py-10">
              Shop by Brand
            </h5>
            <div>
              <ul>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <Link to={"/"}>Brand 1</Link>
                </li>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <Link to={"/"}>Brand 2</Link>
                </li>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <Link to={"/"}>Brand 3</Link>
                </li>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <Link to={"/"}>Brand 4</Link>
                </li>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <Link to={"/"}>Brand 5</Link>
                </li>
              </ul>
            </div>

            <h5 className="font-DM font-bold text-[18px] md:text-[20px] text-deepBlack pt-8 pb-4 md:py-10">
              Shop by Price
            </h5>
            <div>
              <ul>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <Link to={"/"}>$0.00 - $9.99</Link>
                </li>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <Link to={"/"}>$10.00 - $19.99</Link>
                </li>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <Link to={"/"}>$20.00 - $29.99</Link>
                </li>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <Link to={"/"}>$30.00 - $39.99</Link>
                </li>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-4 md:py-5">
                  <Link to={"/"}>$40.00 - $69.99</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[75%] md:py-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-4 sm:gap-y-0 mb-8">
              <div className="flex items-center gap-x-6 sm:flex">
                <IoGridSharp className="text-3xl cursor-pointer" />
                <AiOutlineBars className="text-3xl cursor-pointer" />
              </div>

              <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-x-2 font-DM text-base text-[#767676] relative w-[48%] sm:w-auto">
                  <h6 className="hidden lg:block whitespace-nowrap">Sort by:</h6>
                  <input
                    className="border border-[#767676] px-3 py-2 w-full lg:w-[239px] text-sm md:text-base focus:outline-none"
                    type="text"
                    placeholder="Featured"
                    readOnly
                  />
                  <BiSolidDownArrow className="absolute top-3.5 right-3 text-xs md:text-sm" />
                </div>
                <div className="flex items-center gap-x-2 font-DM text-base text-[#767676] relative w-[48%] sm:w-auto">
                  <h6 className="hidden lg:block whitespace-nowrap">Show:</h6>
                  <input
                    className="border border-[#767676] px-3 py-2 w-full lg:w-[239px] text-sm md:text-base focus:outline-none"
                    type="text"
                    placeholder="36"
                    readOnly
                  />
                  <BiSolidDownArrow className="absolute top-3.5 right-3 text-xs md:text-sm" />
                </div>
              </div>
            </div>
            <div ref={containerRef}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-5">
                {allData.slice(0, 9).map((item) => (
                  <div key={item.id} className="mix categoryOne w-full">
                    <Product
                      productImg={item.thumbnail}
                      badgeText={item.rating}
                      productTitle={item.title}
                      productPrice={item.price}
                    />
                  </div>
                ))}
                {allData.slice(10, 20).map((item) => (
                  <div key={item.id} className="mix categoryTwo w-full">
                    <Product
                      productImg={item.thumbnail}
                      badgeText={item.rating}
                      productTitle={item.title}
                      productPrice={item.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </Flex>
      </Container>
    </div>
  );
};

export default Shop;