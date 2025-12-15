import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import specialOne from "/src/assets/specialOne.png"
import specialTwo from "/src/assets/specialTwo.png"
import specialThree from "/src/assets/specialThree.png"
import specialFour from "/src/assets/specialFour.png"

const SpecialOffer = () => {
  return (
    <>
    <Container>
        <h2 className='text-[39px] font-DM font-bold pb-[55px]'>Special Offers</h2>
        <Flex className={"gap-x-7"}>
            <div className='w-1/4'>
                <Product productImg={specialOne} badgeText={"New"}productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className='w-1/4'>
                <Product  productImg={specialTwo} badgeText={"25%"}productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className='w-1/4'>
                <Product productImg={specialThree} badgeText={"New"}productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className='w-1/4'>
                <Product productImg={specialFour} badgeText={"30%"} productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
        </Flex>
    </Container>
    </>
  )
}

export default SpecialOffer