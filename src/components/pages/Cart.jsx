import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Flex from "../Flex";
import Image from "../Image";
import cartSunglass from "../../assets/cartSunglass.png";
import { RxCross2 } from "react-icons/rx";
import Counter from "../layouts/Counter";
import Button from "../Button";

const Cart = () => {
  return (
    <div className="px-4 md:px-0">
      <Container>
        <h3 className="pt-24 md:pt-40 font-DM text-3xl md:text-5xl font-bold text-deepBlack">
          Cart
        </h3>
        <div className="flex items-center gap-x-2 pt-4 md:pt-8 text-[12px] font-DM text-[#767676] pb-12 md:pb-25">
          <div className="flex items-center gap-2">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div>Cart</div>
        </div>

        <Flex className="bg-[#F5F5F3] py-5 md:grid md:grid-cols-4 px-4 hidden">
          <h4 className="text-base font-DM text-deepBlack">Product</h4>
          <h4 className="text-base font-DM text-deepBlack">Price</h4>
          <h4 className="text-base font-DM text-deepBlack">Quantity</h4>
          <h4 className="text-base font-DM text-deepBlack">Total</h4>
        </Flex>

        <div className="py-6 md:py-8 px-4 md:px-5 border border-[#F0F0F0]">
          <Flex className="flex-col md:grid md:grid-cols-4 gap-y-4 md:gap-y-0 items-start md:items-center">
            <div className="flex items-center gap-4 w-full">
              <RxCross2 className="cursor-pointer text-sm md:text-base shrink-0" />
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0">
                <Image src={cartSunglass} className="w-full h-full object-cover" />
              </div>
              <p className="text-sm md:text-base font-DM text-deepBlack font-medium">Product name</p>
            </div>
            <div className="flex justify-between items-center w-full md:w-auto md:block">
              <span className="text-xs text-[#767676] md:hidden font-DM">Price:</span>
              <p className="text-sm md:text-base font-DM text-deepBlack">$44.00</p>
            </div>
            <div className="flex justify-between items-center w-full md:w-auto md:block">
              <span className="text-xs text-[#767676] md:hidden font-DM">Quantity:</span>
              <div className="font-DM text-sm md:text-base border border-[#F0F0F0] py-1.5 px-2 w-[100px] md:w-[130px]">
                <Counter />
              </div>
            </div>
            <div className="flex justify-between items-center w-full md:w-auto md:block">
              <span className="text-xs text-[#767676] md:hidden font-DM">Total:</span>
              <p className="text-sm md:text-base font-DM text-deepBlack font-bold md:font-normal">$44.00</p>
            </div>
          </Flex>
        </div>

        <div className="py-6 md:py-8 px-4 md:px-5 border border-[#F0F0F0] border-t-0">
          <Flex className="flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4 sm:gap-y-0">
            <div className="flex gap-3 items-center w-full sm:w-auto">
              <input 
                className="py-1.5 px-2 border border-[#F0F0F0] text-sm font-DM w-24 md:w-auto focus:outline-none" 
                type="text" 
                placeholder="SIZE"
              />
              <p className="text-xs md:text-sm font-DM font-bold text-deepBlack cursor-pointer whitespace-nowrap">Apply coupon</p>
            </div>
            <p className="text-xs md:text-sm font-DM font-bold text-deepBlack cursor-pointer self-end sm:self-auto">Update cart</p>
          </Flex>
        </div>

        <p className="text-left md:text-right text-lg md:text-[20px] font-DM font-bold text-deepBlack pt-12 pb-4">Cart totals</p>
        
        <div className="flex flex-col items-start md:items-end w-full">
          <div className="flex w-full md:w-auto">
            <div className="w-1/2 md:w-[322px] px-3 py-4 border border-[#F0F0F0]">
              <p className="text-deepBlack font-DM text-sm md:text-base font-bold">Subtotal</p>
            </div>
            <div className="w-1/2 md:w-[322px] px-3 py-4 border-t border-r border-b border-[#F0F0F0] md:border-l-0 border-l">
              <p className="text-[#767676] font-DM text-sm md:text-base">389.99 $</p>
            </div>
          </div>
          
          <div className="flex w-full md:w-auto">
            <div className="w-1/2 md:w-[322px] px-3 py-4 border-l border-r border-b border-[#F0F0F0]">
              <p className="text-deepBlack font-DM text-sm md:text-base font-bold">Total</p>
            </div>
            <div className="w-1/2 md:w-[322px] px-3 py-4 border-r border-b border-[#F0F0F0] border-l md:border-l-0">
              <p className="text-deepBlack font-DM text-sm md:text-base font-bold">389.99 $</p>
            </div>
          </div>
        </div>

        <div className="text-left md:text-right mt-6 md:mt-9 font-DM mb-16 md:mb-24">
          <Button btnText={"Proceed to Checkout"} className="w-full md:w-auto px-6 py-4" />
        </div>
      </Container>
    </div>
  );
};

export default Cart;