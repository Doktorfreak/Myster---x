import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/chat", (req, res) => {
  const message = req.body.message || "";

  res.json({
    reply: `Myster X: Ich habe dich verstanden: "${message}"`
  });
});

app.listen(PORT, () => {
  console.log(`Myster X läuft auf Port ${PORT}`);
});
