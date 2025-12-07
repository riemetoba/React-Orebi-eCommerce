

const Button = ({btnText, className}) => {
  return (
    <div className={`py-3 px-[50px] bg-deepBlack text-[#ffffff] text-sm font-bold border-2 hover:bg-transparent hover:text-deepBlack hover:border-2 duration-300 ${className}`}>{btnText}</div>
  )
}

export default Button
