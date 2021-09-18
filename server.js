const http = require('http')
const app = require('./app')

const port = process.env.PORT || 3000

const server = http.createServer(app)

if (server) {
    server.listen(port)
    console.log("Servidor criado com sucesso\nPorta: " + port)
}