const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/usuarios', require('./routes/usuarios'))
app.use('/publicaciones', require('./routes/publicaciones'))
app.use('/comentarios', require('./routes/comentarios'))
app.use('/cursos', require('./routes/cursos'))

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
})