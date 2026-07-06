import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../Button";

const Checkout = () => {
  return (
    <div className="px-4 md:px-0">
      <Container>
        <h3 className="pt-24 md:pt-40 font-DM text-3xl md:text-5xl font-bold text-deepBlack">
          Checkout
        </h3>
        <div className="flex items-center gap-x-2 pt-4 md:pt-8 text-[12px] font-DM text-[#767676] pb-10 md:pb-14">
          <div className="flex items-center gap-2">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div>Checkout</div>
        </div>

        <p className="font-DM text-sm text-[#767676] mb-16 md:mb-28">
          Have a coupon?{" "}
          <span className="text-deepBlack font-medium cursor-pointer hover:underline">
            Click here to enter your code
          </span>
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="max-w-[1055px] pb-24 md:pb-36">
          <h4 className="font-DM font-bold text-2xl md:text-[39px] text-deepBlack mb-8 md:mb-10">
            Billing Details
          </h4>

          <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 gap-x-10 mb-6 md:mb-8">
            <div className="w-full md:w-1/2">
              <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                First Name *
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block font-DM font-bold text-base text-deepBlack mb-2">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none"
              />
            </div>
          </div>

          <div className="w-full mb-6 md:mb-8">
            <label className="block font-DM font-bold text-base text-deepBlack mb-2">
              Company Name (optional)
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none"
            />
          </div>

          <div className="w-full mb-6 md:mb-8">
            <label className="block font-DM font-bold text-base text-deepBlack mb-2">
              Country *
            </label>
            <select className="w-full font-DM text-sm text-[#767676] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none bg-transparent appearance-none cursor-pointer">
              <option value="">Please select</option>
              <option value="BD">Bangladesh</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>

          <div className="w-full mb-6 md:mb-8">
            <label className="block font-DM font-bold text-base text-deepBlack mb-2">
              Street Address *
            </label>
            <input
              type="text"
              placeholder="House number and street name"
              className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none mb-4"
            />
            <input
              type="text"
              placeholder="Apartment, suite, unit etc. (optional)"
              className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none"
            />
          </div>

          <div className="w-full mb-6 md:mb-8">
            <label className="block font-DM font-bold text-base text-deepBlack mb-2">
              Town/City *
            </label>
            <input
              type="text"
              placeholder="Town/City"
              className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none"
            />
          </div>

          <div className="w-full mb-6 md:mb-8">
            <label className="block font-DM font-bold text-base text-deepBlack mb-2">
              County (optional)
            </label>
            <input
              type="text"
              placeholder="County"
              className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none"
            />
          </div>

          <div className="w-full mb-6 md:mb-8">
            <label className="block font-DM font-bold text-base text-deepBlack mb-2">
              Post Code *
            </label>
            <input
              type="text"
              placeholder="Post Code"
              className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none"
            />
          </div>

          <div className="w-full mb-6 md:mb-8">
            <label className="block font-DM font-bold text-base text-deepBlack mb-2">
              Phone *
            </label>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none"
            />
          </div>

          <div className="w-full mb-16 md:mb-32">
            <label className="block font-DM font-bold text-base text-deepBlack mb-2">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-3.5 border-b border-b-[#E0E0E0] focus:outline-none"
            />
          </div>

          <h4 className="font-DM font-bold text-2xl md:text-[39px] text-deepBlack mb-6 md:mb-8">
            Additional Information
          </h4>
          <div className="w-full mb-16 md:mb-32">
            <label className="block font-DM font-bold text-base text-deepBlack mb-2">
              Other Notes (optional)
            </label>
            <textarea
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="w-full font-DM text-sm text-deepBlack placeholder-[#B6B6B6] pb-12 border-b border-b-[#E0E0E0] focus:outline-none resize-none h-20"
            />
          </div>

          <h4 className="font-DM font-bold text-2xl md:text-[39px] text-deepBlack mb-6 md:mb-8">
            Your Order
          </h4>
          <div className="max-w-[622px] mb-12 md:mb-16">
            <div className="flex justify-between py-4 border-t border-b border-[#F0F0F0]">
              <span className="font-DM font-bold text-base text-deepBlack">Product</span>
              <span className="font-DM text-base text-[#767676]">Total</span>
            </div>
            <div className="flex justify-between py-4 border-b border-[#F0F0F0]">
              <span className="font-DM font-bold text-base text-deepBlack">Product name x 1</span>
              <span className="font-DM text-base text-deepBlack">389.99 $</span>
            </div>
            <div className="flex justify-between py-4 border-b border-[#F0F0F0]">
              <span className="font-DM font-bold text-base text-deepBlack">Subtotal</span>
              <span className="font-DM font-medium text-base text-deepBlack">389.99 $</span>
            </div>
            <div className="flex justify-between py-4 border-b border-[#F0F0F0]">
              <span className="font-DM font-bold text-base text-deepBlack">Total</span>
              <span className="font-DM font-bold text-base text-deepBlack">389.99 $</span>
            </div>
          </div>

          <div className="border border-[#F0F0F0] p-6 max-w-[1055px] mb-6 font-DM">
            <div className="flex items-center gap-x-2.5 mb-4">
              <input
                type="radio"
                id="bank1"
                name="payment"
                defaultChecked
                className="w-3 h-3 accent-deepBlack cursor-pointer"
              />
              <label htmlFor="bank1" className="font-bold text-sm text-deepBlack cursor-pointer">
                Bank
              </label>
            </div>
            <div className="bg-[#F9F9F9] p-4 text-xs text-[#767676] leading-5 mb-6 max-w-[800px]">
              Pay via Bank; you can pay with your credit card if you don't have a bank account.
            </div>
            <div className="flex items-center gap-x-2.5">
              <input
                type="radio"
                id="bank2"
                name="payment"
                className="w-3 h-3 accent-deepBlack cursor-pointer"
              />
              <label htmlFor="bank2" className="font-bold text-sm text-[#767676] hover:text-deepBlack cursor-pointer transition-all">
                Bank 2
              </label>
            </div>
          </div>

          <p className="font-DM text-sm text-[#767676] leading-6 max-w-[1000px] mb-8">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
            <span className="text-deepBlack font-bold cursor-pointer hover:underline">privacy policy.</span>
          </p>

          <Button btnText="Proceed to Bank" className="w-[200px] py-4" />
        </form>
      </Container>
    </div>
  );
};

export default Checkout;