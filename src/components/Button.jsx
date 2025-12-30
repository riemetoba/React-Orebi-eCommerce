

const Button = ({btnText, className}) => {
  return (
    <button className={`py-3 px-10 bg-deepBlack text-[#ffffff] text-sm font-bold border-2 hover:bg-transparent hover:text-deepBlack hover:border-2 duration-300 ${className}`}>{btnText}</button>
  )
}

export default Button
