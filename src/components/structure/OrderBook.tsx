import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookOrders } from "../../store/store";

function OrderBook() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        const formatOrders = (orders) =>
          orders.map(([price, amount]) => ({
            price: parseFloat(price),
            amount: parseFloat(amount),
            total: parseFloat(price) * parseFloat(amount),
          }));

        const formatted = {
          bids: data.b ? formatOrders(data.b) : [],
          asks: data.a ? formatOrders(data.a) : [],
        };

        dispatch(setBookOrders(formatted));
      } catch (err) {
        console.error("WebSocket parsing error:", err);
      }
    };

    return () => ws.close();
  }, [dispatch]);

  return (
    <div className="order-book p-4 max-w-md flex flex-start flex-col">
      <h2 className="text-lg font-bold mb-4 text-center">Order Book</h2>

      <div className="mb-8">
        <h3 className="font-semibold text-green-600 mb-2">Bids</h3>
        <table className="w-full border-none">
          <thead>
            <tr>
              <th className="border p-2 text-left w-1/3">Price</th>
              <th className="border p-2 text-left w-1/3">Amount</th>
              <th className="border p-2 text-left w-1/3">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders?.bids?.map((order, index) => (
              <tr key={`bid-${index}`}>
                <td className="border p-2 text-green-600 font-mono">
                  {order.price.toFixed(2)}
                </td>
                <td className="border p-2 font-mono">
                  {order.amount.toFixed(4)}
                </td>
                <td className="border p-2 font-mono">
                  {order.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="font-semibold text-red-600 mb-2">Asks</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 text-left w-1/3">Price</th>
              <th className="border p-2 text-left w-1/3">Amount</th>
              <th className="border p-2 text-left w-1/3">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders?.asks?.map((order, index) => (
              <tr key={`ask-${index}`}>
                <td className="border p-2 text-red-600 font-mono">
                  {order.price.toFixed(2)}
                </td>
                <td className="border p-2 font-mono">
                  {order.amount.toFixed(4)}
                </td>
                <td className="border p-2 font-mono">
                  {order.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderBook;
