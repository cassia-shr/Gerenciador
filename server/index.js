// server.js
const path = require('path')
const jsonServer = require('json-server')
const middlewares = jsonServer.defaults()

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))

server.use(middlewares)
server.use(router)

server.listen(8080, () => {
    console.log('Server is running in "http://localhost:8080/dispositivos"!')
})