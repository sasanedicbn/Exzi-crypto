import express from "express";
import cors from "cors";
import { WebSocket, WebSocketServer } from "ws";

const app = express();
app.use(cors());
app.use(express.json());

// test ruta
app.get("/orders", (req, res) => {
  res.json({ message: "API radi ✅" });
});

// start Express server
const server = app.listen(5000, () => console.log("Server na portu 5000"));

// WebSocket server za frontend
const wss = new WebSocketServer({ server });

wss.on("connection", (wsClient) => {
  console.log("Frontend se spojio na WS ✅");

  const binanceWS = new WebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@depth"
  );

  binanceWS.on("open", () => console.log("Spojen na Binance ✅"));
  binanceWS.on("message", (msg) => wsClient.send(msg.toString()));
  binanceWS.on("error", (err) => console.error("Binance WS error:", err));

  wsClient.on("close", () => {
    if (
      binanceWS.readyState === WebSocket.OPEN ||
      binanceWS.readyState === WebSocket.CONNECTING
    ) {
      binanceWS.close();
    }
  });

  wsClient.on("error", (err) => console.error("Client WS error:", err));
});
