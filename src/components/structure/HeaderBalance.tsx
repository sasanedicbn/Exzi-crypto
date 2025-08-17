import Input from "../reusable/Input";
import SelectOptions from "../reusable/SelectOptions";

const HeaderBalance = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex  items-center gap-4">
        <p className="text-gray-400">Select your pair:</p>
        <SelectOptions options={["BTC/USD", "ETH/USD", "XRP/USD"]} />
      </div>
      <div className="flex justify-between items-center gap-6">
        <p className="text-gray-400 whitespace-nowrap">Input your balance</p>
        <Input valueText={"Balance"} currency={"BTC"} />
        <Input valueText={"Balance"} currency={"USDT"} />
      </div>
    </div>
  );
};
export default HeaderBalance;
