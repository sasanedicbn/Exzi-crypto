interface InputProps {
  valueText: string;
  currency: string;
}
const Input = ({ valueText, currency }: InputProps) => {
  return (
    <div className="flex justify-between items-center  rounded-full p-3  w-1/2 bg-[#334155] ">
      <label className="">{valueText}</label>
      <input
        type="text"
        placeholder="0"
        className="border-none mx-4 text-right pr-1 focus:border-none focus:outline-none"
      />
      <span>{currency}</span>
    </div>
  );
};

export default Input;
