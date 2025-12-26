const SummaryKPI = ({number, description, customClassDescription}) => (
<div className="flex gap-1 items-center md:gap-3">
  <div className="font-extrabold text-2xl text-dev-gray-10 md:text-5xl hover:text-dev-aqua">{number}</div>
  <div className={`text-dev-gray-30 text-xs md:text-base md:w-24 hover:text-dev-gray-10 ${customClassDescription}`}>{description}</div>
</div>
);

export default SummaryKPI;