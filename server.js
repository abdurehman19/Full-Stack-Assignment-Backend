import express from "express";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SHOP.CO Backend is running 🚀",
  });
});

const PORT =  5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});