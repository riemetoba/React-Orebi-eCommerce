import Container from "../Container"
import { MdKeyboardArrowRight } from "react-icons/md";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";



const Shop = () => {
  return (
    <div>
      <Container>
       <h3 className="pt-40 font-DM text-5xl font-bold text-deepBlack">Products</h3>
       <div className="flex items-center gap-x-4 pt-8 text-[12px] font-DM text-[#767676]">
        <div className="flex items-center gap-4">
          <h6>Home</h6>
          <MdKeyboardArrowRight className="pt-0.5" />
        </div>
        <div className="">Products</div>
       </div>
       <Flex className={'pt-15'}>
        <div className="w-1/4">
          <h5 className="font-DM font-bold text-[20px] text-deepBlack py-10">Shop by Category</h5>
          <div className="">
            <ul>
              <div className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                <li className=""><Link to={"/"}>Category 1</Link></li>
                <FiPlus />
              </div>
              <div className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                <li className=""><Link to={"/"}>Category 2</Link></li>
                <FiPlus />
              </div>
              <div className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                <li className=""><Link to={"/"}>Category 3</Link></li>
                <FiPlus />
              </div>
              <div className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                <li className=""><Link to={"/"}>Category 4</Link></li>
                <FiPlus />
              </div>
              <div className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                <li className=""><Link to={"/"}>Category 5</Link></li>
                <FiPlus />
              </div>
            </ul>
          </div>
        </div>
        <div className=""></div>
       </Flex>
      </Container>
    </div>
  )
}

export default Shop