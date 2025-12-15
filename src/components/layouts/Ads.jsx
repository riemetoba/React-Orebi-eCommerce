import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import adsOne from "../../assets/adsOne.png"
import adsTwo from "../../assets/adsTwo.png"
import adsThree from "../../assets/adsThree.png"
import { Link, Links } from "react-router-dom"


const Ads = () => {
  return (
    <div className="pt-[140px] pb-[100px]">
         <Container>
            <Flex className="justify-between gap-x-[30px]">
                <Link to={"/shop"}>
                <div className="max-w-[780px] mx-auto">
                    <Image src={adsOne}/>
                </div>
                </Link>
                <div className="max-w-[780px] mx-auto flex flex-col gap-y-7">
                    <Link to={"/shop"}>
                    <Image src={adsTwo}/>
                    </Link>
                    <Link to={"/shop"}>
                    <Image src={adsThree}/>
                    </Link>
                </div>
            </Flex>
         </Container>
    </div>
  )
}

export default Ads