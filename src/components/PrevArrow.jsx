import { FaArrowCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={'absolute left-5 top-1/2 z-40 -translate-y-1/2'}
      onClick={onClick}
    >
      <FaArrowCircleLeft className="text-4xl text-halkaGray"/>
    </div>
  );
};

export default PrevArrow;
