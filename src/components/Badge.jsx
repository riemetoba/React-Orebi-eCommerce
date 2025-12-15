const Badge = ({ badgeText, className }) => {
  return (
    <div
      className={`w-[92px] py-2.25 bg-deepBlack text-white px-7.5 font-bold text-sm font-DM ${className}`}
    >
      {badgeText}
    </div>
  );
};

export default Badge;
