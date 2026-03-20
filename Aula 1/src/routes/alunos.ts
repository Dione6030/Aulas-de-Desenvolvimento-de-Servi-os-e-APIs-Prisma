import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    const alunos = [
        {
            id: 1,
            nome: "João",
            curso: "ADS"
        },
        {
            id: 2,
            nome: "Maria",
            curso: "Engenharia de Software"
        }
    ]
    res.status(200).json(alunos);
})

export default router;