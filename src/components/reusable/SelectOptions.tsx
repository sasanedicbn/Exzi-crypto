const SelectOptions = ({ options }) => {
  return (
    <select className="border border-gray-400 rounded-full p-2 px-4 bg-[#334155] text-grey-500 ">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default SelectOptions;
