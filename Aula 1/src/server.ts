import express from "express";

import alunosRouter from "./routes/alunos";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/alunos", alunosRouter);

app.get("/" , (req, res) => {
    res.send({ mensage: "API está funcionando!" });
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})