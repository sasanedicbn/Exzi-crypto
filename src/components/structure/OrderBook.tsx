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

  return (
    <div>
      <h2>Order Book</h2>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
    </div>
  );
}

export default OrderBook;
