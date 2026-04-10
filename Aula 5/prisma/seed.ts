import { prisma } from "../lib/prisma";
import { type Prisma } from "../generated/prisma/client"

const selecoes: Prisma.SelecaoCreateInput[] = [
    { pais: "Brasil", continente: "América do Sul", treinador: "Tite", numCopas: 5 },
    { pais: "Alemanha", continente: "Europa", treinador: "Flick", numCopas: 4 },
    { pais: "Argentina", continente: "América do Sul", treinador: "Scaloni", numCopas: 3 },
    { pais: "França", continente: "Europa", treinador: "Deschamps", numCopas: 2 }
]
const jogadores: Prisma.JogadorCreateInput[] = [
    { nome: "Alisson", posicao: "Goleiro", selecao: { connect: { id: 1 } }, dataNasc: new Date("1992-10-02"), numCamisa: 1 },
    { nome: "Neuer", posicao: "Goleiro", selecao: { connect: { id: 2 } }, dataNasc: new Date("1986-03-27"), numCamisa: 1 },
    { nome: "Messi", posicao: "Atacante", selecao: { connect: { id: 3 } }, dataNasc: new Date("1987-06-24"), numCamisa: 10 },
    { nome: "Mbappé", posicao: "Atacante", selecao: { connect: { id: 4 } }, dataNasc: new Date("1998-12-20"), numCamisa: 10 }
]

async function main() {
    try {
        await prisma.selecao.createMany({ data: selecoes })
        for (const jogador of jogadores) {
            await prisma.jogador.create({ data: jogador })
        }
        console.log(`${selecoes.length} Seleções Cadastradas...`)
        console.log(`${jogadores.length} Jogadores Cadastrados...`)
    } catch (error) {
        console.error("Erro nas Inclusões (Seeds):", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

await main()
