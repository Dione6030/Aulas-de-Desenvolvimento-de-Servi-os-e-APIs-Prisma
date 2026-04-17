import express from 'express'
const app = express()
const port = 3000

import candidataRoutes from "./routes/candidata"
import clienteRoutes from "./routes/cliente"
import votoRoutes from "./routes/voto"

app.use(express.json())

app.use("/candidata", candidataRoutes)
app.use("/cliente", clienteRoutes)
app.use("/voto", votoRoutes)

app.get('/', (req, res) => {
  res.send('API: Seleções da Copa do Mundo')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})
