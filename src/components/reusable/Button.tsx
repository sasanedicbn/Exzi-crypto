const Button = ({
  children,
  onClick,
  type = "primary-btn",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "primary-btn" | "secondary-btn";
}) => {
  const btnType = {
    "primary-btn": "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
    "secondary-btn":
      "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${
        btnType[type] || btnType["primary-btn"]
      } transition duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
