import { FaArrowCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={'absolute right-5 top-1/2 -translate-y-1/2'}
      onClick={onClick}
    >
      <FaArrowCircleRight className="text-4xl text-halkaGray cursor-pointer"/>
    </div>
  );
};

export default NextArrow;
