import { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Button from "../Button";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import Product from "../Product";

import productDetailOne from "/src/assets/specialOne.png";
import productDetailTwo from "/src/assets/specialTwo.png";
import productDetailThree from "/src/assets/specialThree.png";
import productDetailFour from "/src/assets/specialFour.png";
import Counter from "../layouts/Counter";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className="px-4 md:px-0 pb-20 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 pt-10 md:pt-20">
          <div className="grid grid-cols-2 gap-x-0 gap-y-0">
            <Product
              productImg={productDetailOne}
              badgeText="New"
              productTitle="Basic Crew Neck Tee"
              productPrice="$44.00"
            />
            <Product
              productImg={productDetailTwo}
              badgeText="New"
              productTitle="Basic Crew Neck Tee"
              productPrice="$44.00"
            />
            <Product
              productImg={productDetailThree}
              badgeText="New"
              productTitle="Basic Crew Neck Tee"
              productPrice="$44.00"
            />
            <Product
              productImg={productDetailFour}
              badgeText="New"
              productTitle="Basic Crew Neck Tee"
              productPrice="$44.00"
            />
          </div>

          <div className="font-DM pt-4 md:pt-0">
            <h1 className="text-2xl md:text-[39px] font-bold text-deepBlack mb-4">
              Product
            </h1>

            <div className="flex items-center gap-x-2 mb-4">
              <div className="flex text-[#FFD700] text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs text-[#767676]">1 Review</span>
            </div>

            <div className="text-xl font-bold text-deepBlack pb-6 border-b border-[#F0F0F0] mb-6">
              $44.00
            </div>

            <div className="mb-6 flex items-center gap-x-6">
              <span className="font-bold text-base text-deepBlack min-w-20">
                Color:
              </span>
              <div className="flex gap-x-3">
                <span className="w-4 h-4 rounded-full bg-[#939393] cursor-pointer ring-2 ring-offset-2 ring-transparent hover:ring-[#939393]"></span>
                <span className="w-4 h-4 rounded-full bg-[#FF8686] cursor-pointer ring-2 ring-offset-2 ring-transparent hover:ring-[#FF8686]"></span>
                <span className="w-4 h-4 rounded-full bg-[#7ED321] cursor-pointer ring-2 ring-offset-2 ring-transparent hover:ring-[#7ED321]"></span>
                <span className="w-4 h-4 rounded-full bg-[#B8E986] cursor-pointer ring-2 ring-offset-2 ring-transparent hover:ring-[#B8E986]"></span>
                <span className="w-4 h-4 rounded-full bg-[#00E6C0] cursor-pointer ring-2 ring-offset-2 ring-transparent hover:ring-[#00E6C0]"></span>
              </div>
            </div>

            <div className="mb-6 flex items-center gap-x-6">
              <span className="font-bold text-base text-deepBlack min-w-20">
                Size:
              </span>
              <select className="border border-[#F0F0F0] px-4 py-1.5 text-sm text-[#767676] min-w-[140px] focus:outline-none">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div className="mb-8 flex items-center gap-x-6">
              <span className="font-bold text-base text-deepBlack min-w-20">
                Quant:
              </span>
              <div className="font-DM text-sm md:text-base border border-[#F0F0F0] py-1.5 px-2 w-[100px] md:w-[130px]">
                <Counter />
              </div>
            </div>

            <div className="flex items-center gap-x-4 pb-8 border-b border-[#F0F0F0] mb-6">
              <span className="font-bold text-base text-deepBlack min-w-20">
                STATUS:
              </span>
              <span className="text-sm text-[#767676]">In stock</span>
            </div>

            <div className="flex flex-wrap gap-4 pb-8 border-b border-[#F0F0F0] mb-6">
              <button className="w-[200px] py-4 border border-deepBlack font-bold text-sm text-deepBlack hover:bg-deepBlack hover:text-white transition-all">
                Add to Wish List
              </button>
              <Button btnText="Add to Cart" className="w-[200px] py-4" />
            </div>

            <div className="border-b border-[#F0F0F0] pb-5 mb-5 cursor-pointer flex justify-between items-center text-deepBlack font-bold text-base">
              FEATURES & DETAILS
              <span className="text-lg">+</span>
            </div>
            <div className="border-b border-[#F0F0F0] pb-5 mb-8 cursor-pointer flex justify-between items-center text-deepBlack font-bold text-base">
              SHIPPING & RETURNS
              <span className="text-lg">+</span>
            </div>

            <p className="text-sm text-[#767676] leading-6 max-w-[550px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-28 font-DM">
          <div className="flex gap-x-10 border-b border-[#F0F0F0] pb-4 mb-10 text-base md:text-xl">
            <span
              className={`cursor-pointer ${activeTab === "description" ? "text-deepBlack font-bold" : "text-[#767676]"}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </span>
            <span
              className={`cursor-pointer ${activeTab === "reviews" ? "text-deepBlack font-bold" : "text-[#767676]"}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (1)
            </span>
          </div>

          {activeTab === "reviews" && (
            <div className="max-w-[1020px]">
              <p className="text-xs text-[#767676] mb-4">
                1 review for Product
              </p>

              <div className="border-b border-[#F0F0F0] pb-6 mb-12">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-x-4">
                    <span className="text-base text-deepBlack font-medium">
                      John Doe
                    </span>
                    <div className="flex text-[#FFD700] text-xs">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <span className="text-xs text-[#767676]">06.07.2026</span>
                </div>
                <p className="text-sm md:text-base text-[#767676] leading-6 md:leading-[30px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
              </div>

              <div className="max-w-[640px]">
                <h3 className="text-lg font-bold text-deepBlack mb-8">
                  Add a Review
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-y-6"
                >
                  <div>
                    <label className="block font-bold text-base text-deepBlack mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name here"
                      className="w-full text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-[#E0E0E0] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-base text-deepBlack mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email here"
                      className="w-full text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-[#E0E0E0] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-base text-deepBlack mb-2">
                      Review
                    </label>
                    <textarea
                      placeholder="Your review here"
                      className="w-full text-sm text-deepBlack placeholder-[#B6B6B6] pb-12 border-b border-[#E0E0E0] focus:outline-none resize-none h-20"
                    />
                  </div>
                  <Button btnText="Post" className="w-[200px] py-4 mt-4" />
                </form>
              </div>
            </div>
          )}

          {activeTab === "description" && (
            <div className="max-w-[1020px] text-sm md:text-base text-[#767676] leading-6 md:leading-[30px]">
              Product description goes here...
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
