import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookOrders } from "../../store/store";

function OrderBook() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5173");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Binance depth data ima bids i asks
      dispatch(setBookOrders(data));
    };

    return () => ws.close();
  }, [dispatch]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/orders");
      const data = await response.json();
      console.log("Fetched orders:", data);
      dispatch(setBookOrders(data));
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  return (
    <div>
      <h2>Order Book</h2>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
      <button
        onClick={fetchOrders}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Fetch{" "}
      </button>
    </div>
  );
}

export default OrderBook;
