import Button from "../reusable/Button";

const Header = () => {
  const connectWallet = () => {
    console.log("connect wallet");
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">Order Trading Platform</h1>
      <Button type="primary-btn" onClick={connectWallet}>
        Connect Wallet
      </Button>
    </header>
  );
};
export default Header;
