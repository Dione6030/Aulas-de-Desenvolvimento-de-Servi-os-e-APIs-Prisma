import { prisma } from "../../lib/prisma"
import { Router } from "express"
import { z } from "zod"

const router = Router()

const selecaoSchema = z.object({
    pais: z.string(),
    continente: z.string(),
    treinador: z.string(),
    numCopas: z.number()
})

router.get("/", async (req, res) => {
    try {
        const selecoes = await prisma.selecao.findMany()
        res.status(200).json(selecoes)
    } catch (error) {
        res.status(500).json({ erro: "Erro no servidor" })
    }
})


/*
router.put("/:id", async (req, res) => {
    const { id } = req.params

    const { modelo, marca, processador, preco, quantidade } = req.body

    if (!modelo || !marca || !processador || !preco) {
        res.status(400).json({ erro: "Informe todos os dados" })
        return
    }

    try {
        const notebook = await prisma.notebook.update({
            where: { id: Number(id) },
            data: { modelo, marca, processador, preco: parseFloat(preco), quantidade }
        })
        res.status(200).json(notebook)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params

    try {
        const notebook = await prisma.notebook.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(notebook)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
*/
export default router