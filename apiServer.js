const jsonServer = require('json-server'),
    server = jsonServer.create(),
    router = jsonServer.router('db.json'),
    middlewares = jsonServer.defaults();

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
});
