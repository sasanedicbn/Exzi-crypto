import Button from "../reusable/Button";
import HeaderBalance from "./HeaderBalance";
import OrderBook from "./OrderBook";

const Header = () => {
  const connectWallet = () => {
    console.log("connect wallet");
  };

  return (
    <div className="bg-gray-800 text-white">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Order Trading Platform</h1>
        <Button type="primary-btn" onClick={connectWallet}>
          Connect Wallet
        </Button>
      </header>
      <HeaderBalance />
      <OrderBook />
    </div>
  );
};
export default Header;
