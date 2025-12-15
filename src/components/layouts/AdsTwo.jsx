import { Link } from "react-router-dom";
import Container from "../Container";

const AdsTwo = () => {
  return (
    <Link to={"/shop"}>
      <Container>
        <div className="bg-[url('/src/assets/adsBg.jpg')] py-[165px] bg-no-repeat bg-cover bg-center my-25"></div>
      </Container>
    </Link>
  )
}

export default AdsTwo