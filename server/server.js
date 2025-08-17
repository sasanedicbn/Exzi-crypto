import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import WebSocket from "ws";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/orders", (req, res) => {
  res.json("API bez baze radi ✅");
});

// primjer websocket konekcije na eksterni API
// const ws = new WebSocket("wss://example-wallet-api.com/stream");

// ws.on("open", () => {
//   console.log("Spojen na Wallet API ✅");
// });

// ws.on("message", (data) => {
//   console.log("Podaci sa wallet API-ja:", data.toString());
// });

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server radi na portu ${process.env.PORT || 5000}`);
});
