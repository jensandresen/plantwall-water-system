import { Gpio } from "onoff";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const led = new Gpio(21, "out");

app.get("/on", (req, res) => {
  led.writeSync(1);
  res.status(202).send();
});

app.get("/off", (req, res) => {
  led.writeSync(0);
  res.status(202).send();
});

app.listen(3000, () => {
  console.log("now running...");
});
