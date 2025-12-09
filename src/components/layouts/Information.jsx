import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Container from "../Container";
import Flex from "../Flex";

const Information = () => {
  return (
    <div className="py-8 border-b border-[#F0F0F0]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center">
              <PiNumberTwoBold className="mr-3 text-[30px]" />
              <h2 className="text-base font-DM text-halkaGray">
                Two years warranty
              </h2>
            </div>
            <div className="flex items-center">
              <FaTruck className="mr-3 text-[30px]" />
              <h2 className="text-base font-DM text-halkaGray">
                Free shipping
              </h2>
            </div>
            <div className="flex items-center">
              <FaArrowRotateLeft className="mr-3 text-[30px]" />
              <h2 className="text-base font-DM text-halkaGray">
                Return policy in 30 days
              </h2>
            </div>
          </Flex>
        </Container>
      </div>
  )
}

export default Information