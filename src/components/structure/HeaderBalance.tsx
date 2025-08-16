const HeaderBalance = () => {
  return;
  <div>
    <div>
      <p>Select your pair</p>
      <SelectOptions options={["BTC/USD", "ETH/USD", "XRP/USD"]} />
    </div>
    <p>Input your balance</p>
    <Input />
    <Input />
  </div>;
};
export default HeaderBalance;
