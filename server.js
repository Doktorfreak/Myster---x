import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Myster X",
    status: "online",
    message: "Myster X ist bereit."
  });
});

app.post("/chat", (req, res) => {
  const message = req.body.message || "";

  res.json({
    reply: `Myster X: Ich habe dich verstanden: "${message}"`
  });
});

app.listen(PORT, () => {
  console.log(`Myster X läuft auf Port ${PORT}`);
});
