
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import bestSellersOne from "/src/assets/bestSellersOne.png"
import bestSellersTwo from "/src/assets/bestSellersTwo.png"
import bestSellersThree from "/src/assets/bestSellersThree.png"
import bestSellersFour from "/src/assets/bestSellersFour.png"
const Bestsellers = () => {
  return (
    <>
    <Container>
        <h2 className='text-[39px] font-DM font-bold pb-[55px] pt-25'>Our Bestsellers</h2>
        <Flex className={"gap-x-7"}>
            <div className='w-1/4'>
                <Product productImg={bestSellersOne} badgeText={"15%"}productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className='w-1/4'>
                <Product  productImg={bestSellersTwo} badgeText={"New"}productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className='w-1/4'>
                <Product productImg={bestSellersThree} badgeText={"42%"}productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className='w-1/4'>
                <Product productImg={bestSellersFour} badgeText={"New"} productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
        </Flex>
    </Container>
    </>
  )
}

export default Bestsellers