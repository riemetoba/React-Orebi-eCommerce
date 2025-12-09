
import { Link } from "react-router-dom";
const Banner = () => {
  return (
   <Link to={"/shop"}>
      <div className="bg-[url('/src/assets/bannerBg.jpg')] py-[300px] bg-no-repeat bg-cover bg-center"></div>
    </Link>
  )
}

export default Banner