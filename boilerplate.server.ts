import express from "express";
import cors from "cors";
import { PORT } from "./somewhere";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const data = "real data";
  res.json({ items: data });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
