const Input = () => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Input Balance
      </label>
      <input
        type="text"
        placeholder="Enter your balance"
        className="border border-gray-300 rounded p-2 w-full"
      />
      <span className="text-xs text-gray-500">BTC</span>
    </div>
  );
};

export default Input;
