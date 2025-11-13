import express from "express";
import cors from "cors";
import AdicionarRotas from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

AdicionarRotas(app)

const PORT = 3001;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
