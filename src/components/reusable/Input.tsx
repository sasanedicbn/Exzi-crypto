interface InputProps {
  valueText: string;
  currency: string;
}
const Input = ({ valueText, currency }: InputProps) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {valueText}
      </label>
      <input
        type="text"
        placeholder="0"
        className="border border-gray-300 rounded p-2 w-full"
      />
      <span className="text-xs text-gray-500">{currency}</span>
    </div>
  );
};

export default Input;
