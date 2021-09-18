const http = require('http')
const app = require('./app')

const port = process.env.PORT || 3000

const server = http.createServer(app)

if (server) {
    server.listen(port)
    console.log("API REST iniciada com sucesso\nPorta: " + port)
}
