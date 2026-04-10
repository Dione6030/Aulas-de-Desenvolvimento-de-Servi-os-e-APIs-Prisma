import { prisma } from "../../lib/prisma"
import { Router } from "express"
import { z } from "zod"

const router = Router()

const jogadorSchema = z.object({
    nome: z.string(),
    posicao: z.string(),
    dataNasc: z.string().datetime({ message: "Data de nascimento deve estar no formato UTC!"}),
    numCamisa: z.number().max(26, { message: "Número da camisa deve ser entre 1 e 26!" }),
    selecaoId: z.number()
})

router.get("/", async (req, res) => {
    try {
        const jogadores = await prisma.jogador.findMany()
        res.status(200).json(jogadores)
    } catch (error) {
        res.status(500).json({ erro: "Erro de servidor..."})
    }
})

export default router