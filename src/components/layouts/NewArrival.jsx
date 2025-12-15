
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import newArrivalsOne from "/src/assets/newArrivalsOne.png"
import newArrivalsTwo from "/src/assets/newArrivalsTwo.png"
import newArrivalsThree from "/src/assets/newArrivalsThree.png"
import newArrivalsFour from "/src/assets/newArrivalsFour.png"

const NewArrival = () => {
  return (
    <>
    <Container>
        <h2 className='text-[39px] font-DM font-bold pb-[55px]'>New Arrivals</h2>
        <Flex className={"gap-x-7"}>
            <div className='w-1/4'>
                <Product productImg={newArrivalsOne} badgeText={"New"}productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className='w-1/4'>
                <Product  productImg={newArrivalsTwo} badgeText={"New"}productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className='w-1/4'>
                <Product productImg={newArrivalsThree} badgeText={"New"}productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className='w-1/4'>
                <Product productImg={newArrivalsFour} badgeText={"New"} productTitle={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
        </Flex>
    </Container>
    
    </>
  )
}

export default NewArrival