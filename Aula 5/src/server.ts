import express from 'express'
const app = express()
const port = 3000

import selecaoRoutes from "./routes/selecao"
import jogadorRoutes from "./routes/jogador"

app.use(express.json())

app.use("/selecao", selecaoRoutes)
app.use("/jogador", jogadorRoutes)

app.get('/', (req, res) => {
  res.send('API: Seleções da Copa do Mundo')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})
